import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

/**
 * Projects Section Component
 * Design: Minimalismo Corporativo Moderno
 * - Showcase de projetos realizados
 * - Grid responsivo com cards
 * - Badges de categorias
 * - Efeitos hover sutis
 */

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema Elétrico Inteligente - Prédio Comercial',
    description:
      'Implementação de sistema elétrico de distribuição inteligente com monitoramento em tempo real para prédio comercial de 20 andares.',
    category: 'Elétrica',
    image: '/images/electrical-solutions.jpg',
    tags: ['Alta Tensão', 'Automação', 'Monitoramento'],
  },
  {
    id: 2,
    title: 'Centro de Segurança Integrado',
    description:
      'Implementação de centro de monitoramento de segurança com CCTV 4K, controle de acesso biométrico e alarmes inteligentes.',
    category: 'Segurança',
    image: '/images/security-solutions.jpg',
    tags: ['CCTV', 'Acesso Biométrico', 'Monitoramento 24/7'],
  },
  {
    id: 3,
    title: 'Infraestrutura Cloud Corporativa',
    description:
      'Migração completa de infraestrutura on-premises para cloud com backup redundante e disaster recovery.',
    category: 'TI',
    image: '/images/it-solutions.jpg',
    tags: ['Cloud', 'Backup', 'Segurança'],
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Elétrica: { bg: '#f0f9ff', text: '#1e3a8a' },
  Segurança: { bg: '#f0fdf4', text: '#10b981' },
  TI: { bg: '#f0f9ff', text: '#0ea5e9' },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Projetos Realizados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram empresas através de soluções técnicas inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = categoryColors[project.category] || categoryColors.TI;
            return (
              <Card
                key={project.id}
                className="overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:shadow-md"
              >
                <div className="relative h-40 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

                  <div className="absolute top-4 right-4">
                    <Badge
                      className="font-semibold"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.text}30`,
                      }}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                    Ver Detalhes →
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
