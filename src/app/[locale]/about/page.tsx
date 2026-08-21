import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonVariants, Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { AboutMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata } from "@/lib/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

async function loadCopy(l: Locale) {
  return (await getDictionary(l, "about")) as unknown as AboutMessages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await loadCopy(l);
  return buildLocalizedMetadata({
    locale: l,
    pathname: "/about",
    title: t.meta.title,
    description: t.meta.description,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await loadCopy(l);

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.about, pathname: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[{ label: t.breadcrumb.home, pathname: "/" }, { label: t.breadcrumb.about }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{t.hero.subtitle}</p>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              {t.story.title}
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-steel-700">
              {t.story.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg" className="bg-surface-muted">
        <Container>
          <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            {t.values.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((item, i) => (
              <div key={i} className="border border-border bg-surface p-6">
                <div className="mb-4 h-8 w-8 border border-border-strong bg-navy-900 text-center text-lg font-bold leading-8 text-gold-400">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA band */}
      <Section spacing="lg" className="bg-navy-900">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                {t.cta.title}
              </h2>
              <p className="mt-3 text-steel-300">{t.cta.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={localeHref(l, "/products")}
                className={buttonVariants({ variant: "accent", size: "lg", className: "whitespace-nowrap" })}
              >
                {t.cta.primary}
              </Link>
              <Link
                href={localeHref(l, "/contact")}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "whitespace-nowrap border-white text-white hover:bg-white hover:text-navy-900",
                })}
              >
                {t.cta.secondary}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
