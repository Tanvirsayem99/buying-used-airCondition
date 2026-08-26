"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_NUMBER } from "@/app/data/content";
import { Phone, MessageSquare } from "lucide-react";
import { WhatsAppChatPopup } from "@/components/WhatsAppChatPopup";

export const FloatingCTA = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      {/* Floating Interactive WhatsApp Chat Popup System */}
      <WhatsAppChatPopup phoneNumber="966531487293" lang={lang} />

      {/* Mobile Fixed Bottom CTA Bar (Sticky on Smartphones) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#070d1e]/95 backdrop-blur-md border-t border-cyan-500/30 p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>{t.nav.callNow}</span>
          </a>

          <a
            href={`https://wa.me/996531487293`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t.nav.whatsappUs}</span>
          </a>
        </div>
      </div>
    </>
  );
};
