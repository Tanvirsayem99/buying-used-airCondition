import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema } from "@/components/JsonLd";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "شراء مكيفات مستعملة وسكراب في صفوى | أعلى أسعار الكاش والفك المجاني",
  description: "خدمات شراء مكيفات مستعملة وسكراب معادن بالصفوى بأعلى سعر كاش. نشتري السبليت والشباك والأجهزة الكهرومنزلية مع خدمة الفك والنقل المباشر المجاني.",
  keywords: [
    "شراء مكيفات مستعملة صفوى",
    "شراء سكراب صفوى",
    "شراء مكيفات تاروت وصفوى",
    "شراء اجهزة مستعملة صفوى",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/regions/safwa",
  },
  openGraph: {
    title: "شراء مكيفات مستعملة وسكراب في صفوى | buyallscrapksa.com",
    description: "تواصل معنا لبيع المكيفات والسكراب والأجهزة المستعملة في مدينة صفوى بأعلى سعر كاش.",
    url: "https://buyallscrapksa.com/regions/safwa",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function SafwaPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء مكيفات مستعملة وسكراب في صفوى",
    description: "خدمة شراء وتثمين المكيفات المستعملة والسكراب بمدينة صفوى بالقطيف.",
    serviceType: "Regional Used AC & Scrap Buying Service",
    url: "/regions/safwa",
  });

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={serviceSchema} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "المناطق", url: "/#coverage" },
            { name: "صفوى", url: "/regions/safwa" },
          ]}
        />

        <section className="bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span>تغطية شاملة لجميع أحياء صفوى • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء مكيفات مستعملة وسكراب في صفوى
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              نصل إليك في صفوى خلال وقت قياسي لشراء كافة المكيفات المستعملة وسكراب المعادن بالأعلى تسعيراً مع الفك والتحميل المجاني والدفع النقدي المباشر.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع مكيفات/سكراب في صفوى.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>طلب خدمة بالواتساب في صفوى</span>
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

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 mb-12">
          <h2 className="text-2xl font-black text-slate-900 border-r-4 border-cyan-600 pr-3">
            خدماتنا بمدينة صفوى
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء مكيفات سبليت وشباك بصفوى كاش</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <span>شراء سكراب نحاس وألمنيوم وكابلات بصفوى</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
