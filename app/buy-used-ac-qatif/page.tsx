import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
const ValuationCalculator = dynamic(() => import("@/components/ValuationCalculator").then((m) => m.ValuationCalculator));
const FAQSection = dynamic(() => import("@/components/FAQSection").then((m) => m.FAQSection));
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Wind, CheckCircle2, ShieldCheck, Truck, Banknote, Sparkles, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شراء مكيفات مستعملة بالقطيف | مشتري مكيفات مستعمل قديمة وخربانة بأعلى سعر كاش",
  description:
    "افضل خدمة شراء مكيفات مستعملة بالقطيف. نشتري جميع أنواع المكيفات السبليت، الشباك، والمركزية (شغالة، قديمة، أو خربانة) بأعلى الأسعار كاش مع فك ونقل مجاني 100% بنفس اليوم.",
  keywords: [
    "شراء مكيفات مستعملة بالقطيف",
    "مشتري مكيفات مستعملة بالقطيف",
    "شراء مكيفات قديمة بالقطيف",
    "شراء مكيفات خربانة بالقطيف",
    "شراء مكيفات سكراب بالقطيف",
    "used AC buyer Qatif",
    "buy used air conditioners Qatif",
    "sell used AC Qatif",
    "buy old air conditioners Qatif",
    "AC scrap buyer Qatif",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/buy-used-ac-qatif",
  },
  openGraph: {
    title: "شراء مكيفات مستعملة بالقطيف | أعلى أسعار الكاش والفك المجاني",
    description:
      "تواصل معنا لبيع مكيفك المستعمل (سبليت، شباك، عطلان) بأعلى سعر في القطيف. خدمة فك ونقل مجاني ودفع كاش فوري.",
    url: "https://buyallscrapksa.com/buy-used-ac-qatif",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function UsedACPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء مكيفات مستعملة بالقطيف",
    description:
      "خدمة شراء وتثمين كافة أنواع المكيفات المستعملة القديمة والخربانة والسبليت والشباك بالقطيف ودفع نقدي فوري.",
    serviceType: "Used Air Conditioner Buying Service",
    url: "/buy-used-ac-qatif",
  });

  const pageFaqs = [
    {
      question: "هل تشترون المكيفات الخربانة والعطلانة بالقطيف؟",
      answer: "نعم، نشتري كافة المكيفات الخربانة والعطلانة وسكراب التكييف بالقطيف بأعلى سعر كاش مجزي.",
    },
    {
      question: "هل تكاليف الفك والنقل مجانية؟",
      answer: "نعم 100%! فني الفك والتحميل والنقل يصلك مجاناً ولا نخصم أي مبلغ من سعر المكيف.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs)]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "شراء مكيفات مستعملة بالقطيف", url: "/buy-used-ac-qatif" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>الخدمة الأولى بالقطيف • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء مكيفات مستعملة بالقطيف بأعلى سعر كاش
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              نحن <strong>مشتري مكيفات مستعملة بالقطيف</strong> نضمن لك الحصول على أفضل تقييم مالي لمكيفات السبليت، الشباك، والمركزية (شغالة، قديمة، أو خربانة). فك ونقل مجاني ودفع نقدي مباشر في الموقع.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع مكيفات مستعملة بالقطيف. أرجو التواصل وإرسال التقييم.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>أرسل صور المكيف على الواتساب</span>
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

        {/* Details Content & Benefits */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 border-r-4 border-cyan-600 pr-3">
                لماذا نحن أفضل مشتري مكيفات مستعملة بالقطيف؟
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                سواء كنت ترغب في <strong>شراء مكيفات قديمة بالقطيف</strong> أو تجديد أجهزة منزلية أو التخلص من <strong>شراء مكيفات خربانة بالقطيف</strong> وسكراب المكيفات، نحن في <span className="font-bold text-cyan-700">buyallscrapksa.com</span> نوفر لك أفضل خدمة سريعة وموثوقة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Banknote className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">دفع نقدي فوري (كاش)</h3>
                  <p className="text-xs text-slate-500 mt-1">تسليم المبلغ كاملاً في يدك قبل التحميل.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Truck className="w-6 h-6 text-cyan-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">فك ونقل مجاني 100%</h3>
                  <p className="text-xs text-slate-500 mt-1">طاقم فني متخصص بالفك السريع والآمن.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">تقييم عادل وغير مبخوس</h3>
                  <p className="text-xs text-slate-500 mt-1">نمنحك أعلى قيمة تسعيرية لمكيفك بناءً على حالته.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Wind className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">نشتري كافة الأنواع</h3>
                  <p className="text-xs text-slate-500 mt-1">سبليت، شباك، مركزي، عطلان، سكراب وقواعد النحاس.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">أنواع المكيفات التي نشتريها بالقطيف</h3>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span><strong>مكيفات سبليت مستعملة (Split AC):</strong> 18، 24، 30، 36 ألف وحدة من كافة الماركات.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span><strong>مكيفات شباك مستعملة (Window AC):</strong> جميع الاحجام والموديلات القديمة والحديثة.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span><strong>شراء مكيفات خربانة بالقطيف وسكراب:</strong> مكيفات محروقة الكمبروسر أو تالفة.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-cyan-900 to-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-cyan-500/30">
              <h3 className="text-xl font-black">احصل على تقدير سريع لمكيفك</h3>
              <p className="text-xs text-slate-300 font-medium">
                أرسل صورة المكيف عبر الواتساب وستصلك تسعيرتنا الفورية خلال دقائق معدودة.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع مكيف مستعمل بالقطيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>تقييم واتساب فوري</span>
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-base">مناطق الخدمة السريعة</h4>
              <div className="flex flex-col gap-2 text-xs font-semibold text-slate-700">
                <Link href="/regions/saihat" className="hover:text-cyan-600 p-2 rounded-lg bg-slate-50">
                  • شراء مكيفات مستعملة في سيهات
                </Link>
                <Link href="/regions/safwa" className="hover:text-cyan-600 p-2 rounded-lg bg-slate-50">
                  • شراء مكيفات مستعملة في صفوى
                </Link>
                <Link href="/regions/tarout" className="hover:text-cyan-600 p-2 rounded-lg bg-slate-50">
                  • شراء مكيفات مستعملة في تاروت
                </Link>
                <Link href="/regions/awamiyah" className="hover:text-cyan-600 p-2 rounded-lg bg-slate-50">
                  • شراء مكيفات مستعملة في العوامية
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Price Estimator Calculator */}
        <ValuationCalculator />

        {/* FAQ Section */}
        <FAQSection />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
