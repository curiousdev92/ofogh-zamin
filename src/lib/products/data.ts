import type { Category, Product } from "./types";

const brassFittingsDescriptionFa =
  "فیتینگ‌های برنجی از اتصالات پرکاربرد در نصب و تجهیز انواع مخازن و سیستم‌های انتقال سیالات هستند. این قطعات برای ایجاد یک اتصال رزوه‌ای روی دیواره مخزن استفاده می‌شوند و امکان اتصال انواع شیرآلات، لوله‌ها، شیلنگ‌ها و سایر اتصالات را فراهم می‌کنند.\n\n" +
  "فیتینگ‌های برنجی افق زمین (پرورده) از بدنه رزوه‌دار، مهره نگهدارنده و واشر آب‌بندی تشکیل شده‌اند. بدنه فیتینگ از سوراخ ایجادشده روی دیواره مخزن عبور داده می‌شود و با قرار گرفتن واشر و بستن مهره، اتصال روی بدنه ثابت می‌شود. واشر در محل اتصال قرار می‌گیرد تا از خروج و نشت سیال از اطراف فیتینگ جلوگیری شود.\n\n" +
  "برنج به‌عنوان ماده اولیه این قطعات، به دلیل استحکام مناسب، مقاومت در برابر خوردگی و قابلیت ماشین‌کاری، گزینه مناسبی برای تولید اتصالات مورد استفاده در سیستم‌های انتقال آب و سایر سیالات است. رزوه‌های ایجادشده روی فیتینگ نیز امکان اتصال ساده و مطمئن آن به تجهیزات رزوه‌ای را فراهم می‌کند.\n\n" +
  "این فیتینگ‌ها بیشتر در مخازن آب و پلی‌اتیلن، تجهیزات تأسیساتی، سیستم‌های لوله‌کشی و مجموعه‌هایی که نیاز به ایجاد ورودی یا خروجی روی بدنه مخزن دارند استفاده می‌شوند. بسته به سایز رزوه، می‌توان انواع شیر، رابط، زانو، نیپل و دیگر اتصالات رزوه‌ای را به آن متصل کرد.\n\n" +
  "هنگام انتخاب فیتینگ برنجی باید به سایز رزوه، قطر سوراخ محل نصب، ضخامت دیواره مخزن و نوع اتصال مورد نیاز توجه شود. انتخاب سایز مناسب باعث می‌شود فیتینگ به‌درستی روی مخزن قرار گرفته و اتصال نهایی از استحکام و آب‌بندی مناسبی برخوردار باشد.\n\n" +
  "فیتینگ‌های برنجی افق زمین (پرورده) در سایزها و مشخصات مختلف قابل تولید هستند و در صورت نیاز، امکان تولید بر اساس ابعاد، نوع رزوه و مشخصات فنی مورد نظر مشتری نیز وجود دارد.";

const brassFittingsDescriptionEn =
  "Brass fittings are widely used connections for installing and equipping tanks and fluid-transfer systems. These parts create a threaded connection on the wall of a tank and make it possible to connect valves, pipes, hoses and other fittings.\n\n" +
  "Ofogh Zamin (Parvarde) brass fittings are made of a threaded body, retaining nut and sealing washer. The fitting body passes through the hole made in the tank wall, and with the washer positioned and the nut tightened, the connection is fixed to the body. The washer sits at the connection point to prevent fluid from leaking around the fitting.\n\n" +
  "Brass is a suitable raw material for these parts because of its strength, corrosion resistance and machinability, making it appropriate for connections used in water-transfer systems and other fluids. The threads machined on the fitting also allow simple and reliable connection to threaded equipment.\n\n" +
  "These fittings are mostly used in water and polyethylene tanks, facility equipment, piping systems and assemblies that need an inlet or outlet on the tank body. Depending on the thread size, different valves, connectors, elbows, nipples and other threaded fittings can be connected to them.\n\n" +
  "When choosing a brass fitting, the thread size, installation-hole diameter, tank-wall thickness and required connection type should be considered. Selecting the proper size helps the fitting sit correctly on the tank and gives the final connection suitable strength and sealing.\n\n" +
  "Ofogh Zamin (Parvarde) brass fittings can be produced in different sizes and specifications, and if needed, production based on the customer's required dimensions, thread type and technical specifications is also possible.";

