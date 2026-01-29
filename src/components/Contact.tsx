import { MapPin, Mail, Clock, Instagram, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import contactBg from '@/assets/contact-bg.jpg';
import whatsappIcon from '@/assets/whatsapp-icon.png';
import { AnimatedSection, AnimatedCard } from './AnimatedSection';

interface ContactInfoItem {
  icon: LucideIcon | 'whatsapp';
  title: string;
  content: React.ReactNode;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: (
      <>
        Rua do Ipê, nº 1792<br />
        Bairro Berto Círio<br />
        Nova Santa Rita/RS - CEP: 92480-000
      </>
    ),
  },
  {
    icon: 'whatsapp',
    title: 'Telefone / WhatsApp',
    content: (
      <a 
        href="https://wa.me/5551995756460"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        (51) 99575-6460
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: (
      <a 
        href="mailto:comercial@solidobraselocacoes.com.br"
        className="text-primary hover:underline break-all"
      >
        comercial@solidobraselocacoes.com.br
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Horário de funcionamento',
    content: (
      <>
        Segunda a sexta-feira<br />
        07:30 às 17:18
      </>
    ),
  },
  {
    icon: Instagram,
    title: 'Redes sociais',
    content: '@Solid Engenharia & Estruturas',
  },
];

function ContactIcon({ icon }: { icon: LucideIcon | 'whatsapp' }) {
  if (icon === 'whatsapp') {
    return <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />;
  }
  const Icon = icon;
  return <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />;
}

export function Contact() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={contactBg} 
          alt="Obra de fundação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Fale conosco
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Estamos prontos para atender seu projeto. Entre em contato e solicite um orçamento sem compromisso.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <AnimatedSection className="space-y-6 sm:space-y-8">
            <AnimatedCard className="card-elevated p-6 sm:p-8">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                Informações de contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <ContactIcon icon={item.icon} />
                    </motion.div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <motion.a
                  href="https://wa.me/5551995756460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
                  Falar pelo WhatsApp
                </motion.a>
              </div>
            </AnimatedCard>

            {/* Company Info */}
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="bg-accent text-accent-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs sm:text-sm">
                  <strong>Solid Engenharia & Estruturas LTDA</strong><br />
                  CNPJ: 30.161.678/0001-17
                </p>
              </motion.div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="card-elevated overflow-hidden h-80 sm:h-96 lg:h-full lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                title="Localização Solid Engenharia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8!2d-51.2847!3d-29.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194a0a0a0a0a0a%3A0x0!2sRua%20do%20Ip%C3%AA%2C%201792%20-%20Berto%20Cirio%2C%20Nova%20Santa%20Rita%20-%20RS%2C%2092480-000!5e0!3m2!1spt-BR!2sbr!4v1706540000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
