import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, generateServiceSchema, generateFAQSchema } from "@/components/JsonLd";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
const ScrapMetalSection = dynamic(() => import("@/components/ScrapMetalSection").then((m) => m.ScrapMetalSection));
const FAQSection = dynamic(() => import("@/components/FAQSection").then((m) => m.FAQSection));
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Sparkles, Phone, Flame, Zap, Layers, BatteryCharging } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شراء سكراب بالقطيف | مشتري سكراب معادن ومكيفات خردة بأعلى سعر للكيلو",
  description:
    "افضل محل نشتري سكراب بالقطيف. نشتري سكراب النحاس، الكابلات، الألمنيوم، حديد التسليح، البطاريات، ومكيفات السكراب بالقطيف والمنطقة الشرقية ودفع كاش فوري.",
  keywords: [
    "شراء سكراب بالقطيف",
    "شراء مكيفات سكراب بالقطيف",
    "شراء خردة بالقطيف",
    "بيع سكراب بالقطيف",
    "مشتري سكراب بالقطيف",
    "scrap buyer Qatif",
    "scrap buyer Saudi Arabia",
    "AC scrap buyer Qatif",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/buy-scrap-qatif",
  },
  openGraph: {
    title: "شراء سكراب بالقطيف | أعلى سعر تسعير لكيلو السكراب والمعادن",
    description:
      "تواصل معنا لبيع سكراب المعادن والكابلات ومكيفات السكراب بأعلى سعر بالقطيف. نقل مجاني ودفع نقدي فوري.",
    url: "https://buyallscrapksa.com/buy-scrap-qatif",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function ScrapPage() {
  const serviceSchema = generateServiceSchema({
    name: "شراء سكراب بالقطيف",
    description: "تثمين وشراء جميع أنواع سكراب المعادن ومكيفات السكراب والكابلات بأعلى سعر بالقطيف.",
    serviceType: "Scrap Metal Recycling & Buying Service",
    url: "/buy-scrap-qatif",
  });

  const pageFaqs = [
    {
      question: "ما هي أنواع السكراب التي تشترونها بالقطيف؟",
      answer: "نشتري سكراب المكيفات، النحاس الأحمر والأصفر، الألمنيوم، الكابلات الكهربائية، البطاريات، وسكراب الحديد بجميع الكميات.",
    },
    {
      question: "كيف يتم تحديد سعر الكيلو للسكراب بالقطيف؟",
      answer: "يتم تحديد السعر وفق بورصة الأسواق العالمية والمحلية للمعادن يومياً لمنحكم أعلى تسعيرة ممكنة.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[serviceSchema, generateFAQSchema(pageFaqs)]} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "شراء سكراب بالقطيف", url: "/buy-scrap-qatif" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>مشتري سكراب معتمد بالقطيف • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              شراء سكراب بالقطيف ومكيفات خردة بأعلى الأسعار
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              نحن <strong>مشتري سكراب بالقطيف</strong> نشتري جميع كميات المعادن (نحاس، ألمنيوم، حديد، بطاريات، أسلاك كهربائية) ومكيفات السكراب التالفة بجميع الأحجام. تحميل ونقل فوري ودفع كاش في الموقع.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع سكراب بالقطيف. أرجو إرسال أفضل تسعيرة.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>طلب تسعيرة سكراب عبر الواتساب</span>
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

        {/* Content & Metal Types */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3">
                أنواع سكراب المعادن والخردة التي نشتريها بالقطيف
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                إن كنت تتساءل عن <strong>بيع سكراب بالقطيف</strong> أو تبحث عن أفضل <strong>شراء خردة بالقطيف</strong>، فنحن نوفر خدمات شاملة للتخلص البيئي الآمن مع ضمان أعلى سعر للكيلو أو الطن.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Flame className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء سكراب نحاس بالقطيف</h3>
                  <p className="text-xs text-slate-500 mt-1">نحاس أحمر وأصفر، مواسير تكييف وقطع صناعية.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء سكراب كابلات وأسلاك</h3>
                  <p className="text-xs text-slate-500 mt-1">كابلات نحاسية وألمنيوم، أسلاك تمديدات منازل ومصانع.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <BatteryCharging className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء بطاريات سكراب</h3>
                  <p className="text-xs text-slate-500 mt-1">بطاريات سيارات، بطاريات UPS، وبطاريات صناعية.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Layers className="w-6 h-6 text-cyan-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">شراء سكراب ألمنيوم وحديد</h3>
                  <p className="text-xs text-slate-500 mt-1">قطاعات مطابخ، نوافذ، حديد تسليح وهياكل معدنية.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">شراء مكيفات سكراب بالقطيف</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                نشتري جميع وحدات التكييف التالفة والمحروقة ذات الهياكل النحاسية والألمنيوم، بما فيها مكيفات الشباك، السبليت، والشيلر بالقطيف وسيهات وصفوى وتاروت مع التكفل التام بأعمال الفك والتحميل.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-emerald-900 to-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-emerald-500/30">
              <h3 className="text-xl font-black">أرسل صور السكراب الآن</h3>
              <p className="text-xs text-slate-300 font-medium">
                احصل على أعلى تسعيرة مباشرة عبر الواتساب مع خدمة الشحن والتحميل المجاني.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, "السلام عليكم، أرغب في بيع سكراب بالقطيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-base">خدمات سكراب في الأحياء والمناطق</h4>
              <div className="flex flex-col gap-2 text-xs font-semibold text-slate-700">
                <Link href="/regions/saihat" className="hover:text-emerald-600 p-2 rounded-lg bg-slate-50">
                  • شراء سكراب في سيهات
                </Link>
                <Link href="/regions/safwa" className="hover:text-emerald-600 p-2 rounded-lg bg-slate-50">
                  • شراء سكراب في صفوى
                </Link>
                <Link href="/regions/tarout" className="hover:text-emerald-600 p-2 rounded-lg bg-slate-50">
                  • شراء سكراب في تاروت
                </Link>
                <Link href="/regions/awamiyah" className="hover:text-emerald-600 p-2 rounded-lg bg-slate-50">
                  • شراء سكراب في العوامية
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scrap Metal Showcase */}
        <ScrapMetalSection />

        {/* FAQ Section */}
        <FAQSection />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
