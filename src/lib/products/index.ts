// Public API for the catalogue. Import from "@/lib/products".
// Pure, synchronous lookups over the static data in ./data — safe in Server
// Components and in generateStaticParams / generateMetadata.

import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";
import { categories, products } from "./data";
import type { Category, LocalizedText, Product } from "./types";

export type { Category, LocalizedText, Product, Spec } from "./types";

/** Resolve a localized string for `locale`, falling back to the default locale. */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale] || text[defaultLocale];
}

// ── Categories ──────────────────────────────────────────────────────────────

export function getCategories(): Category[] {
  return categories;
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// ── Products ──────────────────────────────────────────────────────────────

export function getProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, slug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}

/** Count of products in a category — used for card meta. */
export function countProductsInCategory(categorySlug: string): number {
  return products.reduce((n, p) => (p.categorySlug === categorySlug ? n + 1 : n), 0);
}