const brassFittingsDescriptionAr =
  "تُعد الفيتنغات النحاسية من الوصلات واسعة الاستخدام في تركيب وتجهيز الخزانات وأنظمة نقل السوائل. تُستخدم هذه القطع لإنشاء وصلة ملولبة على جدار الخزان، وتتيح توصيل أنواع مختلفة من الصمامات والأنابيب والخراطيم والوصلات الأخرى.\n\n" +
  "تتكوّن الفيتنغات النحاسية من أفق زمين (پرورده) من جسم ملولب، وصامولة تثبيت، وحلقة إحكام. يمر جسم الفيتنغ من الفتحة الموجودة في جدار الخزان، ومع وضع حلقة الإحكام وشد الصامولة، تثبت الوصلة على الجسم. توضع حلقة الإحكام عند موضع الاتصال لمنع خروج السائل أو تسربه حول الفيتنغ.\n\n" +
  "يُعد النحاس مادة مناسبة لهذه القطع بفضل متانته المناسبة ومقاومته للتآكل وقابليته للتشغيل الآلي، مما يجعله خيارا مناسبا لإنتاج الوصلات المستخدمة في أنظمة نقل المياه والسوائل الأخرى. كما تتيح القلاوظ المصنوعة على الفيتنغ توصيله بسهولة وموثوقية بالمعدات الملولبة.\n\n" +
  "تُستخدم هذه الفيتنغات غالبا في خزانات المياه والبولي إيثيلين، ومعدات المرافق، وأنظمة الأنابيب، والمجموعات التي تحتاج إلى إنشاء مدخل أو مخرج على جسم الخزان. وبحسب مقاس القلاوظ، يمكن توصيل أنواع مختلفة من الصمامات والوصلات والأكواع والنبلات وغيرها من الوصلات الملولبة بها.\n\n" +
  "عند اختيار فيتنغ نحاسي، يجب الانتباه إلى مقاس القلاوظ، وقطر فتحة التركيب، وسماكة جدار الخزان، ونوع الوصلة المطلوبة. يساعد اختيار المقاس المناسب على تثبيت الفيتنغ بشكل صحيح على الخزان، وعلى أن تتمتع الوصلة النهائية بمتانة وإحكام مناسبين.\n\n" +
  "يمكن إنتاج الفيتنغات النحاسية من أفق زمين (پرورده) بمقاسات ومواصفات مختلفة، كما يمكن عند الحاجة الإنتاج وفقا للأبعاد ونوع القلاوظ والمواصفات الفنية التي يطلبها العميل.";

const heavyBrassFloatValveDescriptionFa =
  "فلوتر برنجی تمام برنجی سنگین، قطعه‌ای مقاوم و کاربردی برای کنترل خودکار سطح آب داخل مخزن است. عملکرد این فلوتر به گونه‌ای است که با تغییر سطح آب، جریان ورودی را کنترل می‌کند؛ با پایین آمدن سطح آب مسیر ورود آب باز شده و پس از رسیدن آب به سطح مشخص، مسیر ورودی بسته می‌شود و از سرریز شدن و هدررفت آب مخزن جلوگیری می‌کند.\n\n" +
  "فلوتر تمام برنجی سنگین افق زمین (پرورده) با ساختار مستحکم و استفاده از اجزای برنجی، وزن بالاتر و مقاومت بیشتری نسبت به مدل اکونومی دارد. این مدل برای استفاده در مخازن آب، فلوتر افقی، سیستم‌های آبرسانی، تأسیسات و کاربردهای صنعتی مناسب است.\n\n" +
  "ساختار تمام برنجی این مدل، آن را به انتخابی مناسب برای پروژه‌هایی تبدیل کرده است که استحکام، دوام، وزن مناسب و کیفیت ساخت بالا اهمیت بیشتری دارد.";

