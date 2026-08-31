import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PHONE_NUMBER, WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppUrl } from "@/app/data/content";
import { Calendar, Phone, Sparkles, User, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: string[];
  keywords: string[];
}

const articlesMap: Record<string, ArticleData> = {
  "دليل-شراء-المكيفات-المستعملة-بالقطيف": {
    title: "دليل شراء المكيفات المستعملة بالقطيف: كيف تحصل على أعلى سعر لمكيفك القديم؟",
    excerpt: "تعرف على العوامل المؤثرة في تحديد سعر المكيف المستعمل بالقطيف وكيف تضمن أعلى سعر كاش.",
    category: "مكيفات مستعملة",
    date: "2026-08-28",
    keywords: ["شراء مكيفات مستعملة بالقطيف", "مشتري مكيفات مستعملة بالقطيف", "شراء مكيفات قديمة بالقطيف"],
    content: [
      "تعتبر عملية بيع المكيف المستعمل في القطيف خطوة هامة عند الرغبة في تجديد أجهزة المنزل أو التخلص من المكيفات القديمة. وللحصول على أعلى تقييم مالي عادل، هناك عدة نقاط يجب مراعاتها.",
      "أولاً: تحديد نوع المكيف وسعة التبريد. مكيفات السبليت (18، 24، 30 ألف وحدة) تحصل على تقييم عالي جداً خصوصاً إذا كانت من ماركات معروفة مثل ال جي، أو جنرال، أو جري.",
      "ثانياً: حالة الكومبروسر وغاز التبريد. حتى وإن كان المكيف عطلان، فإننا نشتري مكيفات السكراب والخربانة بالقطيف بأسعار ممتازة جداً بغرض الاستفادة من النحاس وقطع الغيار.",
      "ثالثاً: التعامل مع مشتري مباشر يقدم خدمة الفك والنقل المجاني بدون خصم أي مبلغ من سعر المكيف المتفق عليه.",
    ],
  },
  "اسعار-تسعير-سكراب-المعادن-بالقطيف": {
    title: "أسعار وتثمين سكراب المعادن والنحاس بالقطيف: كل ما تحتاج معرفته",
    excerpt: "تفاصيل بورصة السكراب في القطيف وكيفية بيع سكراب الكابلات والنحاس والبطاريات بأعلى سعر للكيلو.",
    category: "سكراب وخردة",
    date: "2026-08-25",
    keywords: ["شراء سكراب بالقطيف", "شراء مكيفات سكراب بالقطيف", "مشتري سكراب بالقطيف"],
    content: [
      "تشهد سوق سكراب المعادن بالقطيف والمنطقة الشرقية طلباً مستمراً على النحاس الأحمر والأصفر، الكابلات الكهربائية، الألمنيوم، وسكراب البطاريات والحديد.",
      "النحاس الأحمر المسحوب من مواسير التكييف والكابلات يعتبر من أغلى أنواع السكراب، حيث نقوم في buyallscrapksa.com بإعطائك أحدث التسعيرات المحدثة يومياً.",
      "كما نشتري مكيفات السكراب بالقطيف بجميع أحجامها للورش والمصانع والكميات الفردية للمنازل والفلل مع توفير شاحنات ونقل مباشر.",
    ],
  },
  "نصائح-بيع-الاثاث-والجهزة-المستعملة-بالقطيف": {
    title: "نصائح هامة عند بيع الأثاث والأجهزة الكهربائية المستعملة بالقطيف",
    excerpt: "خطوات بسيطة لتقييم أثاثك المستعمل وأجهزتك المنزلية لضمان عدم بخس الأسعار.",
    category: "أثاث وأجهزة",
    date: "2026-08-20",
    keywords: ["شراء اثاث مستعمل بالقطيف", "شراء أجهزة مستعملة بالقطيف", "مشتري أثاث مستعمل بالقطيف"],
    content: [
      "عند الرغبة في بيع غرف النوم، المجالس، الثلاجات، أو الغسالات بالقطيف، يفضل تصوير القطع بشكل واضح من عدة زوايا وتحديد حالتها العامة.",
      "الأجهزة الكهربائية التي تعمل بكفاءة عالية يتم تثمينها بأعلى الأسعار، كما نضمن لك الفك والتحميل دون التسبب في أي أضرار بجدران أو أرضيات منزلك.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const article = articlesMap[decodedSlug];

  if (!article) {
    return { title: "مقال غير موجود" };
  }

  return {
    title: `${article.title} | شراء مكيفات مستعمل القطيف`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `https://buyallscrapksa.com/blog/${decodedSlug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://buyallscrapksa.com/blog/${decodedSlug}`,
      siteName: "شراء مكيفات مستعمل القطيف",
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const article = articlesMap[decodedSlug];

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "شراء مكيفات مستعمل القطيف",
      url: "https://buyallscrapksa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "شراء مكيفات مستعمل القطيف",
      logo: "https://buyallscrapksa.com/favicon.ico",
    },
    mainEntityOfPage: `https://buyallscrapksa.com/blog/${decodedSlug}`,
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={articleSchema} />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "المدونة", url: "/blog" },
            { name: article.title, url: `/blog/${decodedSlug}` },
          ]}
        />

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 my-8">
          <header className="space-y-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
              <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-200">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-400">
                <User className="w-3.5 h-3.5" />
                <span>المحرر المعاين</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>
          </header>

          <div className="space-y-6 text-slate-700 leading-relaxed font-medium text-base sm:text-lg">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-cyan-950 text-white p-6 rounded-2xl space-y-4 mt-8 border border-cyan-500/30">
            <h3 className="text-lg font-black">هل لديك مكيفات أو سكراب أو أجهزة تريد بيعها الآن بالقطيف؟</h3>
            <p className="text-xs text-slate-300">
              تواصل معنا للحصول على تثمين فوري مجاني ودفع كاش في الموقع بنفس اليوم.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, `السلام عليكم، قرأت مقال ${article.title} وأرغب بالتواصل معكم.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>تواصل بالواتساب</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>اتصل فوراً: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
