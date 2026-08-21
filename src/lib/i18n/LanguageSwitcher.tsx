"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, locales } from "./config";

// Display names shown in the switcher — always in the target language
const localeLabels: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === currentLocale) return;

    // Replace the current locale segment in the URL
    // e.g. /fa/blog/my-post → /ar/blog/my-post
    const segments = pathname.split("/");
    segments[1] = nextLocale; // index 1 is always the locale
    const nextPath = segments.join("/");

    // Set cookie so middleware respects the user's manual choice
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;

    router.push(nextPath);
  }

  return (
    <nav aria-label="Language switcher">
      <ul role="list" style={{ display: "flex", gap: "0.75rem", listStyle: "none" }}>
        {locales.map((locale) => (
          <li key={locale}>
            <button
              onClick={() => switchLocale(locale)}
              aria-current={locale === currentLocale ? "true" : undefined}
              lang={locale} // Important: tells screen readers the language of each label
              style={{
                fontWeight: locale === currentLocale ? 700 : 400,
                textDecoration: locale === currentLocale ? "underline" : "none",
                cursor: locale === currentLocale ? "default" : "pointer",
              }}
            >
              {localeLabels[locale]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
