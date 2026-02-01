"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import wpp from "@/public/icons/wpp.svg";
import { PlugZap, ShieldUser, Waypoints } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ServicesSection() {
  return (
    <section className="min-w-screen min-h-screen p-10 flex flex-col gap-16">
      <span>
        <h2 className="text-3xl justify-center font-extrabold flex flex-row items-center pt-10 text-center gap-2">
          Nossas <p className="font-black   text-[#00B874]">Soluções</p>
        </h2>
        <span className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="border-l-5 min-w-fit hover:shadow-lg transition-all duration-300 border-solid border-[#f3ab10]">
              <CardHeader>
                <CardTitle className="flex flex-row pt-2 text-2xl gap-2 items-center ">
                  <p className="text-[#f3ab10]">
                    <PlugZap />
                  </p>{" "}
                  Instalações Elétricas
                </CardTitle>
                <CardAction>
                  <Button
                    onClick={() => redirect("/whatsapp")}
                    className="bg-[#f3ab10] hover:bg-[#c58c0f] hover:shadow-md"
                  >
                    <Image
                      src={wpp}
                      alt="botão de contato via whatsapp"
                      height={15}
                    />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <span className="font-medium">
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Atendimento 24/7</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Troca de resistências</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Reparo em disjuntores</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Automações residenciais</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Manutenções corretivas</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Visitas e Laudos Técnicos</p>
                  </h1>
                </span>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </motion.div>

          {/* SEG ELETRONICA */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="border-l-5 min-w-fit hover:shadow-lg transition-all duration-300 border-solid border-[#23f310]">
              <CardHeader>
                <CardTitle className="flex flex-row pt-2 text-2xl gap-2 items-center ">
                  <p className="text-[#23f310]">
                    <ShieldUser />
                  </p>{" "}
                  Segurança Patrimonial
                </CardTitle>
                <CardAction>
                  <Button
                    onClick={() => redirect("/whatsapp")}
                    className="bg-[#23f310] hover:bg-[#1ca710] hover:shadow-md"
                  >
                    <Image
                      src={wpp}
                      alt="botão de contato via whatsapp"
                      height={15}
                    />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <span className="font-medium">
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Monitoramento 24/7</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Projetos Completos</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Instalação de Equipamentos</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    •{" "}
                    <p className="font-light">
                      Manutenções Preventivas / Corretivas
                    </p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Controles de Acesso</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Fechaduras Eletronicas</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Automatizadores de portões</p>
                  </h1>
                </span>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </motion.div>

          {/* SUPORTE TI */}

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="border-l-5 min-w-fit hover:shadow-lg transition-all duration-300 border-solid border-[#107af3]">
              <CardHeader>
                <CardTitle className="flex flex-row pt-2 text-2xl gap-2 items-center ">
                  <p className="text-[#107af3]">
                    <Waypoints />
                  </p>{" "}
                  Consultoria T.I
                </CardTitle>
                <CardAction>
                  <Button
                    onClick={() => redirect("/whatsapp")}
                    className="bg-[#107af3] hover:bg-[#107af9] hover:shadow-md"
                  >
                    <Image
                      src={wpp}
                      alt="botão de contato via whatsapp"
                      height={15}
                    />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <span className="font-medium">
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Suporte 24/7</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    •{" "}
                    <p className="font-light">
                      Elaboração e Implementação de Projetos
                    </p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Manutenção de Hardwares</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Cabeamento Estruturado</p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    •{" "}
                    <p className="font-light">
                      Limpeza e Montagem de computadores
                    </p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    •{" "}
                    <p className="font-light">
                      Implementação de Sistemas completos (ERP, CRM, PDV...)
                    </p>
                  </h1>
                  <h1 className="flex flex-row gap-2">
                    • <p className="font-light">Backups em Cloud</p>
                  </h1>
                </span>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </motion.div>
        </span>
      </span>

      <section className="max-w-5xl mx-auto px-6 space-y-6">
        <Separator />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl text-center justify-center font-extrabold flex flex-row items-center  gap-2">
            <p className="font-black   text-[#00B874]">Quem</p> Somos?
          </h2>

          <p className="text-lg font-normal pt-4 text-justify leading-relaxed">
            Buscamos sempre a melhor solução para sua dor, com o menor prazo
            possível.
          </p>

          <p className="leading-relaxed pt-4 font-light text-justify">
            Com <strong>+6 anos</strong> e <strong>+500</strong> clientes
            satisfeitos, atuamos com foco total em qualidade, segurança e
            confiabilidade, utilizando boas práticas técnicas, profissionais
            qualificados para garantir resultados duradouros e seguros.
          </p>
        </motion.div>

        <Separator />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-1xl text-center font-semibold mt-8">
            Por que escolher a ProTech?
          </h1>

          <ul>
            <li className="list-disc ml-6">Atendimento personalizado</li>
            <li className="list-disc ml-6">Profissionais experientes</li>
            <li className="list-disc ml-6">
              Soluções técnicas modernas e eficientes
            </li>
            <li className="list-disc ml-6">
              Compromisso com segurança e qualidade
            </li>
            <li className="list-disc ml-6">
              Transparência do orçamento à entrega
            </li>
          </ul>
        </motion.div>

        <Separator />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="leading-relaxed font-medium mt-6">
            Cada projeto é tratado de forma única. Analisamos a necessidade do
            cliente e entregamos a melhor solução técnica, sem improvisos e sem
            complicação.
          </p>

          <span className="flex flex-row items-center justify-center">
            <Button
              onClick={() => redirect("/whatsapp")}
              className=" mt-6 bg-[#00B874] hover:bg-[#009e5a] hover:shadow-md"
            >
              Entre em contato e solicite um orçamento
            </Button>
          </span>
        </motion.div>
      </section>
    </section>
  );
}
