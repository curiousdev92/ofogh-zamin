import { locales } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";
import { ImageResponse } from "next/og";

// File-based OpenGraph image for the whole site (applies to this segment and all
// nested routes). Next injects it into each page's metadata automatically — no
// reference needed in buildLocalizedMetadata().
//
// Rendered with next/og's built-in font, so the card is intentionally Latin-only
// (the "Ofogh Zamin" wordmark is Latin in every locale — DESIGN.md §12/#3). Swap
// for a designed asset, or extend to a per-page dynamic card, later.

export const alt = "Ofogh Zamin — Brass Fittings & Precision Parts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Prerender one card per locale at build time so the OG image is a static CDN
// asset (no on-demand serverless render). Only the three known locales exist.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

const NAVY = "#0d1a2b";
const GOLD = "#c2941f";
const STEEL = "#94a3b8";

export default function OpengraphImage() {
  const domain = SITE.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          padding: 80,
        }}
      >
        {/* Industrial accent — a squared gold mark, top-start. */}
        <div style={{ display: "flex" }}>
          <div style={{ width: 56, height: 56, backgroundColor: GOLD }} />
        </div>

        {/* Wordmark + rule + tagline. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: GOLD,
              letterSpacing: 6,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Ofogh Zamin
          </div>
          <div
            style={{
              display: "flex",
              width: 140,
              height: 6,
              backgroundColor: GOLD,
              marginTop: 36,
              marginBottom: 36,
            }}
          />
          <div
            style={{
              fontSize: 42,
              color: "#e2e8f0",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Brass Fittings & Precision Parts
          </div>
        </div>

        {/* Canonical domain, bottom-start. */}
        <div style={{ display: "flex", fontSize: 30, color: STEEL, letterSpacing: 1 }}>
          {domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
