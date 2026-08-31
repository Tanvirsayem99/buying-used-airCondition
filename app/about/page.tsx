import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { AboutContent } from "@/components/AboutContent";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA").then((m) => m.FloatingCTA));

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
