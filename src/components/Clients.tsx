import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import testimonialsBg from '@/assets/testimonials-bg.jpg';
import { AnimatedSection } from './AnimatedSection';

import pamparafia from '@/assets/clients/pamparafia.png';
import postospedrotti from '@/assets/clients/postos-pedrotti.png';
import gf from '@/assets/clients/gf.png';
import kan from '@/assets/clients/kan.png';
import supermago from '@/assets/clients/supermago.png';
import nucleo from '@/assets/clients/nucleo.png';
import b3 from '@/assets/clients/b3.png';
import luagge from '@/assets/clients/luagge.png';
import bine from '@/assets/clients/bine.png';
import trinta from '@/assets/clients/30anos.png';
import saojoao from '@/assets/clients/sao-joao.png';
import lamb from '@/assets/clients/lamb.png';

const clients = [
  { name: 'PampaRáfia', logo: pamparafia },
  { name: 'Postos Pedrotti', logo: postospedrotti },
  { name: 'GF', logo: gf },
  { name: 'KAN Super & Atacado', logo: kan },
  { name: 'Supermago', logo: supermago },
  { name: 'Núcleo Arquitetura', logo: nucleo },
  { name: 'B3', logo: b3 },
  { name: 'Luagge Imóveis', logo: luagge },
  { name: 'Bine Engenharia', logo: bine },
  { name: '30 Anos', logo: trinta },
  { name: 'Farmácias São João', logo: saojoao },
  { name: 'Lamb Engenharia', logo: lamb },
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export function Clients() {
  const [expandedLogo, setExpandedLogo] = useState<{ name: string; logo: string } | null>(null);

  return (
    <section id="clientes" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={testimonialsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossos Clientes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Quem confia na Solid
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Empresas que escolheram a Solid Engenharia para construir seus projetos com qualidade e confiança.
          </p>
        </AnimatedSection>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 sm:gap-12 lg:gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.button
                key={`${client.name}-${index}`}
                onClick={() => setExpandedLogo(client)}
                className="flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 lg:w-52 lg:h-32 flex items-center justify-center p-3 sm:p-4 rounded-xl bg-secondary/40 border border-border/50 hover:border-primary/40 hover:bg-secondary/70 transition-all cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>

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

      {/* Expanded Logo Modal */}
      <AnimatePresence>
        {expandedLogo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedLogo(null)}
          >
            <motion.div
              className="relative bg-background rounded-2xl p-8 sm:p-12 max-w-lg w-full border border-border shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedLogo(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center gap-6">
                <img
                  src={expandedLogo.logo}
                  alt={expandedLogo.name}
                  className="max-w-full max-h-64 object-contain"
                />
                <p className="font-display text-lg font-bold text-foreground">{expandedLogo.name}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
