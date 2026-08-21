export const locales = ['en', 'fa', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// RTL locales — both Farsi and Arabic are RTL
// but they differ in numerals, calendar, and font needs
export const rtlLocales: Locale[] = ['fa', 'ar']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

// Per-locale metadata used in <html> and Intl formatting.
// Note: there is no per-locale font — a single local face (Kalameh) is used for
// every locale (see globals.css / public/fonts). So no `fontFamily` here.
export const localeConfig: Record<
  Locale,
  {
    dir: 'ltr' | 'rtl'
    // BCP 47 tag used for Intl API (dates, numbers, plurals) — hyphenated.
    intlLocale: string
    // hreflang value
    hreflang: string
  }
> = {
  en: {
    dir: 'ltr',
    intlLocale: 'en-US',
    hreflang: 'en',
  },
  fa: {
    dir: 'rtl',
    intlLocale: 'fa-IR',
    hreflang: 'fa',
  },
  ar: {
    dir: 'rtl',
    intlLocale: 'ar-SA',
    hreflang: 'ar',
  },
}

// Namespaces — each maps to a separate JSON file per locale
export const namespaces = ['common', 'home', 'products', 'about', 'blog', 'contact'] as const
export type Namespace = (typeof namespaces)[number]
