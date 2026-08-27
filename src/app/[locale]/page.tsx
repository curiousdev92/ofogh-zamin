import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCard } from "@/components/product/CategoryCard";
import { ProductCard } from "@/components/product/ProductCard";
import { Badge, buttonVariants, Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionaries } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { CommonMessages, HomeMessages } from "@/lib/i18n/messages";
import { buildLocalizedMetadata } from "@/lib/i18n/seo";
import { getFeaturedCategories, getFeaturedProducts } from "@/lib/products";

type Props = { params: Promise<{ locale: string }> };

async function loadCopy(l: Locale) {
  const dicts = await getDictionaries(l, ["common", "home"]);
  return {
    common: dicts.common as unknown as CommonMessages,
    home: dicts.home as unknown as HomeMessages,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const { common, home } = await loadCopy(l);
  return buildLocalizedMetadata({
    locale: l,
    pathname: "/",
    title: `${common.brand.seoName} — ${common.brand.tagline}`,
    description: home.hero.subtitle,
  });
}

/** Shared band header: eyebrow + title + subtitle, with an optional "view all" link. */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  linkHref,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
          {eyebrow}
        </span>
        <h2 className="mt-2 text-2xl  uppercase tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 text-steel-600">{subtitle}</p>
      </div>
      <Link
        href={linkHref}
        className={buttonVariants({
          variant: "link",
          className: "group self-start whitespace-nowrap",
        })}
      >
        {linkLabel}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const { home } = await loadCopy(l);

  const categories = getFeaturedCategories();
  const products = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="outline">{home.hero.eyebrow}</Badge>
            <h1 className="mt-6 text-4xl  uppercase tracking-tight sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-600">
              {home.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={localeHref(l, "/products")}
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {home.hero.primaryCta}
              </Link>
              <Link
                href={localeHref(l, "/contact")}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {home.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured categories */}
      {/* <Section spacing="lg" className="bg-surface-muted">
        <Container>
          <SectionHeader
            eyebrow={home.featured.eyebrow}
            title={home.featured.title}
            subtitle={home.featured.subtitle}
            linkHref={localeHref(l, "/products")}
            linkLabel={home.featured.viewAll}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard
                key={c.slug}
                category={c}
                locale={l}
                productsLabel={home.featured.products}
              />
            ))}
          </div>
        </Container>
      </Section> */}

      {/* Suggested products */}
      {/* <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow={home.suggested.eyebrow}
            title={home.suggested.title}
            subtitle={home.suggested.subtitle}
            linkHref={localeHref(l, "/products")}
            linkLabel={home.suggested.viewAll}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={`${p.categorySlug}/${p.slug}`} product={p} locale={l} />
            ))}
          </div>
        </Container>
      </Section> */}

      {/* CTA band */}
      <Section spacing="lg" className="bg-navy-900">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl  uppercase tracking-tight text-white sm:text-3xl">
                {home.cta.title}
              </h2>
              <p className="mt-3 text-steel-300">{home.cta.subtitle}</p>
            </div>
            <Link
              href={localeHref(l, "/contact")}
              className={buttonVariants({
                variant: "accent",
                size: "lg",
                className: "whitespace-nowrap",
              })}
            >
              {home.cta.button}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
