# Ofogh Zamin — Design System & Build Guide

> **What this is:** the single source of truth for how this website looks, is
> structured, and gets built. Open this first in any new context before writing
> UI. Tokens live in [`src/app/globals.css`](src/app/globals.css); primitives in
> [`src/components/ui`](src/components/ui).

---

## 1. Product

A marketing + catalogue website for **brass fittings parts** — introducing the
company and its product range, and driving enquiries/sales.

**Pages (planned):**

| Page | Route (localized) | Purpose |
| --- | --- | --- |
| Home | `/[locale]` | Brand intro, featured categories, suggested products, CTAs |
| Products landing | `/[locale]/products` | All product **categories** + suggested products |
| Category | `/[locale]/products/[category]` | Products within a category |
| Single product | `/[locale]/products/[category]/[slug]` | Product detail, specs, enquiry CTA |
| Blog index | `/[locale]/blog` | Article list |
| Blog post | `/[locale]/blog/[slug]` | Single article |
| About | `/[locale]/about` | Company story |
| Contact | `/[locale]/contact` | Contact form + details |

**Non-negotiables:** full technical SEO · responsive (mobile + desktop) ·
trilingual (en / fa / ar) with RTL · Tailwind v4.

---

## 2. Tech stack

- **Next.js 16** (App Router, React 19), **TypeScript** (strict).
- **Tailwind CSS v4** — CSS-first config via `@theme` in `globals.css`. There is
  **no `tailwind.config.js`**; add design tokens as CSS variables.
- **pnpm** (10.20). Path alias **`@/*` → `src/*`**.
- **i18n**: locales `en`, `fa`, `ar` in [`src/lib/i18n/config.ts`](src/lib/i18n/config.ts).
  RTL for `fa`/`ar`. Locale routing handled by [`src/proxy.ts`](src/proxy.ts).

---

## 3. Design principles

1. **Navy + Gold.** Deep navy is the brand; brass gold is the accent. Steel gray
   for structure/neutrals.
2. **No soft edges.** `border-radius` is **0** everywhere (all radius tokens
   overridden to `0px`). Do **not** use `rounded-*` or `rounded-full`. Structure
   comes from **1px borders**, not rounded corners or heavy shadows.
3. **Clean & industrial.** Generous whitespace, crisp 1px dividers, restrained
   shadows, confident type. Buttons/badges use `uppercase` + `tracking-wide`
   (affects Latin only — Persian/Arabic scripts are unaffected).
4. **RTL-first thinking.** Use **logical** utilities (`ms-*`, `me-*`, `ps-*`,
   `pe-*`, `start-*`, `end-*`, `text-start/-end`) — never `ml/mr/left/right`.
   See [`src/lib/i18n/rtl.ts`](src/lib/i18n/rtl.ts).
5. **SEO is structural**, not an afterthought — semantic HTML, metadata, and
   JSON-LD on every page (§8).

---

## 4. Color tokens

Defined in `@theme` → auto-generate `bg-*`, `text-*`, `border-*`, `ring-*`.
**Prefer the semantic aliases** in components so a future re-skin is one edit.

### Semantic (use these first)

| Token | Utility | Value | Use |
| --- | --- | --- | --- |
| `background` | `bg-background` | white | Page background |
| `surface` | `bg-surface` | white | Cards, panels |
| `surface-muted` | `bg-surface-muted` | steel-50 | Alt bands / subtle fills |
| `foreground` | `text-foreground` | navy-900 | Body text |
| `muted` | `bg-muted` | steel-100 | Chips, quiet fills |
| `muted-foreground` | `text-muted-foreground` | steel-500 | Secondary text |
| `border` | `border-border` | steel-200 | Default 1px borders |
| `border-strong` | `border-border-strong` | navy-900 | Emphasis borders |
| `primary` | `bg-primary` | navy-900 | Primary actions |
| `primary-foreground` | `text-primary-foreground` | white | Text on primary |
| `accent` | `bg-accent` | gold-500 | Accent actions/highlights |
| `accent-foreground` | `text-accent-foreground` | navy-900 | Text on accent |
| `ring` | `ring-ring` | gold-500 | Focus rings |
| `danger` | `text-danger` / `border-danger` | `#b42318` | Form validation errors (AA on white) |

### Scales (`navy-50…950`, `gold-50…900`, `steel-50…950`)

- **Navy** — signature `navy-900 #0d1a2b`. Backgrounds, primary buttons, headings.
- **Gold/Brass** — signature `gold-500 #c2941f`.
  - **Fills / accents on navy:** `gold-400`/`gold-500`.
  - ⚠️ **Gold text on light bg:** use **`gold-700 #785a16`** — `gold-500` fails
    contrast for small text on white. `gold-300` for accents on dark navy.
