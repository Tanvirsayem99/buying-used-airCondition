import type { Metadata } from "next";
import { Tajawal, Cairo, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd, generateLocalBusinessSchema, generateWebSiteSchema } from "@/components/JsonLd";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyallscrapksa.com"),
  title: {
    default: "شراء مكيفات مستعمل القطيف | نشتري مكيفات سبليت وشباك وسكراب بأعلى سعر كاش",
    template: "%s | شراء مكيفات مستعمل القطيف",
  },
  description:
    "مؤسسة شراء مكيفات مستعمل القطيف: نشتري جميع أنواع المكيفات (سبليت، شباك، مركزي، سكراب)، سكراب المعادن، الأثاث المستعمل، والأجهزة الكهربائية في القطيف، تاروت، سيهات، صفوى، والعوامية بأعلى الأسعار والدفع نقدي فوري مع فك ونقل مجاني 100%.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    // Requested Arabic Keywords
    "شراء سكراب بالقطيف",
    "شراء مكيفات مستعملة بالقطيف",
    "شراء مكيفات سكراب بالقطيف",
    "شراء اثاث مستعمل بالقطيف",
    "شراء أجهزة مستعملة بالقطيف",
    "شراء خردة بالقطيف",
    "بيع سكراب بالقطيف",
    "شراء الأجهزة الكهربائية المستعملة بالقطيف",
    "شراء مكيفات قديمة بالقطيف",
    "شراء مكيفات خربانة بالقطيف",
    "شراء أثاث مستعمل",
    "شراء أجهزة منزلية مستعملة",
    "مشتري سكراب بالقطيف",
    "مشتري مكيفات مستعملة بالقطيف",
    "مشتري أثاث مستعمل بالقطيف",
    "شراء مكيفات مستعمل القطيف",
    // Requested English Keywords
    "buy used air conditioners Qatif",
    "used AC buyer Qatif",
    "sell used AC Qatif",
    "used air conditioner buyer Saudi Arabia",
    "scrap buyer Qatif",
    "scrap buyer Saudi Arabia",
    "used furniture buyer Qatif",
    "used appliances buyer Qatif",
    "sell used furniture Qatif",
    "sell used appliances Qatif",
    "buy old air conditioners Qatif",
    "AC scrap buyer Qatif",
    "used home appliances buyer Qatif",
  ],
  alternates: {
    canonical: "https://buyallscrapksa.com",
    languages: {
      "ar-SA": "https://buyallscrapksa.com",
      "en-US": "https://buyallscrapksa.com",
    },
  },
  verification: {
    google: "vPdN5WTgh2qQ5IVPjTUcg1O9LiipAzYeO2r4Soa2y-M",
  },
  openGraph: {
    title: "شراء مكيفات مستعمل القطيف | نشتري المكيفات والسكراب والأثاث بأعلى سعر كاش",
    description:
      "تواصل معنا الآن لبيع مكيفك المستعمل وسكرابك بأعلى سعر في القطيف، تاروت، سيهات، وصفوى. دفع نقدي فوري، وفريق متخصص للفك والنقل المجاني 100%.",
    url: "https://buyallscrapksa.com",
    siteName: "شراء مكيفات مستعمل القطيف",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://buyallscrapksa.com/images/scrap-ac.webp",
        width: 1200,
        height: 630,
        alt: "شراء مكيفات مستعمل القطيف",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شراء مكيفات مستعمل القطيف | buyallscrapksa.com",
    description:
      "نشتري المكيفات المستعملة وسكراب المعادن والأجهزة بالقطيف بأعلى سعر كاش ونقل مجاني.",
    images: ["https://buyallscrapksa.com/images/scrap-ac.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} ${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="vPdN5WTgh2qQ5IVPjTUcg1O9LiipAzYeO2r4Soa2y-M" />
        <link rel="preload" href="/images/hero-ac.webp" as="image" type="image/webp" fetchPriority="high" />
        <JsonLd data={[localBusinessSchema, webSiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-cyan-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
