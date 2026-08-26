"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "@/app/data/content";
import { Wind, Grid, Server, Box, RefreshCw, Armchair, Calculator, Plus, Minus, Sparkles, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const ValuationCalculator = () => {
  const { lang, t } = useLanguage();

  const [selectedTypeId, setSelectedTypeId] = useState<string>("split");
  const [selectedConditionId, setSelectedConditionId] = useState<string>("excellent");
  const [quantity, setQuantity] = useState<number>(1);

  const selectedType = t.calculator.types.find((item) => item.id === selectedTypeId) || t.calculator.types[0];
  const selectedCondition = t.calculator.conditions.find((cond) => cond.id === selectedConditionId) || t.calculator.conditions[0];

  const getEstimatedRangeText = () => {
    if (selectedTypeId === "furniture") {
      return lang === "ar" ? "يعتمد على معاينة الصور" : "Depends on photo inspection";
    }

    let minBase = 500;
    let maxBase = 1500;

    switch (selectedTypeId) {
      case "split":
        minBase = 500;
        maxBase = 1500;
        break;
      case "window":
        minBase = 300;
        maxBase = 800;
        break;
      case "central":
        minBase = 1000;
        maxBase = 3500;
        break;
      case "fridge":
        minBase = 400;
        maxBase = 1200;
        break;
      case "washer":
        minBase = 300;
        maxBase = 900;
        break;
    }

    const minTotal = Math.round(minBase * selectedCondition.multiplier * quantity);
    const maxTotal = Math.round(maxBase * selectedCondition.multiplier * quantity);

    return `${minTotal} - ${maxTotal} ${lang === "ar" ? "ريال سعودي" : "SAR"}`;
  };

  const renderIcon = (iconName: string, isSelected: boolean) => {
    const colorClass = isSelected ? "text-cyan-600" : "text-slate-600";
    switch (iconName) {
      case "Wind":
        return <Wind className={`w-6 h-6 ${colorClass}`} />;
      case "Grid":
        return <Grid className={`w-6 h-6 ${colorClass}`} />;
      case "Server":
        return <Server className={`w-6 h-6 ${colorClass}`} />;
      case "Box":
        return <Box className={`w-6 h-6 ${colorClass}`} />;
      case "RefreshCw":
        return <RefreshCw className={`w-6 h-6 ${colorClass}`} />;
      case "Armchair":
        return <Armchair className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <Wind className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const handleWhatsappSubmit = () => {
    const estimatedText = getEstimatedRangeText();
    const text =
      lang === "ar"
        ? `السلام عليكم ورحمة الله،\nأرغب في طلب تسعير لبيع الأجهزة التالية في القطيف:\n📍 الجهاز: ${selectedType.name}\n📊 الحالة: ${selectedCondition.name}\n🔢 العدد: ${quantity}\n💰 التقدير التلقائي: ${estimatedText}\n\nيرجى إفادتي بالسعر النهائي المباشر وتحديد موعد الفك والاستلام.`
        : `Hello,\nI want a final price quote for selling:\n📍 Item: ${selectedType.name}\n📊 Condition: ${selectedCondition.name}\n🔢 Quantity: ${quantity}\n💰 Estimated Range: ${estimatedText}\n\nPlease advise your final offer and pickup timing in Qatif.`;

    const url = getWhatsAppUrl(WHATSAPP_NUMBER, text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden text-slate-900">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-900 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-cyan-600" />
            <span>{t.calculator.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === "ar" ? "احسب القيمة التقديرية لمكيفك في ثوانٍ" : "Estimate Your AC Value in Seconds"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl shadow-slate-300/40">
          
          {/* Step 1: Select Item Type */}
          <div className="space-y-4 mb-8">
            <label className="block text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>{t.calculator.step1Label}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {t.calculator.types.map((type) => {
                const isSelected = type.id === selectedTypeId;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedTypeId(type.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 shadow-md shadow-cyan-500/10 scale-[1.02]"
                        : "bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className={`mb-2.5 p-2 rounded-xl ${isSelected ? "bg-white shadow-xs" : "bg-slate-100"}`}>
                      {renderIcon(type.icon, isSelected)}
                    </div>
                    <span className={`text-xs sm:text-sm font-extrabold ${isSelected ? "text-cyan-900" : "text-slate-800"}`}>
                      {type.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Item Condition */}
          <div className="space-y-4 mb-8">
            <label className="block text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.calculator.step2Label}</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.calculator.conditions.map((cond) => {
                const isSelected = cond.id === selectedConditionId;
                return (
                  <button
                    key={cond.id}
                    type="button"
                    onClick={() => setSelectedConditionId(cond.id)}
                    className={`p-3.5 rounded-xl border text-sm font-extrabold text-center transition-all ${
                      isSelected
                        ? "bg-blue-50 border-blue-500 text-blue-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {cond.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Quantity Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            <span className="text-sm sm:text-base font-bold text-slate-800">
              {t.calculator.step3Label}
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-300 shadow-xs active:scale-95 font-bold"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-xl font-black text-slate-900 w-8 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-xl bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center text-cyan-900 border border-cyan-300 shadow-xs active:scale-95 font-bold"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Estimated Result Display Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-1">
                {t.calculator.estimatedRange}
              </span>
              <div className="text-2xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                {getEstimatedRangeText()}
              </div>
              <p className="text-xs text-slate-300 mt-2">
                {t.calculator.disclaimer}
              </p>
            </div>

            <button
              onClick={handleWhatsappSubmit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-green-600/30 hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{t.calculator.submitWhatsapp}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