- **Steel** — cool neutral for borders, dividers, secondary text.

---

## 5. Typography

**One local typeface — Kalameh** — across every locale. Loaded with
`next/font/local` in [`public/fonts/index.ts`](public/fonts/index.ts) (weights
100/400/700/900) and exposed as the CSS var `--font-kalameh`; the layout puts
`KalamehFont.variable` on `<html>`.

`globals.css` aliases `--font-active` to `--font-kalameh` and points `--font-sans`
/ `--font-display` at it — so **`font-sans` always resolves to Kalameh**, body and
headings included, with no per-component logic.

- **Scale:** default Tailwind (`text-xs … text-6xl`).
- **Headings:** `font-display`, weight 700, `line-height 1.15`, navy-900,
  `text-wrap: balance` (set in base layer). Add responsive sizes per use.
- **Weights:** 400 body · 500 UI/labels · 600 subheads · 700 headings
  (Kalameh ships Thin/Regular/Bold/Black = 100/400/700/900).

> **Fonts:** Kalameh `.woff2` files live in `public/fonts/`, self-hosted at build
> time (no runtime network). Kalameh carries both Persian/Arabic **and** Latin
> glyphs, so the Latin wordmark and English copy also render in Kalameh. The
> earlier Google fonts (Inter/Vazirmatn/Cairo) were removed.

---

## 6. Spacing, layout, radius, elevation

- **Container:** `<Container>` = centered, `max-w-7xl` (80rem), `px-4 sm:px-6 lg:px-8`.
- **Section rhythm:** `<Section spacing="sm|md|lg">` = `py-12` / `py-16 md:py-20`
  / `py-20 md:py-28`.
