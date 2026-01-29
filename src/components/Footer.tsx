import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="/logo.png" 
              alt="Logo Solid Engenharia" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-accent-foreground/80 text-sm leading-relaxed mb-6">
              Soluções completas em engenharia e estruturas. Da fundação à entrega final, 
              com qualidade técnica e compromisso com resultados.
            </p>
            <p className="text-accent-foreground/60 text-xs">
              CNPJ: 30.161.678/0001-17
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-accent-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-accent-foreground/80 text-sm">
                  Rua do Ipê, 1792 - Berto Círio<br />
                  Nova Santa Rita/RS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5551995756460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors"
                >
                  (51) 99575-6460
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:comercial@solidobraselocacoes.com.br"
                  className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors break-all"
                >
                  comercial@solidobraselocacoes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Solid Engenharia & Estruturas LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
