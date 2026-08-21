import { defaultLocale, Locale, localeConfig, locales } from "./config";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://yoursite.com";

// Generate hreflang link tags for a given pathname
// Call this in every page's <head> or generateMetadata()
export function generateHreflangTags(pathname: string) {
  return [
    // One tag per locale
    ...locales.map((locale) => ({
      hreflang: localeConfig[locale].hreflang,
      href: `${BASE_URL}/${locale}${pathname === "/" ? "" : pathname}`,
    })),
    // x-default points to your canonical fallback (English)
    {
      hreflang: "x-default",
      href: `${BASE_URL}/${defaultLocale}${pathname === "/" ? "" : pathname}`,
    },
  ];
}

// Use in generateMetadata() for every page
// Returns a fully localized metadata object for Next.js
export function buildLocalizedMetadata({
  locale,
  pathname,
  title,
  description,
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}) {
  const config = localeConfig[locale];
  const canonicalUrl = `${BASE_URL}/${locale}${pathname === "/" ? "" : pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        locales.map((l) => [
          localeConfig[l].hreflang,
          `${BASE_URL}/${l}${pathname === "/" ? "" : pathname}`,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      locale: config.intlLocale, // e.g. 'fa_IR', 'ar_SA'
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeConfig[l].intlLocale),
      url: canonicalUrl,
    },
  };
}
