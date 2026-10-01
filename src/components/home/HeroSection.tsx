import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Container } from "@/components/ui";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import type { HomeMessages } from "@/lib/i18n/messages";

import heroImage from "@/../public/images/hero.png";

type Props = {
  locale: Locale;
  copy: HomeMessages["hero"];
};

export function HeroSection({ locale, copy }: Props) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate flex min-h-[90svh] items-end overflow-hidden md:min-h-[82svh]"
    >
      {/* ── Background photo ─────────────────────────────── */}
      <Image
        src={heroImage}
        alt="Ofogh Zamin factory exterior"
        fill
        priority
        quality={90}
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ── Gradient overlay — deep navy from bottom-start, fades toward top-end ── */}
      {/* ltr: gradient goes left→right  |  rtl: mirrored automatically via logical */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-900 via-transparent"
      />

      {/* ── Content ──────────────────────────────────────── */}
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-2xl p-4 ps-11 backdrop-blur-md">
          {/* Headline */}
          <h1 className="mt-6 text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-200 sm:text-lg">
            {copy.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={localeHref(locale, "/products")}
              className={buttonVariants({
                variant: "accent",
                size: "lg",
                className: "border border-navy-900 shadow-lg",
              })}
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={localeHref(locale, "/contact")}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-white/70 text-white hover:bg-white hover:text-navy-900",
              })}
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
