import { domainGroupForHost } from "@/lib/i18n/domains";
import { ORIGINS, SITE } from "@/lib/site";
import { headers } from "next/headers";
import { MetadataRoute } from "next";

// Crawl everything except the design-system QA surface (also noindex at the page
// level — this is belt-and-suspenders). Points crawlers at the sitemap.
export default async function robots(): Promise<MetadataRoute.Robots> {
  // Point each domain at its own sitemap (see sitemap.ts).
  const group = domainGroupForHost((await headers()).get("host"));
  const origin = group ? ORIGINS[group] : SITE.url;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*/styleguide"],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
