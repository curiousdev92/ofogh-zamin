"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "@/components/ui";
import { LanguageSwitcher } from "@/lib/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";

type NavItem = { href: string; label: string };

/**
 * Mobile-only (md:hidden) disclosure nav: a hamburger that toggles a full-width
 * panel dropping from the header. Header must be position:relative for the panel.
 */
export function MobileMenu({
  items,
  cta,
  currentLocale,
  languageLabel,
}: {
  items: NavItem[];
  cta: NavItem;
  currentLocale: Locale;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center text-navy-900 hover:bg-steel-100"
      >
        <span className="relative block h-4 w-5" aria-hidden>
          <span
            className={cn(
              "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-md"
        >
          <nav className="flex flex-col divide-y divide-border" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-sm font-medium uppercase tracking-wide text-navy-900 hover:bg-steel-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4 border-t border-border p-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {languageLabel}
              </span>
              <LanguageSwitcher currentLocale={currentLocale} align="start" />
            </div>
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: "accent", size: "sm" })}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
