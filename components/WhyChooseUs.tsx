"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DollarSign, ShieldCheck, Truck, Clock, PhoneCall, Award, Sparkles } from "lucide-react";

export const WhyChooseUs = () => {
  const { lang, t } = useLanguage();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-7 h-7 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-cyan-600" />;
      case "Truck":
        return <Truck className="w-7 h-7 text-blue-600" />;
      case "Clock":
        return <Clock className="w-7 h-7 text-amber-600" />;
      case "PhoneCall":
        return <PhoneCall className="w-7 h-7 text-purple-600" />;
      case "Award":
        return <Award className="w-7 h-7 text-sky-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-cyan-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#f8fafc] via-cyan-50/20 to-[#f8fafc] relative text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>{t.whyUs.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === "ar" ? "نقدم لك تجربة البيع الأسهل والأكثر ربحية" : "The Most Profitable & Seamless Selling Experience"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                {renderIcon(card.icon)}
              </div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
