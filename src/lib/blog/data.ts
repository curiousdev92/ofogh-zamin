// ─────────────────────────────────────────────────────────────────────────────
// BLOG CONTENT
//
// No articles yet — the client is producing content. Until the first post lands
// here, /blog shows a "coming soon" state and /blog/[slug] generates no pages.
// To publish, add a Post to this array (see the commented example for the shape);
// the index switches to a listing and the post page generates automatically.
// ─────────────────────────────────────────────────────────────────────────────

import type { Post } from "./types";

export const posts: Post[] = [
  // {
  //   slug: "choosing-compression-fittings",
  //   date: "2026-01-15",
  //   title: {
  //     en: "Choosing the right compression fitting",
  //     fa: "انتخاب اتصال فشاری مناسب",
  //     ar: "اختيار وصلة الضغط المناسبة",
  //   },
  //   excerpt: {
  //     en: "A practical guide to sizes, olives and pressure ratings.",
  //     fa: "راهنمای کاربردی سایزها، رینگ‌ها و فشار کاری.",
  //     ar: "دليل عملي للمقاسات والحلقات وضغط التشغيل.",
  //   },
  //   body: [
  //     { en: "First paragraph…", fa: "پاراگراف اول…", ar: "الفقرة الأولى…" },
  //   ],
  // },
];
