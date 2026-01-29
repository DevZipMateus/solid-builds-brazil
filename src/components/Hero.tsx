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

      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <motion.div 
          className="absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 border border-white/30 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 border border-white/20 rounded-full"
          animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] border border-white/10 rounded-full"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-0">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Mais de 6 anos de experiência
            </span>
          </motion.div>

          {/* H1 - Hidden for SEO, Logo visible */}
          <h1 className="sr-only">Solid Engenharia</h1>
          <motion.img 
            src="/logo.png" 
            alt="Solid Engenharia" 
            className="h-16 sm:h-20 md:h-28 lg:h-36 xl:h-40 w-auto mx-auto mb-4 sm:mb-6 brightness-0 invert"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

          {/* H2 - Slogan */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 font-medium mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Resultados sólidos começam com engenharia de verdade. Onde a técnica vira confiança e o projeto vira resultado.
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Especialistas em obras comerciais e industriais no Rio Grande do Sul. 
            Da fundação à entrega final, com qualidade técnica e compromisso.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="https://wa.me/5551995756460"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#servicos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-hero-outline inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Nossos serviços
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Projetos entregues</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <HardHat className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Anos de experiência</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Compromisso com prazos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
