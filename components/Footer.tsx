import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalismo Corporativo Moderno
 * - Footer com informações da empresa
 * - Links úteis e redes sociais
 * - Paleta: Azul profundo com acentos
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-white py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">TS</span>
              </div>
              <span className="font-bold text-lg">Tech Solutions</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Soluções técnicas profissionais em Elétrica, Segurança Eletrônica e TI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Soluções Elétricas', 'Segurança Eletrônica', 'Soluções em TI', 'Consultoria', 'Suporte 24/7'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
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
                (11) 3000-0000
              </a>
              <a
                href="mailto:contato@techsolutions.com.br"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                contato@techsolutions.com.br
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>Sao Paulo, SP - Brasil</span>
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
            &copy; {currentYear} Tech Solutions. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
              { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
              { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacidade
            </a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
