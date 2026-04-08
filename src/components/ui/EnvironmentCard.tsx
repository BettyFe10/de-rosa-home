import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface EnvironmentCardProps {
  title: string;
  image: string;
  href: string;
  description?: string;
}

export const EnvironmentCard = ({ title, image, href, description }: EnvironmentCardProps) => {
  return (
    <Link to={href} className="group block">
      <motion.div 
        className="relative overflow-hidden rounded-lg aspect-[4/5]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-primary-foreground/80 text-sm mb-3 line-clamp-2">
              {description}
            </p>
          )}
          <div className="flex items-center gap-2 text-tortora font-medium text-sm group-hover:gap-3 transition-all">
            <span>Scopri di più</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
