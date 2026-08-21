import LogoImage from "@/../public/images/icon.svg";
import { buttonVariants, Container } from "@/components/ui";
import { LanguageSwitcher } from "@/lib/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import type { CommonMessages } from "@/lib/i18n/messages";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function Header({ locale, messages }: { locale: Locale; messages: CommonMessages }) {
  const nav = [
    { href: localeHref(locale), label: messages.nav.home },
    { href: localeHref(locale, "/products"), label: messages.nav.products },
    { href: localeHref(locale, "/about"), label: messages.nav.about },
    { href: localeHref(locale, "/blog"), label: messages.nav.blog },
    { href: localeHref(locale, "/contact"), label: messages.nav.contact },
  ];
  const cta = { href: localeHref(locale, "/contact"), label: messages.actions.getQuote };

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-lg bg-linear-to-b from-gold-100 to-background/25">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href={localeHref(locale)} aria-label={messages.brand.name}>
          {/* <Logo name={messages.brand.name} /> */}
          <Image
            src={LogoImage}
            alt="logo"
            className="bg-accent-foreground rounded-full shadow-2xl"
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-navy-900 transition-colors hover:text-gold-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <span aria-hidden className="h-5 w-px bg-border" />
          <Link
            href={cta.href}
            className={buttonVariants({
              variant: "accent",
              size: "sm",
              // Navy keyline: defines the button's edge against the pale-gold
              // gradient top (WCAG 1.4.11 — gold-on-gold is only 1.39:1 otherwise).
              className: "border border-navy-900",
            })}
          >
            {cta.label}
          </Link>
        </div>

        {/* Mobile */}
        <MobileMenu
          items={nav}
          cta={cta}
          currentLocale={locale}
          languageLabel={messages.footer.language}
        />
      </Container>
    </header>
  );
}
