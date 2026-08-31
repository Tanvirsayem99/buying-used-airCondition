import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
const FAQSection = dynamic(() => import("@/components/FAQSection").then((m) => m.FAQSection));
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Sparkles, Phone, Box, RefreshCw } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "شراء أجهزة مستعملة بالقطيف | شراء الأجهزة الكهربائية المنزلية بأعلى سعر",
  description:
    "محل شراء أجهزة مستعملة بالقطيف. نشتري الثلاجات، الغسالات، الفريزرات، الأفران، والميكروويف بالأجهزة الكهربائية والمنزلية المستعملة بالقطيف بأعلى سعر كاش ونقل مجاني.",
  keywords: [
    "شراء أجهزة مستعملة بالقطيف",
    "شراء الأجهزة الكهربائية المستعملة بالقطيف",
    "شراء أجهزة منزلية مستعملة",
    "used appliances buyer Qatif",
    "sell used appliances Qatif",
    "used home appliances buyer Qatif",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/buy-appliances-qatif",
  },
  openGraph: {
    title: "شراء أجهزة مستعملة بالقطيف | أفضل تسعير للأجهزة الكهربائية والمنزلية",
    description:
      "نشتري كافة الأجهزة الكهربائية والمنزلية المستعملة (ثلاجات، غسالات، فريزرات) بالقطيف بأعلى سعر كاش مع نقل فورى مجاني.",
    url: "https://buyallscrapksa.com/buy-appliances-qatif",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function AppliancesPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء أجهزة مستعملة بالقطيف",
    description: "شراء الأجهزة الكهربائية المنزلية المستعملة ثلاجات وغسالات بالقطيف بأعلى سعر كاش.",
    serviceType: "Used Home Appliances Buying Service",
    url: "/buy-appliances-qatif",
  });

  const pageFaqs = [
    {
      question: "ما هي الأجهزة الكهربائية المستعملة التي تشترونها بالقطيف؟",
      answer: "نشتري الثلاجات، الفريزرات العمودية والمسطحة، غسالات الملابس الاوتوماتيك والعادية، أجهزة التكييف، والأفران بأفضل الأسعار.",
    },
    {
      question: "هل تشترون الأجهزة التي تحتاج صيانة؟",
      answer: "نعم، نشتري الأجهزة المستعملة بحالتها الممتازة وكذلك الأجهزة العطلانة التي تحتاج إلى صيانة.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs)]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "شراء أجهزة مستعملة بالقطيف", url: "/buy-appliances-qatif" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>محل شراء أجهزة مستعملة بالقطيف • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء أجهزة مستعملة بالقطيف بأعلى سعر كاش
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              نقدم افضل خدمة <strong>شراء الأجهزة الكهربائية المستعملة بالقطيف</strong> و <strong>شراء أجهزة منزلية مستعملة</strong> مع المعاينة الفورية والدفع النقدي الفوري عند باب منزلك مع تحمل كامل مصاريف التحميل والنقل.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع أجهزة مستعملة بالقطيف. أرجو التواصل وإرسال التسعيرة.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>أرسل صور الأجهزة عبر الواتساب</span>
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

        {/* Content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 border-r-4 border-cyan-600 pr-3">
                الأجهزة الكهربائية المستعملة التي نشتريها بالقطيف
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                نشتري الثلاجات بجميع أحجامها، الفريزرات، غسالات الملابس الصحون، الميكروويف والشاشات بأعلى تسعيرة بالقطيف، تاروت، سيهات، صفوى، والعوامية.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Box className="w-6 h-6 text-cyan-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء ثلاجات وفريزرات</h3>
                  <p className="text-xs text-slate-500 mt-1">سامسونج، ال جي، توشيبا، هيتاشي وبوش.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <RefreshCw className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء غسالات ملابس</h3>
                  <p className="text-xs text-slate-500 mt-1">اتوماتيك فتحة امامية وعلوية وعادية.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-cyan-900 to-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-cyan-500/30">
              <h3 className="text-xl font-black">تقييم سريع لأجهزتك</h3>
              <p className="text-xs text-slate-300 font-medium">
                تواصل معنا فوراً بالواتساب للحصول على تثمين عالي ودفع كاش مباشر بالقطيف.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع جهاز مستعمل بالقطيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
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