const heavyBrassFloatValveDescriptionEn =
  "The heavy all-brass float valve is a durable and practical component for automatic water-level control inside a tank. It controls the inlet flow as the water level changes: when the level drops, the inlet opens, and once the water reaches the set level, the inlet closes to prevent overflow and water waste.\n\n" +
  "The Ofogh Zamin (Parvarde) heavy all-brass float valve has a robust structure and brass components, giving it greater weight and higher resistance compared with the economy model. This model is suitable for water tanks, horizontal float applications, water-supply systems, facilities and industrial uses.\n\n" +
  "The all-brass structure makes this model a suitable choice for projects where strength, durability, proper weight and high build quality matter most.";

const heavyBrassFloatValveDescriptionAr =
  "صمام العوامة الثقيل المصنوع بالكامل من النحاس هو قطعة متينة وعملية للتحكم التلقائي في مستوى الماء داخل الخزان. يعمل هذا العوامة بحيث يتحكم في تدفق الماء الداخل مع تغير مستوى الماء؛ فعند انخفاض مستوى الماء يُفتح مسار الدخول، وبعد وصول الماء إلى المستوى المحدد يُغلق مسار الدخول لمنع فيضان الخزان وهدر الماء.\n\n" +
  "يتميز صمام العوامة الثقيل المصنوع بالكامل من النحاس من أفق زمين (پرورده) ببنية قوية واستخدام مكونات نحاسية، مما يمنحه وزنا أعلى ومقاومة أكبر مقارنة بالموديل الاقتصادي. هذا الموديل مناسب لخزانات المياه، وتطبيقات العوامة الأفقية، وأنظمة إمداد المياه، والمرافق، والاستخدامات الصناعية.\n\n" +
  "تجعل البنية النحاسية الكاملة هذا الموديل خيارا مناسبا للمشاريع التي تكون فيها القوة والمتانة والوزن المناسب وجودة التصنيع العالية أكثر أهمية.";

const economyFloatValveDescriptionFa =
  "فلوتر برنجی اکونومی، قطعه‌ای کاربردی برای کنترل خودکار سطح آب داخل مخزن است. این فلوتر با تغییر سطح آب، مسیر ورود آب را به‌صورت خودکار کنترل می‌کند؛ به‌طوری‌که با پایین آمدن سطح آب، جریان ورودی باز شده و با رسیدن آب به سطح تعیین‌شده، مسیر ورود آب بسته می‌شود و از پر شدن بیش از حد و سرریز شدن مخزن جلوگیری می‌کند.\n\n" +
  "در این مدل از مهره‌های پلاستیکی در قسمت شناور استفاده شده است که باعث کاهش وزن فلوتر و اقتصادی‌تر شدن آن می‌شود. فلوتر برنجی اکونومی افق زمین (پرورده) گزینه‌ای سبک و مقرون‌به‌صرفه برای استفاده در مخازن آب، فلوتر افقی و سیستم‌های آبرسانی و تأسیساتی است و برای مصارف مختلف خانگی و صنعتی قابل استفاده می‌باشد.\n\n" +
  "این مدل با توجه به ساختار اقتصادی خود، انتخابی مناسب برای پروژه‌هایی است که در کنار عملکرد مناسب، وزن کمتر و قیمت اقتصادی‌تر اهمیت دارد.";

const economyFloatValveDescriptionEn =
  "The economy brass float valve is a practical component for automatic water-level control inside a tank. It automatically controls the inlet flow as the water level changes: when the level drops, the inlet opens, and once the water reaches the set level, the inlet closes to prevent the tank from overfilling and overflowing.\n\n" +
  "This model uses plastic components in the float section, which reduces the valve's weight and makes it more economical. The Ofogh Zamin (Parvarde) economy brass float valve is a light and affordable option for water tanks, horizontal float applications, water-supply systems and facility installations, suitable for both household and industrial use.\n\n" +
  "Given its economical structure, this model is a suitable choice for projects where, alongside proper performance, lower weight and a more economical price matter.";

