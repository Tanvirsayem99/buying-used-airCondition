"use client";

import React, { useState } from "react";
import { X, Send, CheckCheck, Snowflake } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/app/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export interface WhatsAppChatPopupProps {
  phoneNumber?: string;
  lang?: "ar" | "en";
  businessName?: string;
  defaultMessage?: string;
  greetingMessage?: string;
}

export const WhatsAppChatPopup: React.FC<WhatsAppChatPopupProps> = ({
  phoneNumber = WHATSAPP_NUMBER,
  lang = "ar",
  businessName,
  defaultMessage,
  greetingMessage,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Set localized defaults
  const isRtl = lang === "ar";
  const name = businessName || (isRtl ? "شراء مكيفات مستعمل (القطيف - الدمام - الخبر)" : "Qatif, Dammam & Khobar AC Buyer");
  const initialInput =
    defaultMessage ||
    (isRtl
      ? "مرحباً، أريد بيع مكيف مستعمل في القطيف / الدمام / الخبر وأود الحصول على تسعير فوري."
      : "Hello, I want to sell a used AC in Qatif / Dammam / Al Khobar and would like an instant quote.");

  const greeting =
    greetingMessage ||
    (isRtl
      ? "أهلاً بك معنا! 👋\nنحن متواجدون الآن لتخمين وتسعير مكيفاتك وأجهزتك المستعملة بأعلى سعر كاش في القطيف، الدمام، والخبر.\n\nكيف يمكننا مساعدتك اليوم؟"
      : "Welcome! 👋\nWe are online to evaluate and buy your used ACs & appliances at the best spot cash prices in Qatif, Dammam, and Al Khobar.\n\nHow can we help you today?");

  const [message, setMessage] = useState<string>(initialInput);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = getWhatsAppUrl(phoneNumber, message.trim());
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`fixed bottom-6 ${
        isRtl ? "left-6 sm:left-8" : "right-6 sm:right-8"
      } z-50 flex flex-col items-end pointer-events-none`}
    >
      {/* Interactive Chat Popup Modal */}
      {isOpen && (
        <div className="pointer-events-auto w-[330px] sm:w-[380px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white text-slate-900 mb-4 transition-all animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#075e54] p-4 text-white flex items-center justify-between shadow-md relative">
            <div className="flex items-center gap-3">
              {/* Business Avatar with Pulsing Status Indicator */}
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Snowflake className="w-6 h-6 text-cyan-300 animate-spin-slow" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#075e54]" />
              </div>

              {/* Business Title & Online Status */}
              <div className="flex flex-col">
                <span className="font-extrabold text-xs sm:text-sm leading-tight text-white flex items-center gap-1">
                  {name}
                </span>
                <span className="text-[11px] text-emerald-200 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  {isRtl ? "القطيف • الدمام • الخبر • خدمة 24/7" : "Qatif • Dammam • Khobar • 24/7"}
                </span>
              </div>
            </div>

            {/* Close Icon Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
              aria-label={isRtl ? "إغلاق النافذة" : "Close Chat"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Window Container */}
          <div className="p-4 bg-[#efeae2] min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 relative">
            {/* Background WhatsApp Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#075e54_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Greeting Speech Bubble from Business */}
            <div className={`flex flex-col max-w-[88%] ${isRtl ? "self-start" : "self-start"} relative z-10`}>
              <div className="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-xs text-xs sm:text-sm whitespace-pre-line leading-relaxed font-medium">
                {greeting}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold mt-1 px-1">
                <span>{isRtl ? "الآن" : "Just now"}</span>
                <CheckCheck className="w-3.5 h-3.5 text-cyan-600" />
              </div>
            </div>
          </div>

          {/* Message Input & Form Area */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isRtl ? "اكتب رسالتك هنا..." : "Type your message..."}
              className="flex-1 px-4 py-2.5 rounded-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs sm:text-sm border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors font-medium"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-50 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all"
              aria-label={isRtl ? "إرسال إلى واتساب" : "Send WhatsApp message"}
            >
              <Send className={`w-4 h-4 fill-white ${isRtl ? "rotate-180" : ""}`} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label={isRtl ? "محادثة الواتساب" : "WhatsApp Chat"}
      >
        {/* Pulsing Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white" />
        </span>

        {/* Icon Toggle */}
        {isOpen ? (
          <X className="w-7 h-7 stroke-[2.5]" />
        ) : (
          <WhatsAppIcon className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};
