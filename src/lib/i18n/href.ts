import type { Locale } from "./config";

/**
 * Build a locale-prefixed internal path.
 *   localeHref("fa")                 -> "/fa"
 *   localeHref("en", "/products")    -> "/en/products"
 *   localeHref("ar", "products/x")   -> "/ar/products/x"
 * Every internal <Link href> must go through this so the locale segment is never dropped.
 */
export function localeHref(locale: Locale, path = "/"): string {
  if (path === "/" || path === "") return `/${locale}`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
