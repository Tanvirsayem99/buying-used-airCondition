import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { MapPin, Phone, CheckCircle2, ShieldCheck, Truck, Banknote, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ValuationCalculator } from "@/components/ValuationCalculator";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "شراء مكيفات مستعملة وسكراب بالخبر | بأعلى سعر كاش وفك مجاني",
  description: "افضل محل شراء مكيفات مستعملة وسكراب بمدينة الخبر (حي الحزام الذهبي، الكورنيش، العقربية، الثقبة، والراكة). دفع كاش فوري ونقل مجاني 100%.",
  keywords: [
    "شراء مكيفات مستعملة بالخبر",
    "شراء مكيفات مستعمل الخبر",
    "شراء سكراب بالخبر",
    "شراء اثاث مستعمل بالخبر",
    "شراء اجهزة مستعملة بالخبر",
    "used AC buyer Khobar",
    "buy used air conditioners Khobar",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/regions/khobar",
  },
  openGraph: {
    title: "شراء مكيفات مستعملة وسكراب بالخبر | buyallscrapksa.com",
    description: "تواصل معنا لبيع كافة المكيفات المستعملة والسكراب والأجهزة الكهربائية بمدينة الخبر بأعلى تسعيرة كاش فوري.",
    url: "https://buyallscrapksa.com/regions/khobar",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function KhobarRegionPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء مكيفات مستعملة وسكراب بالخبر",
    description: "خدمة الفك والنقل المجاني والشراء الفوري كاش للمكيفات المستعملة والسكراب بمدينة الخبر.",
    serviceType: "Regional Used AC & Scrap Buying Service",
    url: "/regions/khobar",
  });

  const pageFaqs = [
    {
      question: "هل تصلون إلى كافة أحياء مدينة الخبر؟",
      answer: "نعم، نغطي كافة أحياء الخبر (الحزام الذهبي، الحزام الأخضر، العقربية، الثقبة، الخزامى، البايونية، والراكة) ونصل خلال 30 دقيقة.",
    },
    {
      question: "كيف أستلم المبلغ في الخبر؟",
      answer: "تستلم المبلغ نقداً (كاش) بالكامل في موقعك في الخبر قبل البدء في تحميل الأجهزة والمكيفات.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs)]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "المناطق", url: "/#coverage" },
            { name: "الخبر", url: "/regions/khobar" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold">
              <MapPin className="w-4 h-4 text-indigo-300" />
              <span>تغطية كاملة لجميع أحياء مدينة الخبر • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء مكيفات مستعملة وسكراب بمدينة الخبر
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              نوفر لك في الخبر خدمة ممتازة لشراء مكيفات السبليت، الشباك، والمركزية، وسكراب المعادن بالأعلى تسعيراً كاش مع التكفل التام بأعمال الفك والتحميل المجاني.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع مكيفات/سكراب في الخبر.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>طلب تقييم بالواتساب في الخبر</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="px-6 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-cyan-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>اتصل بنا: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 mb-12">
          <h2 className="text-2xl font-black text-slate-900 border-r-4 border-cyan-600 pr-3">
            خدماتنا بمدينة الخبر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء مكيفات سبليت وشباك بالخبر بأعلى سعر كاش</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء سكراب النحاس والكابلات والألمنيوم بالخبر</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء أثاث مستعمل ومعدات مقاهي ومطاعم بالخبر</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>فك ونقل مجاني 100% ودفع كاش مباشر بالخبر</span>
            </div>
          </div>
        </section>

        <ValuationCalculator />
        <FAQSection />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
