import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import wpp from "@/public/icons/wpp.svg";
import { redirect } from "next/navigation";

export default function Page() {
  return (
    <section className="min-w-screen min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>
          <h1 className="text-7xl font-black flex flex-row items-center">
            Pro<p className="text-[#00B874]">Tech</p>
          </h1>
          <span className="flex flex-row items-center gap-3">
            <div className="h-1.25 mt-2 w-32.5 bg-[#00B874]">&nbsp;</div>
            <p className="text-lg font-semibold">Soluções Técnicas</p>
          </span>
        </span>
      </motion.div>
      <span className="pt-6">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            onClick={() => redirect("https://wa.me/+5522988630500")}
            className="px-6 py-3 rounded-xl bg-[#00B874] text-white font-semibold shadow-lg"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34,197,94,0.7)",
                "0 0 0 15px rgba(34,197,94,0)",
                "0 0 0 0 rgba(34,197,94,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>
      </span>
    </section>
  );
}
