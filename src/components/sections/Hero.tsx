import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  videoSrc?: string;
  videoPoster?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  overlay?: boolean;
  height?: "full" | "large" | "medium";
  align?: "left" | "center";
}

export const Hero = ({
  title,
  subtitle,
  description,
  image,
  videoSrc,
  videoPoster,
  primaryCta,
  secondaryCta,
  overlay = true,
  height = "full",
  align = "left",
}: HeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={videoPoster ?? image}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative container-custom py-20">
        <motion.div 
          className={`flex flex-col ${alignClasses[align]} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.span 
              className="text-tortora font-medium text-sm md:text-base uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.span>
          )}
          
          <motion.h1 
            className="heading-1 text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="body-large text-primary-foreground/90 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {primaryCta && (
              primaryCta.href.startsWith("#") ? (
                <Button 
                  onClick={(e) => handleAnchorClick(e, primaryCta.href)}
                  size="lg" 
                  className="bg-tortora hover:bg-[#4a4038] text-white font-medium px-8 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {primaryCta.text}
                </Button>
              ) : (
                <Link to={primaryCta.href}>
                  <Button 
                    size="lg" 
                    className="bg-tortora hover:bg-[#4a4038] text-white font-medium px-8 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {primaryCta.text}
                  </Button>
                </Link>
              )
            )}
            {secondaryCta && (
              secondaryCta.href.startsWith("#") ? (
                <Button 
                  onClick={(e) => handleAnchorClick(e, secondaryCta.href)}
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 transition-all duration-300"
                >
                  {secondaryCta.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Link to={secondaryCta.href}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 transition-all duration-300"
                  >
                    {secondaryCta.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
