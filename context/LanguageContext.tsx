"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { siteContent, ContentType } from "@/app/data/content";

export type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  dir: "rtl" | "ltr";
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    // Check saved language or default to 'ar'
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLangState(savedLang);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const direction = lang === "ar" ? "rtl" : "ltr";
    root.setAttribute("dir", direction);
    root.setAttribute("lang", lang);
    localStorage.setItem("app_lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLangState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = siteContent[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
