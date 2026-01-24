"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
