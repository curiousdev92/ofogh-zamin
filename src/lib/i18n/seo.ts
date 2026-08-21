import { SITE } from "@/lib/site";
import { defaultLocale, Locale, localeConfig, locales } from "./config";

const BASE_URL = SITE.url;

// OpenGraph expects underscore locale tags (en_US, fa_IR, ar_SA). Our intlLocale
// is the hyphenated BCP-47 form (en-US) used by the Intl.* APIs — convert for OG.
const toOgLocale = (locale: Locale) => localeConfig[locale].intlLocale.replace("-", "_");

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
      siteName: SITE.name,
      type: "website",
      locale: toOgLocale(locale),
      alternateLocale: locales.filter((l) => l !== locale).map(toOgLocale),
      url: canonicalUrl,
    },
    // Image comes from the file-based opengraph-image route (used for both OG and
    // Twitter); we only set the textual card fields here.
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

// Absolute, locale-prefixed URL — for structured data (JSON-LD) and canonical use.
export function absoluteUrl(locale: Locale, pathname: string) {
  return `${BASE_URL}/${locale}${pathname === "/" ? "" : pathname}`;
}

// schema.org BreadcrumbList from an ordered list of crumbs (root → current).
export function breadcrumbJsonLd(
  locale: Locale,
  crumbs: { name: string; pathname: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(locale, c.pathname),
    })),
  };
}

// schema.org ItemList from an ordered list of links (categories, products…).
export function itemListJsonLd(
  locale: Locale,
  items: { name: string; pathname: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(locale, it.pathname),
    })),
  };
}

// schema.org Product for a single catalogue detail page. No `offers` — this is a
// spec catalogue with no online pricing; specs surface as additionalProperty.
export function productJsonLd(
  locale: Locale,
  product: {
    name: string;
    description: string;
    material: string;
    category: string;
    pathname: string;
    specs: { name: string; value: string }[];
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    material: product.material,
    brand: { "@type": "Brand", name: SITE.name },
    url: absoluteUrl(locale, product.pathname),
    ...(product.specs.length > 0 && {
      additionalProperty: product.specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.name,
        value: s.value,
      })),
    }),
  };
}

// schema.org Article for a single blog post. Author/publisher are the company
// (no individual bylines); dates are ISO 8601.
export function articleJsonLd(
  locale: Locale,
  article: {
    headline: string;
    description: string;
    datePublished: string;
    pathname: string;
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    inLanguage: locale,
    mainEntityOfPage: absoluteUrl(locale, article.pathname),
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

// schema.org Organization — the global brand identity, rendered once in the
// layout so it appears site-wide. No `logo` yet (no logo asset — §12); add it
// here once one exists. `description` is the shared common.footer.description.
export function organizationJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
    },
  };
}

// schema.org WebSite — global, rendered in the layout. `inLanguage` reflects the
// rendered locale and `url` points at that locale's home. No SearchAction (the
// site has no on-site search).
export function websiteJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absoluteUrl(locale, "/"),
    inLanguage: locale,
    description,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}
