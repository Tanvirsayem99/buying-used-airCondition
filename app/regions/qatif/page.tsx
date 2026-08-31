import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { MapPin, Phone, CheckCircle2, Sparkles, ShieldCheck, Truck, Banknote } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ValuationCalculator } from "@/components/ValuationCalculator";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "شراء مكيفات مستعملة وسكراب بالقطيف | بأعلى سعر كاش وفك مجاني",
  description: "خدمة شراء المكيفات المستعملة (سبليت، شباك، مركزي، سكراب) وسكراب المعادن والأثاث بمدينة القطيف وكافة أحيائها بأعلى أسعار الكاش والفك والنقل المجاني.",
  keywords: [
    "شراء مكيفات مستعمل القطيف",
    "شراء مكيفات مستعملة بالقطيف",
    "شراء سكراب بالقطيف",
    "شراء اثاث مستعمل بالقطيف",
    "شراء اجهزة مستعملة بالقطيف",
    "used AC buyer Qatif",
    "buy used air conditioners Qatif",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/regions/qatif",
  },
  openGraph: {
    title: "شراء مكيفات مستعملة وسكراب بالقطيف | buyallscrapksa.com",
    description: "نشتري جميع أنواع المكيفات المستعملة والسكراب والأجهزة بالقطيف بأعلى سعر كاش مع خدمة الفك والنقل المجاني 100%.",
    url: "https://buyallscrapksa.com/regions/qatif",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function QatifRegionPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء مكيفات مستعملة وسكراب بالقطيف",
    description: "خدمة الفك والنقل المجاني والشراء الفوري كاش للمكيفات المستعملة والسكراب بمدينة القطيف.",
    serviceType: "Regional Used AC & Scrap Buying Service",
    url: "/regions/qatif",
  });

  const pageFaqs = [
    {
      question: "هل نصل إلى كافة أحياء مدينة القطيف؟",
      answer: "نعم، نصل إلى جميع أحياء القطيف (المجيدية، الشاطئ، الناصرة، المنيرة، المزروع، الخامسة، المزروع، عنك) خلال 30 دقيقة.",
    },
    {
      question: "هل يتم الدفع كاش قبل الفك والتحميل؟",
      answer: "نعم، يتم الدفع نقداً (كاش) فوراً في الموقع قبل البدء في فك وتحميل المكيفات.",
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
            { name: "القطيف", url: "/regions/qatif" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span>تغطية شاملة لجميع أحياء مدينة القطيف • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء مكيفات مستعملة وسكراب بمدينة القطيف
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              خدمتنا الرائدة بمدينة القطيف لشراء مكيفات السبليت، الشباك، والمركزية (شغالة، قديمة، خربانة، أو سكراب) وسكراب المعادن والأجهزة بأعلى سعر كاش مع الفك والتحميل المجاني.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع مكيفات/سكراب في القطيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>طلب تقييم بالواتساب في القطيف</span>
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
            خدماتنا بمدينة القطيف
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء مكيفات سبليت وشباك بالقطيف بأعلى سعر كاش</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء سكراب النحاس والكابلات والبطاريات بالقطيف</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء أثاث مستعمل وأجهزة كهربائية بالقطيف</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>فنيين متخصصين بالفك والنقل المجاني خلال 30 دقيقة</span>
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
