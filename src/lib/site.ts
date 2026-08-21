// Single source of truth for site-wide constants (name, canonical URL, contact).
// Imported by SEO helpers, sitemap, layout metadata, header/footer.

const DEFAULT_URL = "https://ofogh-zamin.vercel.app";

// Treat an unset OR empty/whitespace env var as absent — `??` alone keeps ""
// (e.g. NEXT_PUBLIC_BASE_URL="" in .env.development), which breaks `new URL()`.
const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();

export const SITE = {
  name: "Ofogh Zamin",
  // Canonical origin, no trailing slash. Override per-env with NEXT_PUBLIC_BASE_URL.
  url: (envUrl && envUrl.length > 0 ? envUrl : DEFAULT_URL).replace(/\/+$/, ""),
  // Business contact — placeholders until the client provides finals.
  email: "info@ofogh-zamin.com",
  phone: "+98 21 0000 0000",
} as const;
