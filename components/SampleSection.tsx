"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "@/app/data/content";
import {
  Sparkles,
  Tag,
  MapPin,
  Maximize2,
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Grid,
  Wind,
  Layers,
  Flame,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export interface SampleProduct {
  id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  condition: string;
  conditionLabelAr?: string;
  conditionLabelEn?: string;
  price: string;
  location: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  createdAt?: string;
}

export const SampleSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [products, setProducts] = useState<SampleProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageModal, setActiveImageModal] = useState<SampleProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch products from API with fallback to localStorage
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
          localStorage.setItem("sample_products_cache", JSON.stringify(data.products));
          setIsLoading(false);
          return;
        }
      }
    } catch (error) {
      console.warn("API fetch error, falling back to cached local storage:", error);
    }

    // Local storage fallback
    const cached = localStorage.getItem("sample_products_cache");
    if (cached) {
      try {
        setProducts(JSON.parse(cached));
      } catch (e) {
        console.error("Cache parsing error:", e);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();

    // Listen for custom post event if fired from admin panel in same window
    const handleUpdate = () => fetchProducts();
    window.addEventListener("products_updated", handleUpdate);
    return () => window.removeEventListener("products_updated", handleUpdate);
  }, []);

  const categories = [
    { id: "all", labelAr: "الكل", labelEn: "All" },
    { id: "split", labelAr: "سبليت", labelEn: "Split AC" },
    { id: "window", labelAr: "شباك", labelEn: "Window AC" },
    { id: "central", labelAr: "مركزي", labelEn: "Central AC" },
    { id: "scrap", labelAr: "سكراب ونحاس", labelEn: "Scrap & Metal" },
  ];

  const filteredProducts = products.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  const renderCategoryBadgeIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "split":
        return <Wind className="w-3.5 h-3.5 text-cyan-600" />;
      case "window":
        return <Layers className="w-3.5 h-3.5 text-blue-600" />;
      case "central":
        return <Flame className="w-3.5 h-3.5 text-orange-600" />;
      case "scrap":
        return <Zap className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Grid className="w-3.5 h-3.5 text-cyan-600" />;
    }
  };

  return (
    <section id="samples" className="py-20 bg-gradient-to-b from-white via-slate-50 to-cyan-50/20 text-slate-900 relative overflow-hidden">
      {/* Decorative Glow background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-24 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>{t.samplesSection.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            {t.samplesSection.title}{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              {t.samplesSection.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.samplesSection.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 scale-105"
                    : "bg-white/90 hover:bg-slate-100 border border-slate-200/90 text-slate-700 hover:text-slate-900"
                }`}
              >
                {renderCategoryBadgeIcon(cat.id)}
                <span>{lang === "ar" ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Loading Spinner State */}
        {isLoading && (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-bold text-sm">
              {lang === "ar" ? "جاري تحميل العينات..." : "Loading sample products..."}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="py-16 text-center bg-white/80 rounded-3xl border border-slate-200 max-w-xl mx-auto p-8 shadow-sm">
            <Tag className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-bold text-base mb-2">
              {t.samplesSection.noProducts}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => {
              const title = lang === "ar" ? item.titleAr : item.titleEn;
              const description = lang === "ar" ? item.descriptionAr : item.descriptionEn;
              const conditionLabel =
                lang === "ar"
                  ? item.conditionLabelAr || item.condition
                  : item.conditionLabelEn || item.condition;

              const whatsappMsg =
                lang === "ar"
                  ? `مرحباً، أستفسر عن المنتج المعروض: ${title} (السعر: ${item.price})`
                  : `Hello, I want to inquire about the sample product: ${title} (Price: ${item.price})`;

              const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMsg);

              return (
                <div
                  key={item.id}
                  className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl overflow-hidden hover:border-cyan-400 shadow-md shadow-slate-200/60 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 cursor-pointer group/img">
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                        {renderCategoryBadgeIcon(item.category)}
                        <span className="capitalize">{item.category}</span>
                      </span>

                      {item.price && (
                        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold shadow-sm">
                          {item.price}
                        </span>
                      )}
                    </div>

                    {/* Zoom icon on image hover */}
                    <button
                      onClick={() => setActiveImageModal(item)}
                      className="absolute bottom-4 left-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg opacity-90 group-hover/img:scale-110 transition-all cursor-pointer"
                      title={lang === "ar" ? "تكبير الصورة" : "Zoom Image"}
                      aria-label={lang === "ar" ? "تكبير صورة العينة" : "Zoom product sample image"}
                    >
                      <Maximize2 className="w-4 h-4 text-slate-700" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Condition & Location Tag */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1 text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                          <span>{conditionLabel}</span>
                        </span>

                        {item.location && (
                          <span className="flex items-center gap-1 text-slate-600">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.location}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                        {title}
                      </h3>

                      {description && (
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                          {description}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp Action Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                      <span>{t.samplesSection.inquireBtn}</span>
                      {lang === "ar" ? (
                        <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                      ) : (
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      )}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Image Preview Modal */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h4 className="font-extrabold text-slate-900 text-base">
                {lang === "ar" ? activeImageModal.titleAr : activeImageModal.titleEn}
              </h4>
              <button
                onClick={() => setActiveImageModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
                aria-label={lang === "ar" ? "إغلاق معاينة الصورة" : "Close image modal preview"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-96 w-full bg-slate-900">
              <Image
                src={activeImageModal.image}
                alt="Product preview"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>

            {/* Modal Footer info */}
            <div className="p-5 flex items-center justify-between gap-4 bg-white">
              <div>
                <span className="text-xs text-slate-500 font-bold block">
                  {activeImageModal.location}
                </span>
                <span className="text-base font-black text-emerald-600">
                  {activeImageModal.price}
                </span>
              </div>
              <a
                href={getWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  `استفسار عن: ${activeImageModal.titleAr}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{t.samplesSection.inquireBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
