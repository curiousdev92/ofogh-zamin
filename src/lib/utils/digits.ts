import type { Locale } from "@/lib/i18n/config";

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

/**
 * Render ASCII digits in the locale's native numerals. Persian (`fa`) uses
 * Persian digits; English and Arabic keep Western digits (the site's Arabic copy
 * uses Western numerals throughout). Non-digit characters pass through unchanged,
 * so formatted strings like "021 3328 1775" keep their grouping/spacing.
 *
 * Use for VISIBLE phone/number text only — never for `tel:`/`wa.me` hrefs, which
 * must stay E.164 ASCII.
 */
export function localizeDigits(value: string, locale: Locale): string {
  if (locale !== "fa") return value;
  return value.replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}
