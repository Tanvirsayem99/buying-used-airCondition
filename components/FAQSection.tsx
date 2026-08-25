"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#f8fafc] via-cyan-50/20 to-[#f8fafc] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span>{t.faq.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {lang === "ar" ? "كل ما تريد معرفته قبل البيع" : "Everything You Need to Know"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {t.faq.questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-black text-base sm:text-lg text-slate-900 hover:text-cyan-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-2 rounded-xl border shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-cyan-100 border-cyan-200 text-cyan-700" : "bg-slate-50 border-slate-200 text-slate-500"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
