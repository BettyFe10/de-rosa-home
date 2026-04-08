import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  variant?: "dark" | "light";
}

export const CTASection = ({
  title = "Pronto a Trasformare i Tuoi Spazi?",
  description = "Prenota una consulenza gratuita nel nostro showroom. I nostri esperti ti guideranno nella scelta delle soluzioni perfette per te.",
  primaryText = "Prenota Consulenza Gratuita",
  secondaryText = "Visita lo Showroom",
  variant = "dark"
}: CTASectionProps) => {
  const isDark = variant === "dark";

  return (
    <section className={`section-padding ${isDark ? "bg-primary" : "bg-tortora-light"}`}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`heading-2 mb-6 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`body-large mb-10 ${isDark ? "text-primary-foreground/80" : "text-foreground/80"}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti">
              <Button 
                size="lg" 
                className={isDark 
                  ? "bg-tortora hover:bg-tortora-dark text-foreground font-medium px-8" 
                  : "bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
                }
              >
                <Phone className="w-4 h-4 mr-2" />
                {primaryText}
              </Button>
            </Link>
            <Link to="/showroom">
              <Button 
                size="lg" 
                variant="outline"
                className={isDark 
                  ? "bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 transition-all duration-300" 
                  : "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 transition-all duration-300"
                }
              >
                {secondaryText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
