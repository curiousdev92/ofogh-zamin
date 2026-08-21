import Link from "next/link";

import { Card } from "@/components/ui";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import { countProductsInCategory, localize, type Category } from "@/lib/products";
import { PlaceholderTile } from "./PlaceholderTile";

/**
 * Links to a category landing page. Used on the home page and the products
 * landing. The whole card is the link; the border reacts on hover/focus.
 */
export function CategoryCard({
  category,
  locale,
  productsLabel,
}: {
  category: Category;
  locale: Locale;
  productsLabel: string;
}) {
  const name = localize(category.name, locale);
  const tagline = localize(category.tagline, locale);
  const count = countProductsInCategory(category.slug);
  const href = localeHref(locale, `/products/${category.slug}`);

  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card interactive className="flex h-full flex-col group-focus-visible:border-navy-900">
        <PlaceholderTile initial={name.charAt(0)} />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <span className="shrink-0 text-xs text-muted-foreground">
              {count} {productsLabel}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-steel-600">{tagline}</p>
        </div>
      </Card>
    </Link>
  );
}
