import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Bath, CheckCircle, Clock, ExternalLink, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredCategory = {
  title: "Arredo Bagno",
  image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=900&fit=crop&auto=format",
  href: "/categoria/arredo-bagno",
  description: "Il nostro punto di forza: sanitari, mobili bagno, rubinetteria e termoarredo selezionati per progetti completi, eleganti e funzionali.",
  badge: "Cavallo di battaglia",
};

const categories = [
  {
    title: "Superfici",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/superfici",
    description: "Pavimenti, rivestimenti, parquet e pietra naturale",
  },
  {
    title: "Porte e Infissi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/porte-infissi",
    description: "Sicurezza, isolamento e design per ogni apertura",
  },
  {
    title: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/outdoor",
    description: "Pergole, tende, sedute, divani e tavoli",
  },
  {
    title: "Wellness",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/wellness",
    description: "Mini piscine, saune, bagno turco e docce emozionali",
  },
  {
    title: "Caminetti",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/caminetti",
    description: "Calore e atmosfera con design contemporaneo",
  },
  {
    title: "Arredamento",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&auto=format",
    href: "/categoria/arredamento",
    description: "Cucina, living, camera da letto e lavanderia",
  },
];

const reviews = [
  {
    quote: "Professionalità eccezionale e grande attenzione nella scelta dei materiali. Il progetto bagno ha trasformato completamente l'ambiente.",
    author: "Cliente Google",
  },
  {
    quote: "Showroom molto fornito, team disponibile e consulenza chiara in ogni fase. Esperienza positiva dall'idea iniziale alla consegna.",
    author: "Cliente Google",
  },
];

const stats = [
  { value: "30+", label: "Anni di esperienza", icon: Clock },
  { value: "1500+", label: "Progetti realizzati", icon: CheckCircle },
  { value: "98%", label: "Clienti soddisfatti", icon: Users },
  { value: "1", label: "Focus speciale sull'arredo bagno", icon: Bath },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <Layout>
      <Hero
        subtitle="Interior Design & Arredo Bagno"
        title="Materiali, arredi e progetti pensati per vivere meglio la casa"
        description="Da oltre 30 anni accompagniamo privati e professionisti nella scelta di superfici, arredi e soluzioni bagno con uno stile chiaro, curato e concreto."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format"
        primaryCta={{ text: "Prenota Consulenza", href: "/contatti" }}
        secondaryCta={{ text: "Scopri lo Showroom", href: "/showroom" }}
        height="full"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-tortora-dark">
                Chi siamo
              </span>
              <h2 className="heading-2 mb-6 text-foreground">
                De Rosa Home unisce esperienza, ascolto e selezione accurata dei materiali
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  Lavoriamo con un approccio professionale ma leggero, chiaro e trasparente: spieghiamo differenze tra materiali, fasce di prezzo e soluzioni alternative senza tecnicismi inutili.
                </p>
                <p>
                  Ogni proposta nasce da esigenze reali e punta a costruire ambienti equilibrati, eleganti e accessibili, con un'attenzione speciale all'arredo bagno, oggi vero fulcro della nostra proposta.
                </p>
                <p>
                  Dallo showroom alla consulenza, accompagniamo ogni cliente verso scelte consapevoli, con uno stile progettuale accogliente e concreto.
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
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-tortora" />
                <div className="mb-2 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </div>
                <p className="text-sm text-primary-foreground/80 md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-tortora-dark">
              Focus di catalogo
            </span>
            <h2 className="heading-2 mb-4 text-foreground">
              L'arredo bagno è al centro della nostra proposta
            </h2>
            <p className="body-large mx-auto max-w-3xl text-muted-foreground">
              Una selezione completa per progettare bagni contemporanei: mobili, sanitari, rubinetterie e termoarredi pensati per unire estetica, comfort e durata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to={featuredCategory.href} className="group block overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm transition-shadow hover:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[360px] overflow-hidden">
                  <img
                    src={featuredCategory.image}
                    alt={featuredCategory.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/35 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary-foreground backdrop-blur-sm">
                      {featuredCategory.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-tortora-light px-4 py-2 text-xs uppercase tracking-[0.25em] text-tortora-dark">
                    Arredo bagno
                  </span>
                  <h3 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Soluzioni bagno complete con consulenza dedicata
                  </h3>
                  <p className="mb-8 body-text text-muted-foreground">
                    {featuredCategory.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-tortora-dark transition-all group-hover:gap-3">
                    <span>Scopri il catalogo bagno</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-tortora-dark">
              Catalogo
            </span>
            <h2 className="heading-2 mb-4 text-foreground">
              Tutto il necessario per completare il progetto casa
            </h2>
            <p className="body-large mx-auto max-w-3xl text-muted-foreground">
              Un percorso unico tra superfici, arredo, benessere e finiture, con scelte coordinate e supporto consulenziale in showroom.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={itemVariants}>
                <Link to={cat.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="mb-1 font-display text-xl font-bold text-primary-foreground">
                        {cat.title}
                      </h3>
                      <p className="mb-3 text-sm text-primary-foreground/80 line-clamp-2">
                        {cat.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-tortora transition-all group-hover:gap-3">
                        <span>Scopri di più</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-tortora-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
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
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-tortora-dark">
                Perché sceglierci
              </span>
              <h2 className="heading-2 mb-6 text-foreground">
                Un approccio chiaro, concreto e orientato al risultato
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  Analizziamo necessità, stile, materiali e budget con un linguaggio semplice e consulenziale, aiutandoti a confrontare alternative reali e sostenibili.
                </p>
                <p>
                  Il nostro showroom permette di vedere da vicino finiture, accostamenti e soluzioni complete, con un'attenzione particolare a progetti bagno contemporanei e altamente personalizzati.
                </p>
                <p>
                  Ogni scelta punta a equilibrio tra estetica, funzionalità e durata nel tempo, senza eccessi ma con la giusta ambizione progettuale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-tortora-dark">
              Recensioni Google
            </span>
            <h2 className="heading-3 mb-3 text-foreground">
              Dicono i nostri clienti
            </h2>
          </motion.div>

          <motion.div
            className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">4.5</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-[#fbbc05] text-[#fbbc05]"
                      />
                    ))}
                  </div>
                </div>
                <p className="body-text text-muted-foreground">
                  139 recensioni su Google
                </p>
              </div>

              <a
                href="https://www.google.com/search?q=De+Rosa+Srl+Quarto+recensioni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span>Apri Google Reviews</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <div key={review.quote} className="rounded-[1.5rem] border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-[#fbbc05] text-[#fbbc05]"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{review.quote}</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{review.author}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
