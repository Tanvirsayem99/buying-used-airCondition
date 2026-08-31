"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator, CheckCircle, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const HowItWorks = () => {
  const { lang, t } = useLanguage();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <WhatsAppIcon className="w-8 h-8 text-emerald-600" />;
      case "Calculator":
        return <Calculator className="w-8 h-8 text-emerald-600" />;
      case "CheckCircle":
        return <CheckCircle className="w-8 h-8 text-blue-600" />;
      default:
        return <WhatsAppIcon className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>{t.howItWorks.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === "ar" ? "كيف تبيع مكيفك في 3 خطوات بسيطة؟" : "Sell Your AC in 3 Easy Steps"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Step Icon & Big Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  {renderIcon(step.icon)}
                </div>
                <span className="text-4xl font-black text-slate-600 group-hover:text-cyan-600 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Step Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
