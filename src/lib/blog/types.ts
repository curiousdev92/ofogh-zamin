// Blog domain types. Like the catalogue, blog content is typed static data
// (see ./data.ts) — no CMS. Everything is serializable for static generation.

import type { Locale } from "@/lib/i18n/config";

/** A string provided in every supported locale. */
export type LocalizedText = Record<Locale, string>;

/** A single blog article. */
export type Post = {
  /** Stable, language-neutral URL segment, e.g. "choosing-compression-fittings". */
  slug: string;
  title: LocalizedText;
  /** Short summary for cards and meta descriptions. */
  excerpt: LocalizedText;
  /** ISO 8601 date (YYYY-MM-DD) — used for sorting and `datePublished`. */
  date: string;
  /** Ordered body paragraphs, each localized. Swap for MDX if rich layout is needed. */
  body: LocalizedText[];
};
