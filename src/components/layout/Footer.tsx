import Link from "next/link";
import { Container } from "@/components/ui";
import { localeHref } from "@/lib/i18n/href";
import { SITE } from "@/lib/site";
import { localizeDigits } from "@/lib/utils/digits";
import type { Locale } from "@/lib/i18n/config";
import type { CommonMessages } from "@/lib/i18n/messages";
import { Logo } from "./Logo";

export function Footer({ locale, messages }: { locale: Locale; messages: CommonMessages }) {
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: localeHref(locale, "/about"), label: messages.nav.about },
    { href: localeHref(locale, "/blog"), label: messages.nav.blog },
    { href: localeHref(locale, "/contact"), label: messages.nav.contact },
  ];

  const phoneLines = [...SITE.phones.landline, ...SITE.phones.mobile];
  const { whatsapp } = SITE.phones;

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-steel-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo name={messages.brand.name} tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-400">
              {messages.footer.description}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">
              {messages.footer.headings.company}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-steel-300 transition-colors hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">
              {messages.footer.headings.contact}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  dir="ltr"
                  className="text-steel-300 transition-colors hover:text-gold-400"
                >
                  {SITE.email}
                </a>
              </li>
              {phoneLines.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    dir="ltr"
                    className="inline-block text-steel-300 transition-colors hover:text-gold-400"
                  >
                    {localizeDigits(p.display, locale)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-300 transition-colors hover:text-gold-400"
                >
                  {messages.footer.whatsapp}:{" "}
                  <span dir="ltr">{localizeDigits(whatsapp.display, locale)}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-800 pt-6 text-xs text-steel-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {messages.brand.name}. {messages.footer.rights}
          </p>
          <p className="uppercase tracking-widest">{messages.brand.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
