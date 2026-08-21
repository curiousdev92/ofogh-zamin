import { locales } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";
import { MetadataRoute } from "next";

const BASE_URL = SITE.url;

// Static routes — add dynamic routes (blog posts, etc.) alongside these
const staticRoutes = ["", "/about", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        // Next.js 14+ supports alternates in sitemap
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [`${l}`, `${BASE_URL}/${l}${route}`])),
        },
      });
    }
  }

  return entries;
}
