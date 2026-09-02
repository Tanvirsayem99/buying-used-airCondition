import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FAQSection } from "@/components/FAQSection";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Armchair, Sparkles, Phone, ShieldCheck, Truck, Banknote, UtensilsCrossed, Sofa } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const CANONICAL_PATH = "/شراء-اثاث-مستعمل-القطيف";

export const metadata: Metadata = {
  title: "شراء اثاث مستعمل بالقطيف | أفضل الأسعار وكاش فوري",
  description: "افضل مشتري اثاث مستعمل بالقطيف. نشتري غرف النوم، المجالس، الكنب، المطابخ، ومعدات المطاعم والمقاهي بالقطيف والدفع كاش فوري مع فك ونقل مجاني.",
  keywords: [
    "شراء اثاث مستعمل بالقطيف",
    "شراء أثاث مستعمل بالقطيف",
    "مشتري أثاث مستعمل بالقطيف",
    "شراء اثاث مستعمل القطيف",
    "used furniture buyer Qatif",
    "sell used furniture Qatif",
  ],
  alternates: {
    canonical: `https://buyallscrapksa.com${CANONICAL_PATH}`,
  },
  openGraph: {
    title: "شراء اثاث مستعمل بالقطيف | أفضل تثمين ونقل مجاني كاش",
    description: "نشتري الأثاث المستعمل والمجالس والمطابخ بأعلى الأسعار بالقطيف وسيهات وتاروت وصفوى. دفع فوري ونقل مجاني بنفس اليوم.",
    url: `https://buyallscrapksa.com${CANONICAL_PATH}`,
    // Neutral site name so this page builds its own topical relevance for
    // "furniture" instead of inheriting an AC-first brand signal.
    siteName: "buyallscrapksa.com | نشتري الكل بالقطيف",
    type: "website",
  },
};

