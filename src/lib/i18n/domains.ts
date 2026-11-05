import type { Locale } from "./config";

// Which locales each production domain serves. Persian lives on the .ir domain;
// English and Arabic on the .com domain. Hosts that match neither (localhost,
// Vercel previews) are unrestricted — every locale, one host.
export type DomainGroup = "ir" | "com";

export const domainLocales: Record<DomainGroup, readonly Locale[]> = {
  ir: ["fa"],
  com: ["en", "ar"],
};

export const domainDefaultLocale: Record<DomainGroup, Locale> = {
  ir: "fa",
  com: "en",
};

// Registrable domains — "www." is stripped before matching, so both the apex and
// www hosts resolve to the same group.
const HOST_GROUPS: Record<string, DomainGroup> = {
  "ofoghzamin.ir": "ir",
  "ofoghzamin.com": "com",
};

/** Production domain group for a Host header value, or `null` for any other host. */
export function domainGroupForHost(host: string | null | undefined): DomainGroup | null {
  if (!host) return null;
  const bare = host.toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "");
  return HOST_GROUPS[bare] ?? null;
}
