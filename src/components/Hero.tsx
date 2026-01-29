import { ArrowRight, Building2, HardHat, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={heroBg} 
          alt="Obra industrial em construção" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with purple tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/90 via-accent/80 to-primary/70" />
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 border border-white/30 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 border border-white/20 rounded-full"
          animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">
              Mais de 6 anos de experiência
            </span>
          </motion.div>

          {/* H1 - Hidden for SEO, Logo visible */}
          <h1 className="sr-only">Solid Engenharia</h1>
          <motion.img 
            src="/logo.png" 
            alt="Solid Engenharia" 
            className="h-20 md:h-28 lg:h-36 w-auto mx-auto mb-6 brightness-0 invert"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

          {/* H2 - Slogan */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Resultados sólidos começam com engenharia de verdade. Onde a técnica vira confiança e o projeto vira resultado.
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Especialistas em obras comerciais e industriais no Rio Grande do Sul. 
            Da fundação à entrega final, com qualidade técnica e compromisso.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="https://wa.me/5551995756460"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#servicos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-hero-outline inline-flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Nossos serviços
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <Building2 className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Projetos entregues</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <HardHat className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Anos de experiência</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-white/70 text-sm">Compromisso com prazos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
