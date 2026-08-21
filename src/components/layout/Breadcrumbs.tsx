import Link from "next/link";
import { Fragment } from "react";

import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export type Crumb = {
  label: string;
  /** Omit on the current (last) crumb — it renders as plain text, not a link. */
  pathname?: string;
};

/**
 * Squared, industrial breadcrumb trail. The last crumb is the current page and
 * is not linked. The `/` separator reads correctly in both LTR and RTL because
 * it sits in normal inline flow, which the `dir` attribute already mirrors.
 */
export function Breadcrumbs({
  locale,
  items,
  className,
}: {
  locale: Locale;
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {item.pathname && !isLast ? (
                  <Link
                    href={localeHref(locale, item.pathname)}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isLast ? "text-foreground" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden className="text-steel-300">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
