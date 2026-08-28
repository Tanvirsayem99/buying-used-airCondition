import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutContent } from "@/components/AboutContent";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "عن المؤسسة | شراء مكيفات مستعمل القطيف - buyallscrapksa.com",
  description:
    "تعرف على مؤسستنا الرائدة في شراء وتثمين المكيفات المستعملة وسكراب المعادن والأثاث والأجهزة الكهربائية بأعلى الأسعار ودفع نقدي فوري في القطيف وسيهات وصفوى وتاروت والعوامية.",
  alternates: {
    canonical: "https://buyallscrapksa.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
      <Navbar />
      <AboutContent />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
