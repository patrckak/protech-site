import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground flex items-center justify-center text-white py-16">
      <div className="container">
        <div className=" flex md:flex-row sm:flex-col mx-10 flex-wrap md:justify-between sm:justify-center items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl font-black flex flex-row items-center">
                Pro<p className="text-[#00B874]">Tech</p>
              </h1>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Soluções técnicas profissionais em Elétrica, Segurança Eletrônica
              e TI.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+551130000000"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                (22) 98863 0500
              </a>
              <a
                href="mailto:contato@techsolutions.com.br"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                contato@protechsolucoes.net.br
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>Itaperuna, RJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Pro Corp. - Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/60 pt-[-5px] flex flex-row gap-4 items-center justify-center ">
            <a href="https://protechsolucoes.net.br">ProTech</a> |
            <a href="https://protechsolucoes.net.br">Lúmina</a> |
            <a href="https://protechsolucoes.net.br">StackFlex</a>
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/termos-de-privacidade"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacidade
            </a>
            <span className="text-white/30">•</span>
            <a
              href="/termos-de-uso"
              className="text-white/60 hover:text-white transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
