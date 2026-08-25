"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Phone, MessageSquare, ShieldCheck, DollarSign, Truck, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const { lang, t } = useLanguage();

  const whatsappMessage =
    lang === "ar"
      ? "السلام عليكم، أرغب في بيع مكيفات/أجهزة مستعملة في القطيف وأود الحصول على تقدير وسعر فوري."
      : "Hello, I want to sell used ACs/appliances in Qatif and would like an instant quote.";

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-slate-50">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-start space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold w-fit mx-auto lg:mx-0 shadow-xs">
              <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              {t.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 underline decoration-cyan-400/40 decoration-wavy underline-offset-8">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <DollarSign className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.instantCash}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Truck className="w-5 h-5 text-cyan-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.freePickup}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.bestPrice}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">{t.hero.availability247}</span>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-green-600/25 hover:scale-[1.02] active:scale-98 transition-all animate-pulse-glow"
              >
                <MessageSquare className="w-6 h-6 fill-white" />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-cyan-500/30 hover:border-cyan-500 text-slate-900 font-extrabold text-base sm:text-lg shadow-md hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>{t.hero.callBtn} ({DISPLAY_PHONE})</span>
              </a>
            </div>

            {/* Social Trust Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.hero.trustTitle}</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl shadow-slate-300/60 group bg-white">
              <Image
                src="/images/hero-ac.jpg"
                alt="شراء مكيفات مستعملة بالقطيف"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Floating Glass Badge Top Right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center border border-emerald-200">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t.hero.statLabel2}</p>
                  <p className="text-sm font-black text-emerald-700">{t.hero.statNumber2}</p>
                </div>
              </div>

              {/* Floating Glass Badge Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center border border-cyan-200">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t.hero.statLabel3}</p>
                  <p className="text-sm font-black text-cyan-700">{t.hero.statNumber3}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50">
            <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
              {t.hero.statNumber1}
            </h3>
            <p className="mt-2 text-sm font-bold text-slate-700">{t.hero.statLabel1}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50">
            <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              {t.hero.statNumber2}
            </h3>
            <p className="mt-2 text-sm font-bold text-slate-700">{t.hero.statLabel2}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50">
            <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {t.hero.statNumber3}
            </h3>
            <p className="mt-2 text-sm font-bold text-slate-700">{t.hero.statLabel3}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
