import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutContent } from "@/components/AboutContent";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "عن الشركة | شراء مكيفات مستعمل القطيف والدمام والخبر",
  description:
    "تعرف على مؤسستنا الرائدة في شراء وتثمين المكيفات المستعملة وسكراب المعادن والأجهزة الكهربائية بأعلى الأسعار ودفع نقدي فوري في القطيف والدمام والخبر مع خدمة فك ونقل مجاني 100%.",
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
