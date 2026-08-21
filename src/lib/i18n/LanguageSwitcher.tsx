"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { Locale, locales } from "./config";

// Display names shown in the switcher — always written in the target language.
const localeLabels: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

type Props = {
  currentLocale: Locale;
  // "light" for the dark footer, "dark" (default) for the light header.
  tone?: "dark" | "light";
  className?: string;
};

export function LanguageSwitcher({ currentLocale, tone = "dark", className }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === currentLocale) return;

    // Swap the locale segment in place: /fa/blog/x → /ar/blog/x (index 1 is the locale).
    const segments = pathname.split("/");
    segments[1] = nextLocale;

    // Persist the manual choice so the proxy respects it on later visits.
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;

    router.push(segments.join("/"));
  }

  const idle =
    tone === "light" ? "text-steel-300 hover:text-white" : "text-steel-500 hover:text-navy-900";
  const active = tone === "light" ? "bg-white text-navy-900" : "bg-navy-900 text-white";

  return (
    <nav aria-label="Language switcher" className={cn("flex items-center gap-1", className)}>
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLocale(locale)}
            aria-current={isActive ? "true" : undefined}
            lang={locale}
            className={cn(
              "px-2.5 py-1 text-xs font-medium tracking-wide transition-colors",
              isActive ? active : idle,
            )}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </nav>
  );
}
