import localFont from "next/font/local";

// Kalameh — single local Persian/Latin typeface used across every locale.
// Exposes a CSS variable (--font-kalameh) that globals.css maps onto --font-active,
// so `font-sans` / `font-display` resolve to it everywhere.
const KalamehFont = localFont({
  src: [
    { path: "./KalamehWeb-Thin.woff2", weight: "100" },
    { path: "./KalamehWeb-Regular.woff2", weight: "400" },
    { path: "./KalamehWeb-Bold.woff2", weight: "700" },
    { path: "./KalamehWeb-Black.woff2", weight: "900" },
  ],
  variable: "--font-kalameh",
  display: "swap",
});

export default KalamehFont;
