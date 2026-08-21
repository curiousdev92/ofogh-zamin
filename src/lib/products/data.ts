// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER CATALOGUE DATA
//
// Representative brass-fittings content so the site renders end-to-end. Structure
// is final; the actual product list/copy is supplied by the client later (≤300
// products). To swap in real data, edit only this file — types & query helpers
// (./types, ./index) stay the same, and pages regenerate statically.
// ─────────────────────────────────────────────────────────────────────────────

import type { Category, LocalizedText, Product } from "./types";

// Shared spec labels — referenced by products so translations live in one place.
const L = {
  material: { en: "Material", fa: "جنس", ar: "المادة" },
  size: { en: "Size", fa: "سایز", ar: "المقاس" },
  thread: { en: "Thread", fa: "نوع دنده", ar: "نوع اللولب" },
  connection: { en: "Connection", fa: "نوع اتصال", ar: "نوع الوصلة" },
  pressure: { en: "Pressure rating", fa: "فشار کاری", ar: "ضغط التشغيل" },
  temperature: { en: "Temperature range", fa: "محدوده دما", ar: "نطاق الحرارة" },
  standard: { en: "Standard", fa: "استاندارد", ar: "المعيار" },
  finish: { en: "Finish", fa: "پرداخت سطح", ar: "التشطيب" },
} satisfies Record<string, LocalizedText>;

// Common material value, reused across most products.
const BRASS: LocalizedText = { en: "CW617N brass", fa: "برنج CW617N", ar: "نحاس CW617N" };

export const categories: Category[] = [
  {
    slug: "compression-fittings",
    featured: true,
    name: { en: "Compression Fittings", fa: "اتصالات فشاری", ar: "وصلات الضغط" },
    tagline: {
      en: "Tool-free, leak-tight joints for copper and plastic pipe.",
      fa: "اتصال بدون ابزار و آب‌بند برای لوله‌های مسی و پلاستیکی.",
      ar: "وصلات محكمة بلا أدوات لأنابيب النحاس والبلاستيك.",
    },
    description: {
      en: "Brass compression couplings, elbows and tees that seal on an olive ring — no soldering, no threads to seal. Ideal for water and low-pressure fluid systems.",
      fa: "بوشن، زانویی و سه‌راهی برنجی فشاری که با رینگ زیتونی آب‌بندی می‌شوند؛ بدون لحیم‌کاری و بدون نیاز به آب‌بندی دنده. مناسب برای سیستم‌های آب و سیالات کم‌فشار.",
      ar: "وصلات وأكواع ووصلات تي نحاسية تعمل بالضغط عبر حلقة زيتونية — دون لحام أو حاجة لإحكام اللولب. مثالية لأنظمة المياه والسوائل منخفضة الضغط.",
    },
  },
  {
    slug: "threaded-fittings",
    featured: true,
    name: { en: "Threaded Fittings", fa: "اتصالات دنده‌ای", ar: "وصلات ملولبة" },
    tagline: {
      en: "BSP & NPT nipples, bushes and elbows machined to spec.",
      fa: "نیپل، تبدیل و زانوی دنده‌ای BSP و NPT، ماشین‌کاری‌شده مطابق استاندارد.",
      ar: "نبل وجلب وأكواع ملولبة BSP و NPT مُصنّعة حسب المواصفات.",
    },
    description: {
      en: "Precision brass threaded fittings in BSP and NPT, cut to tight tolerances for reliable pipework and equipment connections.",
      fa: "اتصالات دنده‌ای برنجی دقیق در استاندارد BSP و NPT، با تلورانس پایین برای اتصال مطمئن لوله‌کشی و تجهیزات.",
      ar: "وصلات نحاسية ملولبة دقيقة بمعايير BSP و NPT، مقطوعة بتفاوتات ضيقة لتوصيل موثوق للأنابيب والمعدات.",
    },
  },
  {
    slug: "ball-valves",
    featured: true,
    name: { en: "Ball Valves", fa: "شیرهای توپی", ar: "الصمامات الكروية" },
    tagline: {
      en: "Full-bore brass valves for quarter-turn shut-off.",
      fa: "شیر توپی برنجی تمام‌گذر برای قطع جریان با چرخش ربع‌دور.",
      ar: "صمامات كروية نحاسية كاملة الفتحة للإغلاق بربع لفة.",
    },
    description: {
      en: "Lever-operated brass ball valves with a chrome-plated ball and PTFE seats — smooth quarter-turn operation and dependable isolation for water and gas lines.",
      fa: "شیر توپی برنجی اهرمی با توپ آبکاری‌کروم و نشیمن PTFE؛ عملکرد نرم ربع‌دور و قطع مطمئن جریان برای خطوط آب و گاز.",
      ar: "صمامات كروية نحاسية بذراع مع كرة مطلية بالكروم ومقاعد PTFE — تشغيل سلس بربع لفة وعزل موثوق لخطوط المياه والغاز.",
    },
  },
  {
    slug: "push-fit-fittings",
    featured: true,
    name: { en: "Push-Fit Fittings", fa: "اتصالات سریع", ar: "وصلات الدفع السريع" },
    tagline: {
      en: "Push-to-connect brass fittings — connect in seconds.",
      fa: "اتصالات برنجی جفت‌شونده؛ اتصال در چند ثانیه.",
      ar: "وصلات نحاسية بالدفع — توصيل في ثوانٍ.",
    },
    description: {
      en: "Demountable push-fit brass connectors with a stainless grab ring and O-ring seal for fast, repeatable joints on copper, PEX and PB pipe.",
      fa: "رابط‌های برنجی جفت‌شونده و قابل‌بازکردن با گیره فولادی و آب‌بند O-ring برای اتصال سریع و تکرارپذیر روی لوله‌های مسی، PEX و PB.",
      ar: "موصلات نحاسية بالدفع قابلة للفك مع حلقة إمساك من الستانلس وحلقة O للإحكام، لوصلات سريعة وقابلة للتكرار على أنابيب النحاس و PEX و PB.",
    },
  },
  {
    slug: "gas-fittings",
    name: { en: "Gas Fittings", fa: "اتصالات گاز", ar: "وصلات الغاز" },
    tagline: {
      en: "Brass cocks and unions rated for gas service.",
      fa: "شیر و مهره‌ماسوره برنجی مناسب سرویس گاز.",
      ar: "صنابير واتحادات نحاسية معتمدة لخدمة الغاز.",
    },
    description: {
      en: "Brass gas cocks and unions built for domestic and commercial gas installations, with secure sealing faces and clear on/off indication.",
      fa: "شیر و مهره‌ماسوره گاز برنجی برای تأسیسات گاز خانگی و تجاری، با سطوح آب‌بندی مطمئن و نشانگر روشن/خاموش واضح.",
      ar: "صنابير واتحادات غاز نحاسية للتركيبات المنزلية والتجارية، بأسطح إحكام آمنة ومؤشر تشغيل/إيقاف واضح.",
    },
  },
  {
    slug: "hose-barb-fittings",
    name: { en: "Hose & Barb Fittings", fa: "اتصالات شلنگی", ar: "وصلات الخراطيم" },
    tagline: {
      en: "Barbed brass tails and tees to grip flexible hose.",
      fa: "سرشلنگی و سه‌راهی برنجی خاردار برای مهار شلنگ انعطاف‌پذیر.",
      ar: "أذيال ووصلات تي نحاسية مسننة لتثبيت الخراطيم المرنة.",
    },
    description: {
      en: "Brass hose tails and barbed tees with a ribbed shank that grips flexible hose under a clamp — for air, water and irrigation lines.",
      fa: "سرشلنگی و سه‌راهی خاردار برنجی با ساقهٔ آج‌دار که شلنگ را زیر بست مهار می‌کند؛ برای خطوط هوا، آب و آبیاری.",
      ar: "أذيال خراطيم ووصلات تي مسننة نحاسية بساق مضلعة تمسك الخرطوم المرن تحت المشبك — لخطوط الهواء والمياه والري.",
    },
  },
];

