"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote, MapPin, CheckCircle } from "lucide-react";

export const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.testimonials.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
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
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl transition-all flex flex-col justify-between relative space-y-6"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-cyan-200" />

                <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                  </h3>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-600" />
                    <span>{review.location}</span>
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold">
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
