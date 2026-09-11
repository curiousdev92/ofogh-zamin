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

const brassRefrigeratorNutDescriptionFa =
  "مهره یخچالی یکی از قطعات مهم و پرکاربرد در سیستم‌های تبرید، سرمایش و تجهیزات برودتی است که برای ایجاد اتصال مطمئن در مسیر لوله‌کشی، به‌ویژه در اتصال با لوله‌های مسی مورد استفاده قرار می‌گیرد. این قطعه در انواع یخچال‌ها، فریزرها، کولرها و سایر تجهیزات سرمایشی و برودتی کاربرد دارد.\n\n" +
  "مهره یخچالی افق زمین (پرورده) با استفاده از آلیاژ برنج مناسب و استاندارد تولید می‌شود. انتخاب صحیح آلیاژ و کنترل کیفیت مواد اولیه در این قطعه اهمیت بسیار زیادی دارد؛ زیرا مهره یخچالی در زمان نصب، اتصال و کارکرد مداوم سیستم باید در برابر فشار، تنش، حرارت و تغییرات دمایی مقاومت کافی داشته باشد.\n\n" +
  "کیفیت پایین آلیاژ یا استفاده از برنج نامناسب می‌تواند باعث کاهش استحکام قطعه و ایجاد مشکلاتی مانند ترک‌خوردگی، شکستگی، نشتی یا حتی ترکیدن قطعه در شرایط کاری شود. به همین دلیل، استفاده از مواد اولیه مناسب و رعایت اصول تولید و ماشین‌کاری در ساخت مهره یخچالی از اهمیت ویژه‌ای برخوردار است.\n\n" +
  "مهره یخچالی برنجی افق زمین (پرورده) با هدف ارائه اتصالی مقاوم، مطمئن و بادوام برای استفاده در سیستم‌های سرمایشی و برودتی تولید می‌شود و برای کاربرد در یخچال، فریزر و تجهیزات مختلف تبرید و سرمایش مناسب است.\n\n" +
  "کیفیت آلیاژ، دقت ساخت و استحکام اتصال؛ سه اصل مهم در تولید مهره یخچالی استاندارد.";

const brassRefrigeratorNutDescriptionEn =
  "The refrigerator nut is one of the important and widely used components in refrigeration, cooling and freezing systems, used to create a reliable connection in piping lines — especially connections with copper pipes. This part is used in various refrigerators, freezers, coolers and other refrigeration and cooling equipment.\n\n" +
  "The Ofogh Zamin (Parvarde) refrigerator nut is manufactured using a suitable, standard brass alloy. Choosing the right alloy and controlling the quality of raw materials is extremely important for this part, since the refrigerator nut must withstand sufficient pressure, stress, heat and temperature changes during installation, connection and continuous system operation.\n\n" +
  "Low alloy quality or the use of unsuitable brass can reduce the part's strength and cause problems such as cracking, breakage, leakage or even bursting under working conditions. For this reason, using proper raw materials and following correct production and machining principles in manufacturing the refrigerator nut is of special importance.\n\n" +
  "The Ofogh Zamin (Parvarde) brass refrigerator nut is manufactured to provide a strong, reliable and durable connection for use in cooling and refrigeration systems, and is suitable for use in refrigerators, freezers and various refrigeration and cooling equipment.\n\n" +
  "Alloy quality, manufacturing precision and connection strength — three key principles in producing a standard refrigerator nut.";

const brassRefrigeratorNutDescriptionAr =
  "صامولة الثلاجة هي أحد القطع المهمة وواسعة الاستخدام في أنظمة التبريد والتجميد ومعدات التبريد، وتُستخدم لإنشاء وصلة موثوقة في مسار الأنابيب، خاصة في الاتصال بالأنابيب النحاسية. تُستخدم هذه القطعة في أنواع الثلاجات والفريزرات والمكيفات وغيرها من معدات التبريد والتجميد.\n\n" +
  "تُصنع صامولة الثلاجة من أفق زمين (پرورده) باستخدام سبيكة نحاس مناسبة وقياسية. يُعد الاختيار الصحيح للسبيكة والتحكم في جودة المواد الخام أمرا بالغ الأهمية لهذه القطعة؛ إذ يجب أن تتحمل صامولة الثلاجة أثناء التركيب والاتصال والتشغيل المستمر للنظام ضغطا وإجهادا وحرارة وتغيرات في درجة الحرارة بشكل كافٍ.\n\n" +
  "يمكن أن تؤدي رداءة جودة السبيكة أو استخدام نحاس غير مناسب إلى ضعف متانة القطعة وظهور مشاكل مثل التشقق أو الكسر أو التسرب أو حتى انفجار القطعة أثناء ظروف التشغيل. لهذا السبب، يُعد استخدام المواد الخام المناسبة والالتزام بأصول التصنيع والتشغيل الآلي في صناعة صامولة الثلاجة أمرا ذا أهمية خاصة.\n\n" +
  "تُصنع صامولة الثلاجة النحاسية من أفق زمين (پرورده) بهدف توفير وصلة قوية وموثوقة ومتينة للاستخدام في أنظمة التبريد والتجميد، وهي مناسبة للاستخدام في الثلاجات والفريزرات ومختلف معدات التبريد والتجميد.\n\n" +
  "جودة السبيكة، ودقة التصنيع، ومتانة الاتصال؛ ثلاثة مبادئ مهمة في تصنيع صامولة ثلاجة قياسية.";

