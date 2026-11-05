import type { Locale } from "@/lib/i18n/config";

// Production origins. Persian (`fa`) is served from the .ir domain; English and
// Arabic from the .com domain. Each domain only serves its own locales (see
// proxy.ts), so canonical / hreflang / sitemap URLs must use the right origin.
export const ORIGINS = {
  ir: "https://ofoghzamin.ir",
  com: "https://ofoghzamin.com",
} as const;

// `NEXT_PUBLIC_BASE_URL` overrides every origin (local dev, Vercel previews) so
// those environments stay single-host and nothing points at production.
const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim().replace(/\/+$/, "");
const override = envUrl && envUrl.length > 0 ? envUrl : undefined;

/** Absolute origin that serves `locale` (no trailing slash). */
export function localeOrigin(locale: Locale): string {
  return override ?? (locale === "fa" ? ORIGINS.ir : ORIGINS.com);
}

export const SITE = {
  name: "Ofogh Zamin",
  altName: "افق زمین",
  // Primary (international) origin; use `localeOrigin(locale)` for locale-aware URLs.
  url: override ?? ORIGINS.com,
  email: "ofoghzamin@gmail.com",
  address: {
    fa: "تهران - جاده خاوران - شهرک صنعتی خاوران - سایت آهنکاران - کوچه نهم شرقی - پلاک 5014",
    en: "Tehran - Kavaran Road - Kavaran Industrial Town - Ahankaran Site - 9th Eastern Alley - No. 5014",
    ar: "طهران - طريق كافاران - مدينة كافاران الصناعية - موقع آهن‌کاران - زقاق التاسع الشرقي - رقم 5014",
  },
  // Contact numbers. `tel` is the E.164 form (used for `tel:` hrefs and JSON-LD);
  // `display` is the human, Western-digit form (localised to Persian digits at
  // render time for `fa` via `localizeDigits`). Keep the two in sync.
  phones: {
    landline: [
      { tel: "+982133281775", display: "021 3328 1775" },
      { tel: "+982133288065", display: "021 3328 8065" },
      { tel: "+982133288087", display: "021 3328 8087" },
    ],
    mobile: [
      { tel: "+989123104626", display: "0912 310 4626" },
      { tel: "+989124149386", display: "0912 414 9386" },
    ],
    // Also reachable on Rubika, Eitaa and Bale, but only WhatsApp has a reliable
    // click-to-chat URL — the other apps are surfaced as copy in the UI.
    whatsapp: {
      tel: "+989216867807",
      display: "0921 686 7807",
      link: "https://wa.me/989216867807",
    },
  },
} as const;
