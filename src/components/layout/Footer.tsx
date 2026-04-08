import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  ambienti: [
    { name: "Arredo Bagno", href: "/categoria/arredo-bagno" },
    { name: "Superfici", href: "/categoria/superfici" },
    { name: "Cucina", href: "/categoria/arredamento/cucina" },
    { name: "Living", href: "/categoria/arredamento/living" },
    { name: "Outdoor", href: "/categoria/outdoor" },
  ],
  azienda: [
    { name: "Showroom", href: "/showroom" },
    { name: "Imprese Edili", href: "/imprese-edili" },
    { name: "Contatti", href: "/contatti" },
    { name: "E-commerce", href: "/e-commerce" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#4a4038] text-[#f5ede1] border-t border-white/5">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-[#f5ede1]">
                De Rosa <span className="text-[#8b5a2b]">Home</span>
              </span>
            </Link>
            <p className="text-[#f5ede1]/70 body-text leading-relaxed max-w-xs">
              Da oltre 50 anni creiamo ambienti unici che raccontano la tua storia. 
              Design italiano, qualità artigianale e consulenza dedicata.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/derosaedilizia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8b5a2b] transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/derosahome/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8b5a2b] transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/de-rosa-s-r-l-/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8b5a2b] transition-all duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ambienti */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[#f5ede1] uppercase tracking-widest text-sm">Ambienti</h4>
            <ul className="space-y-3">
              {footerLinks.ambienti.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-[#f5ede1]/60 hover:text-[#f5ede1] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="h-px w-0 bg-[#8b5a2b] transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[#f5ede1] uppercase tracking-widest text-sm">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-[#f5ede1]/60 hover:text-[#f5ede1] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="h-px w-0 bg-[#8b5a2b] transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[#f5ede1] uppercase tracking-widest text-sm">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#8b5a2b]" />
                <span className="text-[#f5ede1]/60 leading-snug text-sm">
                  Via Masullo, 33A<br />
                  80010 Quarto (NA)
                </span>
              </li>
              <li>
                <a 
                  href="tel:+390817081770" 
                  className="flex items-center gap-3 text-[#f5ede1]/60 hover:text-[#f5ede1] transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-[#8b5a2b]" />
                  081 708 1770
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@derosahome.net" 
                  className="flex items-center gap-3 text-[#f5ede1]/60 hover:text-[#f5ede1] transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-[#8b5a2b]" />
                  info@derosahome.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="container-custom py-8 border-t border-white/5">
        <p className="text-center text-[#f5ede1]/30 text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} De Rosa Home Srl. Tutti i diritti riservati. P.IVA 10214421215
        </p>
      </div>
    </footer>
  );
};