const economyFloatValveDescriptionAr =
  "صمام العوامة النحاسي الاقتصادي هو قطعة عملية للتحكم التلقائي في مستوى الماء داخل الخزان. يتحكم هذا الصمام تلقائيا في مسار دخول الماء مع تغير مستوى الماء؛ فعند انخفاض مستوى الماء يُفتح مسار الدخول، وبعد وصول الماء إلى المستوى المحدد يُغلق مسار الدخول لمنع امتلاء الخزان الزائد وفيضانه.\n\n" +
  "يستخدم هذا الموديل مكونات بلاستيكية في جزء العوامة، مما يقلل من وزن الصمام ويجعله أكثر اقتصادا. صمام العوامة النحاسي الاقتصادي من أفق زمين (پرورده) خيار خفيف الوزن واقتصادي لاستخدامه في خزانات المياه، وتطبيقات العوامة الأفقية، وأنظمة إمداد المياه والمرافق، ويصلح للاستخدامات المنزلية والصناعية المختلفة.\n\n" +
  "نظرا لبنيته الاقتصادية، يُعد هذا الموديل خيارا مناسبا للمشاريع التي يكون فيها، إلى جانب الأداء المناسب، الوزن الأقل والسعر الأكثر اقتصادا أمرين مهمين.";

const insertBushingsDescriptionFa =
  "بوشن‌های تمام برنجی اینزرتی افق زمین (پرورده) با استفاده از آلیاژ برنج باکیفیت تولید می‌شوند و برای ایجاد اتصال مطمئن و مقاوم در سیستم‌های لوله‌کشی، آبرسانی، تأسیسات و اتصالات صنعتی مورد استفاده قرار می‌گیرند.\n\n" +
  "این بوشن‌ها در سایزهای استاندارد ۱/۲ اینچ تا ۲ اینچ تولید می‌شوند و با توجه به نوع کاربرد، امکان تولید در ابعاد و مشخصات سفارشی نیز وجود دارد. ابعاد، طول، رزوه و مشخصات فنی محصول می‌تواند مطابق با نیاز و سفارش مشتری تولید شود.\n\n" +
  "بوشن‌های اینزرتی برنجی با توجه به مقاومت مناسب آلیاژ برنج، گزینه‌ای کاربردی برای استفاده در سیستم‌هایی هستند که استحکام اتصال، دوام و کیفیت ساخت اهمیت دارد.\n\n" +
  "افق زمین (پرورده) امکان تولید بوشن‌های تمام برنجی اینزرتی را در سایزهای مختلف و همچنین ابعاد و مشخصات سفارشی مورد درخواست مشتری فراهم کرده است.";

const insertBushingsDescriptionEn =
  "Ofogh Zamin (Parvarde) all-brass insert bushings are manufactured from high-quality brass alloy and used to create a reliable, durable connection in piping, water-supply, facility and industrial-connection systems.\n\n" +
  "These bushings are produced in standard sizes from 1/2\" to 2\", and depending on the application, production in custom dimensions and specifications is also possible. The product's dimensions, length, thread and technical specifications can be manufactured to match the customer's requirements and order.\n\n" +
  "Given the brass alloy's suitable strength, insert bushings are a practical choice for systems where connection strength, durability and build quality matter.\n\n" +
  "Ofogh Zamin (Parvarde) offers production of all-brass insert bushings in different sizes, as well as in custom dimensions and specifications requested by the customer.";

const insertBushingsDescriptionAr =
  "تُصنع البوشات النحاسية الإدخالية (اينزرتي) من أفق زمين (پرورده) باستخدام سبيكة نحاس عالية الجودة، وتُستخدم لإنشاء وصلة موثوقة ومقاومة في أنظمة الأنابيب وإمداد المياه والمرافق والوصلات الصناعية.\n\n" +
  "تُنتج هذه البوشات بمقاسات قياسية من 1/2\" إلى 2\"، وبحسب نوع الاستخدام، يمكن أيضا إنتاجها بأبعاد ومواصفات مخصصة. يمكن تصنيع الأبعاد والطول والقلاووظ والمواصفات الفنية للمنتج وفقا لاحتياج وطلب العميل.\n\n" +
  "نظرا للمتانة المناسبة لسبيكة النحاس، تُعد البوشات النحاسية الإدخالية خيارا عمليا للاستخدام في الأنظمة التي تهم فيها قوة الاتصال والمتانة وجودة التصنيع.\n\n" +
  "توفر أفق زمين (پرورده) إمكانية تصنيع البوشات النحاسية الإدخالية الكاملة بمقاسات مختلفة، وكذلك بأبعاد ومواصفات مخصصة حسب طلب العميل.";

