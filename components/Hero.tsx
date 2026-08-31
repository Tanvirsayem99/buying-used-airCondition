"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Phone, ShieldCheck, DollarSign, Truck, Clock, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Hero = () => {
  const { lang, t } = useLanguage();

  const whatsappMessage =
    lang === "ar"
      ? "السلام عليكم، أرغب في بيع مكيفات/أجهزة مستعملة في القطيف وأود الحصول على تقدير وسعر فوري."
      : "Hello, I want to sell used ACs/appliances in Qatif and would like an instant quote.";

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-[820px] sm:min-h-[720px] lg:min-h-[660px] overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-slate-50 text-slate-900">
      {/* Radial Background Glow Effects - Anchored with fixed pixel offsets to prevent CLS during FOUT reflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/15 rounded-full blur-[160px]" />
        <div className="absolute top-[220px] -right-20 w-[500px] h-[500px] bg-emerald-400/15 rounded-full blur-[140px]" />
        <div className="absolute top-[480px] -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left / Main Content */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-start space-y-6">

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-black w-fit mx-auto lg:mx-0 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <Zap className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              {t.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-700 underline decoration-cyan-400/40 decoration-wavy underline-offset-8">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Key Trust Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <DollarSign className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.instantCash}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <Truck className="w-5 h-5 text-cyan-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.freePickup}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.bestPrice}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.availability247}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/25 hover:scale-[1.03] active:scale-98 transition-all animate-pulse-glow"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-cyan-500/40 hover:border-cyan-500 text-slate-900 font-black text-base sm:text-lg shadow-md hover:scale-[1.03] active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-600 fill-cyan-600" />
                <span>{t.hero.callBtn} ({DISPLAY_PHONE})</span>
              </a>
            </div>

            {/* Trust Footer line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.hero.trustTitle}</span>
            </div>

          </div>

          {/* Right Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden p-2 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl shadow-slate-300/60">

              <div className="relative rounded-[22px] overflow-hidden bg-slate-900 aspect-[4/3] min-h-[260px] sm:min-h-[320px]">
                <Image
                  src="/images/hero-ac.webp"
                  alt="Used Air Conditioner Buyer in Qatif"
                  fill
                  priority={true}
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Stats Badges */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-center shadow-sm">
                    <span className="block text-sm sm:text-base font-black text-emerald-600">{t.hero.statNumber1}</span>
                    <span className="block text-[10px] text-slate-700 font-bold">{t.hero.statLabel1}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-center shadow-sm">
                    <span className="block text-sm sm:text-base font-black text-cyan-600">{t.hero.statNumber2}</span>
                    <span className="block text-[10px] text-slate-700 font-bold">{t.hero.statLabel2}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-center shadow-sm">
                    <span className="block text-sm sm:text-base font-black text-amber-600">{t.hero.statNumber3}</span>
                    <span className="block text-[10px] text-slate-700 font-bold">{t.hero.statLabel3}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
