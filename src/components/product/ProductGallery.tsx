"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Interactive product gallery: a primary image with a thumbnail strip.
 * All images render as real <img> tags up front (via Next/Image) — only the
 * *primary* slot's active image swaps client-side, so nothing is hidden from
 * crawlers; see the SEO note in the product page.
 */
export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex relative aspect-4/3 overflow-hidden border border-border bg-surface-muted">
        <Image
          src={images[active]}
          alt={alt}
          // fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="max-h-full object-contain"
          priority
          width={1200}
          height={900}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${alt} — ${i + 1}`}
              aria-current={i === active}
              className={`relative aspect-square overflow-hidden border bg-surface-muted transition-colors ${
                i === active
                  ? "border-gold-700"
                  : "border-border hover:border-steel-400"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
