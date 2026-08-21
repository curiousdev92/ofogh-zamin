import { notFound } from "next/navigation";

// Google Fonts — only the subset needed per locale is loaded
import { Locale, localeConfig, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { generateHreflangTags } from "@/lib/i18n/seo";
import { Analytics } from "@vercel/analytics/next";
import { Cairo, Inter, Vazirmatn } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const vazirmatn = Vazirmatn({ variable: "--font-fa" });
const cairo = Cairo({ variable: "--font-ar" });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale as Locale;

  // Guard against invalid locale segments (e.g. /xyz/page)
  if (!locales.includes(locale)) notFound();

  const config = localeConfig[locale];
  const common = await getDictionary(locale, "common");

  return (
    <html
      lang={config.hreflang} // e.g. "fa", "ar", "en"
      dir={config.dir} // "rtl" for fa and ar
      className={`${inter.variable} ${vazirmatn.variable} ${cairo.variable}`}
    >
      <head>
        {/* hreflang tells Google about all locale variants of this page */}
        {generateHreflangTags("/").map((tag) => (
          <link key={tag.hreflang} rel="alternate" hrefLang={tag.hreflang} href={tag.href} />
        ))}
      </head>
      <body style={{ fontFamily: config.fontFamily }}>{children}</body>

      <Analytics />
    </html>
  );
}
