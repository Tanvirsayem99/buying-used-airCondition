"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Navigation } from "lucide-react";

export const CoverageAreas = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="coverage" className="py-20 bg-gradient-to-b from-[#f8fafc] via-cyan-50/20 to-[#f8fafc] relative text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>{t.coverage.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {t.coverage.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.coverage.cities.map((city, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-cyan-400 shadow-md shadow-slate-200/40 hover:shadow-xl transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {city.name}
                </h3>
                <span className="text-xs text-emerald-600 font-extrabold flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  {lang === "ar" ? "وصول مباشر خلال 30 دقيقة" : "30 Min Express Arrival"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
