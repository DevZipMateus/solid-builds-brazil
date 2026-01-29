import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useParallax } from '@/hooks/useScrollAnimation';
import contactBg from '@/assets/contact-bg.jpg';

export function Contact() {
  const scrollY = useParallax();

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax-container">
        <img 
          src={contactBg} 
          alt="Obra de fundação" 
          className="parallax-bg"
          style={{ transform: `translateY(${(scrollY - 3500) * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fale conosco
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Estamos prontos para atender seu projeto. Entre em contato e solicite um orçamento sem compromisso.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal animation="fade-right">
            <div className="space-y-8">
              <div className="card-elevated p-8 hover-glow">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Informações de contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        Rua do Ipê, nº 1792<br />
                        Bairro Berto Círio<br />
                        Nova Santa Rita/RS - CEP: 92480-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h4>
                      <a 
                        href="https://wa.me/5551995756460"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        (51) 99575-6460
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                      <a 
                        href="mailto:comercial@solidobraselocacoes.com.br"
                        className="text-primary hover:underline"
                      >
                        comercial@solidobraselocacoes.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                      <p className="text-muted-foreground">
                        Segunda a sexta-feira<br />
                        07:30 às 17:18
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Redes sociais</h4>
                      <p className="text-muted-foreground">
                        @Solid Engenharia & Estruturas
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="https://wa.me/5551995756460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-accent text-accent-foreground rounded-2xl p-6 hover-glow">
                <p className="text-sm">
                  <strong>Solid Engenharia & Estruturas LTDA</strong><br />
                  CNPJ: 30.161.678/0001-17
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="card-elevated overflow-hidden hover-lift h-full">
              <iframe
                title="Localização Solid Engenharia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8!2d-51.2847!3d-29.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194a0a0a0a0a0a%3A0x0!2sRua%20do%20Ip%C3%AA%2C%201792%20-%20Berto%20Cirio%2C%20Nova%20Santa%20Rita%20-%20RS%2C%2092480-000!5e0!3m2!1spt-BR!2sbr!4v1706540000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
