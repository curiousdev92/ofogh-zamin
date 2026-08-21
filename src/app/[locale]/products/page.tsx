import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryCard } from "@/components/product/CategoryCard";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { ProductsMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata, itemListJsonLd } from "@/lib/i18n/seo";
import { getCategories, getFeaturedProducts, localize } from "@/lib/products";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = (await getDictionary(l, "products")) as unknown as ProductsMessages;
  return buildLocalizedMetadata({
    locale: l,
    pathname: "/products",
    title: t.meta.title,
    description: t.meta.description,
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = (await getDictionary(l, "products")) as unknown as ProductsMessages;

  const categories = getCategories();
  const suggested = getFeaturedProducts();

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.products, pathname: "/products" },
  ]);
  const categoryList = itemListJsonLd(
    l,
    categories.map((c) => ({ name: localize(c.name, l), pathname: `/products/${c.slug}` })),
  );

  return (
    <>
      <JsonLd data={[breadcrumb, categoryList]} />

      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[{ label: t.breadcrumb.home, pathname: "/" }, { label: t.breadcrumb.products }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
              {t.landing.eyebrow}
            </span>
            <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              {t.landing.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{t.landing.subtitle}</p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section spacing="lg" className="bg-surface-muted">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              {t.categories.title}
            </h2>
            <p className="mt-3 text-steel-600">{t.categories.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} locale={l} productsLabel={t.productsUnit} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Suggested products */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
              {t.suggested.eyebrow}
            </span>
            <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              {t.suggested.title}
            </h2>
            <p className="mt-3 text-steel-600">{t.suggested.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggested.map((p) => (
              <ProductCard key={`${p.categorySlug}/${p.slug}`} product={p} locale={l} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
