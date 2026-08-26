"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "@/app/data/content";
import {
  Zap,
  BatteryCharging,
  Wind,
  Flame,
  Layers,
  Hammer,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const ScrapMetalSection = () => {
  const { lang, t } = useLanguage();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "BatteryCharging":
        return <BatteryCharging className="w-5 h-5 text-emerald-600" />;
      case "Wind":
        return <Wind className="w-5 h-5 text-cyan-600" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-orange-500" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-600" />;
      case "Hammer":
        return <Hammer className="w-5 h-5 text-slate-700" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section id="scrap-metals" className="py-20 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-slate-100 text-slate-900 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.scrapMetals.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            {t.scrapMetals.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.scrapMetals.subtitle}
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.scrapMetals.items.map((item) => {
            const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBER, item.whatsappMessage);
            return (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl overflow-hidden hover:border-emerald-400 shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                      {renderIcon(item.icon)}
                      <span>{item.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* WhatsApp Action Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md shadow-emerald-600/20 hover:shadow-emerald-500/30 group-hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                    <span>{t.scrapMetals.requestBtn}</span>
                    {lang === "ar" ? (
                      <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
