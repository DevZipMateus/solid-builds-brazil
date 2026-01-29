import { Building, Hammer, Factory, Wrench, Mountain, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import servicesBg from '@/assets/services-bg.jpg';
import serviceFoundation from '@/assets/service-foundation.jpg';
import serviceSteel from '@/assets/service-steel.jpg';
import serviceConcrete from '@/assets/service-concrete.jpg';
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from './AnimatedSection';

const services = [
  {
    icon: Building,
    title: 'Obras comerciais e industriais',
    description: 'Execução completa de obras comerciais e industriais, do planejamento à entrega final, com qualidade e prazo garantidos.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Obras Comerciais e Industriais. Podem me ajudar?',
  },
  {
    icon: Hammer,
    title: 'Fundações e infraestrutura',
    description: 'Projetos e execução de fundações sólidas e seguras, garantindo a base perfeita para qualquer tipo de construção.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Fundações e Infraestrutura. Podem me ajudar?',
  },
  {
    icon: Mountain,
    title: 'Contenções de encostas',
    description: 'Soluções técnicas para estabilização de encostas e taludes, prevenindo deslizamentos e erosões.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Contenções de Encostas. Podem me ajudar?',
  },
  {
    icon: Droplets,
    title: 'Obras de drenagem',
    description: 'Sistemas de drenagem eficientes para controle de águas pluviais e proteção de edificações.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Obras de Drenagem. Podem me ajudar?',
  },
  {
    icon: Factory,
    title: 'Estruturas de concreto armado',
    description: 'Execução de estruturas de concreto armado com alto padrão técnico e resistência comprovada.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Estruturas de Concreto Armado. Podem me ajudar?',
  },
  {
    icon: Wrench,
    title: 'Estruturas metálicas',
    description: 'Fabricação e montagem de estruturas metálicas para galpões, coberturas e edificações industriais.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Estruturas Metálicas. Podem me ajudar?',
  },
];

const galleryImages = [
  { src: serviceFoundation, alt: 'Obra de fundação com armação de ferro e concreto', label: 'Fundações' },
  { src: serviceSteel, alt: 'Estrutura metálica em construção', label: 'Estruturas metálicas' },
  { src: serviceConcrete, alt: 'Estrutura de concreto armado', label: 'Concreto armado' },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="Galpão industrial com estrutura metálica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossos serviços
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Soluções completas em engenharia
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Da fundação à entrega final, oferecemos serviços integrados com qualidade técnica, 
            segurança e compromisso com resultados.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappUrl = `https://wa.me/5551995756460?text=${encodeURIComponent(service.whatsappMessage)}`;
            return (
              <StaggerItem key={index}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <AnimatedCard className="group bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-solid-lg h-full cursor-pointer">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium group-hover:underline">
                      Saiba mais →
                    </span>
                  </AnimatedCard>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Image Gallery */}
        <StaggerContainer className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-4 sm:p-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="text-white font-semibold text-sm sm:text-base"
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                  >
                    {image.label}
                  </motion.span>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Service */}
        <AnimatedSection className="mt-10 sm:mt-12" delay={0.3}>
          <motion.div 
            className="bg-accent text-accent-foreground rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center lg:text-left">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                  Reformas, ampliações e adequações industriais
                </h3>
                <p className="text-accent-foreground/80 text-base sm:text-lg max-w-2xl">
                  Modernize suas instalações com segurança e qualidade. Realizamos reformas e adequações 
                  que otimizam sua operação sem interromper suas atividades.
                </p>
              </div>
              <motion.a
                href="https://wa.me/5551995756460"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white text-accent font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/90 transition-colors text-sm sm:text-base w-full lg:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar orçamento
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
