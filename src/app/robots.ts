import { SITE } from "@/lib/site";
import { MetadataRoute } from "next";

// Crawl everything except the design-system QA surface (also noindex at the page
// level — this is belt-and-suspenders). Points crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*/styleguide"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
