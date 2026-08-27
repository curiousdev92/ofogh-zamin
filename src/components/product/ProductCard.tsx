import Link from "next/link";
import Image from "next/image";

import { Badge, Card } from "@/components/ui";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import { localize, type Product } from "@/lib/products";
import { PlaceholderTile } from "./PlaceholderTile";

/**
 * Links to a single product page. Used on the home page, category pages and
 * "related products". The whole card is the link; the border reacts on hover/focus.
 */
export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const name = localize(product.name, locale);
  const summary = localize(product.summary, locale);
  const material = localize(product.material, locale);
  const href = localeHref(locale, `/products/${product.categorySlug}/${product.slug}`);

  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card interactive className="flex h-full flex-col group-focus-visible:border-navy-900">
        {product.image ? (
          <div className="relative aspect-4/3 overflow-hidden border-b border-border bg-surface-muted">
            <Image
              src={product.image}
              alt={name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <PlaceholderTile initial={name.charAt(0)} />
        )}
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="muted" className="self-start">
            {material}
          </Badge>
          <h3 className="mt-3 text-base font-semibold text-foreground">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel-600">{summary}</p>
        </div>
      </Card>
    </Link>
  );
}
