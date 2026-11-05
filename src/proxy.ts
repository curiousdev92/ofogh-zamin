import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, type Locale } from "./lib/i18n/config";
import {
  domainDefaultLocale,
  domainGroupForHost,
  domainLocales,
  type DomainGroup,
} from "./lib/i18n/domains";
import { ORIGINS } from "./lib/site";

const LOCALE_COOKIE = "NEXT_LOCALE";

// Pages that should NOT be prefixed (api routes, _next, static files)
const PUBLIC_PATHS = /^\/(_next|api|favicon|robots|sitemap|.*\..*)/;

// Parse an Accept-Language header into tags ordered by descending quality (q),
// dropping entries the client explicitly rejects (q=0). Ties keep header order.
// e.g. "fa-IR,fa;q=0.9,en;q=0.8" -> ["fa-IR", "fa", "en"]
function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 1 : q };
    })
    .filter((entry) => entry.tag !== "" && entry.tag !== "*" && entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.tag);
}

// Pick the best supported locale using BCP 47 "lookup": prefer an exact match,
// then fall back to the primary subtag (e.g. "fa-IR" matches the "fa" locale).
// Only the locales `allowed` on the current domain are candidates.
function matchLocale(requested: string[], allowed: readonly Locale[], fallback: Locale): Locale {
  for (const tag of requested) {
    const exact = allowed.find((l) => l === tag);
    if (exact) return exact;

    const primary = tag.split("-")[0];
    const base = allowed.find((l) => l === primary);
    if (base) return base;
  }
  return fallback;
}

function getLocaleFromRequest(
  request: NextRequest,
  allowed: readonly Locale[],
  fallback: Locale,
): Locale {
  // 1. Respect an explicit cookie (user manually switched language)
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && allowed.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Negotiate from the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return matchLocale(parseAcceptLanguage(acceptLanguage), allowed, fallback);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip non-page paths
  if (PUBLIC_PATHS.test(pathname)) return NextResponse.next();

  // Persian is served from the .ir domain, English/Arabic from .com. Any other
  // host (localhost, Vercel previews) serves every locale.
  const group: DomainGroup | null = domainGroupForHost(request.headers.get("host"));
  const allowed: readonly Locale[] = group ? domainLocales[group] : locales;
  const fallback: Locale = group ? domainDefaultLocale[group] : defaultLocale;

  // Check if the pathname already has a valid locale prefix
  const prefixLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (prefixLocale) {
    if (group && !allowed.includes(prefixLocale)) {
      // Locale belongs to the other domain → permanent redirect, same path.
      const otherOrigin = group === "ir" ? ORIGINS.com : ORIGINS.ir;
      return NextResponse.redirect(new URL(`${pathname}${request.nextUrl.search}`, otherOrigin), 308);
    }
    return NextResponse.next();
  }

  // No locale prefix → detect and redirect
  const locale = getLocaleFromRequest(request, allowed, fallback);
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  const response = NextResponse.redirect(redirectUrl);

  // Persist the detected locale so subsequent navigations skip detection
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