export const categories: Category[] = [
  {
    slug: "brass-fittings",
    featured: true,
    name: {
      en: "Brass Fittings",
      fa: "فیتینگ‌های برنجی",
      ar: "فيتنغات نحاسية",
    },
    tagline: {
      en: "Threaded brass tank fittings for reliable fluid connections.",
      fa: "اتصالات برنجی رزوه‌ای برای ایجاد ورودی و خروجی مطمئن روی مخازن.",
      ar: "فيتنغات نحاسية ملولبة لإنشاء وصلات موثوقة للسوائل على الخزانات.",
    },
    description: {
      en: brassFittingsDescriptionEn,
      fa: brassFittingsDescriptionFa,
      ar: brassFittingsDescriptionAr,
    },
  },
  {
    slug: "heavy-brass-float-valve",
    featured: true,
    name: {
      en: "Heavy All-Brass Float Valve",
      fa: "شیر فلوتر تمام برنجی سنگین",
      ar: "صمام عوامة ثقيل من النحاس بالكامل",
    },
    tagline: {
      en: "Heavy all-brass valve for automatic tank water-level control.",
      fa: "شیر فلوتر تمام برنجی سنگین برای کنترل خودکار سطح آب مخزن.",
      ar: "صمام عوامة ثقيل من النحاس بالكامل للتحكم التلقائي في مستوى ماء الخزان.",
    },
    description: {
      en: heavyBrassFloatValveDescriptionEn,
      fa: heavyBrassFloatValveDescriptionFa,
      ar: heavyBrassFloatValveDescriptionAr,
    },
  },
  {
    slug: "economy-float-valve",
    featured: true,
    name: {
      en: "Economy Brass Float Valve",
      fa: "شیر فلوتر برنجی اکونومی",
      ar: "صمام عوامة نحاسي اقتصادي",
    },
    tagline: {
      en: "Light, economical all-brass float valve for tank water-level control.",
      fa: "فلوتر برنجی اکونومی، سبک و مقرون‌به‌صرفه برای کنترل سطح آب مخزن.",
      ar: "صمام عوامة نحاسي اقتصادي وخفيف للتحكم في مستوى ماء الخزان.",
    },
    description: {
      en: economyFloatValveDescriptionEn,
      fa: economyFloatValveDescriptionFa,
      ar: economyFloatValveDescriptionAr,
    },
  },
  {
    slug: "insert-bushings",
    featured: true,
    name: {
      en: "Brass Insert Bushings",
      fa: "بوشن‌های برنجی اینزرتی",
      ar: "بوشات نحاسية إدخالية",
    },
    tagline: {
      en: 'All-brass insert bushings for reliable threaded connections, 1/2" to 2".',
      fa: "بوشن تمام برنجی اینزرتی برای اتصال مطمئن رزوه‌ای، سایز ۱/۲ تا ۲ اینچ.",
      ar: 'بوشات نحاسية إدخالية كاملة لوصلات ملولبة موثوقة، من 1/2" إلى 2".',
    },
    description: {
      en: insertBushingsDescriptionEn,
      fa: insertBushingsDescriptionFa,
      ar: insertBushingsDescriptionAr,
    },
  },
];

const specLabels = {
  material: { en: "Material", fa: "جنس", ar: "المادة" },
  size: { en: "Size", fa: "سایز", ar: "المقاس" },
  connection: { en: "Connection", fa: "نوع اتصال", ar: "نوع الوصلة" },
};

const brass = {
  en: "Brass",
  fa: "برنج",
  ar: "نحاس",
};

