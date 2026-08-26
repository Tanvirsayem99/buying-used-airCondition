"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote, MapPin, CheckCircle, Sparkles } from "lucide-react";

export const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{t.testimonials.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === "ar" ? "ثقة عملائنا في القطيف هي سر نجاحنا" : "Trusted by Thousands of Residents in Qatif"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 hover:border-amber-400 shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative space-y-6 group"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-200" />

                <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5 group-hover:text-amber-600 transition-colors">
                    <span>{review.name}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </h3>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-600" />
                    <span>{review.location}</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  {review.itemSold}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
