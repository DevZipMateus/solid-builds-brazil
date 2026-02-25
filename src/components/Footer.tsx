import { MapPin, Mail } from 'lucide-react';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Obras comerciais e industriais',
  'Fundações e infraestrutura',
  'Estruturas de concreto armado',
  'Estruturas metálicas',
  'Reformas industriais',
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/logo.png" 
              alt="Logo Solid Engenharia" 
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-6 brightness-0 invert"
            />
            <p className="text-accent-foreground/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Soluções completas em engenharia e estruturas. Da fundação à entrega final, 
              com qualidade técnica e compromisso com resultados.
            </p>
            <p className="text-accent-foreground/60 text-xs">
              CNPJ: 30.161.678/0001-17
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Links rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service} className="text-accent-foreground/80 text-xs sm:text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-accent-foreground/80 text-xs sm:text-sm">
                  Rua do Ipê, 1792 - Berto Círio<br />
                  Nova Santa Rita/RS
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a 
                  href="https://wa.me/5551995756460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-accent-foreground text-xs sm:text-sm transition-colors"
                >
                  (51) 99575-6460
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:comercial@solidobraselocacoes.com.br"
                  className="text-accent-foreground/80 hover:text-accent-foreground text-xs sm:text-sm transition-colors break-all"
                >
                  comercial@solidobraselocacoes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-accent-foreground/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} Solid Engenharia & Estruturas LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
