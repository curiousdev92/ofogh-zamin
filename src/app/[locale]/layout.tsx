import "../globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { Locale, localeConfig, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { CommonMessages } from "@/lib/i18n/messages";
import { organizationJsonLd, websiteJsonLd } from "@/lib/i18n/seo";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KalamehFont from "../../../public/fonts";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = (await getDictionary(locale as Locale, "common")) as unknown as CommonMessages;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} — ${t.brand.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: t.footer.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  const config = localeConfig[locale];
  const messages = (await getDictionary(locale, "common")) as unknown as CommonMessages;

  return (
    <html lang={config.hreflang} dir={config.dir} className={KalamehFont.variable}>
      <body className={`flex min-h-dvh flex-col ${locale}`}>
        {/* Global structured data — brand identity + site, on every page. */}
        <JsonLd
          data={[
            organizationJsonLd(messages.footer.description),
            websiteJsonLd(locale, messages.footer.description),
          ]}
        />
        <Header locale={locale} messages={messages} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} messages={messages} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
