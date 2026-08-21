import localFont from "next/font/local";

const KalamehFont = localFont({
  src: [
    { path: "./KalamehWeb-Thin.woff2", weight: "100" },
    { path: "./KalamehWeb-Regular.woff2", weight: "400" },
    { path: "./KalamehWeb-Bold.woff2", weight: "700" },
    { path: "./KalamehWeb-Black.woff2", weight: "900" },
  ],
});

export default KalamehFont;
