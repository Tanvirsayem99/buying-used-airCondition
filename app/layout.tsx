import type { Metadata } from "next";
import { Tajawal, Cairo, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "شراء مكيفات مستعمل القطيف | نشتري مكيفات سبليت وشباك بأعلى سعر كاش",
  description: "نشتري جميع أنواع المكيفات المستعملة (سبليت، شباك، مركزي) والأجهزة الكهربائية في القطيف، تاروت، سيهات، وصفوى بأعلى الأسعار مع خدمة فك ونقل مجاني 100%.",
  keywords: [
    "شراء مكيفات مستعمل القطيف",
    "شراء مكيفات مستعملة بالقطيف",
    "مكيفات سبليت مستعملة القطيف",
    "مكيفات شباك مستعملة القطيف",
    "شراء اجهزة مستعملة القطيف",
    "شراء اثاث مستعمل سيهات",
    "شراء مكيفات تاروت",
    "شراء مكيفات صفوى",
  ],
  openGraph: {
    title: "شراء مكيفات مستعمل القطيف | أفضل أسعار الكاش والفك المجاني",
    description: "تواصل معنا لبيع مكيفك المستعمل بأعلى سعر في القطيف والمنطقة الشرقية. خدمة 24 ساعة ونقل فوري.",
    url: "https://furniturebuyerksa.com",
    siteName: "شراء مكيفات مستعمل القطيف",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} ${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-cyan-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
