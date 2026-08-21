// ─────────────────────────────────────────────
// CSS LOGICAL PROPERTIES CHEATSHEET
// Use these instead of left/right so RTL flips automatically
// ─────────────────────────────────────────────
//
//  ❌ physical (breaks RTL)    ✅ logical (RTL-safe)
//  margin-left                 margin-inline-start
//  margin-right                margin-inline-end
//  padding-left                padding-inline-start
//  padding-right               padding-inline-end
//  border-left                 border-inline-start
//  text-align: left            text-align: start
//  text-align: right           text-align: end
//  left: 0                     inset-inline-start: 0
//  right: 0                    inset-inline-end: 0
//  float: left                 float: inline-start
//
// In Tailwind v3.3+ use:
//   ms-4 (margin-inline-start)  instead of  ml-4
//   me-4 (margin-inline-end)    instead of  mr-4
//   ps-4 (padding-inline-start) instead of  pl-4
//   pe-4 (padding-inline-end)   instead of  pr-4
//   start-0                     instead of  left-0
//   end-0                       instead of  right-0

import { isRTL, Locale } from "./config";

// ─────────────────────────────────────────────
// UTILITY: direction-aware class helper
// ─────────────────────────────────────────────

type DirectionClasses = {
  ltr: string;
  rtl: string;
};

// When you truly need direction-specific classes (e.g. icon rotation)
export function dirClass(locale: Locale, classes: DirectionClasses): string {
  return isRTL(locale) ? classes.rtl : classes.ltr;
}

// Example usage:
// <ChevronIcon className={dirClass(locale, { ltr: 'rotate-0', rtl: 'rotate-180' })} />

// ─────────────────────────────────────────────
// FONT STACKS
// ─────────────────────────────────────────────
// Both fa and ar need their own fonts because:
//   - Farsi: Vazirmatn, Sahel, IRANSans
//   - Arabic: Cairo, Noto Naskh Arabic, Tajawal
// They share the same Unicode block but have different glyph shapes
// (especially ک vs ك, ی vs ي, ه vs ه variants)

export const fontStacks = {
  en: "Inter, system-ui, sans-serif",
  fa: "Vazirmatn, system-ui, sans-serif",
  ar: "Cairo, system-ui, sans-serif",
} as const;

// ─────────────────────────────────────────────
// TAILWIND CONFIG ADDITION (tailwind.config.ts)
// ─────────────────────────────────────────────
//
// import type { Config } from 'tailwindcss'
//
// export default {
//   content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
//   // Enable RTL variant — adds rtl: and ltr: modifiers
//   plugins: [require('tailwindcss-rtl')],
//   // Or with Tailwind v3.3+ built-in logical properties,
//   // just use ms-*, me-*, ps-*, pe-*, start-*, end-* utilities
// } satisfies Config
