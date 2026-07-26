"use client";

import Header from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";

export default function Page() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col bg-slate-100">
      <Header />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </section>
  );
}