function brassFittingSummary(size: { en: string; fa: string; ar: string }) {
  return {
    en: `${size.en} threaded brass tank fitting for a reliable inlet or outlet on tank walls.`,
    fa: `فیتینگ برنجی رزوه‌ای ${size.fa} برای ایجاد ورودی یا خروجی مطمئن روی دیواره مخزن.`,
    ar: `فيتنغ نحاسي ملولب مقاس ${size.ar} لإنشاء مدخل أو مخرج موثوق على جدار الخزان.`,
  };
}

function floatValveSummary(size: { en: string; fa: string; ar: string }) {
  return {
    en: `${size.en} heavy all-brass float valve for automatic tank water-level control.`,
    fa: `فلوتر تمام برنجی سنگین ${size.fa} برای کنترل خودکار سطح آب مخزن.`,
    ar: `صمام عوامة ثقيل من النحاس بالكامل مقاس ${size.ar} للتحكم التلقائي في مستوى ماء الخزان.`,
  };
}

function economyFloatValveSummary(size: { en: string; fa: string; ar: string }) {
  return {
    en: `${size.en} economy brass float valve, light and affordable for automatic tank water-level control.`,
    fa: `فلوتر برنجی اکونومی ${size.fa}، سبک و مقرون‌به‌صرفه برای کنترل خودکار سطح آب مخزن.`,
    ar: `صمام عوامة نحاسي اقتصادي مقاس ${size.ar}، خفيف الوزن واقتصادي للتحكم التلقائي في مستوى ماء الخزان.`,
  };
}

function insertBushingSummary(size: { en: string; fa: string; ar: string }) {
  return {
    en: `${size.en} all-brass insert bushing for a reliable, durable threaded connection.`,
    fa: `بوشن تمام برنجی اینزرتی ${size.fa} برای ایجاد اتصال مطمئن و مقاوم.`,
    ar: `بوشة نحاسية إدخالية كاملة مقاس ${size.ar} لإنشاء وصلة موثوقة ومقاومة.`,
  };
}

