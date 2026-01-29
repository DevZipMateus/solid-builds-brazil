import { Building, Hammer, Factory, Wrench, Mountain, Droplets } from 'lucide-react';
import servicesBg from '@/assets/services-bg.jpg';
import serviceFoundation from '@/assets/service-foundation.jpg';
import serviceSteel from '@/assets/service-steel.jpg';
import serviceConcrete from '@/assets/service-concrete.jpg';

const services = [
  {
    icon: Building,
    title: 'Obras comerciais e industriais',
    description: 'Execução completa de obras comerciais e industriais, do planejamento à entrega final, com qualidade e prazo garantidos.',
  },
  {
    icon: Hammer,
    title: 'Fundações e infraestrutura',
    description: 'Projetos e execução de fundações sólidas e seguras, garantindo a base perfeita para qualquer tipo de construção.',
  },
  {
    icon: Mountain,
    title: 'Contenções de encostas',
    description: 'Soluções técnicas para estabilização de encostas e taludes, prevenindo deslizamentos e erosões.',
  },
  {
    icon: Droplets,
    title: 'Obras de drenagem',
    description: 'Sistemas de drenagem eficientes para controle de águas pluviais e proteção de edificações.',
  },
  {
    icon: Factory,
    title: 'Estruturas de concreto armado',
    description: 'Execução de estruturas de concreto armado com alto padrão técnico e resistência comprovada.',
  },
  {
    icon: Wrench,
    title: 'Estruturas metálicas',
    description: 'Fabricação e montagem de estruturas metálicas para galpões, coberturas e edificações industriais.',
  },
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
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas em engenharia
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Da fundação à entrega final, oferecemos serviços integrados com qualidade técnica, 
            segurança e compromisso com resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-solid-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src={serviceFoundation} 
              alt="Obra de fundação com armação de ferro e concreto" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-6">
              <span className="text-white font-semibold">Fundações</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src={serviceSteel} 
              alt="Estrutura metálica em construção" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-6">
              <span className="text-white font-semibold">Estruturas metálicas</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src={serviceConcrete} 
              alt="Estrutura de concreto armado" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-6">
              <span className="text-white font-semibold">Concreto armado</span>
            </div>
          </div>
        </div>

        {/* Additional Service */}
        <div className="mt-12 bg-accent text-accent-foreground rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Reformas, ampliações e adequações industriais
              </h3>
              <p className="text-accent-foreground/80 text-lg max-w-2xl">
                Modernize suas instalações com segurança e qualidade. Realizamos reformas e adequações 
                que otimizam sua operação sem interromper suas atividades.
              </p>
            </div>
            <a
              href="https://wa.me/5551995756460"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-accent font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