export default function QatifFurniturePage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء اثاث مستعمل بالقطيف",
    description: "شراء وتثمين كافة قطع الأثاث المستعمل، غرف النوم، المجالس، والمطابخ بأعلى الأسعار بالقطيف.",
    serviceType: "Used Furniture Buying Service",
    url: CANONICAL_PATH,
  });

  const pageFaqs = [
    {
      question: "ما هي أحياء ومناطق القطيف التي تغطونها لمشتري الأثاث؟",
      answer: "نغطي كافة أحياء مدينة القطيف (المجيدية، الشاطئ، الناصرة، المنيرة، المزروع، سيهات، تاروت، صفوى، والعوامية) في غضون 30 دقيقة.",
    },
    {
      question: "ما هي أنواع الأثاث التي تشترونها بالقطيف؟",
      answer: "نشتري غرف النوم الكاملة، المجالس والكنب، طاولات الطعام، المطابخ الألومنيوم والخشب، ومعدات المطاعم والمقاهي المستعملة.",
    },
    {
      question: "هل يتم الدفع نقداً كاش قبل الفك والتحميل بالقطيف؟",
      answer: "نعم، يتم الدفع نقداً (كاش) فوراً في الموقع قبل البدء في فك وتحميل الأثاث.",
    },
    {
      question: "كيف يتم تحديد سعر الأثاث المستعمل؟",
      answer: "يتم تحديد السعر بناءً على نوع القطعة، حالتها العامة، الخامة (خشب طبيعي، MDF، ألمنيوم)، وعمرها التشغيلي. يمكنك استخدام حاسبة التقييم أعلاه للحصول على تقدير سريع.",
    },
    {
      question: "هل تشترون الأثاث المتضرر أو الذي يحتاج إصلاح؟",
      answer: "نعم، نشتري الأثاث بمختلف حالاته سواء كان بحالة ممتازة أو يحتاج صيانة بسيطة، بأسعار عادلة تعكس الحالة الفعلية.",
    },
  ];
  const furnitureTypes = [
    {
      icon: Armchair,
      title: "غرف النوم",
      desc: "غرف نوم مزدوجة، مفردة، وأطفال بكامل قطعها (سرير، دولاب، تسريحة، كومودينو) بأي خامة.",
      img: "/images/furniture-bedroom.jpg",
      alt: "شراء غرفة نوم مستعملة بالقطيف",
    },
    {
      icon: Sofa,
      title: "المجالس والكنب",
      desc: "طقومات كنب عربي وإفرنجي، مجالس أرضية، وكراسي منفردة بجميع الأحجام والخامات.",
      img: "/images/furniture-majlis.jpg",
      alt: "شراء مجالس وكنب مستعمل بالقطيف",
    },
    {
      icon: Banknote,
      title: "طاولات السفرة",
      desc: "طاولات سفرة كاملة مع الكراسي، طاولات صالة، وطاولات مكتب منزلي.",
      img: "/images/furniture-dining.jpg",
      alt: "شراء طاولة سفرة مستعملة بالقطيف",
    },
    {
      icon: ShieldCheck,
      title: "المطابخ",
      desc: "مطابخ ألمنيوم وخشب بكامل تجهيزاتها، وحدات علوية وسفلية، وأسطح رخام أو كوريان.",
      img: "/images/furniture-kitchen.jpg",
      alt: "شراء مطبخ مستعمل بالقطيف",
    },
    {
      icon: UtensilsCrossed,
      title: "معدات المطاعم والمقاهي",
      desc: "طاولات وكراسي تجارية، ثلاجات عرض، أفران، وتجهيزات المطابخ التجارية بالكامل.",
      img: "/images/furniture-restaurant.jpg",
      alt: "شراء معدات مطاعم ومقاهي مستعملة بالقطيف",
    },
    {
      icon: Truck,
      title: "قطع متفرقة",
      desc: "مكاتب، خزائن ملفات، أثاث مكتبي، ومفروشات منزلية أخرى غير مذكورة أعلاه.",
      img: "/images/furniture-misc.jpg",
      alt: "شراء أثاث متنوع مستعمل بالقطيف",
    },
  ];
  const testimonials = [
    {
      quote:
        "بعت غرفة نوم كاملة ومجلس عربي، السعر كان ممتاز والفريق فك ونقل كل شي بدون أي خدش. ما توقعت السرعة هذي.",
      name: "أم فيصل العلي",
      area: "القطيف - حي الشاطئ",
      detail: "بيع غرفة نوم ومجلس",
    },
    {
      quote:
        "عندي مطعم صغير بصفوى وأغلقته، تواصلت معهم لبيع طاولات وكراسي وثلاجة عرض. جاؤوا بنفس اليوم واشتروا الكل كاش.",
      name: "خالد الرمضان",
      area: "صفوى",
      detail: "بيع معدات مطعم كاملة",
    },
    {
      quote:
        "أرسلت صور المطبخ عبر الواتساب واستلمت تقييم خلال دقائق. الفك احترافي والدفع كان فوري بدون أي تأخير.",
      name: "منى الشيخ",
      area: "تاروت",
      detail: "بيع مطبخ ألمنيوم",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs)]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "شراء اثاث مستعمل بالقطيف", url: "/شراء-اثاث-مستعمل-القطيف" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span>مشتري أثاث مستعمل معتمد بالقطيف • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء اثاث مستعمل بالقطيف بأعلى تقييم كاش
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              إذا كنت تبحث عن <strong>مشتري أثاث مستعمل بالقطيف</strong> لنقل عفشك أو تجديد أثاث منزلك، فإننا نضمن لك أعلى سعر مجزي مع خدمة فك وتغليف ونقل مباشر مجاني 100%.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع اثاث مستعمل بالقطيف. أرجو التواصل وإرسال التثمين.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-700/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>أرسل صور الأثاث عبر الواتساب</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="px-6 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-cyan-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>اتصل بنا الآن: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 border-r-4 border-indigo-600 pr-3">
                شراء أثاث مستعمل ومجالس بالقطيف بأعلى السبل
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                نحن متخصصون في <strong>شراء أثاث مستعمل بالقطيف</strong> بكافة أشكاله وحالاته. نصل إليك فوراً في القطيف، تاروت، سيهات، صفوى، والعوامية للمعاينة وإعطاء التقييم العادل والمستحق.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Armchair className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">غرف النوم والمجالس</h3>
                  <p className="text-xs text-slate-500 mt-1">غرف نوم مزدوجة وأطفال، طقومات كنب ومجالس عربية.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Banknote className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">دفع كاش فوري</h3>
                  <p className="text-xs text-slate-500 mt-1">الدفع نقداً قبل التحميل مباشرة.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Truck className="w-6 h-6 text-cyan-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">فك وتغليف مجاني</h3>
                  <p className="text-xs text-slate-500 mt-1">عمالة مدربة على التعامل الاحترافي مع الأثاث.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">أفضل تثمين في السوق</h3>
                  <p className="text-xs text-slate-500 mt-1">تقييم عادل للقطع النظيفة ذات الجودة العالية.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-indigo-900 to-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-indigo-500/30">
              <h3 className="text-xl font-black">أرسل صور أثاثك للتثمين</h3>
              <p className="text-xs text-slate-300 font-medium">
                تواصل معنا بالواتساب للحصول على تسعيرة فورية لأثاثك المستعمل بالقطيف.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع أثاث مستعمل بالقطيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>
          </div>
        </section>

        <FAQSection />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
