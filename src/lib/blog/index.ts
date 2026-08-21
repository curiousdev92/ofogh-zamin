// Public API for the blog. Import from "@/lib/blog".
// Pure, synchronous lookups over the static data in ./data — safe in Server
// Components and in generateStaticParams / generateMetadata.

import { defaultLocale, type Locale, localeConfig } from "@/lib/i18n/config";
import { posts } from "./data";
import type { LocalizedText, Post } from "./types";

export type { LocalizedText, Post } from "./types";

/** Resolve a localized string for `locale`, falling back to the default locale. */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale] || text[defaultLocale];
}

/** All posts, newest first. */
export function getPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/**
 * Format an ISO date for display. Uses the locale's language and digits but a
 * fixed Gregorian calendar, so dates stay predictable across en / fa / ar.
 */
export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeConfig[locale].intlLocale, {
    dateStyle: "long",
    calendar: "gregory",
  }).format(new Date(iso));
}
