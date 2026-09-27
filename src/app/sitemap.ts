import { getPosts } from "@/lib/blog";
import { defaultLocale, localeConfig, locales } from "@/lib/i18n/config";
import { getCategories, getProducts } from "@/lib/products";
import { SITE } from "@/lib/site";
import { MetadataRoute } from "next";

const BASE_URL = SITE.url;

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteDef = {
  /** Pathname without the locale prefix ("" = home, else leading slash). */
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: Date;
};

/** Locale-prefixed absolute URL for a route. */
function urlFor(locale: string, path: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

/**
 * hreflang alternates for a route — one entry per locale keyed by its hreflang,
 * plus `x-default` pointing at the default locale. Google uses these to serve
 * the right language variant.
 */
function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeConfig[l].hreflang] = urlFor(l, path);
  }
  languages["x-default"] = urlFor(defaultLocale, path);
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes. `/styleguide` is intentionally excluded (noindex QA surface).
  const routes: RouteDef[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  ];

  // Category landing pages.
  for (const category of getCategories()) {
    routes.push({
      path: `/products/${category.slug}`,
      priority: 0.8,
      changeFrequency: "weekly",
    });
  }

  // Single-product detail pages. Draft (placeholder) products are noindex'd and
  // excluded here too — no point listing a page we're telling crawlers to skip.
  for (const product of getProducts().filter((p) => !p.draft)) {
    routes.push({
      path: `/products/${product.categorySlug}/${product.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  // Blog posts (none yet — future-proofed; uses each post's own date).
  for (const post of getPosts()) {
    routes.push({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(post.date),
    });
  }

  const entries: MetadataRoute.Sitemap = [];
  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: urlFor(locale, route.path),
        lastModified: route.lastModified ?? now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: alternatesFor(route.path),
      });
    }
  }

  return entries;
}
