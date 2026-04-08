import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { BrandSection } from "@/components/sections/BrandSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Compass, Wrench, MessageSquare, Award, Users, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Superfici",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/superfici",
    description: "Pavimenti, rivestimenti, parquet e pietra naturale"
  },
  {
    title: "Arredo Bagno",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/arredo-bagno",
    description: "Sanitari, rubinetteria e termoarredo di design"
  },
  {
    title: "Porte e Infissi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/porte-infissi",
    description: "Sicurezza, isolamento e design per ogni apertura"
  },
  {
    title: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/outdoor",
    description: "Pergole, tende, sedute, divani e tavoli"
  },
  {
    title: "Wellness",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/wellness",
    description: "Mini piscine, saune, bagno turco, docce emozionali"
  },
  {
    title: "Caminetti",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/caminetti",
    description: "Calore e atmosfera con design contemporaneo"
  },
  {
    title: "Arredamento",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/arredamento",
    description: "Cucina, living, camera da letto e lavanderia"
  },
];

const services = [
  {
    title: "Progettazione",
    description: "Progettiamo insieme a te ogni dettaglio, trasformando i tuoi desideri in soluzioni concrete e personalizzate. Dall'idea iniziale al render 3D, ti accompagniamo in ogni fase creativa.",
    icon: Compass,
    href: "/servizi/progettazione"
  },
  {
    title: "Montaggio",
    description: "Installazione professionale con squadre certificate e anni di esperienza. Dalla consegna al montaggio finale, ogni fase è curata con precisione millimetrica.",
    icon: Wrench,
    href: "/servizi/montaggio"
  },
  {
    title: "Consulenza",
    description: "Ti guidiamo nella scelta dei materiali, colori e soluzioni più adatte al tuo stile di vita. Un servizio personalizzato e completamente gratuito.",
    icon: MessageSquare,
    href: "/servizi/consulenza"
  },
];

const testimonials = [
  {
    quote: "Professionalità eccezionale. Hanno trasformato la nostra cucina in un ambiente che non avremmo mai immaginato. Ogni dettaglio è perfetto, dalla scelta dei materiali all'illuminazione integrata.",
    author: "Marco e Giulia Esposito",
    project: "Progetto Cucina - Vomero"
  },
  {
    quote: "Dalla progettazione al montaggio, un servizio impeccabile. Il team De Rosa ha saputo interpretare le nostre esigenze creando uno spazio che riflette perfettamente il nostro stile di vita.",
    author: "Alessandra Ferrara",
    project: "Arredamento Completo - Posillipo"
  },
  {
    quote: "Finalmente un'azienda che ascolta davvero le esigenze del cliente. Il risultato ha superato ogni aspettativa: un living moderno e funzionale che ci rappresenta completamente.",
    author: "Roberto Caruso",
    project: "Living e Soggiorno - Chiaia"
  },
];

const stats = [
  { value: "30+", label: "Anni di Esperienza", icon: Clock },
  { value: "1500+", label: "Progetti Realizzati", icon: CheckCircle },
  { value: "98%", label: "Clienti Soddisfatti", icon: Users },
  { value: "50+", label: "Brand Partner", icon: Award },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Interior Design & Arredamento"
        title="Creiamo Ambienti che Raccontano la Tua Storia"
        description="Da oltre 30 anni trasformiamo case in luoghi unici. Design italiano, qualità artigianale, soluzioni su misura per ogni esigenza e budget."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format"
        primaryCta={{ text: "Prenota Consulenza", href: "/contatti" }}
        secondaryCta={{ text: "Scopri lo Showroom", href: "/showroom" }}
        height="full"
      />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Chi Siamo
              </span>
              <h2 className="heading-2 text-foreground mb-6">
                De Rosa Home: La Tua Casa, Il Nostro Impegno
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  Da oltre trent'anni, De Rosa Home rappresenta un punto di riferimento nel panorama dell'interior design e dell'arredamento di alta gamma nella città di Napoli e in tutta la Campania. La nostra storia inizia con una passione profonda per la bellezza degli spazi abitativi e con la ferma convinzione che ogni casa meriti di essere progettata con cura, attenzione e competenza professionale.
                </p>
                <p>
                  Nel corso degli anni abbiamo costruito relazioni solide con i più prestigiosi brand italiani e internazionali del settore, permettendoci di offrire ai nostri clienti una selezione esclusiva di arredi, superfici, sanitari, porte, caminetti e soluzioni wellness che coniugano estetica contemporanea, funzionalità quotidiana e durabilità nel tempo.
                </p>
                <p>
                  Il nostro approccio si distingue per l'ascolto attento delle esigenze di ogni cliente: non proponiamo soluzioni standardizzate, ma progettiamo ambienti su misura che riflettono personalità, abitudini e aspirazioni di chi li vivrà ogni giorno.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&auto=format"
                alt="Showroom De Rosa Home"
                className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-tortora mx-auto mb-3" />
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
              I Nostri Prodotti
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Tutto per la Tua Casa, in un Unico Showroom
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Dalle superfici all'arredamento, dai caminetti alle soluzioni wellness: 
              un'offerta completa di prodotti e servizi per realizzare la casa dei tuoi sogni, 
              con la qualità e l'assistenza che solo De Rosa Home può garantire.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={itemVariants}>
                <Link to={cat.href} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm mb-3 line-clamp-2">
                        {cat.description}
                      </p>
                      <div className="flex items-center gap-2 text-tortora font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Scopri di più</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-tortora-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format"
                alt="Progettazione interni De Rosa Home"
                className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Perché Sceglierci
              </span>
              <h2 className="heading-2 text-foreground mb-6">
                Un Partner Affidabile per i Tuoi Progetti
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  Scegliere De Rosa Home significa affidarsi a professionisti che conoscono profondamente il mercato dell'arredamento e delle finiture di qualità. La nostra esperienza trentennale ci ha insegnato che ogni cliente è unico, e così deve essere il progetto che realizziamo insieme.
                </p>
                <p>
                  Offriamo un servizio completo che parte dall'ascolto delle tue esigenze e arriva fino all'installazione professionale. Non vendiamo semplicemente prodotti: creiamo ambienti che migliorano la qualità della vita quotidiana.
                </p>
                <p>
                  I nostri consulenti ti guidano nelle scelte più complesse, dai materiali alle finiture, dalla disposizione degli spazi all'illuminazione. E grazie ai render 3D fotorealistici, potrai vedere la tua casa futura ancora prima che il progetto prenda vita.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
              I Nostri Servizi
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Un Approccio Completo al Tuo Progetto
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Ti accompagniamo in ogni fase del percorso, dalla prima idea alla realizzazione finale.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Section */}
      <BrandSection />

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
              Testimonianze
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore presentazione.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
