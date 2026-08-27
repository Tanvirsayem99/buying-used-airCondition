

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValuationCalculator } from "@/components/ValuationCalculator";
import { Services } from "@/components/Services";
import { ScrapMetalSection } from "@/components/ScrapMetalSection";
import { SampleSection } from "@/components/SampleSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { CoverageAreas } from "@/components/CoverageAreas";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <Navbar />
      <Hero />
      <ValuationCalculator />
      <ScrapMetalSection />
      <SampleSection />
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