const allBrassFittingsDescriptionFa =
  "اتصالات تمام برنجی افق زمین (پرورده) شامل انواع سه‌راهی، زانویی و چپقی هستند که برای ایجاد اتصال، تغییر مسیر و انشعاب در سیستم‌های مختلف لوله‌کشی مورد استفاده قرار می‌گیرند. این اتصالات با توجه به نوع طراحی و سایز، در سیستم‌های آبرسانی، تأسیسات، لوله‌کشی آب و سایر کاربردهای صنعتی و فنی قابل استفاده هستند.\n\n" +
  "این محصولات به‌صورت تمام برنجی تولید شده و در سایزهای پرکاربرد ۱/۴، ۳/۸، ۱/۲ و ۳/۴ اینچ عرضه می‌شوند. استفاده از آلیاژ برنج مناسب و ماشین‌کاری دقیق، موجب ایجاد اتصال مستحکم و عملکرد مطمئن قطعه در محل نصب می‌شود.\n\n" +
  "زانویی‌های برنجی برای تغییر مسیر لوله، سه‌راهی‌های برنجی برای ایجاد انشعاب و چپقی‌های برنجی برای ایجاد اتصال و تغییر جهت در مسیر لوله‌کشی کاربرد دارند. بسته به نوع سیستم و نیاز مصرف‌کننده، این اتصالات می‌توانند در بخش‌های مختلف آبرسانی و تأسیسات مورد استفاده قرار گیرند.\n\n" +
  "افق زمین (پرورده) با تمرکز بر کیفیت آلیاژ، دقت ساخت و استحکام اتصال، این محصولات را در سایزهای مختلف تولید می‌کند و امکان تولید ابعاد و مشخصات سفارشی متناسب با نیاز مشتری نیز فراهم است.";

const allBrassFittingsDescriptionEn =
  "Ofogh Zamin (Parvarde) all-brass fittings include tees, elbows and street elbows, used to create connections, redirect flow and branch off within various piping systems. Depending on their design and size, these fittings can be used in water-supply systems, facility installations, water piping and other industrial and technical applications.\n\n" +
  'These products are manufactured entirely from brass and are available in the widely used sizes of 1/4", 3/8", 1/2" and 3/4". Using a suitable brass alloy along with precise machining results in a strong connection and reliable performance at the installation point.\n\n' +
  "Brass elbows are used to change the direction of a pipe, brass tees to create a branch, and brass street elbows to create a connection and change direction along the piping route. Depending on the system type and the user's needs, these fittings can be used in different parts of water-supply and facility installations.\n\n" +
  "Ofogh Zamin (Parvarde) focuses on alloy quality, manufacturing precision and connection strength to produce these products in different sizes, and can also manufacture custom dimensions and specifications to match customer requirements.";

const allBrassFittingsDescriptionAr =
  "تشمل الوصلات النحاسية الكاملة من أفق زمين (پرورده) أنواع الوصلات الثلاثية (تي) والكوع والكوع القصير (چپقی)، وتُستخدم لإنشاء الاتصال وتغيير المسار والتفرع في مختلف أنظمة الأنابيب. وبحسب نوع التصميم والمقاس، يمكن استخدام هذه الوصلات في أنظمة إمداد المياه والمرافق وأنابيب المياه وغيرها من التطبيقات الصناعية والفنية.\n\n" +
  'تُصنع هذه المنتجات بالكامل من النحاس، وتُطرح بالمقاسات الشائعة 1/4" و3/8" و1/2" و3/4". يؤدي استخدام سبيكة نحاس مناسبة مع التشغيل الآلي الدقيق إلى إنشاء اتصال قوي وأداء موثوق في موضع التركيب.\n\n' +
  "تُستخدم الأكواع النحاسية لتغيير مسار الأنبوب، والوصلات الثلاثية النحاسية لإنشاء تفرع، والأكواع القصيرة النحاسية لإنشاء اتصال وتغيير الاتجاه على مسار الأنابيب. وبحسب نوع النظام واحتياج المستخدم، يمكن استخدام هذه الوصلات في أجزاء مختلفة من إمداد المياه والمرافق.\n\n" +
  "تركز أفق زمين (پرورده) على جودة السبيكة، ودقة التصنيع، ومتانة الاتصال، لإنتاج هذه المنتجات بمقاسات مختلفة، كما توفر إمكانية تصنيع أبعاد ومواصفات مخصصة وفقا لاحتياج العميل.";

