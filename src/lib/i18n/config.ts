export const locales = ['en', 'fa', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// RTL locales — both Farsi and Arabic are RTL
// but they differ in numerals, calendar, and font needs
export const rtlLocales: Locale[] = ['fa', 'ar']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

// Per-locale metadata used in <html> and fonts
export const localeConfig: Record<
  Locale,
  {
    dir: 'ltr' | 'rtl'
    fontFamily: string
    // BCP 47 tag used for Intl API (dates, numbers, plurals)
    intlLocale: string
    // hreflang value
    hreflang: string
  }
> = {
  en: {
    dir: 'ltr',
    fontFamily: 'Inter, sans-serif',
    intlLocale: 'en-US',
    hreflang: 'en',
  },
  fa: {
    dir: 'rtl',
    // Vazirmatn is the best open-source Persian/Farsi web font
    fontFamily: 'Vazirmatn, sans-serif',
    intlLocale: 'fa-IR',
    hreflang: 'fa',
  },
  ar: {
    dir: 'rtl',
    // Cairo works well across Arabic scripts on the web
    fontFamily: 'Cairo, sans-serif',
    intlLocale: 'ar-SA',
    hreflang: 'ar',
  },
}

// Namespaces — each maps to a separate JSON file per locale
export const namespaces = ['common', 'home', 'products', 'about', 'blog', 'contact'] as const
export type Namespace = (typeof namespaces)[number]
