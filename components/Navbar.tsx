"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, DISPLAY_PHONE } from "@/app/data/content";
import { Snowflake, Phone, Menu, X, Globe, Sparkles } from "lucide-react";

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/40"
          : "bg-gradient-to-b from-white/95 via-white/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-cyan-600 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors">
                {lang === "ar" ? "شراء مكيفات مستعمل القطيف" : "Qatif Used AC Buyer"}
              </span>
              <span className="text-xs text-cyan-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-600" />
                {lang === "ar" ? "القطيف • الدمام • الخبر" : "Qatif • Dammam • Al Khobar"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              {t.nav.services}
            </a>
            <a href="#why-us" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              {t.nav.whyUs}
            </a>
            <a href="#calculator" className="text-sm font-bold text-cyan-700 hover:text-cyan-800 transition-colors flex items-center gap-1">
              {lang === "ar" ? "حاسبة الأسعار" : "Price Estimator"}
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              {t.nav.howItWorks}
            </a>
            <a href="#coverage" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              {t.nav.coverage}
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          {/* Action Buttons: Language Switcher & Call Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-800 hover:text-cyan-700 hover:bg-slate-200/80 hover:border-cyan-400 text-sm font-bold transition-all shadow-xs"
              title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
            >
              <Globe className="w-4 h-4 text-cyan-600" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-extrabold text-sm shadow-md shadow-cyan-600/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-4 py-6 shadow-2xl space-y-4">
          <nav className="flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-800 hover:text-cyan-600 font-semibold"
            >
              {t.nav.services}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-800 hover:text-cyan-600 font-semibold"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-cyan-50 border border-cyan-300 text-cyan-800 font-bold"
            >
              {lang === "ar" ? "⚡ حاسبة تقدير الأسعار" : "⚡ Instant Price Calculator"}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-800 hover:text-cyan-600 font-semibold"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-800 hover:text-cyan-600 font-semibold"
            >
              {t.nav.coverage}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-800 hover:text-cyan-600 font-semibold"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{t.nav.callNow}: {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
