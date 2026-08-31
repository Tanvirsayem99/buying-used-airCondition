"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER, DISPLAY_PHONE } from "@/app/data/content";
import { Phone, Menu, X, Globe, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import Link from "next/link";

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: lang === "ar" ? "الرئيسية" : "Home" },
    {
      href: "/مشتري-مكيفات-مستعملة",
      label: lang === "ar" ? "شراء مكيفات مستعملة" : "Used AC Buyer",
    },
    {
      href: "/شراء-خردة-القطيف",
      label: lang === "ar" ? "شراء سكراب" : "Scrap Buyer",
    },
    {
      href: "/شراء-أجهزة-القطيف",
      label: lang === "ar" ? "شراء أجهزة مستعملة" : "Used Appliances",
    },
    { href: "/blog", label: lang === "ar" ? "المدونة" : "Blog" },
    { href: "/about", label: lang === "ar" ? "عن الشركة" : "About Us" },
  ];

  const regionLinks = [
    { href: "/شراء-اثاث-مستعمل-القطيف", label: lang === "ar" ? "شراء الاثاث مستعمل القطيف" : "Buy used furniture in Qatif" },
    { href: "/شراء-اثاث-مستعمل-الدمام", label: lang === "ar" ? "شراء الاثاث مستعمل الدمام" : "Buy used furniture in Dammam" },
    { href: "/شراء-اثاث-مستعمل-الخبر", label: lang === "ar" ? "شراء الاثاث مستعمل الخبر" : "Buy used furniture in Khobar" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 py-2.5 shadow-md shadow-slate-200/40"
        : "bg-gradient-to-b from-white/98 via-white/85 to-transparent py-3 sm:py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt="شراء مكيفات مستعمل القطيف - buyallscrapksa.com"
                  width={50}
                  height={50}
                  className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-600 animate-spin-slow group-hover:rotate-180 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base lg:text-lg xl:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors leading-tight truncate">
                {lang === "ar" ? "شراء مكيفات مستعمل القطيف" : "Qatif Used AC Buyer"}
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-700 font-bold flex items-center gap-1 leading-tight truncate">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 shrink-0" />
                <span className="truncate">
                  {lang === "ar" ? "القطيف • الدمام • الخبر" : "Qatif • Dammam • Al Khobar"}
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs xl:text-[13px] font-bold px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-cyan-700 hover:bg-slate-100/80 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            {/* Regions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-xs xl:text-[13px] font-bold px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-cyan-700 hover:bg-slate-100/80 transition-colors cursor-pointer"
                aria-label={lang === "ar" ? "قائمة المناطق والخدمات" : "Regions and services menu"}
              >
                <span>{lang === "ar" ? "الأثاث" : "Furniture"}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-200 p-2 hidden group-hover:block z-50">
                {regionLinks.map((reg) => (
                  <Link
                    key={reg.href}
                    href={reg.href}
                    className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors"
                  >
                    {reg.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 hover:text-cyan-700 hover:bg-slate-200/90 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
              aria-label={lang === "ar" ? "التحويل إلى اللغة الإنجليزية" : "Switch to Arabic language"}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 px-3.5 py-2 xl:px-4 xl:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-extrabold text-xs xl:text-sm shadow-md shadow-cyan-600/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-white" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-800 text-xs font-bold cursor-pointer transition-colors shrink-0"
              aria-label={lang === "ar" ? "التحويل إلى اللغة الإنجليزية" : "Switch to Arabic language"}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 active:scale-95 text-white shadow-md shadow-cyan-600/30 border border-cyan-500/50 cursor-pointer transition-all shrink-0 flex items-center justify-center"
              aria-label={mobileMenuOpen ? (lang === "ar" ? "إغلاق القائمة" : "Close menu") : (lang === "ar" ? "فتح القائمة الرئيسية" : "Open main menu")}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 px-4 py-5 shadow-2xl space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold transition-all text-sm flex items-center justify-between bg-slate-50/80 hover:bg-slate-100 text-slate-800 hover:text-cyan-600 border border-slate-100"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">›</span>
              </Link>
            ))}

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => setRegionsOpen(!regionsOpen)}
                className="w-full px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-between bg-cyan-50 text-cyan-800 border border-cyan-200"
              >
                <span>{lang === "ar" ? "الأثاث" : "Furniture"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${regionsOpen ? "rotate-180" : ""}`} />
              </button>
              {regionsOpen && (
                <div className="mt-2 space-y-1 pr-4">
                  {regionLinks.map((reg) => (
                    <Link
                      key={reg.href}
                      href={reg.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-bold text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg"
                    >
                      • {reg.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-black text-sm shadow-lg shadow-cyan-600/25 active:scale-95 transition-all"
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
