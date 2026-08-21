# i18n Architecture — en / fa / ar

## Supported Locales

| Code | Language | Direction | Script | Font | Calendar default |
|------|----------|-----------|--------|------|-----------------|
| `en` | English  | LTR | Latin | Inter | Gregorian |
| `fa` | Persian (Farsi) | RTL | Perso-Arabic | Vazirmatn | Solar Hijri (Jalali) |
| `ar` | Arabic | RTL | Arabic | Cairo | Islamic / Gregorian |

> ⚠️ Farsi and Arabic share the same Unicode block but are NOT the same.
> They need separate fonts — glyphs for ک, ی, ه differ between the two scripts.

---

## Project Structure

```
├── app/
│   └── [locale]/                ← All pages live under the locale segment
│       ├── layout.tsx           ← Sets <html lang dir>, loads fonts
│       ├── page.tsx             ← /en  /fa  /ar
│       ├── about/page.tsx       ← /en/about  etc.
│       ├── blog/
│       │   ├── page.tsx         ← /en/blog
│       │   └── [slug]/page.tsx  ← /en/blog/my-post
│       └── contact/page.tsx
│
├── messages/                    ← Translations, split by locale → namespace
│   ├── en/
│   │   ├── common.json          ← nav, footer, errors
│   │   ├── home.json
│   │   ├── about.json
│   │   ├── blog.json
│   │   └── contact.json
│   ├── fa/                      ← Same structure
│   └── ar/                      ← Same structure
│
├── lib/i18n/
│   ├── getDictionary.ts         ← Server-only loader, dynamic imports per namespace
│   ├── seo.ts                   ← hreflang + generateMetadata helpers
│   ├── format.ts                ← Intl-based date/number/plural formatters
│   └── rtl.ts                   ← RTL utilities, CSS logical property guide
│
├── components/
│   └── LanguageSwitcher.tsx     ← Stays on same page, sets cookie
│
├── middleware.ts                 ← Edge: detects locale, redirects / to /[locale]/
├── i18n.config.ts               ← Single source of truth for all locale config
└── app/sitemap.ts               ← Auto-generates all locale URLs for Google
```

---

## How Translation Loading Works

```
User visits /fa/blog
       │
       ▼
middleware.ts       → already has /fa prefix, passes through
       │
       ▼
app/[locale]/layout.tsx  → getDictionary('fa', 'common')   ← server only
       │
       ▼
app/[locale]/blog/page.tsx → getDictionaries('fa', ['common', 'blog'])
                             runs in parallel, returns only fa/common.json
                             and fa/blog.json
                             en.json and ar.json are NEVER fetched
                             translations are rendered into HTML server-side
                             ZERO translation JS ships to the client
```

---

## RTL Key Rules

1. Use CSS logical properties everywhere — `margin-inline-start` not `margin-left`
2. In Tailwind: use `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`
3. Icons that imply direction (arrows, chevrons) must be flipped in RTL
4. Input `[type=number]` should have `dir="ltr"` inside an RTL layout
5. Mixed content (Arabic text + English code snippet) — wrap English in `<span dir="ltr">`

---

## SEO Checklist

- [x] `<html lang="">` set per locale
- [x] `<html dir="">` set per locale (rtl for fa and ar)
- [x] `hreflang` tags generated for all locale variants on every page
- [x] `x-default` hreflang pointing to English
- [x] `canonical` URL is the locale-specific version
- [x] Sitemap includes all locale variants with `alternates`
- [x] `og:locale` and `og:locale:alternate` set in Open Graph metadata
- [x] Page `<title>` and `<meta description>` translated per locale

---

## Arabic Plurals (important!)

Arabic has **6 plural forms** — zero, one, two, few, many, other.
Always define all 6 in your `ar/*.json` files or users will see missing strings.

```json
"comments": {
  "zero":  "لا تعليقات",
  "one":   "تعليق واحد",
  "two":   "تعليقان",
  "few":   "{count} تعليقات",
  "many":  "{count} تعليقاً",
  "other": "{count} تعليق"
}
```

Farsi has **1 plural form** — just use `"other"` for everything.

---

## Adding a New Language

1. Add the locale code to `locales` array in `i18n.config.ts`
2. Add its config to `localeConfig` (dir, font, intlLocale, hreflang)
3. Create `messages/[new-locale]/` folder and copy all JSON files from `en/`
4. Add dynamic import entries in `lib/i18n/getDictionary.ts`
5. Add font files to `/public/fonts/` if needed
6. Done — middleware, sitemap, and hreflang all pick it up automatically