const brassQuarterTurnValveDescriptionFa =
  "شیر تک‌ضرب برنجی افق زمین (پرورده) یکی از شیرآلات کاربردی برای قطع و وصل جریان آب در سیستم‌های لوله‌کشی و آبرسانی است. این شیر با طراحی ساده و کاربردی، امکان کنترل سریع جریان آب را فراهم کرده و برای استفاده در بخش‌های مختلف تأسیسات، آبرسانی و مصارف عمومی مناسب می‌باشد.\n\n" +
  "این محصول در سایزهای ۱/۲ و ۳/۴ اینچ تولید می‌شود و به دلیل ساختار برنجی، از استحکام و دوام مناسبی در شرایط کاری برخوردار است.\n\n" +
  "شیر تک‌ضرب افق زمین (پرورده) با هدف ارائه محصولی مقاوم، کاربردی و مطمئن برای استفاده در سیستم‌های مختلف آبرسانی و تأسیسات تولید می‌شود و انتخابی مناسب برای کنترل جریان آب در مسیر لوله‌کشی است.";

const brassQuarterTurnValveDescriptionEn =
  "The Ofogh Zamin (Parvarde) brass quarter-turn valve is a practical valve for shutting off and turning on water flow in piping and water-supply systems. With its simple, functional design, this valve allows quick control of water flow and is suitable for use in various parts of facility installations, water supply and general applications.\n\n" +
  'This product is manufactured in 1/2" and 3/4" sizes, and thanks to its brass construction, it offers suitable strength and durability under working conditions.\n\n' +
  "The Ofogh Zamin (Parvarde) quarter-turn valve is manufactured to provide a durable, practical and reliable product for use in various water-supply and facility systems, and is a suitable choice for controlling water flow along a piping route.";

const brassQuarterTurnValveDescriptionAr =
  "صمام أفق زمين (پرورده) النحاسي ربع اللفة هو صمام عملي لقطع ووصل تدفق الماء في أنظمة الأنابيب وإمداد المياه. بفضل تصميمه البسيط والعملي، يتيح هذا الصمام التحكم السريع في تدفق الماء، وهو مناسب للاستخدام في مختلف أجزاء المرافق وإمداد المياه والاستخدامات العامة.\n\n" +
  'يُصنع هذا المنتج بمقاسي 1/2" و3/4"، وبفضل بنيته النحاسية، يتمتع بمتانة ومقاومة مناسبتين في ظروف التشغيل.\n\n' +
  "يُصنع صمام أفق زمين (پرورده) ربع اللفة بهدف تقديم منتج متين وعملي وموثوق للاستخدام في مختلف أنظمة إمداد المياه والمرافق، وهو خيار مناسب للتحكم في تدفق الماء على مسار الأنابيب.";

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
  {
    slug: "brass-refrigerator-nut",
    featured: true,
    name: {
      en: "Brass Refrigerator Nut",
      fa: "مهره یخچالی برنجی",
      ar: "صامولة ثلاجة نحاسية",
    },
    tagline: {
      en: "Brass refrigerator nut for reliable copper-pipe connections in cooling systems.",
      fa: "مهره یخچالی برنجی برای اتصال مطمئن لوله‌های مسی در سیستم‌های سرمایشی.",
      ar: "صامولة ثلاجة نحاسية لوصلات موثوقة للأنابيب النحاسية في أنظمة التبريد.",
    },
    description: {
      en: brassRefrigeratorNutDescriptionEn,
      fa: brassRefrigeratorNutDescriptionFa,
      ar: brassRefrigeratorNutDescriptionAr,
    },
  },
  {
    slug: "all-brass-fittings",
    featured: true,
    name: {
      en: "All-Brass Fittings",
      fa: "اتصالات تمام برنجی",
      ar: "وصلات نحاسية كاملة",
    },
    tagline: {
      en: "All-brass elbows, tees and street elbows for reliable piping connections.",
      fa: "زانویی، سه‌راهی و چپقی تمام برنجی برای اتصال مطمئن در سیستم‌های لوله‌کشی.",
      ar: "أكواع ووصلات ثلاثية وأكواع قصيرة نحاسية كاملة لوصلات أنابيب موثوقة.",
    },
    description: {
      en: allBrassFittingsDescriptionEn,
      fa: allBrassFittingsDescriptionFa,
      ar: allBrassFittingsDescriptionAr,
    },
  },
  {
    slug: "brass-quarter-turn-valve",
    featured: true,
    name: {
      en: "Brass Quarter-Turn Valve",
      fa: "شیر تک‌ضرب برنجی",
      ar: "صمام نحاسي ربع لفة",
    },
    tagline: {
      en: "Brass quarter-turn valve for quick water shut-off in piping systems.",
      fa: "شیر تک‌ضرب برنجی برای قطع و وصل سریع جریان آب در سیستم‌های لوله‌کشی.",
      ar: "صمام نحاسي ربع لفة لقطع ووصل سريع لتدفق الماء في أنظمة الأنابيب.",
    },
    description: {
      en: brassQuarterTurnValveDescriptionEn,
      fa: brassQuarterTurnValveDescriptionFa,
      ar: brassQuarterTurnValveDescriptionAr,
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

// Titles/sizes/types (elbow, tee, street elbow) are not yet assigned per photo —
// placeholder names to be replaced once the catalogue specifics are provided.
function allBrassFittingPlaceholder(n: number): Product {
  return {
    slug: `all-brass-fitting-${n}`,
    categorySlug: "all-brass-fittings",
    image: `/images/categories/all-brass-fittings/all-brass-fitting-${n}.jpg`,
    name: {
      en: `All-Brass Fitting — Item ${n}`,
      fa: `اتصال تمام برنجی — مورد ${n}`,
      ar: `وصلة نحاسية كاملة — العنصر ${n}`,
    },
    summary: {
      en: "All-brass fitting — type and size to be confirmed.",
      fa: "اتصال تمام برنجی — نوع و سایز به‌زودی تکمیل می‌شود.",
      ar: "وصلة نحاسية كاملة — سيتم تحديد النوع والمقاس لاحقا.",
    },
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.connection, value: "TBD" },
    ],
    draft: true,
  };
}

