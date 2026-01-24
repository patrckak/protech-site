import { CheckCircle } from 'lucide-react';

/**
 * About Section Component
 * Design: Minimalismo Corporativo Moderno
 * - Layout assimétrico com imagem e texto
 * - Tipografia clara com Poppins para títulos
 * - Paleta de cores corporativa
 */

export default function AboutSection() {
  const strengths = [
    'Equipe altamente qualificada com certificações internacionais',
    'Mais de 15 anos de experiência no mercado',
    'Soluções personalizadas para cada cliente',
    'Suporte técnico 24/7 dedicado',
    'Compromisso com inovação e qualidade',
    'Projetos entregues no prazo e orçamento',
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg"></div>
            <img
              src="/images/team-collaboration.jpg"
              alt="Tech Solutions Team"
              className="relative z-10 rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Sobre Nós
            </div>

            <h2 className="text-foreground mb-6">
              Transformando Desafios Técnicos em Oportunidades
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Tech Solutions é uma empresa especializada em soluções técnicas integradas. Com mais de 15 anos de experiência, ajudamos empresas de todos os tamanhos a modernizar suas operações através de tecnologia confiável e inovadora.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa missão é ser o parceiro técnico de confiança das empresas, oferecendo soluções que combinam excelência, inovação e atendimento excepcional.
            </p>

            {/* Strengths */}
            <div className="space-y-3">
              {strengths.map((strength, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{strength}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Conheça Nossa Equipe
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">1000+</div>
            <p className="text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-muted-foreground">Profissionais</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">15+</div>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
}
