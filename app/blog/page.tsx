import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { BookOpen, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مدونة شراء المكيفات والسكراب بالقطيف | نصائح وأسعار التثمين",
  description:
    "اقرأ أحدث المقالات والنصائح حول شراء وبيع المكيفات المستعملة وسكراب المعادن والأجهزة الكهربائية بالقطيف والمنطقة الشرقية.",
  keywords: [
    "مدونة شراء مكيفات القطيف",
    "أسعار سكراب بالقطيف",
    "نصائح بيع مكيف مستعمل",
    "شراء مكيفات مستعملة بالقطيف",
    "شراء سكراب بالقطيف",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com/blog",
  },
  openGraph: {
    title: "مدونة شراء المكيفات والسكراب بالقطيف | buyallscrapksa.com",
    description: "أحدث نصائح ودلائل تثمين المكيفات المستعملة وسكراب المعادن في القطيف.",
    url: "https://buyallscrapksa.com/blog",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

const posts = [
  {
    slug: "دليل-شراء-المكيفات-المستعملة-بالقطيف",
    title: "دليل شراء المكيفات المستعملة بالقطيف: كيف تحصل على أعلى سعر لمكيفك القديم؟",
    excerpt: "تعرف على العوامل المؤثرة في تحديد سعر المكيف المستعمل بالقطيف، وكيف تجهز مكيفك للحصول على أعلى تثمين كاش.",
    date: "2026-08-28",
    readTime: "4 دقائق",
    category: "مكيفات مستعملة",
  },
  {
    slug: "اسعار-تسعير-سكراب-المعادن-بالقطيف",
    title: "أسعار وتثمين سكراب المعادن والنحاس بالقطيف: كل ما تحتاج معرفته",
    excerpt: "تفاصيل بورصة السكراب في القطيف وكيفية بيع سكراب الكابلات والنحاس والبطاريات بأعلى سعر للكيلو.",
    date: "2026-08-25",
    readTime: "5 دقائق",
    category: "سكراب وخردة",
  },
  {
    slug: "نصائح-بيع-الاثاث-والجهزة-المستعملة-بالقطيف",
    title: "نصائح هامة عند بيع الأثاث والأجهزة الكهربائية المستعملة بالقطيف",
    excerpt: "خطوات بسيطة لتقييم أثاثك المستعمل وأجهزتك المنزلية (ثلاجات وغسالات) لضمان عدم بخس الأسعار.",
    date: "2026-08-20",
    readTime: "3 دقائق",
    category: "أثاث وأجهزة",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }]} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white rounded-3xl p-6 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold">
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>مدونة التوعية والتثمين • buyallscrapksa.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              مدونة شراء المكيفات والسكراب بالقطيف
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              استكشف مقالاتنا المتخصصة حول كيفية بيع مكيفك المستعمل وسكراب المعادن والأثاث بالأعلى تقيماً بالقطيف والمنطقة الشرقية.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-200/60">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="text-lg font-black text-slate-900 leading-snug hover:text-cyan-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-semibold">{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  <span>اقرأ المقال</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
