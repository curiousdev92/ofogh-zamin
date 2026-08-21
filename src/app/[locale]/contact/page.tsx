import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { ContactMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata } from "@/lib/i18n/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

async function loadCopy(l: Locale) {
  return (await getDictionary(l, "contact")) as unknown as ContactMessages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await loadCopy(l);
  return buildLocalizedMetadata({
    locale: l,
    pathname: "/contact",
    title: t.meta.title,
    description: t.meta.description,
  });
}

/** A single contact detail row: quiet label + LTR-locked value. */
function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-foreground">{children}</dd>
    </div>
  );
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await loadCopy(l);

  const telHref = `tel:${SITE.phone.replace(/\s+/g, "")}`;

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.contact, pathname: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[{ label: t.breadcrumb.home, pathname: "/" }, { label: t.breadcrumb.contact }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-2 text-4xl uppercase tracking-tight sm:text-5xl">{t.hero.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{t.hero.subtitle}</p>
          </div>
        </Container>
      </Section>

      {/* Details + form */}
      <Section spacing="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold uppercase tracking-tight">{t.details.title}</h2>
              <dl className="mt-6 divide-y divide-border border-y border-border">
                <DetailRow label={t.details.emailLabel}>
                  <a
                    href={`mailto:${SITE.email}`}
                    dir="ltr"
                    className="inline-block break-all hover:text-gold-700"
                  >
                    {SITE.email}
                  </a>
                </DetailRow>
                <DetailRow label={t.details.phoneLabel}>
                  <a href={telHref} dir="ltr" className="inline-block hover:text-gold-700">
                    {SITE.phone}
                  </a>
                </DetailRow>
                <DetailRow label={t.details.hoursLabel}>{t.details.hours}</DetailRow>
              </dl>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold uppercase tracking-tight">{t.form.title}</h2>
              <div className="mt-6">
                <ContactForm labels={t.form} errors={t.validation} success={t.success} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
