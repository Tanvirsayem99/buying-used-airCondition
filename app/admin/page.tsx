"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PlusCircle,
  Trash2,
  Image as ImageIcon,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Tag,
  MapPin,
  Lock,
  Eye,
  LogOut,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { SampleProduct } from "@/components/SampleSection";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [products, setProducts] = useState<SampleProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Form states
  const [titleAr, setTitleAr] = useState<string>("");
  const [titleEn, setTitleEn] = useState<string>("");
  const [category, setCategory] = useState<string>("split");
  const [condition, setCondition] = useState<string>("excellent");
  const [conditionLabelAr, setConditionLabelAr] = useState<string>("ممتاز / شبه جديد");
  const [conditionLabelEn, setConditionLabelEn] = useState<string>("Excellent / Like New");
  const [price, setPrice] = useState<string>("");
  const [location, setLocation] = useState<string>("القطيف");
  const [descriptionAr, setDescriptionAr] = useState<string>("");
  const [descriptionEn, setDescriptionEn] = useState<string>("");

  // Image states
  const [imageMode, setImageMode] = useState<"file" | "url">("file");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");

  // Check login session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("admin_authenticated");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch products
  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        if (data.products) {
          setProducts(data.products);
          localStorage.setItem("sample_products_cache", JSON.stringify(data.products));
        }
      }
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  // Handle Passcode submit
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "admin123" || passcode.trim() === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      setAuthError("");
    } else {
      setAuthError("كلمة المرور غير صحيحة! (أدخل: admin123)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
  };

  // Image Upload File Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ text: "حجم الصورة كبير جداً! اختر صورة أقل من 5 ميجابايت", type: "error" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        setImageUrl(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  // Condition preset handler
  const handleConditionChange = (cond: string) => {
    setCondition(cond);
    switch (cond) {
      case "excellent":
        setConditionLabelAr("ممتاز / شبه جديد");
        setConditionLabelEn("Excellent / Like New");
        break;
      case "good":
        setConditionLabelAr("جيد جداً");
        setConditionLabelEn("Very Good");
        break;
      case "scrap":
        setConditionLabelAr("سكراب / قطع غيار");
        setConditionLabelEn("Scrap / For Parts");
        break;
    }
  };

  // Post Product Submit
  const handlePostProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleAr && !titleEn) {
      setMessage({ text: "يرجى كتابة عنوان المنتج باللغة العربية أو الإنجليزية", type: "error" });
      return;
    }

    const finalImage =
      imageMode === "file"
        ? imagePreview || imageUrl
        : imageUrl || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80";

    if (!finalImage) {
      setMessage({ text: "يرجى اختيار صورة للمنتج أو إدخال رابط صورة", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    const payload = {
      titleAr: titleAr || titleEn,
      titleEn: titleEn || titleAr,
      category,
      condition,
      conditionLabelAr,
      conditionLabelEn,
      price: price || "اتصل لمعرفة السعر",
      location: location || "القطيف",
      descriptionAr: descriptionAr || titleAr,
      descriptionEn: descriptionEn || titleEn,
      image: finalImage,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.product) {
        setMessage({ text: "تم نشر المنتج بنجاح واستعراضه في معرض العينات!", type: "success" });
        // Reset form
        setTitleAr("");
        setTitleEn("");
        setPrice("");
        setDescriptionAr("");
        setDescriptionEn("");
        setImagePreview("");
        setImageUrl("");

        // Refresh list
        await loadProducts();
        window.dispatchEvent(new Event("products_updated"));
      } else {
        setMessage({ text: data.error || "حدث خطأ أثناء حفظ المنتج", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: "فشل الاتصال بالخادم. يرجى المحاولة لاحقاً.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    if (!confirm("هل أنت تأكد من رغبتك في حذف هذا المنتج من العينات؟")) return;

    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMessage({ text: "تم حذف المنتج بنجاح", type: "success" });
        await loadProducts();
        window.dispatchEvent(new Event("products_updated"));
      }
    } catch (err) {
      console.error("Delete error:", err);
      setMessage({ text: "تعذر حذف المنتج", type: "error" });
    }
  };

  // Render Login Lock Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4" dir="rtl">
        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl max-w-md w-full shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 mx-auto shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">لوحة تحكم الإدارة</h1>
            <p className="text-slate-400 text-xs mt-1">
              إضافة وإدارة العينات والمكيفات المعروضة في الصفحة الرئيسية
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4 text-right">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                كلمة المرور المشرف
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="أدخل كلمة المرور (افتراضي: admin123)"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition-all pl-10"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
              </div>
            </div>

            {authError && (
              <p className="text-xs text-rose-400 font-bold bg-rose-950/50 p-2.5 rounded-lg border border-rose-800">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
            >
              دخول الإدارة
            </button>
          </form>

          <div className="pt-2 border-t border-slate-700/60">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1 font-bold"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>العودة للموقع الرئيسي</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      {/* Admin Navbar Header */}
      <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <h1 className="text-base font-black text-white leading-tight">
                لوحة إداري العينات والمكيفات
              </h1>
              <span className="text-[10px] text-cyan-400 font-bold block">
                موقع شراء مكيفات مستعملة بالقطيف
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#samples"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">معاينة بالموقع الرئيسي</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-bold transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>خروج</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top Notification Message */}
        {message && (
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-sm font-bold shadow-lg animate-in fade-in slide-in-from-top-2 ${
              message.type === "success"
                ? "bg-emerald-950/80 border-emerald-700 text-emerald-200"
                : "bg-rose-950/80 border-rose-700 text-rose-200"
            }`}
          >
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span className="flex-1">{message.text}</span>
            <button onClick={() => setMessage(null)} className="text-slate-400 hover:text-white" aria-label="إغلاق التنبيه">
              ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Post Product Form Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <PlusCircle className="w-6 h-6 text-cyan-400" />
              <div>
                <h2 className="text-lg font-black text-white">إضافة منتج أو مكيف عينة</h2>
                <p className="text-xs text-slate-400">
                  انشر صورة وتفاصيل المكيف ليظهر فوراً في قسم العينات بالموقع
                </p>
              </div>
            </div>

            <form onSubmit={handlePostProduct} className="space-y-4">
              {/* Title Arabic */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  اسم المنتج / المكيف (بالعربية) <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={titleAr}
                  onChange={(e) => setTitleAr(e.target.value)}
                  placeholder="مثال: مكيف سبليت جري 24 ألف وحدة"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              {/* Title English */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Title (English) <span className="text-slate-500">(اختياري)</span>
                </label>
                <input
                  type="text"
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  placeholder="e.g. Gree Split AC 24,000 BTU"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-all dir-ltr"
                />
              </div>

              {/* Category & Condition */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الفئة</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs font-bold focus:outline-none focus:border-cyan-500"
                  >
                    <option value="split">سبليت (Split AC)</option>
                    <option value="window">شباك (Window AC)</option>
                    <option value="central">مركزي (Central AC)</option>
                    <option value="scrap">سكراب ونحاس (Scrap)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الحالة</label>
                  <select
                    value={condition}
                    onChange={(e) => handleConditionChange(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs font-bold focus:outline-none focus:border-cyan-500"
                  >
                    <option value="excellent">ممتاز / شبه جديد</option>
                    <option value="good">جيد جداً</option>
                    <option value="scrap">سكراب / للتفكيك</option>
                  </select>
                </div>
              </div>

              {/* Price & Location */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">السعر المعروض</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="مثال: 650 ريال"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs font-bold focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الموقع / المدينة</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="مثال: القطيف - المجيدية"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs font-bold focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Image Input Selection */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>صورة المنتج</span>
                  </label>
                  <div className="flex items-center gap-2 text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => setImageMode("file")}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        imageMode === "file" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      رفع ملف صورة
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageMode("url")}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        imageMode === "url" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      رابط صورة (URL)
                    </button>
                  </div>
                </div>

                {imageMode === "file" ? (
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-xs text-slate-400 file:ml-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-cyan-600 file:text-white hover:file:bg-cyan-500 cursor-pointer bg-slate-950 border border-slate-800 rounded-xl p-1"
                    />
                  </div>
                ) : (
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs dir-ltr focus:outline-none focus:border-cyan-500"
                  />
                )}

                {/* Live Image Preview Thumbnail */}
                {imagePreview && (
                  <div className="mt-3 relative h-36 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <span className="absolute top-2 right-2 bg-slate-900/90 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-700">
                      معاينة الصورة
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  وصف المنتج والخدمة (بالعربية)
                </label>
                <textarea
                  rows={3}
                  value={descriptionAr}
                  onChange={(e) => setDescriptionAr(e.target.value)}
                  placeholder="اكتب مواصفات وحالة وتفاصيل المكيف شامل الفك والتركيب والنقل..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>جاري النشر...</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" />
                    <span>نشر المنتج في قسم العينات</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Current Products List Table / Cards (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Tag className="w-6 h-6 text-cyan-400" />
                <div>
                  <h2 className="text-lg font-black text-white">المنتجات المعروضة حالياً</h2>
                  <p className="text-xs text-slate-400">
                    عدد العينات: <span className="text-cyan-400 font-bold">{products.length}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={loadProducts}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="تحديث القائمة"
                aria-label="تحديث قائمة المنتجات"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              </button>
            </div>

            {isLoading ? (
              <div className="py-16 text-center text-slate-500 text-xs font-bold">
                جاري جلب قائمة المنتجات...
              </div>
            ) : products.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-sm font-bold border border-dashed border-slate-800 rounded-2xl p-6">
                لا توجد منتجات مسجلة حتى الآن. استخدم النموذج لإضافة أول عينة!
              </div>
            ) : (
              <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-950 border border-slate-800 hover:border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.titleAr}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase">
                            {item.category}
                          </span>
                          <span className="text-emerald-400 text-xs font-black">
                            {item.price}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-white truncate">
                          {item.titleAr}
                        </h4>

                        <div className="flex items-center gap-3 text-[11px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      className="px-3 py-2 rounded-xl bg-rose-950/50 hover:bg-rose-900 text-rose-300 border border-rose-900 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                      title="حذف هذا المنتج"
                      aria-label="حذف هذا المنتج"
                    >
                      <Trash2 className="w-4 h-4 text-rose-400" />
                      <span>حذف</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
