import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  ambienti: [
    { name: "Cucina", href: "/ambienti/cucina" },
    { name: "Bagno", href: "/ambienti/bagno" },
    { name: "Soggiorno", href: "/ambienti/soggiorno" },
    { name: "Camera", href: "/ambienti/camera" },
    { name: "Living", href: "/ambienti/living" },
  ],
  azienda: [
    { name: "Showroom", href: "/showroom" },
    { name: "Contatti", href: "/contatti" },
    { name: "E-commerce", href: "/e-commerce" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold">
                De Rosa <span className="text-tortora">Home</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 body-text">
              Da oltre 30 anni creiamo ambienti unici che raccontano la tua storia. 
              Design italiano, qualità artigianale.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ambienti */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Ambienti</h4>
            <ul className="space-y-3">
              {footerLinks.ambienti.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-tortora" />
                <span className="text-primary-foreground/80">
                  Via Roma 123<br />
                  80100 Napoli (NA)
                </span>
              </li>
              <li>
                <a 
                  href="tel:+390811234567" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 text-tortora" />
                  +39 081 123 4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@derosahome.it" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-tortora" />
                  info@derosahome.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} De Rosa Home. Tutti i diritti riservati. Sviluppato da BettyFe.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
