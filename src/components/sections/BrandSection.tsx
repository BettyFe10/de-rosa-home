import { motion } from "framer-motion";

const brands = [
  { name: "Poliform", logo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=100&fit=crop&auto=format" },
  { name: "Scavolini", logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=100&fit=crop&auto=format" },
  { name: "B&B Italia", logo: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&h=100&fit=crop&auto=format" },
  { name: "Minotti", logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=100&fit=crop&auto=format" },
  { name: "Molteni&C", logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=100&fit=crop&auto=format" },
  { name: "Cassina", logo: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=100&fit=crop&auto=format" },
];

interface BrandSectionProps {
  title?: string;
  subtitle?: string;
}

export const BrandSection = ({ 
  title = "I Brand che Trattiamo",
  subtitle = "Collaboriamo solo con i migliori marchi del design italiano e internazionale"
}: BrandSectionProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-foreground mb-4">{title}</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-tortora/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display font-semibold text-foreground/70 hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