export const products: Product[] = [
  {
    slug: "brass-fitting-1-2",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-2.jpg",
    featured: true,
    name: { en: 'Brass Fitting 1/2"', fa: "فیتینگ برنجی ۱/۲", ar: 'فيتنغ نحاسي 1/2"' },
    summary: brassFittingSummary({ en: '1/2"', fa: "۱/۲", ar: '1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2"' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-1-2-long",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-2-long.jpg",
    featured: true,
    name: {
      en: 'Long Brass Fitting 1/2"',
      fa: "فیتینگ برنجی ۱/۲ بلند",
      ar: 'فيتنغ نحاسي طويل 1/2"',
    },
    summary: brassFittingSummary({ en: '1/2" long', fa: "۱/۲ بلند", ar: '1/2" طويل' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2" Long' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-3-4",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-3-4.jpg",
    featured: true,
    name: { en: 'Brass Fitting 3/4"', fa: "فیتینگ برنجی ۳/۴", ar: 'فيتنغ نحاسي 3/4"' },
    summary: brassFittingSummary({ en: '3/4"', fa: "۳/۴", ar: '3/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4"' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-3-4-long",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-3-4-long.jpg",
    name: {
      en: 'Long Brass Fitting 3/4"',
      fa: "فیتینگ برنجی ۳/۴ بلند",
      ar: 'فيتنغ نحاسي طويل 3/4"',
    },
    summary: brassFittingSummary({ en: '3/4" long', fa: "۳/۴ بلند", ar: '3/4" طويل' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4" Long' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-1-inch",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-inch.jpg",
    name: { en: 'Brass Fitting 1"', fa: "فیتینگ برنجی ۱ اینچ", ar: 'فيتنغ نحاسي 1"' },
    summary: brassFittingSummary({ en: '1"', fa: "۱ اینچ", ar: '1"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1"' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-1-inch-long",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-inch-long.jpg",
    name: {
      en: 'Long Brass Fitting 1"',
      fa: "فیتینگ برنجی ۱ اینچ بلند",
      ar: 'فيتنغ نحاسي طويل 1"',
    },
    summary: brassFittingSummary({ en: '1" long', fa: "۱ اینچ بلند", ar: '1" طويل' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1" Long' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-1-1-4",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-1-4.jpg",
    name: {
      en: 'Brass Fitting 1 1/4"',
      fa: "فیتینگ برنجی ۱ و ۱/۴",
      ar: 'فيتنغ نحاسي 1 1/4"',
    },
    summary: brassFittingSummary({ en: '1 1/4"', fa: "۱ و ۱/۴", ar: '1 1/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1 1/4"' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-1-1-2",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-1-1-2.jpg",
    name: {
      en: 'Brass Fitting 1 1/2"',
      fa: "فیتینگ برنجی ۱ و ۱/۲",
      ar: 'فيتنغ نحاسي 1 1/2"',
    },
    summary: brassFittingSummary({ en: '1 1/2"', fa: "۱ و ۱/۲", ar: '1 1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1 1/2"' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-inner-2-inch",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-inner-2-inch.jpg",
    name: {
      en: 'Inner Brass Fitting 2"',
      fa: "فیتینگ برنجی داخل ۲ اینچ",
      ar: 'فيتنغ نحاسي داخلي 2"',
    },
    summary: brassFittingSummary({ en: '2" inner', fa: "۲ اینچ داخل", ar: '2" داخلي' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '2" Inner' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "brass-fitting-outer-3-inch",
    categorySlug: "brass-fittings",
    image: "/images/categories/brass-fittings/brass-fitting-outer-3-inch.jpg",
    name: {
      en: 'Outer Brass Fitting 3"',
      fa: "فیتینگ برنجی بیرون ۳ اینچ",
      ar: 'فيتنغ نحاسي خارجي 3"',
    },
    summary: brassFittingSummary({ en: '3" outer', fa: "۳ اینچ بیرون", ar: '3" خارجي' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3" Outer' },
      { label: specLabels.connection, value: "Threaded tank fitting" },
    ],
  },
  {
    slug: "heavy-brass-float-valve-1-2",
    categorySlug: "heavy-brass-float-valve",
    image: "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-2-1.jpg",
    images: [
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-2-1.jpg",
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-2-2.jpg",
    ],
    featured: true,
    name: {
      en: 'Heavy All-Brass Float Valve 1/2"',
      fa: "فلوتر تمام برنجی ۱/۲",
      ar: 'صمام عوامة نحاسي كامل 1/2"',
    },
    summary: floatValveSummary({ en: '1/2"', fa: "۱/۲", ar: '1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2"' },
      { label: specLabels.connection, value: "Threaded float valve" },
    ],
  },
  {
    slug: "heavy-brass-float-valve-3-4",
    categorySlug: "heavy-brass-float-valve",
    image: "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-3-4-1.jpg",
    images: [
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-3-4-1.jpg",
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-3-4-2.jpg",
    ],
    featured: true,
    name: {
      en: 'Heavy All-Brass Float Valve 3/4"',
      fa: "فلوتر تمام برنجی ۳/۴",
      ar: 'صمام عوامة نحاسي كامل 3/4"',
    },
    summary: floatValveSummary({ en: '3/4"', fa: "۳/۴", ar: '3/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4"' },
      { label: specLabels.connection, value: "Threaded float valve" },
    ],
  },
  {
    slug: "heavy-brass-float-valve-1-inch",
    categorySlug: "heavy-brass-float-valve",
    image: "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-inch-1.jpg",
    images: [
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-inch-1.jpg",
      "/images/categories/heavy-brass-float-valve/heavy-brass-float-valve-1-inch-2.jpg",
    ],
    name: {
      en: 'Heavy All-Brass Float Valve 1"',
      fa: "فلوتر تمام برنجی ۱ اینچ",
      ar: 'صمام عوامة نحاسي كامل 1"',
    },
    summary: floatValveSummary({ en: '1"', fa: "۱ اینچ", ar: '1"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1"' },
      { label: specLabels.connection, value: "Threaded float valve" },
    ],
  },
  {
    slug: "economy-float-valve-1-2",
    categorySlug: "economy-float-valve",
    image: "/images/categories/economy-float-valve/economy-float-valve-1-2-1.jpg",
    images: [
      "/images/categories/economy-float-valve/economy-float-valve-1-2-1.jpg",
      "/images/categories/economy-float-valve/economy-float-valve-1-2-2.jpg",
      "/images/categories/economy-float-valve/economy-float-valve-1-2-3.jpg",
    ],
    featured: true,
    name: {
      en: 'Economy Brass Float Valve 1/2"',
      fa: "فلوتر اکونومی ۱/۲",
      ar: 'صمام عوامة نحاسي اقتصادي 1/2"',
    },
    summary: economyFloatValveSummary({ en: '1/2"', fa: "۱/۲", ar: '1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2"' },
      { label: specLabels.connection, value: "Threaded float valve" },
    ],
  },
  {
    slug: "economy-float-valve-3-4",
    categorySlug: "economy-float-valve",
    image: "/images/categories/economy-float-valve/economy-float-valve-3-4-1.jpg",
    images: [
      "/images/categories/economy-float-valve/economy-float-valve-3-4-1.jpg",
      "/images/categories/economy-float-valve/economy-float-valve-3-4-2.jpg",
      "/images/categories/economy-float-valve/economy-float-valve-3-4-3.jpg",
    ],
    name: {
      en: 'Economy Brass Float Valve 3/4"',
      fa: "فلوتر اکونومی ۳/۴",
      ar: 'صمام عوامة نحاسي اقتصادي 3/4"',
    },
    summary: economyFloatValveSummary({ en: '3/4"', fa: "۳/۴", ar: '3/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4"' },
      { label: specLabels.connection, value: "Threaded float valve" },
    ],
  },
  {
    slug: "insert-bushing-1-2",
    categorySlug: "insert-bushings",
    image: "/images/categories/insert-bushings/insert-bushing-1-2.jpg",
    featured: true,
    name: { en: 'Brass Insert Bushing 1/2"', fa: "بوشن برنجی اینزرتی ۱/۲", ar: 'بوشة نحاسية إدخالية 1/2"' },
    summary: insertBushingSummary({ en: '1/2"', fa: "۱/۲", ar: '1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2"' },
      { label: specLabels.connection, value: "Threaded insert bushing" },
    ],
  },
  {
    slug: "insert-bushing-3-4",
    categorySlug: "insert-bushings",
    image: "/images/categories/insert-bushings/insert-bushing-3-4.jpg",
    featured: true,
    name: { en: 'Brass Insert Bushing 3/4"', fa: "بوشن برنجی اینزرتی ۳/۴", ar: 'بوشة نحاسية إدخالية 3/4"' },
    summary: insertBushingSummary({ en: '3/4"', fa: "۳/۴", ar: '3/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4"' },
      { label: specLabels.connection, value: "Threaded insert bushing" },
    ],
  },
  {
    slug: "insert-bushing-1-inch",
    categorySlug: "insert-bushings",
    image: "/images/categories/insert-bushings/insert-bushing-1-inch.jpg",
    name: { en: 'Brass Insert Bushing 1"', fa: "بوشن برنجی اینزرتی ۱ اینچ", ar: 'بوشة نحاسية إدخالية 1"' },
    summary: insertBushingSummary({ en: '1"', fa: "۱ اینچ", ar: '1"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1"' },
      { label: specLabels.connection, value: "Threaded insert bushing" },
    ],
  },
  {
    slug: "insert-bushing-2-inch",
    categorySlug: "insert-bushings",
    image: "/images/categories/insert-bushings/insert-bushing-2-inch.jpg",
    name: { en: 'Brass Insert Bushing 2"', fa: "بوشن برنجی اینزرتی ۲ اینچ", ar: 'بوشة نحاسية إدخالية 2"' },
    summary: insertBushingSummary({ en: '2"', fa: "۲ اینچ", ar: '2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '2"' },
      { label: specLabels.connection, value: "Threaded insert bushing" },
    ],
  },
];