function quarterTurnValveSummary(size: { en: string; fa: string; ar: string }) {
  return {
    en: `${size.en} brass quarter-turn valve for quick water shut-off in piping systems.`,
    fa: `شیر تک‌ضرب برنجی ${size.fa} برای قطع و وصل سریع جریان آب.`,
    ar: `صمام نحاسي ربع لفة مقاس ${size.ar} لقطع ووصل سريع لتدفق الماء.`,
  };
}

const brassRefrigeratorNutSummary = {
  en: "Brass refrigerator nut for a reliable connection to copper pipes in cooling and refrigeration systems.",
  fa: "مهره یخچالی برنجی برای اتصال مطمئن به لوله‌های مسی در سیستم‌های سرمایشی و برودتی.",
  ar: "صامولة ثلاجة نحاسية لوصلة موثوقة بالأنابيب النحاسية في أنظمة التبريد والتجميد.",
};

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
  {
    slug: "brass-refrigerator-nut",
    categorySlug: "brass-refrigerator-nut",
    image: "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-1.jpg",
    images: [
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-1.jpg",
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-2.jpg",
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-3.jpg",
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-4.jpg",
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-5.jpg",
      "/images/categories/brass-refrigerator-nut/brass-refrigerator-nut-7.jpg",
    ],
    featured: true,
    name: {
      en: "Brass Refrigerator Nut",
      fa: "مهره یخچالی برنجی",
      ar: "صامولة ثلاجة نحاسية",
    },
    summary: brassRefrigeratorNutSummary,
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.connection, value: "Copper pipe flare connection" },
    ],
  },
  ...Array.from({ length: 14 }, (_, i) => allBrassFittingPlaceholder(i + 1)),
  {
    slug: "brass-quarter-turn-valve-1-2",
    categorySlug: "brass-quarter-turn-valve",
    image: "/images/categories/brass-quarter-turn-valve/brass-quarter-turn-valve-1-2.jpg",
    featured: true,
    name: {
      en: 'Brass Quarter-Turn Valve 1/2"',
      fa: "شیر تک‌ضرب برنجی ۱/۲",
      ar: 'صمام نحاسي ربع لفة 1/2"',
    },
    summary: quarterTurnValveSummary({ en: '1/2"', fa: "۱/۲", ar: '1/2"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '1/2"' },
      { label: specLabels.connection, value: "Threaded shut-off valve" },
    ],
  },
  {
    slug: "brass-quarter-turn-valve-3-4",
    categorySlug: "brass-quarter-turn-valve",
    image: "/images/categories/brass-quarter-turn-valve/brass-quarter-turn-valve-3-4.jpg",
    name: {
      en: 'Brass Quarter-Turn Valve 3/4"',
      fa: "شیر تک‌ضرب برنجی ۳/۴",
      ar: 'صمام نحاسي ربع لفة 3/4"',
    },
    summary: quarterTurnValveSummary({ en: '3/4"', fa: "۳/۴", ar: '3/4"' }),
    material: brass,
    specs: [
      { label: specLabels.material, value: "Brass" },
      { label: specLabels.size, value: '3/4"' },
      { label: specLabels.connection, value: "Threaded shut-off valve" },
    ],
  },
];
