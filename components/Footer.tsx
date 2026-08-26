"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Snowflake, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Footer = () => {
  const { lang, t } = useLanguage();

  const bannerMsg =
    lang === "ar"
      ? "السلام عليكم، أرغب في التواصل معكم لبيع مكيفات/أجهزة مستعملة في القطيف."
      : "Hello, I want to contact you regarding selling used ACs/appliances in Qatif.";

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
              <span>{lang === "ar" ? "تواصل مباشر 24/7" : "Direct 24/7 Contact"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              {t.ctaBanner.title}
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
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
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
                {t.footer.aboutTitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              {t.footer.aboutDesc}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#scrap-metals" className="hover:text-emerald-400 transition-colors text-emerald-400 font-bold">
                  {t.nav.scrapMetals}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors text-cyan-400 font-bold">
                  {lang === "ar" ? "حاسبة الأسعار الفورية" : "Instant Price Estimator"}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyan-400 transition-colors">
                  {t.nav.coverage}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Main Services */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>{lang === "ar" ? "شراء مكيفات سبليت مستعملة" : "Split AC Buying"}</li>
              <li>{lang === "ar" ? "شراء مكيفات شباك مستعملة" : "Window AC Buying"}</li>
              <li>{lang === "ar" ? "شراء مكيفات مركزية ودولابي" : "Central & Cabinet AC Buying"}</li>
              <li>{lang === "ar" ? "شراء سكراب معادن وكابلات" : "Scrap Metal & Cables"}</li>
              <li>{lang === "ar" ? "شراء ثلاجات وغسالات مستعملة" : "Refrigerators & Washers"}</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-semibold">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-cyan-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{DISPLAY_PHONE}</span>
              </a>
              <a href={getWhatsAppUrl(WHATSAPP_NUMBER, bannerMsg)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{DISPLAY_PHONE} (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>{t.footer.locationLabel}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.hoursLabel}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 font-medium">
          <p>{t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};