export const products: Product[] = [
  // ── Compression fittings ────────────────────────────────────────────────
  {
    slug: "straight-coupling",
    categorySlug: "compression-fittings",
    featured: true,
    name: {
      en: "Straight Compression Coupling",
      fa: "بوشن فشاری مستقیم",
      ar: "وصلة ضغط مستقيمة",
    },
    summary: {
      en: "Joins two equal pipes in a straight run with a tool-free olive seal.",
      fa: "اتصال دو لولهٔ هم‌قطر در مسیر مستقیم با آب‌بند زیتونی و بدون ابزار.",
      ar: "توصل أنبوبين متساويين في خط مستقيم بإحكام زيتوني بلا أدوات.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '15 mm · 1/2"' },
      { label: L.connection, value: "Compression × Compression" },
      { label: L.pressure, value: "16 bar" },
      { label: L.temperature, value: "-20…120 °C" },
    ],
  },
  {
    slug: "elbow-90",
    categorySlug: "compression-fittings",
    featured: true,
    name: { en: "90° Compression Elbow", fa: "زانویی فشاری ۹۰ درجه", ar: "كوع ضغط 90°" },
    summary: {
      en: "Turns a pipe run through a right angle without soldering.",
      fa: "تغییر مسیر لوله با زاویهٔ قائم، بدون لحیم‌کاری.",
      ar: "يحوّل مسار الأنبوب بزاوية قائمة دون لحام.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '22 mm · 3/4"' },
      { label: L.connection, value: "Compression × Compression" },
      { label: L.pressure, value: "16 bar" },
      { label: L.temperature, value: "-20…120 °C" },
    ],
  },
  {
    slug: "equal-tee",
    categorySlug: "compression-fittings",
    name: { en: "Equal Compression Tee", fa: "سه‌راهی فشاری مساوی", ar: "وصلة تي ضغط متساوية" },
    summary: {
      en: "Branches a run into three equal outlets on one fitting.",
      fa: "انشعاب یک مسیر به سه خروجی هم‌قطر در یک اتصال.",
      ar: "تفرّع الخط إلى ثلاثة مخارج متساوية في وصلة واحدة.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '15 mm · 1/2"' },
      { label: L.connection, value: "Compression (3-way)" },
      { label: L.pressure, value: "16 bar" },
    ],
  },
  // ── Threaded fittings ───────────────────────────────────────────────────
  {
    slug: "hex-nipple",
    categorySlug: "threaded-fittings",
    featured: true,
    name: { en: "Hex Nipple, BSP", fa: "نیپل شش‌گوش BSP", ar: "نبل سداسي BSP" },
    summary: {
      en: "Male-to-male connector with a central hex for wrench tightening.",
      fa: "رابط نر به نر با شش‌گوش میانی برای بستن با آچار.",
      ar: "موصل ذكري إلى ذكري بسداسي مركزي للربط بالمفتاح.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.thread, value: 'BSP 1/2" × 1/2"' },
      { label: L.connection, value: "Male × Male" },
      { label: L.pressure, value: "20 bar" },
      { label: L.standard, value: "ISO 228" },
    ],
  },
  {
    slug: "reducing-bush",
    categorySlug: "threaded-fittings",
    name: { en: "Reducing Bush", fa: "تبدیل دنده‌ای", ar: "جلبة تخفيض" },
    summary: {
      en: "Steps a larger female thread down to a smaller male thread.",
      fa: "تبدیل دندهٔ مادگی بزرگ‌تر به دندهٔ نری کوچک‌تر.",
      ar: "يخفّض لولبًا أنثويًا أكبر إلى لولب ذكري أصغر.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.thread, value: 'BSP 3/4" → 1/2"' },
      { label: L.connection, value: "Male × Female" },
      { label: L.standard, value: "ISO 228" },
    ],
  },
  {
    slug: "male-elbow",
    categorySlug: "threaded-fittings",
    name: { en: "Male Threaded Elbow", fa: "زانو دنده‌ای نر", ar: "كوع ملولب ذكري" },
    summary: {
      en: "90° change of direction between a male and a female thread.",
      fa: "تغییر مسیر ۹۰ درجه بین دندهٔ نر و مادگی.",
      ar: "تغيير اتجاه بزاوية 90° بين لولب ذكري وأنثوي.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.thread, value: 'BSP 1/2"' },
      { label: L.connection, value: "Male × Female" },
      { label: L.pressure, value: "20 bar" },
    ],
  },
  // ── Ball valves ─────────────────────────────────────────────────────────
  {
    slug: "full-bore-valve",
    categorySlug: "ball-valves",
    featured: true,
    name: { en: "Full-Bore Ball Valve", fa: "شیر توپی تمام‌گذر", ar: "صمام كروي كامل الفتحة" },
    summary: {
      en: "Unrestricted bore for maximum flow; lever shut-off in a quarter turn.",
      fa: "مجرای کامل برای حداکثر دبی؛ قطع جریان اهرمی با ربع‌دور.",
      ar: "فتحة كاملة لأقصى تدفق؛ إغلاق بالذراع بربع لفة.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N, chrome-plated ball" },
      { label: L.size, value: '1/2" – 2"' },
      { label: L.thread, value: "BSP female × female" },
      { label: L.pressure, value: "PN25" },
      { label: L.temperature, value: "-20…150 °C" },
    ],
  },
  {
    slug: "mini-ball-valve",
    categorySlug: "ball-valves",
    name: { en: "Mini Ball Valve", fa: "شیر توپی مینی", ar: "صمام كروي مصغّر" },
    summary: {
      en: "Compact isolation valve for gauges, drops and tight spaces.",
      fa: "شیر قطع فشرده برای گیج‌ها، انشعاب‌ها و فضاهای محدود.",
      ar: "صمام عزل مدمج للمقاييس والتفرعات والأماكن الضيقة.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '1/4" – 1/2"' },
      { label: L.pressure, value: "PN16" },
    ],
  },
  {
    slug: "lockable-ball-valve",
    categorySlug: "ball-valves",
    name: { en: "Lockable Ball Valve", fa: "شیر توپی قفل‌شونده", ar: "صمام كروي قابل للقفل" },
    summary: {
      en: "Padlockable lever holds the valve open or closed for safe isolation.",
      fa: "اهرم قابل‌قفل که شیر را باز یا بسته نگه می‌دارد؛ برای قطع ایمن.",
      ar: "ذراع قابل للقفل يبقي الصمام مفتوحًا أو مغلقًا لعزل آمن.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '1/2" – 1"' },
      { label: L.thread, value: "BSP female × female" },
      { label: L.pressure, value: "PN25" },
    ],
  },
  // ── Push-fit fittings ───────────────────────────────────────────────────
  {
    slug: "push-straight-connector",
    categorySlug: "push-fit-fittings",
    featured: true,
    name: { en: "Push-Fit Straight Connector", fa: "رابط سریع مستقیم", ar: "وصلة دفع مستقيمة" },
    summary: {
      en: "Push the pipe home for an instant, demountable seal — no tools.",
      fa: "لوله را جا بزنید تا آب‌بندی فوری و قابل‌بازکردن ایجاد شود؛ بدون ابزار.",
      ar: "ادفع الأنبوب حتى يستقر لإحكام فوري قابل للفك — دون أدوات.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N, stainless grab ring" },
      { label: L.size, value: "15 mm · 22 mm" },
      { label: L.connection, value: "Push-fit × Push-fit" },
      { label: L.pressure, value: "10 bar" },
      { label: L.temperature, value: "0…70 °C" },
    ],
  },
  {
    slug: "push-elbow",
    categorySlug: "push-fit-fittings",
    name: { en: "Push-Fit Elbow", fa: "زانو سریع", ar: "كوع دفع سريع" },
    summary: {
      en: "Right-angle push-fit turn for copper, PEX and PB pipe.",
      fa: "تغییر مسیر قائم جفت‌شونده برای لولهٔ مسی، PEX و PB.",
      ar: "كوع بالدفع بزاوية قائمة لأنابيب النحاس و PEX و PB.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: "15 mm" },
      { label: L.connection, value: "Push-fit × Push-fit" },
      { label: L.pressure, value: "10 bar" },
    ],
  },
  // ── Gas fittings ────────────────────────────────────────────────────────
  {
    slug: "gas-cock",
    categorySlug: "gas-fittings",
    featured: true,
    name: { en: "Brass Gas Cock", fa: "شیر گاز برنجی", ar: "صنبور غاز نحاسي" },
    summary: {
      en: "Lever gas isolation cock with clear open/closed indication.",
      fa: "شیر قطع گاز اهرمی با نشانگر واضح باز/بسته.",
      ar: "صنبور عزل غاز بذراع مع مؤشر واضح للفتح/الإغلاق.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '1/2" – 1"' },
      { label: L.thread, value: "BSP" },
      { label: L.standard, value: "EN 331" },
    ],
  },
  {
    slug: "gas-union",
    categorySlug: "gas-fittings",
    name: { en: "Gas Union", fa: "مهره‌ماسوره گاز", ar: "اتحاد الغاز" },
    summary: {
      en: "Demountable union joint for servicing gas appliances.",
      fa: "اتصال مهره‌ماسورهٔ قابل‌بازکردن برای سرویس لوازم گازسوز.",
      ar: "وصلة اتحاد قابلة للفك لصيانة أجهزة الغاز.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: '3/4"' },
      { label: L.thread, value: "BSP female × female" },
      { label: L.standard, value: "EN 331" },
    ],
  },
  // ── Hose & barb fittings ────────────────────────────────────────────────
  {
    slug: "hose-tail",
    categorySlug: "hose-barb-fittings",
    name: { en: "Brass Hose Tail", fa: "سرشلنگی برنجی", ar: "ذيل خرطوم نحاسي" },
    summary: {
      en: "Ribbed barb on a male thread grips flexible hose under a clip.",
      fa: "خار آج‌دار روی دندهٔ نری که شلنگ را زیر بست مهار می‌کند.",
      ar: "سن مضلع على لولب ذكري يمسك الخرطوم المرن تحت مشبك.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.thread, value: 'BSP 1/2"' },
      { label: L.size, value: "12 mm barb" },
      { label: L.connection, value: "Male thread × barb" },
    ],
  },
  {
    slug: "barbed-tee",
    categorySlug: "hose-barb-fittings",
    name: { en: "Barbed Hose Tee", fa: "سه‌راهی شلنگی خاردار", ar: "وصلة تي خرطوم مسننة" },
    summary: {
      en: "Three-way barbed junction for splitting flexible hose lines.",
      fa: "اتصال سه‌راههٔ خاردار برای تقسیم خطوط شلنگ انعطاف‌پذیر.",
      ar: "وصلة ثلاثية مسننة لتقسيم خطوط الخراطيم المرنة.",
    },
    material: BRASS,
    specs: [
      { label: L.material, value: "CW617N" },
      { label: L.size, value: "10 mm barb" },
      { label: L.connection, value: "Barb (3-way)" },
    ],
  },
];
