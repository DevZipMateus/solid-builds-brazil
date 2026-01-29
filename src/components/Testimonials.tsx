import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useParallax } from '@/hooks/useScrollAnimation';
import testimonialsBg from '@/assets/testimonials-bg.jpg';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    company: 'Indústria Metalúrgica Silva',
    role: 'Diretor de operações',
    content: 'A Solid Engenharia executou a ampliação do nosso galpão industrial com excelência. O prazo foi cumprido à risca e a qualidade do trabalho superou nossas expectativas. Profissionais comprometidos e transparentes.',
    rating: 5,
  },
  {
    name: 'Fernanda Rodrigues',
    company: 'Grupo Comercial Atlântico',
    role: 'Gerente de projetos',
    content: 'Contratamos a Solid para a construção da nossa nova sede comercial. A gestão de obra foi impecável, com relatórios constantes e zero surpresas no orçamento. Recomendo fortemente.',
    rating: 5,
  },
  {
    name: 'Roberto Menezes',
    company: 'Logística Express RS',
    role: 'Proprietário',
    content: 'Excelente experiência! A equipe da Solid demonstrou conhecimento técnico impressionante na execução das fundações do nosso centro de distribuição. Obra entregue no prazo e com qualidade.',
    rating: 5,
  },
];

export function Testimonials() {
  const scrollY = useParallax();

  return (
    <section id="depoimentos" className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax-container">
        <img 
          src={testimonialsBg} 
          alt="Edifício comercial moderno" 
          className="parallax-bg"
          style={{ transform: `translateY(${(scrollY - 2500) * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A satisfação dos nossos clientes é o maior indicador da qualidade do nosso trabalho. 
              Confira o que dizem sobre a Solid Engenharia.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div className="card-elevated p-8 relative group hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary transition-transform hover:scale-125" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Faça parte dos nossos clientes satisfeitos
            </p>
            <a
              href="https://wa.me/5551995756460"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex hover:scale-105 transition-transform"
            >
              Entre em contato
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
