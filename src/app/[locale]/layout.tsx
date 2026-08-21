import "../globals.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo, Inter, Vazirmatn } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Locale, localeConfig, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { CommonMessages } from "@/lib/i18n/messages";
import { SITE } from "@/lib/site";

// Each script's font is exposed as a CSS variable. globals.css maps --font-active
// off <html lang>, so `font-sans` resolves to the right font with no per-component logic.
const inter = Inter({ subsets: ["latin"], variable: "--font-en", display: "swap" });
const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-fa", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-ar", display: "swap" });
const FONT_VARS = `${inter.variable} ${vazirmatn.variable} ${cairo.variable}`;

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
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const l = locale as Locale;
  const config = localeConfig[l];
  const messages = (await getDictionary(l, "common")) as unknown as CommonMessages;

  return (
    <html lang={config.hreflang} dir={config.dir} className={FONT_VARS}>
      <body className="flex min-h-dvh flex-col">
        <Header locale={l} messages={messages} />
        <main className="flex-1">{children}</main>
        <Footer locale={l} messages={messages} />
        <Analytics />
      </body>
    </html>
  );
}
