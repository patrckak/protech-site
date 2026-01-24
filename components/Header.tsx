"use client";

import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import wpp from "@/public/icons/wpp.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f0f0f0] border-b border-border shadow-sm">
      <div className="container flex items-center justify-between pl-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <Image src={logo} alt="logo" height={50} />
          </div>
          <span className="font-black text-2xl text-foreground flex flex-row items-center">
            Pro<p className="text-[#00c87e]">Tech</p>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:scale-105 hover:text-primary transition-all duration-100 font-medium text-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block mr-[-5vw] md:mr-[-6vw] lg:mr-[-15vw]">
          <Button
            onClick={() => redirect("https://wa.me/5522988630500")}
            className="bg-[#00B874] hover:bg-[#00A367] hover:scale-105 hover:text-[#035235] text-white rounded-lg px-2 py-2 font-medium transition-all duration-200"
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden md:mr-[-6vw] lg:mr-[-15vw]">
          <Button
            onClick={() => redirect("https://wa.me/5522988630500")}
            className="bg-[#00B874] hover:bg-[#00A367] hover:scale-105 hover:text-[#035235] text-white rounded-lg px-2 py-2 font-medium transition-all duration-200"
          >
            <Image src={wpp} alt="wpp" height={20} />
          </Button>
        </div>

        <button
          className="md:hidden p-2 mr-10 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => redirect("https://wa.me/5522988630500")}
              className="w-[50%] m-auto bg-[#00B874] hover:bg-[#00A367]  text-white rounded-lg py-2 font-medium"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
