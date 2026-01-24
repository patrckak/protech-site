import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import wpp from "@/public/icons/wpp.svg";
import wppH from "@/public/icons/wpp-hover.svg";
import { motion } from "motion/react";

/**
 * Hero Section Component
 * Design: Minimalismo Corporativo Moderno
 * - Background com imagem gerada de alta qualidade
 * - Texto com contraste forte (dark text on light background)
 * - CTA com acentos verdes
 * - Animações suaves ao scroll
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex pt-32 justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-banner.jpg)",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}

      <div className="container relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white font-medium text-md">
                ⚡ Soluções Técnicas com Excelência
              </span>
            </div>
            {/* Main Heading */}

            <h1 className="text-white font-bold mb-6 leading-tight">
              Soluções Técnicas Profissionais para Seu Negócio
            </h1>

            {/* Subheading */}

            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Especialistas em Elétrica, Segurança Eletrônica e TI.
              Transformamos desafios técnicos em oportunidades de crescimento
              para seu problema!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[#00B874] hover:bg-[#00A367] hover:scale-105 hover:text-[#035235] text-white rounded-lg px-8 py-3 font-semibold text-base transition-all duration-200 flex items-center gap-4 group">
              <Link
                href="#services"
                className="flex flex-row gap-2 items-center justify-center"
              >
                Explorar Serviços
                <ChevronDown
                  size={20}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </Link>
            </Button>
            <Button
              onClick={() => redirect("https://wa.me/5522988630500")}
              className="bg-[#00B874] hover:bg-[#00A367] hover:scale-105 hover:text-[#035235] text-white rounded-lg px-8 py-3 font-semibold text-base transition-all duration-200 flex items-center gap-4 group"
            >
              <Image
                src={wpp}
                alt="wpp"
                height={18}
                className="group-hover:hidden"
              />
              <Image
                src={wppH}
                alt="wpp"
                height={18}
                className="hidden group-hover:block"
              />
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center ">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                +500
              </div>
              <p className="text-white/80 text-sm">Projetos Realizados</p>
            </div>
            <div className="text-center ">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                +7
              </div>
              <p className="text-white/80 text-sm">Anos de Experiência</p>
            </div>
            <div className="text-center ">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 hover:">
                5 ⭐
              </div>
              <p className="text-white/80 text-sm">No google feedbacks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm">Saiba mais</span>
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
