export interface ContentType {
  nav: {
    home: string;
    services: string;
    whyUs: string;
    howItWorks: string;
    coverage: string;
    testimonials: string;
    faq: string;
    contact: string;
    callNow: string;
    whatsappUs: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    callBtn: string;
    whatsappBtn: string;
    instantCash: string;
    freePickup: string;
    bestPrice: string;
    availability247: string;
    trustTitle: string;
    statNumber1: string;
    statLabel1: string;
    statNumber2: string;
    statLabel2: string;
    statNumber3: string;
    statLabel3: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    step1Label: string;
    step2Label: string;
    step3Label: string;
    types: { id: string; name: string; icon: string; defaultEst: string }[];
    conditions: { id: string; name: string; multiplier: number }[];
    quantityLabel: string;
    estimatedRange: string;
    disclaimer: string;
    submitWhatsapp: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      features: string[];
      badge: string;
      icon: string;
    }[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  coverage: {
    title: string;
    subtitle: string;
    badge: string;
    cities: { name: string; main: boolean }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    reviews: {
      name: string;
      location: string;
      comment: string;
      rating: number;
      date: string;
      itemSold: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      q: string;
      a: string;
    }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    callNow: string;
    whatsappUs: string;
  };
  footer: {
    aboutTitle: string;
    aboutDesc: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    hoursLabel: string;
    rights: string;
  };
}

export const PHONE_NUMBER = "+966531487293";
export const WHATSAPP_NUMBER = "966531487293";
export const DISPLAY_PHONE = "053 148 7293";

/**
 * Robust WhatsApp number formatter ensuring correct international Saudi Arabia (966) format
 */
export function formatWhatsAppNumber(phone: string): string {
  if (!phone) return "966531487293";
  let cleaned = phone.replace(/\D/g, "");

  // Handle local 05xxxxxxxx (10 digits) -> 9665xxxxxxxx
  if (cleaned.startsWith("05") && cleaned.length === 10) {
    cleaned = "966" + cleaned.substring(1);
  }
  // Handle 00966...
  if (cleaned.startsWith("00966")) {
    cleaned = cleaned.substring(2);
  }
  // Handle typo 9965...
  if (cleaned.startsWith("9965")) {
    cleaned = "966" + cleaned.substring(3);
  }
  // Handle local 5xxxxxxxx (9 digits) -> 9665xxxxxxxx
  if (cleaned.startsWith("5") && cleaned.length === 9) {
    cleaned = "966" + cleaned;
  }

  return cleaned;
}

export function getWhatsAppUrl(phone: string, message: string = ""): string {
  const cleanPhone = formatWhatsAppNumber(phone || WHATSAPP_NUMBER);
  const encodedText = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}${encodedText ? `&text=${encodedText}` : ""}`;
}

export const siteContent: Record<'ar' | 'en', ContentType> = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      whyUs: "لماذا نحن",
      howItWorks: "كيف نعمل",
      coverage: "مناطق الخدمة",
      testimonials: "آراء العملاء",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      callNow: "اتصل الآن",
      whatsappUs: "تواصل واتساب",
    },
    hero: {
      badge: "الخدمة الأولى لشراء المكيفات في القطيف، الدمام، والخبر",
      title: "شراء مكيفات مستعملة بأعلى الأسعار في",
      titleHighlight: "القطيف والدمام والخبر",
      subtitle: "نشتري جميع أنواع المكيفات (سبليت، شباك، مركزي) والأجهزة الكهربائية المستعملة في القطيف، الدمام، والخبر. دفع نقدي فوراً في الموقع مع خدمة الفك والنقل المباشر المجاني!",
      callBtn: "اتصل بنا الآن",
      whatsappBtn: "أرسل الصور عبر الواتساب",
      instantCash: "دفع نقدي فوري",
      freePickup: "فك ونقل مجاني 100%",
      bestPrice: "أفضل تقييم وسعر",
      availability247: "خدمة 24/7 طوال الأسبوع",
      trustTitle: "أكثر من 10,000 عميل يثقون بنا في القطيف والدمام والخبر",
      statNumber1: "+15,000",
      statLabel1: "مكيف تم شراؤه",
      statNumber2: "100%",
      statLabel2: "دفع نقدي فوري",
      statNumber3: "30 دقيقة",
      statLabel3: "متوسط وقت الوصول",
    },
    calculator: {
      title: "حاسبة تقدير السعر الفوري",
      subtitle: "اختر نوع المكيف أو الجهاز واحصل على تقدير تقريبي للسعر مع إمكانية إرسال التفاصيل مباشرة إلى الواتساب!",
      step1Label: "1. اختر نوع الجهاز",
      step2Label: "2. حالة الجهاز",
      step3Label: "3. العدد المطلوب بيعه",
      types: [
        { id: "split", name: "مكيف سبليت (Split AC)", icon: "Wind", defaultEst: "500 - 1500 ر.س" },
        { id: "window", name: "مكيف شباك (Window AC)", icon: "Grid", defaultEst: "300 - 800 ر.س" },
        { id: "central", name: "مكيف مركزي / دولابي", icon: "Server", defaultEst: "1000 - 3500 ر.س" },
        { id: "fridge", name: "ثلاجة / فريزر", icon: "Box", defaultEst: "400 - 1200 ر.س" },
        { id: "washer", name: "غسالة ملابس / صحون", icon: "RefreshCw", defaultEst: "300 - 900 ر.س" },
        { id: "furniture", name: "أثاث ومجالس مستعملة", icon: "Armchair", defaultEst: "حسب المعاينة" },
      ],
      conditions: [
        { id: "excellent", name: "ممتاز (يعمل بكفاءة عالية)", multiplier: 1.0 },
        { id: "good", name: "جيد (يعمل مع استهلاك عادي)", multiplier: 0.8 },
        { id: "faulty", name: "عطلان / تحتاج صيانة", multiplier: 0.5 },
      ],
      quantityLabel: "عدد الأجهزة:",
      estimatedRange: "التقييم التقديري:",
      disclaimer: "* السعر النهائي يتم تحديده بعد معاينة الصور عبر الواتساب أو الفحص الميداني الفوري.",
      submitWhatsapp: "طلب تقييم مؤكد عبر الواتساب",
    },
    services: {
      title: "خدماتنا المميزة في شراء المستعمل",
      subtitle: "نغطي كافة احتیاجاتك لشراء الأجهزة الكهرومنزلية والمكيفات بجميع أنواعها وحالاتها في القطيف، الدمام، والخبر.",
      items: [
        {
          id: "split-ac",
          title: "شراء مكيفات سبليت مستعملة",
          description: "نشتري جميع أحجام وماركات مكيفات السبليت (18، 24، 30، 36 ألف وحدة) شغال أو عطلان بأعلى الأسعار في القطيف والدمام والخبر.",
          features: ["ال جي، أو جنرال، جري، ماندو، سامسونج", "دفع فوري نقداً عند الاستلام", "فك احترافي وسريع بدون أضرار للجدار"],
          badge: "الأكثر طلباً",
          icon: "Wind",
        },
        {
          id: "window-ac",
          title: "شراء مكيفات شباك مستعملة",
          description: "نشتري مكيفات الشباك بجميع الموديلات القديمة والحديثة، الكميات الفردية والمشاريع بالكامل.",
          features: ["نشتري جميع الحالات والأحجام", "نقل مجاني فور الاتفاق", "تقييم عادل وسريع جداً"],
          badge: "دفع نقدي",
          icon: "Grid",
        },
        {
          id: "central-ac",
          title: "شراء مكيفات مركزية ودولابي",
          description: "شراء مكيفات الكاسيت، الدولابي، والمركزية للمنازل والفلل والمحلات التجارية والمطاعم.",
          features: ["تثمين عالي للمكيفات ذات القدرة الكبيرة", "طاقم فني متخصص في الفك والتنظيف", "سيارات نقل مجهزة للكميات الثقيلة"],
          badge: "أسعار ممتازة",
          icon: "Server",
        },
        {
          id: "appliances",
          title: "شراء الأجهزة الكهربائية المستعملة",
          description: "نشتري الثلاجات، الفريزرات، الغسالات، الأفران، والميكروويف بأسعار منافسة جداً في القطيف والدمام والخبر.",
          features: ["ثلاجات بوش، توشيبا، ال جي، سامسونج", "غسالات اتوماتيك وعادية", "خدمة تحميل ونقل فورية"],
          badge: "خدمة شاملة",
          icon: "Refrigerator",
        },
        {
          id: "furniture",
          title: "شراء الأثاث ومعدات المطاعم",
          description: "شراء غرف النوم، المجالس، المطابخ، ومعدات المقاهي والمطاعم المستعملة بأعلى تقييم.",
          features: ["معاينة وتسعير في غضون دقائق", "فك وتغليف ونقل مجاني", "أسعار عادلة ومناسبة للجميع"],
          badge: "تثمين عالي",
          icon: "Armchair",
        },
        {
          id: "pickup-service",
          title: "خدمة الفك والنقل المباشر المجاني",
          description: "لا تقلق بشأن الفك والتحميل! نتحمل كافة مصاريف الفك والنقل والتحميل من باب منزلك مجاناً.",
          features: ["فنيين متخصصين في فك التكييف", "نقل آمن وسريع بنفس اليوم", "0 ريال تكاليف إضافية عليك"],
          badge: "100% مجاناً",
          icon: "Truck",
        },
      ],
    },
    whyUs: {
      title: "لماذا تختارنا لبيع مكيفك المستعمل؟",
      subtitle: "نضمن لك تجربة بيع سهلة، مريحة، ومربحة مع أعلى درجات المصداقية والسرعة في القطيف والدمام والخبر.",
      cards: [
        {
          title: "أعلى سعر في القطيف، الدمام، والخبر",
          description: "نقدم أفضل تقييم مالي عادل لمكيفك وأجهزتك المستعملة مقارنة بالسوق المحلي دون بخس للأسعار.",
          icon: "DollarSign",
        },
        {
          title: "دفع نقدي فوري (كاش)",
          description: "تسليم المبلغ نقداً كاملاً في يدك مباشرة قبل التحميل أو عبر تحويل بانكي فوري حسب رغبتك.",
          icon: "ShieldCheck",
        },
        {
          title: "فك ونقل مجاني 100%",
          description: "فريقنا المتخصص يقوم بفك المكيفات والأجهزة ونقلها من منزلك دون تحميلك أي ريال واحد.",
          icon: "Truck",
        },
        {
          title: "سرعة الاستجابة ووصول فوري",
          description: "نصل إليك في أي مكان في القطيف، الدمام، الخبر، سيهات، وتاروت خلال 30 إلى 60 دقيقة فقط من اتصالك.",
          icon: "Clock",
        },
        {
          title: "خدمة 24/7 طوال أيام الأسبوع",
          description: "نستقبل اتصالاتكم ورسائلكم عبر الواتساب على مدار الساعة طوال أيام الأسبوع وفي العطلات.",
          icon: "PhoneCall",
        },
        {
          title: "مصداقية وأمان تام",
          description: "فريق عمل سعودي وفنيين محترفين يضمنون معاملة راقية، سرعة في التنفيذ وأمان تام داخل منزلك.",
          icon: "Award",
        },
      ],
    },
    howItWorks: {
      title: "كيف تتم عملية البيع؟ (3 خطوات بسيطة)",
      subtitle: "عملية بيع سهلة ومباشرة لا تتطلب منك أي مجهود، فقط اتصل بنا ونحن نتكفل بالباقي!",
      steps: [
        {
          number: "01",
          title: "تواصل معنا (اتصال أو واتساب)",
          description: "قم بالاتصال بنا على الرقم 0531487293 أو أرسل صور المكيف والجهاز عبر الواتساب مباشرة.",
          icon: "MessageSquare",
        },
        {
          number: "02",
          title: "احصل على السعر الفوري",
          description: "نقوم بتقييم الصور فوراً وإعطائك أفضل سعر مجزي لمكيفك أو جهازك المستعمل.",
          icon: "Calculator",
        },
        {
          number: "03",
          title: "الفك، النقل والدفع النقدي",
          description: "يصل طاقمنا إلى موقعك، يتم فك الجهاز وتسليمك المبلغ نقداً فوراً ثم تحميل الجهاز.",
          icon: "CheckCircle",
        },
      ],
    },
    coverage: {
      title: "مناطق تغطية الخدمة في القطيف، الدمام، والخبر",
      subtitle: "نصل إليك أينما كنت في القطيف، الدمام، الخبر، وجميع المدن والمناطق المجاورة لها بنفس السرعة والخدمة الممتازة.",
      badge: "تغطية شاملة: القطيف • الدمام • الخبر",
      cities: [
        { name: "مدينة القطيف (المجيدية، الشاطئ، الناصرة، المزروع)", main: true },
        { name: "مدينة الدمام (كافة الأحياء والمناطق)", main: true },
        { name: "مدينة الخبر والظهران (كافة الأحياء)", main: true },
        { name: "جزيرة تاروت والربيعية والسنابس", main: true },
        { name: "سيهات وأحياء الكوثر والمنتزه", main: true },
        { name: "صفوى وأم الساهك", main: true },
        { name: "عنك والجش والملاحة", main: true },
        { name: "الأوجام والقديح والبحاري", main: true },
      ],
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا في القطيف والدمام والخبر؟",
      subtitle: "تقييمات حقيقية من عملائنا الكرام الذين استعانوا بخدماتنا لشراء مكيفاتهم وأجهزتهم المستعملة.",
      reviews: [
        {
          name: "أبو أحمد الخالدي",
          location: "القطيف - حي المجيدية",
          comment: "ماشاء الله تبارك الله، سرعة في التجاوب ومصداقية عالية. تم فك 4 مكيفات سبليت من منزلي وتسليم المبلغ كاش بنفس الساعة. ننصح بالتعامل معهم بشدة.",
          rating: 5,
          date: "منذ يومين",
          itemSold: "بيع 4 مكيفات سبليت",
        },
        {
          name: "سعود الدوسري",
          location: "الدمام - حي الشاطئ",
          comment: "أفضل سعر حصلت عليه في الدمام والشرقية لمكيفات كاسيت وسبليت. وصلوا في الموعد بالضبط والفك مجاني بدون تكاليف إضافية.",
          rating: 5,
          date: "منذ 3 أيام",
          itemSold: "بيع 5 مكيفات سبليت",
        },
        {
          name: "فهد الهاجري",
          location: "الخبر - حي الحزام الذهبي",
          comment: "تواصلت معاهم بالواتساب وارسل الصور، اعطوني تقييم ممتاز وخلال 45 دقيقة وصلوا للخبر وبدوا بالفك وعطوني الفلوس كاش. خدمة 5 نجوم.",
          rating: 5,
          date: "منذ أسبوع",
          itemSold: "بيع ثلاجة ومكيف دولابي",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة حول شراء المكيفات المستعملة",
      subtitle: "إجابات على أبرز تساؤلاتكم حول آلية التسعير، الفك، النقل ومواعيد الوصول.",
      questions: [
        {
          q: "هل خدمة الفك والنقل مجانية أم يتم خصمها من سعر المكيف؟",
          a: "خدمة الفك والنقل والتحميل مجانية 100% ولا نخصم أي ريال من السعر المتفق عليه لمكيفك.",
        },
        {
          q: "هل تشترون المكيفات العطلانية والتي لا تعمل؟",
          a: "نعم! نشتري جميع أنواع المكيفات سواء كانت شغال بحالة ممتازة أو عطلانة وتالفة وتحتاج صيانة بأسعار عادلة.",
        },
        {
          q: "كم يستغرق وصول الفريق إلى منزلي في القطيف أو الدمام أو الخبر؟",
          a: "نصل إليك في غضون 30 إلى 60 دقيقة فقط من تأكيد الطلب في القطيف، الدمام، الخبر، تاروت، وسيهات.",
        },
        {
          q: "كيف يتم تحديد سعر المكيف المستعمل؟",
          a: "يتم تحديد السعر بناءً على نوع المكيف (سبليت أو شباك)، سعة التبريد (بالوحدة)، الماركة، العمر التشغيلي والحالة العامة للجهاز.",
        },
        {
          q: "ما هي طريقة الدفع؟",
          a: "الدفع يتم نقداً (كاش) فوراً في موقعك وقبل تحميل المكيف، أو عن طريق تحويل بانكي مباشر وحسب رغبتك.",
        },
        {
          q: "هل تشترون الأجهزة الكهربائية الأخرى غير المكيفات؟",
          a: "نعم، نشتري الثلاجات، الفريزرات، غسالات الملابس، الأفران، وغرف النوم والأثاث المستعمل.",
        },
      ],
    },
    ctaBanner: {
      title: "هل لديك مكيفات أو أجهزة مستعملة تريد بيعها الآن؟",
      subtitle: "تواصل معنا فوراً واحصل على أعلى سعر نقدي في القطيف، الدمام، والخبر مع خدمة فك ونقل مجاني بنفس اليوم!",
      callNow: "اتصل بنا الآن: 0531487293",
      whatsappUs: "أرسل الصور على الواتساب",
    },
    footer: {
      aboutTitle: "شراء مكيفات مستعمل القطيف والشرقية",
      aboutDesc: "المؤسسة الرائدة في شراء وتثمين جميع أنواع المكيفات والأجهزة الكهربائية المستعملة في القطيف، الدمام، الخبر، والمنطقة الشرقية بأعلى الأسعار ودفع نقدي فوري.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا الرئيسية",
      contactTitle: "معلومات التواصل",
      phoneLabel: "الهاتف / الاتصال المباشر:",
      whatsappLabel: "محادثة الواتساب المباشرة:",
      locationLabel: "مناطق التغطية: القطيف، الدمام، الخبر، تاروت، سيهات، صفوى",
      hoursLabel: "ساعات العمل: 24/7 طوال أيام الأسبوع",
      rights: "جميع الحقوق محفوظة © 2026 شراء مكيفات مستعمل القطيف والدمام والخبر.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      whyUs: "Why Choose Us",
      howItWorks: "How It Works",
      coverage: "Service Areas",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      callNow: "Call Now",
      whatsappUs: "WhatsApp",
    },
    hero: {
      badge: "#1 Used AC Buyer in Qatif, Dammam & Al Khobar",
      title: "We Buy Used Air Conditioners at Best Cash Prices in",
      titleHighlight: "Qatif, Dammam & Al Khobar",
      subtitle: "We purchase all types of Split ACs, Window ACs, Central ACs & Home Appliances across Qatif, Dammam, and Al Khobar. Instant spot cash payment with 100% FREE dismantling and pickup!",
      callBtn: "Call Us Now",
      whatsappBtn: "Send Photos via WhatsApp",
      instantCash: "Instant Cash Payment",
      freePickup: "100% Free Dismantling & Removal",
      bestPrice: "Highest Valuation Guarantee",
      availability247: "24/7 Availability",
      trustTitle: "Over 10,000+ Satisfied Customers in Qatif, Dammam & Al Khobar",
      statNumber1: "+15,000",
      statLabel1: "AC Units Purchased",
      statNumber2: "100%",
      statLabel2: "Instant Spot Cash",
      statNumber3: "30 Mins",
      statLabel3: "Average Arrival Time",
    },
    calculator: {
      title: "Instant Price Estimate Calculator",
      subtitle: "Select your appliance type and condition to get an approximate evaluation, then send details directly to WhatsApp!",
      step1Label: "1. Select Item Type",
      step2Label: "2. Item Condition",
      step3Label: "3. Quantity to Sell",
      types: [
        { id: "split", name: "Split Air Conditioner", icon: "Wind", defaultEst: "500 - 1500 SAR" },
        { id: "window", name: "Window Air Conditioner", icon: "Grid", defaultEst: "300 - 800 SAR" },
        { id: "central", name: "Central / Cabinet AC", icon: "Server", defaultEst: "1000 - 3500 SAR" },
        { id: "fridge", name: "Refrigerator / Freezer", icon: "Box", defaultEst: "400 - 1200 SAR" },
        { id: "washer", name: "Washing Machine / Dryer", icon: "RefreshCw", defaultEst: "300 - 900 SAR" },
        { id: "furniture", name: "Used Furniture & Sofa Sets", icon: "Armchair", defaultEst: "On Inspection" },
      ],
      conditions: [
        { id: "excellent", name: "Excellent (Working Great)", multiplier: 1.0 },
        { id: "good", name: "Good (Normal wear & tear)", multiplier: 0.8 },
        { id: "faulty", name: "Faulty / Needs Repair", multiplier: 0.5 },
      ],
      quantityLabel: "Number of Units:",
      estimatedRange: "Estimated Range:",
      disclaimer: "* Final price is confirmed after reviewing photos via WhatsApp or on-site inspection.",
      submitWhatsapp: "Request Instant Quote on WhatsApp",
    },
    services: {
      title: "Our Specialized Services",
      subtitle: "Comprehensive solutions for buying all types of used air conditioners and household appliances in Qatif, Dammam, and Al Khobar.",
      items: [
        {
          id: "split-ac",
          title: "Used Split AC Buying",
          description: "We buy all sizes and brands of Split ACs (18k, 24k, 30k, 36k BTU) working or faulty at top rates in Qatif, Dammam & Al Khobar.",
          features: ["LG, O General, Gree, Mando, Samsung", "Instant cash upon pickup", "Safe, damage-free dismantling"],
          badge: "Most Popular",
          icon: "Wind",
        },
        {
          id: "window-ac",
          title: "Used Window AC Buying",
          description: "We purchase all models of window air conditioners, single units or bulk project clearances.",
          features: ["All conditions & sizes accepted", "Free transport upon agreement", "Fair & fast evaluation"],
          badge: "Spot Cash",
          icon: "Grid",
        },
        {
          id: "central-ac",
          title: "Central & Cabinet AC Buying",
          description: "Central, Cassette, and Floor Standing Cabinet ACs from homes, villas, shops, and restaurants.",
          features: ["Top rates for high capacity units", "Professional removal team", "Equipped trucks for bulk clearance"],
          badge: "Top Rates",
          icon: "Server",
        },
        {
          id: "appliances",
          title: "Used Home Appliances Buying",
          description: "We buy refrigerators, freezers, washing machines, gas stoves, and microwaves in Qatif, Dammam & Al Khobar.",
          features: ["Bosch, Toshiba, LG, Samsung refrigerators", "Automatic & manual washers", "Express loading service"],
          badge: "Full Service",
          icon: "Refrigerator",
        },
        {
          id: "furniture",
          title: "Used Furniture & Equipment Buying",
          description: "Bedroom sets, living room sofas, kitchen cabinets, and restaurant equipment evaluated at top prices.",
          features: ["Evaluation in minutes", "Free packing & transport", "Fair pricing guaranteed"],
          badge: "High Valuation",
          icon: "Armchair",
        },
        {
          id: "pickup-service",
          title: "Free Express Pickup & Dismantling",
          description: "Zero hassle for you! We handle all uninstallation, heavy lifting, and transport from your doorstep.",
          features: ["Certified AC removal technicians", "Same-day fast arrival", "0 SAR hidden charges"],
          badge: "100% Free",
          icon: "Truck",
        },
      ],
    },
    whyUs: {
      title: "Why Sell Your AC to Us?",
      subtitle: "We guarantee a seamless, lucrative, and stress-free selling experience with top market prices in Qatif, Dammam & Al Khobar.",
      cards: [
        {
          title: "Best Price in Qatif, Dammam & Al Khobar",
          description: "We provide the highest cash offers for your used ACs and home appliances without underquoting.",
          icon: "DollarSign",
        },
        {
          title: "Instant Cash Payment",
          description: "Receive 100% of your payment in cash directly on the spot before we load your appliances.",
          icon: "ShieldCheck",
        },
        {
          title: "100% Free Removal & Pickup",
          description: "Our expert team uninstalls and moves your equipment without charging a single Riyal.",
          icon: "Truck",
        },
        {
          title: "Rapid 30-Min Arrival",
          description: "Fast response across Qatif, Dammam, Al Khobar, Saihat, Tarout, and Safwa within 30 to 60 minutes.",
          icon: "Clock",
        },
        {
          title: "24/7 Service & WhatsApp",
          description: "Our phone lines and WhatsApp customer support are open around the clock 7 days a week.",
          icon: "PhoneCall",
        },
        {
          title: "Trusted & Safe Team",
          description: "Professional, polite technicians ensure quick execution, privacy, and safety at your home.",
          icon: "Award",
        },
      ],
    },
    howItWorks: {
      title: "How It Works (3 Easy Steps)",
      subtitle: "Simple and direct process — no effort required from your end!",
      steps: [
        {
          number: "01",
          title: "Contact Us (Call or WhatsApp)",
          description: "Call 0531487293 or send photos of your AC/Appliance directly via WhatsApp.",
          icon: "MessageSquare",
        },
        {
          number: "02",
          title: "Get Instant Fair Price Quote",
          description: "We evaluate your items immediately and offer you the highest market rate.",
          icon: "Calculator",
        },
        {
          number: "03",
          title: "Free Pickup & Instant Cash",
          description: "Our crew arrives, safely uninstalls the unit, hands you cash, and loads it up.",
          icon: "CheckCircle",
        },
      ],
    },
    coverage: {
      title: "Service Areas: Qatif, Dammam & Al Khobar",
      subtitle: "We reach you anywhere across Qatif, Dammam, Al Khobar, and surrounding cities with equal speed and quality.",
      badge: "Coverage: Qatif • Dammam • Al Khobar",
      cities: [
        { name: "Qatif City (Al-Majidiya, Al-Shati, Al-Nasrah, Al-Mazrou)", main: true },
        { name: "Dammam City (All Districts & Areas)", main: true },
        { name: "Al Khobar & Dhahran (All Districts)", main: true },
        { name: "Tarout Island, Al-Rabieah & Sanabis", main: true },
        { name: "Saihat, Al-Kawthar & Al-Muntazah", main: true },
        { name: "Safwa & Um Al-Sahak", main: true },
        { name: "Anak, Al-Jash & Al-Malaha", main: true },
        { name: "Al-Ajam, Al-Qudaih & Al-Buhairi", main: true },
      ],
    },
    testimonials: {
      title: "What Our Customers Say in Qatif, Dammam & Al Khobar",
      subtitle: "Real reviews from clients who sold their used ACs and appliances through our platform.",
      reviews: [
        {
          name: "Abu Ahmed Al-Khaldi",
          location: "Qatif - Al-Majidiya",
          comment: "Super fast response and top honesty! They uninstalled 4 split ACs from my villa and gave me cash right away. Highly recommended!",
          rating: 5,
          date: "2 days ago",
          itemSold: "Sold 4 Split ACs",
        },
        {
          name: "Saud Al-Dossary",
          location: "Dammam - Al-Shati",
          comment: "Best rate I found in Dammam for cassette and split ACs. Arrived right on time and uninstalled for free with no hidden charges.",
          rating: 5,
          date: "3 days ago",
          itemSold: "Sold 5 Split ACs",
        },
        {
          name: "Fahad Al-Hajri",
          location: "Al Khobar - Golden Belt",
          comment: "I sent photos on WhatsApp, got a great quote, and within 45 mins they arrived in Khobar with cash in hand. 5-star service!",
          rating: 5,
          date: "1 week ago",
          itemSold: "Sold Refrigerator & Cabinet AC",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions about pricing, removal, instant cash, and response times.",
      questions: [
        {
          q: "Is dismantling and pickup free, or deducted from the price?",
          a: "Dismantling, lifting, and transport are 100% FREE. We never deduct any fee from the agreed cash price.",
        },
        {
          q: "Do you buy non-working or faulty ACs?",
          a: "Yes! We buy ACs in all conditions — whether perfectly working, old, faulty, or damaged.",
        },
        {
          q: "How fast can your team reach my location in Qatif, Dammam, or Al Khobar?",
          a: "We arrive within 30 to 60 minutes of order confirmation anywhere in Qatif, Dammam, Al Khobar, Tarout, or Saihat.",
        },
        {
          q: "How is the used AC price calculated?",
          a: "Based on AC type (Split/Window), cooling capacity (BTU), brand, age, and general physical condition.",
        },
        {
          q: "What payment methods do you offer?",
          a: "Cash payment on the spot before loading, or instant bank transfer based on your preference.",
        },
        {
          q: "Do you buy other appliances besides ACs?",
          a: "Yes, we buy fridges, freezers, washing machines, stoves, bedroom sets, and used furniture.",
        },
      ],
    },
    ctaBanner: {
      title: "Have Used ACs or Appliances to Sell Today?",
      subtitle: "Get in touch now for the highest cash quote in Qatif, Dammam, and Al Khobar with free same-day removal!",
      callNow: "Call Us Now: 0531487293",
      whatsappUs: "Send Photos on WhatsApp",
    },
    footer: {
      aboutTitle: "Qatif, Dammam & Al Khobar Used AC Buyer",
      aboutDesc: "The leading buyer and evaluator of all types of used air conditioners and home appliances in Qatif, Dammam, Al Khobar & Eastern Province at highest market rates.",
      quickLinks: "Quick Links",
      servicesTitle: "Main Services",
      contactTitle: "Contact Info",
      phoneLabel: "Phone / Direct Call:",
      whatsappLabel: "Direct WhatsApp:",
      locationLabel: "Coverage: Qatif, Dammam, Al Khobar, Tarout, Saihat, Safwa",
      hoursLabel: "Working Hours: 24/7 Everyday",
      rights: "All rights reserved © 2026 Qatif, Dammam & Al Khobar Used AC Buyer.",
    },
  },
};
