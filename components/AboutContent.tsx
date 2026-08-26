"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import {
  ShieldCheck,
  DollarSign,
  Truck,
  Clock,
  Sparkles,
  Award,
  CheckCircle2,
  Phone,
  Zap,
  ChevronLeft,
  ChevronRight,
  Wind,
  Building2,
  Users,
  Target,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const AboutContent = () => {
  const { lang } = useLanguage();

  const isAr = lang === "ar";
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const whatsappMessage = isAr
    ? "السلام عليكم، تواصلت معكم من صفحة 'عن الشركة' لبيع مكيفات/أجهزة مستعملة."
    : "Hello, I contacted you from the About Us page regarding selling used ACs/appliances.";

  return (
    <div className="pt-24 lg:pt-32 pb-16 space-y-20">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-emerald-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 mb-6">
            <Link href="/" className="hover:text-cyan-600 transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <ChevronIcon className="w-4 h-4 text-slate-400" />
            <span className="text-cyan-600 font-extrabold">{isAr ? "عن الشركة" : "About Us"}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-black shadow-xs">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>
                  {isAr
                    ? "المؤسسة الرائدة لشراء المستعمل بالقطيف والدمام والخبر"
                    : "#1 Trusted Used AC & Appliance Buyer in Eastern Province"}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                {isAr ? "خبرة وأمان في شراء" : "Trusted & Professional Buyer for"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-700 underline decoration-cyan-400/40 decoration-wavy underline-offset-8">
                  {isAr ? "المكيفات والأجهزة المستعملة" : "Used ACs & Home Appliances"}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {isAr
                  ? "نحن مؤسسة متخصصة ومترخصة في تثمين وشراء كافة أنواع المكيفات (سبليت، شباك، مركزي)، الأجهزة الكهربائية، وسكراب المعادن في القطيف، الدمام، والخبر بأعلى أسعار الكاش المباشر مع التكفل التام بمصاريف الفك والنقل 100%."
                  : "We are a trusted, fully-equipped service dedicated to purchasing and evaluating all types of air conditioners (Split, Window, Central), home appliances, and scrap metals across Qatif, Dammam, and Al Khobar with top cash payouts and 100% free uninstallation & removal."}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base shadow-xl shadow-emerald-600/25 hover:scale-[1.03] active:scale-98 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>{isAr ? "تواصل معنا عبر الواتساب" : "Chat on WhatsApp"}</span>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-cyan-500/40 hover:border-cyan-500 text-slate-900 font-black text-base shadow-md hover:scale-[1.03] active:scale-98 transition-all"
                >
                  <Phone className="w-5 h-5 text-cyan-600 fill-cyan-600" />
                  <span>{isAr ? "اتصال مباشر:" : "Direct Call:"} {DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase Box */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden p-2 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl shadow-slate-300/60">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-900 aspect-[4/3]">
                  <Image
                    src="/images/hero-ac.jpg"
                    alt="About Used AC Buyer Qatif"
                    fill
                    className="object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 text-center">
                    <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200">
                      <span className="block text-lg font-black text-emerald-600">+15,000</span>
                      <span className="block text-[11px] font-bold text-slate-700">
                        {isAr ? "مكيف تم شراؤه" : "ACs Purchased"}
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200">
                      <span className="block text-lg font-black text-cyan-600">30 {isAr ? "دقيقة" : "Mins"}</span>
                      <span className="block text-[11px] font-bold text-slate-700">
                        {isAr ? "متوسط وقت الوصول" : "Avg Arrival Time"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission, Vision, and Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md hover:border-cyan-400 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {isAr ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "أن نكون الخيار الأول والموثوق دائماً لسكان المنطقة الشرقية في تقديم أفضل خدمات التثمين العادل والبيع السريع للأجهزة المستعملة بأعلى معايير المصداقية والاحترافية."
                : "To remain the most trusted and preferred choice for residents across the Eastern Province by offering standard-setting valuation, instant cash payouts, and professional removal services."}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md hover:border-emerald-400 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {isAr ? "مهمتنا" : "Our Mission"}
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "توفير تجربة بيع مريحة، آمنة ومربحة للعميل دون تحميله أي مصاريف أو جهد، من خلال فريق عمل محترف يضمن الفك والتنظيف والنقل المجاني المباشر."
                : "Providing a stress-free, safe, and lucrative selling experience with zero effort required from the client through our certified removal technicians and direct instant payments."}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md hover:border-blue-400 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {isAr ? "قيمنا الأساسية" : "Our Core Values"}
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "الشفافية في التسعير دون بخس للأسعار، السرعة في الاستجابة، الالتزام التام بالمواعيد، والتعامل الراقي المحترم داخل منازل عملائنا الكرام."
                : "Complete transparency without underquoting, rapid response within 30-60 minutes, punctuality, and utmost respect for privacy and safety at your doorstep."}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - 4 Core Pillars */}
      <section className="bg-gradient-to-b from-slate-50 via-cyan-50/20 to-slate-100 py-16 rounded-3xl border border-slate-200/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs font-black">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span>{isAr ? "مزايانا الفريدة" : "Why Choose Us"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            {isAr ? "لماذا يتعامل معنا العشرات يومياً؟" : "Why Hundreds Trust Us Daily"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">
              {isAr ? "أعلى أسعار الكاش" : "Best Cash Guarantee"}
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "تقييم مالي مجزٍ وعادل لمكيفك بناءً على حالته الفعلية ونوعه دون أي بخس."
                : "Highest market rates evaluated fairly based on capacity, brand, and actual physical condition."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">
              {isAr ? "فك ونقل مجاني 100%" : "Free Pickup & Removal"}
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "فريقنا الفني يتكفل بفك التكييفات ونقلها من منزلك مجاناً دون أي ريال عليك."
                : "Certified technicians handle safe uninstallation, lifting, and transport with 0 SAR fees."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">
              {isAr ? "وصول سريع 30 دقيقة" : "30-Min Fast Arrival"}
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "أسطول سيارات وفنيين منتشرين في القطيف والدمام والخبر للوصول الفوري."
                : "Fleet of trucks dispatched immediately across Qatif, Dammam, and Al Khobar."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">
              {isAr ? "مصداقية وأمان تام" : "100% Privacy & Safety"}
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {isAr
                ? "فريق عمل محترم وخبرة طويلة تضمن أمان وتنفيذ سريع داخل منزلك."
                : "Polite, certified staff guaranteeing complete privacy, house protection, and neat work."}
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 rounded-3xl p-8 sm:p-12 text-white border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? "تغطية كاملة للمنطقة الشرقية" : "Full Eastern Province Coverage"}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black">
              {isAr
                ? "نخدمكم في القطيف، الدمام، والخبر 24/7"
                : "Serving Qatif, Dammam & Al Khobar 24/7"}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {isAr
                ? "اتصل بنا الآن أو أرسل صور مكيفك أو جهازك عبر الواتساب واحصل على أعلى تقييم وسعر كاش فوري!"
                : "Call us now or send photos of your used AC/appliance on WhatsApp for an instant cash quote!"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{isAr ? "أرسل الصور بالواتساب" : "Send Photos on WhatsApp"}</span>
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
