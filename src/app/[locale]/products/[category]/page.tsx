import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonVariants, Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionaries } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { CommonMessages, ProductsMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata, itemListJsonLd } from "@/lib/i18n/seo";
import {
  getCategories,
  getCategoryBySlug,
  getProductsByCategory,
  localize,
} from "@/lib/products";

type Props = { params: Promise<{ locale: string; category: string }> };

// Pre-render every category; Next cross-products these with each locale from
// the parent [locale] segment's generateStaticParams.
export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const l = locale as Locale;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return buildLocalizedMetadata({
    locale: l,
    pathname: `/products/${cat.slug}`,
    title: localize(cat.name, l),
    description: localize(cat.description, l),
  });
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const l = locale as Locale;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const dicts = await getDictionaries(l, ["common", "products"]);
  const common = dicts.common as unknown as CommonMessages;
  const t = dicts.products as unknown as ProductsMessages;

  const name = localize(cat.name, l);
  const description = localize(cat.description, l);
  const products = getProductsByCategory(cat.slug);

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.products, pathname: "/products" },
    { name, pathname: `/products/${cat.slug}` },
  ]);
  const productList = itemListJsonLd(
    l,
    products.map((p) => ({
      name: localize(p.name, l),
      pathname: `/products/${cat.slug}/${p.slug}`,
    })),
  );

  return (
    <>
      <JsonLd data={[breadcrumb, productList]} />

      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[
              { label: t.breadcrumb.home, pathname: "/" },
              { label: t.breadcrumb.products, pathname: "/products" },
              { label: name },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl">{name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{description}</p>
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section spacing="lg">
        <Container>
          {products.length > 0 ? (
            <>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-700">
                  {t.category.overview}
                </h2>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {products.length} {t.productsUnit}
                </span>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} locale={l} />
                ))}
              </div>
            </>
          ) : (
            <div className="border border-border bg-surface-muted p-10 text-center">
              <p className="mx-auto max-w-md text-steel-600">{t.category.empty}</p>
              <Link
                href={localeHref(l, "/contact")}
                className={buttonVariants({ variant: "outline", className: "mt-6" })}
              >
                {common.actions.contactUs}
              </Link>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
