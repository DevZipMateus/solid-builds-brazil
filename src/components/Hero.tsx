import { ArrowRight, Building2, HardHat, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">
              Mais de 6 anos de experiência
            </span>
          </div>

          {/* H1 - Company Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
            Solid Engenharia
          </h1>

          {/* H2 - Slogan */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Resultados sólidos começam com engenharia de verdade. Onde a técnica vira confiança e o projeto vira resultado.
          </h2>

          {/* Description */}
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto animate-fade-in">
            Especialistas em obras comerciais e industriais no Rio Grande do Sul. 
            Da fundação à entrega final, com qualidade técnica e compromisso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
            <a
              href="https://wa.me/5551995756460"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                const element = document.querySelector('#servicos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-hero-outline inline-flex items-center gap-2 text-lg"
            >
              Nossos serviços
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Building2 className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-white/70 text-sm">Projetos entregues</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <HardHat className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">6+</div>
              <div className="text-white/70 text-sm">Anos de experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Shield className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/70 text-sm">Compromisso com prazos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
