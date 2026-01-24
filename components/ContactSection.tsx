"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Telefone',
      value: '(11) 3000-0000',
      href: 'tel:+551130000000',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'contato@techsolutions.com.br',
      href: 'mailto:contato@techsolutions.com.br',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Endereco',
      value: 'Sao Paulo, SP - Brasil',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pronto para transformar seus desafios tecnicos em oportunidades? Fale conosco hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-foreground font-semibold">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white p-8 rounded-lg border border-border shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 9999-9999"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva sua necessidade tecnica..."
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Send size={18} />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
