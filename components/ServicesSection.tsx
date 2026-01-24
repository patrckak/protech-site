"use client";

import { Zap, Shield, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

/**
 * Services Section Component
 * Design: Minimalismo Corporativo Moderno
 * - Grid de 3 serviços principais
 * - Ícones minimalistas com cores da paleta
 * - Cards com sombras sutis
 * - Tipografia clara e hierarquizada
 */

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bgColor: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Soluções Elétricas",
    description:
      "Projetos e instalações de sistemas elétricos de alta performance para residências e empresas.",
    icon: <Zap size={32} />,
    features: [
      "Quadros de medições no padrão Enel-RJ",
      "Execução de projetos luminotécnicos",
      "Atendimento emergenciais 24/7",
      "Adeaquações à NBR-5410",
      "Automação Residencial",
    ],
    color: "#1e3a8a",
    bgColor: "#f0f9ff",
    image: "/images/electrical-solutions.jpg",
  },
  {
    id: 2,
    title: "Segurança Eletrônica",
    description:
      "Sistemas avançados de segurança, monitoramento e controle de acesso para sua tranquilidade.",
    icon: <Shield size={32} />,
    features: [
      "Venda e Instalação de Sistemas Completos CFTV",
      "Manutenção Preventiva e Corretiva",
      "Controles de acesso",
      "Alarmes integrados",
      "Monitoramento 24/7",
    ],
    color: "#10b981",
    bgColor: "#f0fdf4",
    image: "/images/security-solutions.jpg",
  },
  {
    id: 3,
    title: "Soluções em TI",
    description:
      "Infraestrutura de tecnologia, cloud computing e suporte técnico para modernizar seu negócio.",
    icon: <Server size={32} />,
    features: [
      "Montagem e manutenção de hardwares",
      "Backup e recuperação",
      "Suporte técnico 24/7",
      "Infraestrutura cloud",
      "Consultoria de TI",
    ],
    color: "#0ea5e9",
    bgColor: "#f0f9ff",
    image: "/images/it-solutions.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-w-screen min-h-screen mx-auto justify-center flex py-20 md:py-32 bg-white"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00B874] mb-4 text-3xl font-bold">
            Nossas Soluções
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções técnicas completas e integradas para atender
            todas as necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                {/* Service Card */}
                <Card className="h-full sm:max-w-[60vw] overflow-hidden border border-border hover:border-primary/20 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        color: service.color,
                        backgroundColor: service.bgColor,
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-foreground mb-3 font-bold text-xl">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          ></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm"
                      style={{
                        color: service.color,
                        backgroundColor: service.bgColor,
                        border: `1px solid ${service.color}20`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = service.color;
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = service.bgColor;
                        e.currentTarget.style.color = service.color;
                      }}
                    >
                      Saiba Mais →
                    </button>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-border"></div>

        {/* Additional Info */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-foreground mb-4 font-bold text-2xl">
            Soluções Personalizadas
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Cada projeto é único. Realizamos diagnóstico completo e
            desenvolvemos soluções sob medida para suas necessidades
            específicas.
          </p>
          <button className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            Solicitar Consultoria
          </button>
        </div>
      </div>
    </section>
  );
}
