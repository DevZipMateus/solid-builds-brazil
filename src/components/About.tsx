import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutBg from '@/assets/about-bg.jpg';
import aboutTeam from '@/assets/about-team.jpg';
import { AnimatedSection, AnimatedCard, AnimatedImage, StaggerContainer, StaggerItem } from './AnimatedSection';

const values = [
  { title: 'Qualidade técnica', description: 'Rigor técnico em todas as etapas da obra' },
  { title: 'Compromisso com prazos', description: 'Planejamento e controle para garantir metas' },
  { title: 'Ética e transparência', description: 'Relações claras e baseadas na confiança' },
  { title: 'Segurança em primeiro lugar', description: 'Prioridade à integridade das pessoas' },
  { title: 'Gestão eficiente', description: 'Controle de custos e produtividade' },
  { title: 'Foco em soluções', description: 'Melhor solução técnica e econômica' },
];

export function About() {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={aboutBg} 
          alt="Plantas de engenharia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Sobre nós
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Construindo confiança desde 2018
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            A Solid Engenharia e Estruturas nasceu com o propósito de entregar obras executadas 
            com rigor técnico, responsabilidade e compromisso com resultados.
          </p>
        </AnimatedSection>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-20 items-center">
          <AnimatedSection className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Nossa história
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Fundada em 2018, a Solid foi estruturada para atuar em obras comerciais e industriais, 
              oferecendo soluções completas que vão da fundação à entrega final.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ao longo de sua trajetória, a Solid consolidou-se pela qualidade na execução, 
              gestão eficiente de obras e relacionamento transparente com clientes e parceiros. 
              Cada projeto é conduzido com planejamento, controle e foco em soluções técnicas seguras e duráveis.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">
              Mais do que construir, a Solid constrói confiança.
            </p>
          </AnimatedSection>

          {/* Team Image */}
          <AnimatedImage className="relative order-1 lg:order-2" delay={0.2}>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-xl"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img 
              src={aboutTeam} 
              alt="Equipe de engenheiros analisando projeto em canteiro de obras" 
              className="relative w-full h-48 sm:h-64 md:h-80 lg:h-auto rounded-2xl shadow-solid-lg object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatedImage>
        </div>

        {/* Market */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-20 items-center">
          <AnimatedSection className="lg:order-2 relative" delay={0.1}>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative bg-secondary/50 rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Mercado de atuação
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Somos especialistas na execução de obras comerciais e industriais. 
                Atuamos desde a fundação até a entrega final, garantindo controle total do processo construtivo.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Cada projeto é conduzido com planejamento estratégico, gestão eficiente e rigor técnico, 
                assegurando cumprimento de prazos, otimização de custos e máxima confiabilidade.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission, Vision, Values */}
        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          <StaggerItem>
            <AnimatedCard className="card-elevated p-6 sm:p-8 text-center group hover:border-primary/50 transition-colors h-full">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Missão</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Executar obras com excelência técnica, planejamento e segurança, 
                oferecendo soluções completas que garantam qualidade, prazo e otimização de custos.
              </p>
            </AnimatedCard>
          </StaggerItem>

          <StaggerItem>
            <AnimatedCard className="card-elevated p-6 sm:p-8 text-center group hover:border-primary/50 transition-colors h-full">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Visão</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Ser reconhecida como empresa referência em engenharia e estruturas no Sul do Brasil, 
                destacando-se pela confiabilidade e eficiência na gestão de obras.
              </p>
            </AnimatedCard>
          </StaggerItem>

          <StaggerItem className="sm:col-span-2 md:col-span-1">
            <AnimatedCard className="card-elevated p-6 sm:p-8 text-center group hover:border-primary/50 transition-colors h-full">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Valores</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Qualidade, compromisso, ética, segurança, gestão eficiente e foco em soluções 
                que impulsionam o crescimento dos nossos clientes.
              </p>
            </AnimatedCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Values Grid */}
        <AnimatedSection className="bg-secondary/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12" delay={0.2}>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground text-center mb-6 sm:mb-10">
            Nossos valores
          </h3>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-start gap-3 sm:gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
