import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlaceholderTile } from "@/components/product/PlaceholderTile";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, buttonVariants, Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { ProductsMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata, productJsonLd } from "@/lib/i18n/seo";
import {
  getCategoryBySlug,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
  localize,
} from "@/lib/products";

type Props = { params: Promise<{ locale: string; category: string; slug: string }> };

// Pre-render every product; Next cross-products these with each locale from the
// parent [locale] segment's generateStaticParams.
export function generateStaticParams() {
  return getProducts().map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, slug } = await params;
  const l = locale as Locale;
  const product = getProductBySlug(category, slug);
  if (!product) return {};
  return {
    ...buildLocalizedMetadata({
      locale: l,
      pathname: `/products/${category}/${slug}`,
      title: localize(product.name, l),
      description: localize(product.summary, l),
    }),
    ...(product.draft && { robots: { index: false, follow: false } }),
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, category, slug } = await params;
  const l = locale as Locale;
  const product = getProductBySlug(category, slug);
  const cat = getCategoryBySlug(category);
  if (!product || !cat) notFound();

  const t = (await getDictionary(l, "products")) as unknown as ProductsMessages;

  const name = localize(product.name, l);
  const summary = localize(product.summary, l);
  const material = localize(product.material, l);
  const categoryName = localize(cat.name, l);

  const specs = product.specs.map((s) => ({ name: localize(s.label, l), value: s.value }));
  const related = getProductsByCategory(category).filter((p) => p.slug !== product.slug);

  const productPath = `/products/${category}/${slug}`;
  const categoryPath = `/products/${category}`;

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.products, pathname: "/products" },
    { name: categoryName, pathname: categoryPath },
    { name, pathname: productPath },
  ]);
  const schema = productJsonLd(l, {
    name,
    description: summary,
    material,
    category: categoryName,
    pathname: productPath,
    specs,
    images: product.images ?? (product.image ? [product.image] : undefined),
  });

  return (
    <>
      <JsonLd data={[breadcrumb, schema]} />

      {/* Overview */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[
              { label: t.breadcrumb.home, pathname: "/" },
              { label: t.breadcrumb.products, pathname: "/products" },
              { label: categoryName, pathname: categoryPath },
              { label: name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {product.image ? (
              <ProductGallery images={product.images ?? [product.image]} alt={name} />
            ) : (
              <PlaceholderTile initial={name.charAt(0)} className="border" />
            )}
            <div className="flex flex-col">
              <Link
                href={localeHref(l, categoryPath)}
                className="text-xs font-semibold uppercase tracking-widest text-gold-700 transition-colors hover:text-gold-600"
              >
                {categoryName}
              </Link>
              <h1 className="mt-2 text-3xl  uppercase tracking-tight sm:text-4xl">{name}</h1>
              <Badge variant="muted" className="mt-4 self-start">
                {material}
              </Badge>
              <p className="mt-6 text-lg leading-relaxed text-steel-600">{summary}</p>
              <div className="mt-auto pt-10">
                <Link
                  href={localeHref(l, "/contact")}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  {t.detail.enquiry.button}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specifications */}
      <Section spacing="lg" className="bg-surface-muted">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            {t.detail.specs}
          </h2>
          <div className="mt-6 max-w-2xl border border-border bg-surface">
            <dl>
              {specs.map((s) => (
                <div
                  key={s.name}
                  className="flex items-baseline justify-between gap-6 border-b border-border px-5 py-3.5 last:border-b-0"
                >
                  <dt className="text-sm text-steel-600">{s.name}</dt>
                  <dd className="text-end text-sm font-medium text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section spacing="lg">
          <Container>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl  uppercase tracking-tight sm:text-3xl">{t.detail.related}</h2>
              <Link
                href={localeHref(l, categoryPath)}
                className={buttonVariants({ variant: "link", className: "whitespace-nowrap" })}
              >
                {t.detail.viewAll}
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} locale={l} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Enquiry CTA */}
      <Section spacing="lg" className="bg-navy-900">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl  uppercase tracking-tight text-white sm:text-3xl">
                {t.detail.enquiry.title}
              </h2>
              <p className="mt-3 text-steel-300">{t.detail.enquiry.subtitle}</p>
            </div>
            <Link
              href={localeHref(l, "/contact")}
              className={buttonVariants({
                variant: "accent",
                size: "lg",
                className: "whitespace-nowrap",
              })}
            >
              {t.detail.enquiry.button}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
