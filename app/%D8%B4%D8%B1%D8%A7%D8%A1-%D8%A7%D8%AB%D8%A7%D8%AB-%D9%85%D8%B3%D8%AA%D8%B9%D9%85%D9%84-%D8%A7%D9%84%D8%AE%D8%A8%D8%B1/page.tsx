import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FAQSection } from "@/components/FAQSection";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Armchair, Sparkles, Phone, ShieldCheck, Truck, Banknote, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const PAGE_URL = "https://buyallscrapksa.com/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AE%D8%A8%D8%B1";

export const metadata: Metadata = {
  // Exact-match target keyword now appears in the title, not just a variant of it
  title: "شراء الاثاث مستعمل الخبر | أفضل مشتري أثاث مستعمل بأعلى سعر كاش",
  description:
    "شراء الاثاث مستعمل الخبر بأعلى سعر وكاش فوري. نشتري غرف النوم، المجالس، الكنب، المطابخ، ومعدات المطاعم والمقاهي بالخبر وجميع أحيائها، مع فك ونقل مجاني بنفس اليوم.",
  keywords: [
    "شراء الاثاث مستعمل الخبر",
    "شراء اثاث مستعمل بالخبر",
    "شراء أثاث مستعمل بالخبر",
    "مشتري أثاث مستعمل بالخبر",
    "شراء اثاث مستعمل الخبر",
    "used furniture buyer Khobar",
    "sell used furniture Khobar",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "شراء الاثاث مستعمل الخبر | أفضل تثمين ونقل مجاني كاش",
    description: "نشتري الأثاث المستعمل والمجالس والمطابخ بأعلى الأسعار بالخبر والراكة والحزام الذهبي والعزيزية. دفع فوري ونقل مجاني بنفس اليوم.",
    url: PAGE_URL,
    // FIXED: was "شراء مكيفات مستعمل القطيف" — wrong city, wrong product,
    // copy-pasted from another page (same bug as the Dammam page had).
    siteName: "شراء اثاث مستعمل الخبر - buyallscrapksa.com",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://buyallscrapksa.com/og-image-khobar-furniture.jpg",
        width: 1200,
        height: 630,
        alt: "شراء اثاث مستعمل الخبر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شراء الاثاث مستعمل الخبر | أفضل تثمين ونقل مجاني كاش",
    description: "نشتري الأثاث المستعمل والمجالس والمطابخ بأعلى الأسعار بالخبر. دفع فوري ونقل مجاني.",
  },
};

export default function KhobarArabicFurniturePage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء الاثاث مستعمل الخبر",
    description: "شراء وتثمين كافة قطع الأثاث المستعمل، غرف النوم، المجالس، والمطابخ بأعلى الأسعار بالخبر.",
    serviceType: "Used Furniture Buying Service",
    url: "/شراء-الاثاث-مستعمل-الخبر",
  });

  // NEW: BreadcrumbList schema to match the visual breadcrumb (missing before)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: "/" },
    { name: "شراء الاثاث مستعمل الخبر", url: "/شراء-الاثاث-مستعمل-الخبر" },
  ]);

  const pageFaqs = [
    {
      question: "ما هي أحياء مدينة الخبر التي تغطونها لمشتري الأثاث؟",
      answer: "نغطي كافة أحياء الخبر (الحزام الذهبي، الحزام الأخضر، الراكة، الثقبة، العقربية، الجسر، الشاطئ، والعزيزية) في غضون 30-45 دقيقة.",
    },
    {
      question: "ما هي أنواع الأثاث التي تشترونها بالخبر؟",
      answer: "نشتري غرف النوم الكاملة، المجالس والكنب، طاولات الطعام، المطابخ الألومنيوم والخشب، ومعدات المطاعم والمقاهي المستعملة.",
    },
    {
      question: "هل يتم الدفع نقداً كاش قبل الفك والتحميل؟",
      answer: "نعم، يتم الدفع نقداً (كاش) فوراً في الموقع قبل البدء في فك وتحميل الأثاث.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs), breadcrumbSchema]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "شراء الاثاث مستعمل الخبر", url: "/شراء-الاثاث-مستعمل-الخبر" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span>مشتري أثاث مستعمل معتمد بالخبر • buyallscrapksa.com</span>
            </div>
            {/* H1 now contains the exact target phrase "شراء الاثاث مستعمل الخبر" */}
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء الاثاث مستعمل الخبر بأعلى تقييم كاش
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              إذا كنت تبحث عن جهة موثوقة لـ <strong>شراء الاثاث مستعمل الخبر</strong> لنقل عفشك أو تجديد أثاث منزلك، فإننا نضمن لك أعلى سعر مجزي مع خدمة فك وتغليف ونقل مباشر مجاني 100%.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع اثاث مستعمل بالخبر. أرجو التواصل وإرسال التثمين.")}
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
              {/* Fixed typo: "بأعلى السبل" (nonsensical) -> "بأعلى الأسعار" (highest prices) */}
              <h2 className="text-2xl font-black text-slate-900 border-r-4 border-indigo-600 pr-3">
                شراء الاثاث مستعمل الخبر بأعلى الأسعار
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                نحن متخصصون في <strong>شراء الاثاث مستعمل الخبر</strong> بكافة أشكاله وحالاته. نصل إليك فوراً في الخبر، الراكة، الثقبة، الحزام الذهبي، والعزيزية للمعاينة وإعطاء التقييم العادل والمستحق.
              </p>
              {/* NEW paragraph: adds topical depth + more natural keyword variants for the same intent */}
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                سواء كنت تبحث عن <strong>مشتري أثاث مستعمل بالخبر</strong> بسبب الانتقال لمنزل جديد، أو تجديد الديكور، أو إغلاق مكتب أو مطعم، فريقنا يعاين القطع في موقعك، يعطيك سعراً عادلاً في نفس اللحظة، ويتكفل بالفك والتحميل والنقل دون أي تكلفة إضافية عليك.
              </p>
            </div>

            {/* NEW: areas-covered list — adds relevant local content Google can match against
                "near me" / neighborhood-level searches */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                نغطي جميع أحياء الخبر
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                الحزام الذهبي، الحزام الأخضر، الراكة، الثقبة، العقربية، الجسر، الشاطئ، والعزيزية — نصلك خلال 30-45 دقيقة فقط.
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
                تواصل معنا بالواتساب للحصول على تسعيرة فورية لأثاثك المستعمل بالخبر.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع أثاث مستعمل بالخبر.")}
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