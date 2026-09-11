// Catalogue domain types. Data is typed static content (see src/lib/products/data.ts) —
// no CMS. Everything here is fully serializable so pages can be statically generated.

import type { Locale } from "@/lib/i18n/config";

/** A string provided in every supported locale. */
export type LocalizedText = Record<Locale, string>;

/** One row of a product's specification table. */
export type Spec = {
  label: LocalizedText;
  /** Dimensional / material value — kept language-neutral (e.g. `1/2"`, `CW617N`, `16 bar`). */
  value: string;
};

/** A product category — the top level of the catalogue tree. */
export type Category = {
  /** Stable, language-neutral URL segment, e.g. "compression-fittings". */
  slug: string;
  name: LocalizedText;
  /** One-line summary for cards and category headers. */
  tagline: LocalizedText;
  description: LocalizedText;
  /** Surface on the home page's featured grid. */
  featured?: boolean;
};

/** A single catalogue product. */
export type Product = {
  /** Unique within its category; language-neutral URL segment. */
  slug: string;
  /** Slug of the owning {@link Category}. */
  categorySlug: string;
  /** Public image path, replaceable under /public. */
  image?: string;
  /** Additional gallery images beyond the primary `image`, replaceable under /public. */
  images?: string[];
  name: LocalizedText;
  /** Short description for cards and meta descriptions. */
  summary: LocalizedText;
  material: LocalizedText;
  specs: Spec[];
  /** Surface on the home page's suggested grid. */
  featured?: boolean;
  /** Placeholder content pending real data — noindex'd and excluded from the sitemap. */
  draft?: boolean;
};
