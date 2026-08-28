import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValuationCalculator } from "@/components/ValuationCalculator";
import { Services } from "@/components/Services";
import { ScrapMetalSection } from "@/components/ScrapMetalSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { CoverageAreas } from "@/components/CoverageAreas";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { JsonLd, generateLocalBusinessSchema, generateWebSiteSchema, generateFAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "شراء مكيفات مستعمل القطيف | نشتري مكيفات سبليت وشباك وسكراب بأعلى سعر كاش",
  description:
    "شراء مكيفات مستعمل القطيف: نشتري جميع أنواع المكيفات (سبليت، شباك، مركزي، عطلانة، سكراب)، سكراب المعادن، الأثاث المستعمل، والأجهزة الكهربائية بالقطيف وتاروت وسيهات وصفوى بأعلى سعر كاش ونقل مجاني 100%.",
  keywords: [
    "شراء مكيفات مستعمل القطيف",
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
  },
  openGraph: {
    title: "شراء مكيفات مستعمل القطيف | أفضل أسعار الكاش والفك المجاني",
    description:
      "تواصل معنا لبيع مكيفك المستعمل والسكراب والأثاث بأعلى سعر بالقطيف والمنطقة الشرقية. خدمة 24/7 ودفع نقدي فوري.",
    url: "https://buyallscrapksa.com",
    siteName: "شراء مكيفات مستعمل القطيف",
    type: "website",
  },
};

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <JsonLd data={[localBusinessSchema, webSiteSchema]} />
      <Navbar />
      <Hero />
      <ValuationCalculator />
      <ScrapMetalSection />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <CoverageAreas />
      <Testimonials />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