- **Breakpoints (Tailwind v4 defaults):** `sm 40rem · md 48rem · lg 64rem · xl 80rem · 2xl 96rem`. Design mobile-first.
- **Radius:** `0` everywhere (see principle #2).
- **Shadows:** `shadow-sm/md/lg` are tight and navy-tinted; use sparingly. Prefer
  borders for separation.

---

## 7. Component primitives — `src/components/ui`

Import from the barrel: `import { Button, Card, Container } from "@/components/ui"`.
All are RTL-safe, squared, and typed with `React.ComponentProps<...>` (so
standard DOM props + `ref` pass through). Zero runtime deps; classes combined
with [`cn`](src/lib/utils/cn.ts).

| Component | Key API |
| --- | --- |
| `Button` | `variant`: `primary` \| `accent` \| `outline` \| `ghost` \| `link`; `size`: `sm` \| `md` \| `lg` |
| `buttonVariants({variant,size,className})` | Returns className — style a `<Link>` as a button |
| `Container` | Layout width wrapper |
| `Section` | `spacing`: `sm` \| `md` \| `lg` |
| `Card` + `CardHeader/Title/Body/Footer` | `interactive` for hover border (product/category/blog cards) |
| `Badge` | `variant`: `default` \| `accent` \| `outline` \| `muted` |
| `Input` / `Textarea` / `Label` | Form fields (Contact page) |

```tsx
import Link from "next/link";
import { Button, buttonVariants, Card, CardBody, Badge } from "@/components/ui";

<Button variant="accent" size="lg">Request a quote</Button>
<Link href="/products" className={buttonVariants({ variant: "outline" })}>Browse</Link>

<Card interactive>
  <CardBody>
    <Badge variant="accent">New</Badge>
    <h3 className="mt-3 text-lg font-semibold">Compression Elbow</h3>
  </CardBody>
</Card>
```

**When adding primitives:** new file in `src/components/ui`, style with semantic
tokens, keep it square, export from `index.ts`, add a row above.

---

## 8. SEO plan

Helpers already exist in [`src/lib/i18n/seo.ts`](src/lib/i18n/seo.ts):
`buildLocalizedMetadata()` (canonical + hreflang alternates + OpenGraph) and
`generateHreflangTags()`. Sitemap scaffold in [`src/app/sitemap.ts`](src/app/sitemap.ts).

Per-page checklist:

- [ ] `generateMetadata()` via `buildLocalizedMetadata({ locale, pathname, title, description })`.
- [ ] Semantic landmarks: one `<h1>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- [ ] **JSON-LD** (`<script type="application/ld+json">`):
  - Home/global → `Organization` + `WebSite`
  - Products/category → `BreadcrumbList` + `ItemList`
  - Single product → `Product` (+ `Offer` if pricing shown)
  - Blog post → `Article` / `BlogPosting` + `BreadcrumbList`
- [ ] OG/Twitter images (consider `opengraph-image` route per section).
- [ ] `robots.ts` + finish `sitemap.ts` (all locales × routes).
- [x] Canonical origin centralized in [`src/lib/site.ts`](src/lib/site.ts)
      (`ofogh-zamin.vercel.app`); `seo.ts`, `sitemap.ts` and layout metadata all
      read `SITE.url`. `NEXT_PUBLIC_BASE_URL` overrides per-env — **blank is
      treated as unset** (an empty value once crashed dev via `new URL("")`).
- [ ] `alt` text on every image; `next/image` with width/height to avoid CLS.

---

## 9. i18n / RTL conventions

- Locales & metadata: [`src/lib/i18n/config.ts`](src/lib/i18n/config.ts).
- Copy lives in `src/messages/{locale}/{namespace}.json`; load with
  `getDictionary(locale, ns)` from [`getDictionary.ts`](src/lib/i18n/getDictionary.ts).
  **Namespaces:** `common`, `home`, `about`, `blog`, `contact` (add e.g.
  `products` here + create the JSON files when building those pages).
- `<html dir>`/`lang` are set by the locale layout; layout flips automatically.
- Use logical CSS utilities only (see principle #4). For genuinely
  direction-specific bits (e.g. chevron rotation) use `dirClass()` from
  [`rtl.ts`](src/lib/i18n/rtl.ts).

> Note: all six namespaces (`common`, `home`, `products`, `blog`, `about`,
> `contact`) are populated for every locale (en/fa/ar). No empty `{}` files remain.

---

## 10. Folder structure

```
src/
  app/
    globals.css              ← design tokens (@theme) + base layer
    sitemap.ts
    [locale]/
      layout.tsx             ← ROOT layout: fonts, <html lang/dir>, Header + Footer
      page.tsx               ← home
      styleguide/page.tsx    ← design-system QA surface (noindex)
  components/
    ui/                      ← design-system primitives (this doc, §7)
    layout/                  ← Header, Footer, MobileMenu, Logo
    product/                 ← CategoryCard, ProductCard, PlaceholderTile
  lib/
    site.ts                  ← name, canonical URL, contact — single source
    products/                ← typed static catalogue: types, data, query helpers
    i18n/                    ← config, dictionaries, seo, rtl, href, messages, LanguageSwitcher
    utils/cn.ts              ← className combiner
  messages/{en,fa,ar}/       ← translation JSON (common.json filled)
  proxy.ts                   ← locale detection/redirect middleware
```

> There is **no `src/app/layout.tsx`** — `app/[locale]/layout.tsx` is the root
> layout (renders `<html>`/`<body>`). Next 16 accepts this; build confirms it.

**Conventions:** primitives → `components/ui`; composed sections (Header, Footer,
ProductCard, Hero…) → `components/` (create as needed); page-specific pieces may
live beside their route. Always import via `@/…`.

---

## 11. Build roadmap

- [x] **Step 1 — Design system foundation** *(done)*: tokens, base layer,
      primitives (`Button`, `Container`, `Section`, `Card`, `Badge`, `Input`/
      `Textarea`/`Label`), `cn`, this doc.
- [x] **Step 2 — App shell & routing** *(done)*: `layout.tsx` + `page.tsx` moved
      under `src/app/[locale]/` (that layout is now the **root** — renders
      `<html>`; there is no `src/app/layout.tsx`). `params` typed as
      `Promise<{ locale: string }>` and awaited. Built `Header` (Logo, nav,
      `LanguageSwitcher`, CTA, `MobileMenu`) + `Footer`, and a `/[locale]/styleguide`
      QA page. **Verified** via `next build` and live dev: en (LTR / Inter) and fa
      (RTL / Vazirmatn) render with the navy+gold palette and squared edges;
      locale-aware font switching works off `<html lang>`.
- [x] **Step 3 — Home** *(done)*: hero, featured-categories grid, suggested-products
      grid, and a navy CTA band. Introduced the **catalogue data layer**
      (`src/lib/products/` — `types`, `data`, query helpers) and reusable
      `CategoryCard` / `ProductCard` / `PlaceholderTile`. Home copy added to
      `home.json` (all 3 locales). **Verified** live: en (LTR) + fa (RTL) render
      with Kalameh, squared 1px cards, navy/gold palette; `tsc --noEmit` clean.
- [x] **Step 4 — Products landing + Category** *(done)*: `/products` (header +
      6-category grid + suggested products) and `/products/[category]`
      (`generateStaticParams` over categories, `notFound()` on miss, product grid
      with count, defensive empty state → contact CTA). Added reusable
      `Breadcrumbs` + `JsonLd` components; `BreadcrumbList` + `ItemList` JSON-LD on
      both routes via `breadcrumbJsonLd` / `itemListJsonLd` / `absoluteUrl` in
      `seo.ts`; typed `ProductsMessages` + `products.json` (all 3 locales).
      **Verified** live: en (LTR) landing + `ball-valves` category, fa (RTL, valid
      structured data) render clean — no console/server errors; `tsc --noEmit` clean.
- [x] **Step 5 — Single product** *(done)*: `/products/[category]/[slug]`
      (`generateStaticParams` over all products, `notFound()` on bad slug/category).
      Overview band (breadcrumb, category eyebrow, placeholder tile, material badge,
      summary, quote CTA), squared `<dl>` specs table, related-products grid (same
      category, current excluded), navy enquiry band. Added `productJsonLd`
      (`Product` + specs as `additionalProperty`, no `offers`) + `detail` copy to
      `products.json` (all 3 locales). **Verified** live: en (LTR) + fa (RTL,
      localized specs/CTA) render clean; JSON-LD valid; 404s on bad slug/category;
      `tsc --noEmit` clean.
- [x] **Step 6 — Blog** *(done)*: `/blog` (index) + `/blog/[slug]` (post). Added a
      blog data layer (`src/lib/blog/` — `types`, empty `data`, query helpers +
      `formatDate`) mirroring the catalogue. Index shows a **"coming soon"** empty
      state while `posts` is empty, and auto-switches to a `PostCard` grid once
      content lands. Post template is ready (breadcrumb, date, body paragraphs,
      back-link) with `Article` + `BreadcrumbList` JSON-LD (`articleJsonLd` in
      `seo.ts`); it generates no pages until posts exist and 404s on unknown slugs.
      `blog.json` populated (all 3 locales). **Verified** live: en + fa (RTL) render
      the empty state clean; `/blog/<unknown>` → 404; `tsc --noEmit` clean.
- [x] **Step 7 — About + Contact** *(done)*: `/about` (hero, two-paragraph story,
      4-item "what we stand for" grid, navy dual-CTA band → products + contact) and
      `/contact` (contact details from `SITE` — mailto/tel links locked `dir="ltr"`
      inside RTL — beside a client `ContactForm`). The form (`Input`/`Textarea`/
      `Label`) does client-side validation (Name*/Email*/Message* required, email
      shape), shows inline `role="alert"` errors + `aria-invalid`/`aria-describedby`,
      moves focus to the first invalid field, and on valid submit swaps to a
      `role="status"` success panel with a reset. **Delivery is intentionally
      stubbed** ("UI now, wire delivery later" — logs the payload, no backend); wire
      a provider in `handleSubmit` (see its `TODO(delivery)`). Added a semantic
      `danger` token (§4), `about.json` + `contact.json` (all 3 locales), and
      `AboutMessages`/`ContactMessages` types. `BreadcrumbList` JSON-LD on both.
      **Verified** live: en full form flow (empty → 3 errors, invalid email, success,
      reset, stub log), fa + ar (RTL, localized copy/validation, LTR email/phone);
      `tsc --noEmit` clean, no console/server errors.
- [ ] **Step 8 — SEO finish** ⚠️ *next* — `robots.ts`, full sitemap (all locales ×
      routes), OG images, JSON-LD sweep (add `Organization` + `WebSite` on the
      layout). Fix `openGraph.locale` to the underscore form (`en_US`), and drop the
      vestigial `fontFamily`/`fontStacks` (Inter/Vazirmatn/Cairo) in `rtl.ts`. Plus
      an a11y/perf pass.

---

## 12. Decisions (answered)

1. **Palette** — approved as-is: `navy-900 #0d1a2b` + `gold-500 #c2941f`.
2. **Fonts** — **Kalameh**, a single local `next/font/local` face used for all
   locales (client swapped it in; Google Inter/Vazirmatn/Cairo removed). See §5.
3. **Brand** — name **"Ofogh Zamin"**, a Latin wordmark kept Latin in every locale;
   **no logo asset yet** — `Logo` renders a gold tick + the wordmark.
4. **Domain** — `https://ofogh-zamin.vercel.app` (in [`src/lib/site.ts`](src/lib/site.ts)).
5. **Product data source** — **typed static data in-repo** (my call, per "you
   choose"; ≤300 products, no CMS). Plan: `src/lib/products/` exporting typed
   `Product[]` + `Category[]`, fully `generateStaticParams`-able → static HTML,
   strong SEO, and trivial to lift into a CMS later. **Placeholder catalogue now
   seeded** in [`data.ts`](src/lib/products/data.ts) (6 categories, 16 products,
   trilingual) — swap for the client's real content later. **Blog:** no content yet
   (being produced) → build index/post with a "coming soon" empty state and wire
   real data when supplied.
6. **Type case** — keep **uppercase + industrial** for Latin UI (nav / buttons /
   badges); Persian/Arabic scripts are unaffected by `uppercase`.
```
