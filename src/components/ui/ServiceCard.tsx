import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <Link to={href} className="group block">
      <motion.div 
        className="bg-card border border-border rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-tortora/50"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-tortora-light transition-colors">
          <Icon className="w-7 h-7 text-foreground" />
        </div>
        
        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground body-text mb-6">
          {description}
        </p>
        
        {/* Link */}
        <div className="flex items-center gap-2 text-tortora-dark font-medium text-sm group-hover:gap-3 transition-all">
          <span>Approfondisci</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </Link>
  );
};
