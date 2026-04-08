import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Handshake, Shield, Truck } from "lucide-react";

const offerte = [
  {
    title: "Superfici e Pavimenti",
    description: "Gres porcellanato, parquet, pietra naturale e rivestimenti per cantieri residenziali e commerciali. Forniture complete con prezzi dedicati.",
    href: "/categoria/superfici",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Arredo Bagno",
    description: "Sanitari, rubinetteria e termoarredo per forniture multiple. Listini riservati e assistenza tecnica dedicata alle imprese.",
    href: "/categoria/arredo-bagno",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Porte e Infissi",
    description: "Porte da interni, portoncini blindati e serramenti per cantieri. Preventivi personalizzati per quantità e tempistiche di cantiere.",
    href: "/categoria/porte-infissi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Arredamento Completo",
    description: "Cucine, living, camere e lavanderie per consegne chiavi in mano. Progettazione e montaggio coordinati con i tempi del cantiere.",
    href: "/categoria/arredamento",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Wellness e Caminetti",
    description: "Mini piscine, saune, bagni turco e caminetti per progetti residenziali di pregio. Consulenza tecnica e installazione specializzata.",
    href: "/categoria/wellness",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&h=400&fit=crop&auto=format"
  },
  {
    title: "Outdoor",
    description: "Pergole, tende, arredi esterni per terrazzi e giardini di nuove costruzioni. Fornitura e posa completa.",
    href: "/categoria/outdoor",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format"
  },
];

const vantaggi = [
  {
    icon: Handshake,
    title: "Listini Dedicati",
    description: "Prezzi riservati e condizioni commerciali personalizzate per imprese edili e professionisti del settore."
  },
  {
    icon: Truck,
    title: "Logistica Coordinata",
    description: "Consegne programmate in base alle fasi del cantiere, con stoccaggio temporaneo e gestione delle tempistiche."
  },
  {
    icon: Shield,
    title: "Garanzia Professionale",
    description: "Prodotti certificati con garanzia estesa e assistenza post-vendita dedicata per ogni cantiere."
  },
  {
    icon: Building2,
    title: "Progettazione Integrata",
    description: "Supporto tecnico e progettuale per integrare le nostre soluzioni nei vostri progetti architettonici."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ImpreseEdili = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Partnership per Professionisti"
        title="Imprese Edili"
        description="Un partner affidabile per le vostre forniture: superfici, sanitari, porte, arredamento e molto altro con listini dedicati e logistica di cantiere."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop&auto=format"
        primaryCta={{ text: "Richiedi Listino", href: "#contatti-imprese" }}
        secondaryCta={{ text: "Le Nostre Offerte", href: "#offerte" }}
        height="large"
      />

      {/* Chi Siamo per le Imprese */}
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
                Un Partner Solido per le Imprese del Settore Edile
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  De Rosa Home è molto più di un semplice fornitore di materiali: siamo un partner strategico per le imprese edili che cercano qualità, affidabilità e un servizio completo per le loro realizzazioni. Da oltre 50 anni collaboriamo con costruttori, imprese di ristrutturazione e studi di architettura, fornendo materiali e soluzioni di alta gamma con condizioni commerciali dedicate.
                </p>
                <p>
                  La nostra esperienza nel settore ci permette di offrire un supporto che va oltre la semplice fornitura: affianchiamo le imprese nella scelta dei materiali più adatti a ogni progetto, gestiamo la logistica delle consegne in coordinamento con le fasi del cantiere e forniamo assistenza tecnica specializzata per garantire una posa in opera ottimale.
                </p>
                <p>
                  Comprendiamo le dinamiche del cantiere e sappiamo quanto sia importante rispettare i tempi e i budget concordati. Per questo offriamo listini dedicati alle imprese, condizioni di pagamento flessibili e un servizio di consulenza che aiuta a ottimizzare le scelte senza compromettere la qualità del risultato finale.
                </p>
                <p>
                  Il nostro magazzino è sempre rifornito con i materiali più richiesti, e la rete di fornitori con cui collaboriamo ci permette di gestire ordini di grande entità con tempi di consegna rapidi e certi. Che si tratti di un singolo appartamento o di un intero complesso residenziale, siamo attrezzati per rispondere a ogni esigenza.
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format"
                alt="De Rosa Home per Imprese Edili"
                className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantaggi.map((v, i) => (
              <motion.div
                key={v.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <v.icon className="w-10 h-10 text-tortora mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista Offerte */}
      <section id="offerte" className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
              Le Nostre Offerte
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Forniture per Ogni Esigenza di Cantiere
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Scopri la nostra gamma completa di prodotti e soluzioni per imprese edili. 
              Clicca su ogni categoria per approfondire l'offerta e richiedere un preventivo dedicato.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {offerte.map((offerta) => (
              <motion.div key={offerta.title} variants={itemVariants}>
                <Link to={offerta.href} className="group block bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={offerta.image} 
                      alt={offerta.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="heading-3 text-foreground mb-2">{offerta.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{offerta.description}</p>
                    <div className="flex items-center gap-2 text-tortora-dark font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Scopri l'offerta</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Contatti Imprese */}
      <section id="contatti-imprese" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Contattaci
              </span>
              <h2 className="heading-2 text-foreground mb-4">
                Richiedi il Listino Riservato alle Imprese
              </h2>
              <p className="body-text text-muted-foreground mb-6">
                Compila il modulo per ricevere il nostro listino dedicato alle imprese edili 
                e per fissare un incontro con il nostro responsabile commerciale. 
                Risponderemo entro 24 ore lavorative con una proposta personalizzata 
                per le esigenze del vostro cantiere.
              </p>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Email dedicata:</strong> imprese@derosahome.net
                </p>
                <p>
                  <strong className="text-foreground">Telefono diretto:</strong> +39 081 708 1770
                </p>
                <p>
                  <strong className="text-foreground">Orari ufficio commerciale:</strong> Lun-Ven 8:30-19:00
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default ImpreseEdili;
