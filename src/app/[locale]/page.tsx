import type { Metadata } from "next";
import Link from "next/link";

import { Badge, buttonVariants, Container, Section } from "@/components/ui";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { CommonMessages } from "@/lib/i18n/messages";
import { buildLocalizedMetadata } from "@/lib/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = (await getDictionary(locale as Locale, "common")) as unknown as CommonMessages;
  return buildLocalizedMetadata({
    locale: locale as Locale,
    pathname: "/",
    title: `${t.brand.name} — ${t.brand.tagline}`,
    description: t.footer.description,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = (await getDictionary(l, "common")) as unknown as CommonMessages;

  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="outline">{t.brand.name}</Badge>
          <h1 className="mt-6 text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            {t.brand.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-600">
            {t.footer.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={localeHref(l, "/products")}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              {t.actions.viewProducts}
            </Link>
            <Link
              href={localeHref(l, "/contact")}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t.actions.getQuote}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
