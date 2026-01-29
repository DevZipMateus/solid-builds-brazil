import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

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
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre nós
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Construindo confiança desde 2018
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A Solid Engenharia e Estruturas nasceu com o propósito de entregar obras executadas 
            com rigor técnico, responsabilidade e compromisso com resultados.
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Nossa história
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2018, a Solid foi estruturada para atuar em obras comerciais e industriais, 
              oferecendo soluções completas que vão da fundação à entrega final.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ao longo de sua trajetória, a Solid consolidou-se pela qualidade na execução, 
              gestão eficiente de obras e relacionamento transparente com clientes e parceiros. 
              Cada projeto é conduzido com planejamento, controle e foco em soluções técnicas seguras e duráveis.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Mais do que construir, a Solid constrói confiança.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl" />
            <div className="relative bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Mercado de atuação
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Somos especialistas na execução de obras comerciais e industriais. 
                Atuamos desde a fundação até a entrega final, garantindo controle total do processo construtivo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto é conduzido com planejamento estratégico, gestão eficiente e rigor técnico, 
                assegurando cumprimento de prazos, otimização de custos e máxima confiabilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-elevated p-8 text-center group hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Executar obras com excelência técnica, planejamento e segurança, 
              oferecendo soluções completas que garantam qualidade, prazo e otimização de custos.
            </p>
          </div>

          <div className="card-elevated p-8 text-center group hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ser reconhecida como empresa referência em engenharia e estruturas no Sul do Brasil, 
              destacando-se pela confiabilidade e eficiência na gestão de obras.
            </p>
          </div>

          <div className="card-elevated p-8 text-center group hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Valores</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Qualidade, compromisso, ética, segurança, gestão eficiente e foco em soluções 
              que impulsionam o crescimento dos nossos clientes.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
