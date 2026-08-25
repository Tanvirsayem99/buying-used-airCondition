"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Navigation } from "lucide-react";

export const CoverageAreas = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="coverage" className="py-20 bg-gradient-to-b from-[#f8fafc] via-cyan-50/20 to-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-4 h-4 text-cyan-600" />
            <span>{t.coverage.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {t.coverage.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.coverage.cities.map((city, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border flex items-center gap-3 transition-all ${
                city.main
                  ? "bg-white border-cyan-300 shadow-md shadow-cyan-500/5 text-slate-900"
                  : "bg-white/80 border-slate-200 text-slate-700 shadow-xs"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${city.main ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-600"}`}>
                <MapPin className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <h3 className={`text-sm font-extrabold ${city.main ? "text-slate-900" : "text-slate-700"}`}>
                  {city.name}
                </h3>
                <span className="text-[11px] text-cyan-700 font-bold">
                  {lang === "ar" ? "وصول خلال 30 دقيقة" : "30 Min Express Pickup"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
