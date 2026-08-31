"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Snowflake, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Footer = () => {
  const { lang, t } = useLanguage();

  const bannerMsg =
    lang === "ar"
      ? "السلام عليكم، أرغب في التواصل معكم لبيع مكيفات/أجهزة/سكراب في القطيف."
      : "Hello, I want to contact you regarding selling used ACs/appliances/scrap in Qatif.";

  return (
    <footer className="bg-[#040812] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Banner Above Footer */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 p-8 sm:p-12 rounded-3xl mb-16 text-center sm:text-start flex flex-col lg:flex-row items-center justify-between gap-8 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50">
          <div className="space-y-3 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{lang === "ar" ? "تواصل مباشر 24/7 - كاش فوري" : "Direct 24/7 Spot Cash"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              {lang === "ar" ? "شراء مكيفات مستعمل القطيف وسكراب المعادن" : "Buy Used AC & Scrap Buyer Qatif"}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {t.ctaBanner.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={getWhatsAppUrl(WHATSAPP_NUMBER, bannerMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-700/30 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{t.ctaBanner.whatsappUs}</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg font-black text-white">
                شراء مكيفات مستعمل القطيف
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              الموقع الرسمي <strong>buyallscrapksa.com</strong> لنشتري جميع أنواع المكيفات المستعملة (سبليت، شباك، مركزي، عطلانة، سكراب)، سكراب المعادن، الأثاث المستعمل والأجهزة الكهربائية بأعلى الأسعار والدفع نقدي فوري بالقطيف، تاروت، سيهات، صفوى، والعوامية.
            </p>
          </div>

          {/* Col 2: Services SEO Links */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              خدماتنا الرئيسية بالقطيف
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/buy-used-ac-qatif" className="hover:text-cyan-400 transition-colors">
                  شراء مكيفات مستعملة بالقطيف
                </Link>
              </li>
              <li>
                <Link href="/buy-scrap-qatif" className="hover:text-emerald-400 transition-colors text-emerald-400">
                  شراء سكراب بالقطيف
                </Link>
              </li>
              <li>
                <Link href="/buy-furniture-qatif" className="hover:text-cyan-400 transition-colors">
                  شراء اثاث مستعمل بالقطيف
                </Link>
              </li>
              <li>
                <Link href="/buy-appliances-qatif" className="hover:text-cyan-400 transition-colors">
                  شراء أجهزة مستعملة بالقطيف
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors text-amber-400">
                  مدونة شراء المكيفات والسكراب
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Regions SEO Links */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              مناطق الخدمة المباشرة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link href="/regions/saihat" className="hover:text-cyan-400 transition-colors">
                  شراء مكيفات وسكراب بالقطيف وسيهات
                </Link>
              </li>
              <li>
                <Link href="/regions/safwa" className="hover:text-cyan-400 transition-colors">
                  شراء مكيفات وسكراب في صفوى
                </Link>
              </li>
              <li>
                <Link href="/regions/tarout" className="hover:text-cyan-400 transition-colors">
                  شراء مكيفات وسكراب جزيرة تاروت
                </Link>
              </li>
              <li>
                <Link href="/regions/awamiyah" className="hover:text-cyan-400 transition-colors">
                  شراء مكيفات وسكراب بالعوامية
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              تواصل معنا الآن
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-semibold">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-cyan-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{DISPLAY_PHONE}</span>
              </a>
              <a href={getWhatsAppUrl(WHATSAPP_NUMBER, bannerMsg)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{DISPLAY_PHONE} (واتساب فوري)</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>{t.footer.locationLabel}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>خدمة 24/7 طوال الأسبوع</span>
              </div>
            </div>
          </div>

        </div>

        {/* Keywords SEO Footer Tag Cloud */}
        <div className="pt-6 border-t border-slate-800/80 mb-6">
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
            <strong>الكلمات المفتاحية الأكثر بحثاً:</strong> شراء سكراب بالقطيف | شراء مكيفات مستعملة بالقطيف | شراء مكيفات سكراب بالقطيف | شراء اثاث مستعمل بالقطيف | شراء أجهزة مستعملة بالقطيف | شراء خردة بالقطيف | بيع سكراب بالقطيف | شراء الأجهزة الكهربائية المستعملة بالقطيف | شراء مكيفات قديمة بالقطيف | شراء مكيفات خربانة بالقطيف | شراء أثاث مستعمل | شراء أجهزة منزلية مستعملة | مشتري سكراب بالقطيف | مشتري مكيفات مستعملة بالقطيف | مشتري أثاث مستعمل بالقطيف | buy used air conditioners Qatif | used AC buyer Qatif | sell used AC Qatif | used air conditioner buyer Saudi Arabia | scrap buyer Qatif | scrap buyer Saudi Arabia | used furniture buyer Qatif | used appliances buyer Qatif | sell used furniture Qatif | sell used appliances Qatif | buy old air conditioners Qatif | AC scrap buyer Qatif | used home appliances buyer Qatif
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400 font-medium">
          <p>جميع الحقوق محفوظة © 2026 شراء مكيفات مستعمل القطيف - buyallscrapksa.com</p>
        </div>

      </div>
    </footer>
  );
};
