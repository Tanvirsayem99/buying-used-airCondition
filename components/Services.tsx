"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "@/app/data/content";
import { Wind, Grid, Server, Refrigerator, Armchair, Truck, Check, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";

export const Services = () => {
  const { lang, t } = useLanguage();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Wind":
        return <Wind className="w-8 h-8 text-cyan-600" />;
      case "Grid":
        return <Grid className="w-8 h-8 text-blue-600" />;
      case "Server":
        return <Server className="w-8 h-8 text-sky-600" />;
      case "Refrigerator":
        return <Refrigerator className="w-8 h-8 text-emerald-600" />;
      case "Armchair":
        return <Armchair className="w-8 h-8 text-amber-600" />;
      case "Truck":
        return <Truck className="w-8 h-8 text-purple-600" />;
      default:
        return <Wind className="w-8 h-8 text-cyan-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <span>{lang === "ar" ? "خدمات متكاملة" : "Our Services"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => {
            const rawMessage =
              lang === "ar"
                ? `السلام عليكم، أرغب في بيع (${service.title}) في القطيف أرجو التواصل.`
                : `Hello, I want to sell (${service.title}) in Qatif. Please contact me.`;

            return (
              <div
                key={service.id}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <a
                  href={getWhatsAppUrl(WHATSAPP_NUMBER, rawMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 border border-slate-200 hover:border-emerald-500 text-slate-800 hover:text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-xs group-hover:shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                  <span>{lang === "ar" ? "اطلب تقييم الخدمة" : "Request Evaluation"}</span>
                  {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
