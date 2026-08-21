// ─────────────────────────────────────────────
// NUMBERS
// ─────────────────────────────────────────────
// fa-IR uses Eastern Arabic-Indic numerals (۰۱۲۳۴۵۶۷۸۹) by default
// ar-SA also uses Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) by default
// en-US uses Western Arabic numerals (0123456789)
// The Intl.NumberFormat API handles all of this automatically.

import { Locale, localeConfig } from "./config";

export function formatNumber(value: number, locale: Locale, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(localeConfig[locale].intlLocale, options).format(value);
}

export function formatCurrency(value: number, locale: Locale, currency: string) {
  return new Intl.NumberFormat(localeConfig[locale].intlLocale, {
    style: "currency",
    currency,
  }).format(value);
}

// ─────────────────────────────────────────────
// DATES
// ─────────────────────────────────────────────
// fa-IR defaults to the Solar Hijri (Jalali) calendar — e.g. ۱۴۰۳/۰۱/۰۱
// ar-SA defaults to the Islamic (Hijri) calendar in some contexts
// You can override with calendar option if you always want Gregorian

export function formatDate(
  date: Date | string,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(localeConfig[locale].intlLocale, options).format(d);
}

// Force Gregorian calendar regardless of locale (useful for blog publish dates)
export function formatDateGregorian(date: Date | string, locale: Locale) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(localeConfig[locale].intlLocale, {
    calendar: "gregory",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

// ─────────────────────────────────────────────
// PLURALIZATION
// ─────────────────────────────────────────────
// Arabic has 6 plural forms. Farsi has only 1 (no grammatical plural).
// English has 2. The Intl.PluralRules API handles this.

export function getPluralRule(value: number, locale: Locale) {
  return new Intl.PluralRules(localeConfig[locale].intlLocale).select(value);
  // Returns: 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'
}

// Usage in translations:
// ar/blog.json: { "comments": { "zero": "لا تعليقات", "one": "تعليق واحد",
//   "two": "تعليقان", "few": "{{count}} تعليقات", "many": "{{count}} تعليقاً",
//   "other": "{{count}} تعليق" } }
// fa/blog.json: { "comments": { "other": "{{count}} نظر" } }  ← only one form needed
// en/blog.json: { "comments": { "one": "{{count}} comment", "other": "{{count}} comments" } }
