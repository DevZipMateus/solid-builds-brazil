import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import testimonialsBg from '@/assets/testimonials-bg.jpg';
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from './AnimatedSection';

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
  return (
    <section id="depoimentos" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={testimonialsBg} 
          alt="Edifício comercial moderno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            A satisfação dos nossos clientes é o maior indicador da qualidade do nosso trabalho. 
            Confira o que dizem sobre a Solid Engenharia.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <AnimatedCard className="card-elevated p-6 sm:p-8 relative group hover:border-primary/30 transition-colors h-full">
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4 sm:pt-6">
                  <div className="font-display font-bold text-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs sm:text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center mt-10 sm:mt-12" delay={0.3}>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Faça parte dos nossos clientes satisfeitos
          </p>
          <motion.a
            href="https://wa.me/5551995756460"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Entre em contato
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
