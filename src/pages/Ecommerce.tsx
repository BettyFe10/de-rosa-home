import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Ecommerce = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&auto=format" 
            alt="E-commerce coming soon" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-tortora-light/80">
            Il nostro shop online
          </span>
          <h1 className="heading-1 mb-6 text-primary-foreground">
            E-commerce
          </h1>
          <div className="mx-auto h-px w-24 bg-tortora mb-8" />
          <p className="font-display text-2xl md:text-4xl font-light text-primary-foreground/90 italic tracking-wide">
            Work in Progress
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Ecommerce;
