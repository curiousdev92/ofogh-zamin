"use client";

import { cn } from "@/lib/utils/cn";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Locale, locales } from "./config";

// Display names shown in the menu — always written in the target language.
const localeLabels: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

// Compact codes shown on the trigger (keeps the header tight).
const localeCode: Record<Locale, string> = {
  en: "EN",
  fa: "FA",
  ar: "AR",
};

type Props = {
  currentLocale: Locale;
  // "light" for the dark footer, "dark" (default) for the light header.
  tone?: "dark" | "light";
  // Which edge the menu aligns to. "end" (default) suits a trailing-edge trigger
  // (header); "start" suits a leading-edge trigger (mobile panel). Both are RTL-safe.
  align?: "start" | "end";
  className?: string;
};

/**
 * Language chooser rendered as a compact, squared dropdown (globe icon + locale
 * code + chevron). Keyboard-accessible (arrow keys, Home/End, Escape), closes on
 * outside click, and RTL-safe via logical `end-*` / `text-start`. The menu panel
 * is always a light surface so options stay legible under either tone.
 */
export function LanguageSwitcher({
  currentLocale,
  tone = "dark",
  align = "end",
  className,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function switchLocale(nextLocale: Locale) {
    setOpen(false);
    if (nextLocale === currentLocale) return;

    // Swap the locale segment in place: /fa/blog/x → /ar/blog/x (index 1 is the locale).
    const segments = pathname.split("/");
    segments[1] = nextLocale;

    // Persist the manual choice so the proxy respects it on later visits.
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;

    router.push(segments.join("/"));
  }

  // Close on outside click / Escape (Escape returns focus to the trigger).
  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Move focus to the active option when the menu opens.
  useEffect(() => {
    if (!open) return;
    const items = panelRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]');
    if (!items?.length) return;
    const activeIdx = Math.max(0, locales.indexOf(currentLocale));
    (items[activeIdx] ?? items[0]).focus();
  }, [open, currentLocale]);

  function onPanelKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const items = Array.from(
      panelRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') ?? [],
    );
    if (!items.length) return;
    const idx = items.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(idx + 1) % items.length].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length].focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0].focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1].focus();
    }
  }

  const triggerTone =
    tone === "light"
      ? "border-white/25 text-steel-200 hover:border-white/60 hover:text-white"
      : "border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900/5";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Change language — ${localeLabels[currentLocale]}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={cn(
          "inline-flex h-9 items-center gap-2 border px-3 text-xs font-medium uppercase transition-colors",
          triggerTone,
        )}
      >
        <GlobeIcon />
        <span className="tracking-wide">{localeCode[currentLocale]}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        ref={panelRef}
        role="menu"
        aria-label="Language"
        onKeyDown={onPanelKeyDown}
        className={cn(
          "absolute z-50 mt-1 w-44 border border-border bg-surface shadow-md transition-[opacity,box-shadow,top] duration-300",
          align === "start" ? "start-0" : "end-0",
          open ? "visible opacity-100 top-full" : "invisible opacity-0 top-2/3",
        )}
      >
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <button
              key={locale}
              type="button"
              role="menuitem"
              lang={locale}
              aria-current={isActive ? "true" : undefined}
              onClick={() => switchLocale(locale)}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-sm transition-colors",
                isActive ? "bg-navy-900 text-white" : "text-navy-900 hover:bg-steel-50",
              )}
            >
              <span>{localeLabels[locale]}</span>
              {isActive && <CheckIcon />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---- Inline icons (no icon library in this project) ----------------------- */

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.9 3.9 6 3.9 9s-1.3 6.1-3.9 9c-2.6-2.9-3.9-6-3.9-9s1.3-6.1 3.9-9Z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-3.5 w-3.5 transition-transform duration-150", open && "rotate-180")}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4 text-gold-400"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
