import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Clock, MapPin, Phone, Mail, Car, Train } from "lucide-react";
import { motion } from "framer-motion";

const showroomImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&h=400&fit=crop&auto=format",
];

const Showroom = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Vieni a Trovarci"
        title="Il Nostro Showroom"
        description="Un'esperienza immersiva nel mondo dell'interior design. 800mq di ambienti allestiti per ispirarti e guidarti nella scelta dell'arredamento perfetto."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format"
        primaryCta={{ text: "Prenota una Visita", href: "/contatti" }}
        height="large"
      />

      {/* Main Description Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Un'Esperienza Unica
              </span>
              <h2 className="heading-2 text-foreground mb-6">
                Scopri il Nostro Spazio Espositivo: Dove i Sogni Prendono Forma
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                <p>
                  Il nostro showroom rappresenta molto più di un semplice negozio di arredamento: è un vero e proprio viaggio nell'arte dell'abitare contemporaneo. Su una superficie di oltre 800 metri quadrati, abbiamo creato ambienti completi e realistici che ti permettono di vivere in anteprima l'esperienza della tua futura casa, toccando materiali, provando sedute e immaginando le tue giornate tra le pareti che stiamo per creare insieme.
                </p>
                <p>
                  Ogni ambiente esposto nel nostro showroom è stato progettato con la stessa cura che dedichiamo ai progetti dei nostri clienti. Cucine complete e funzionanti, soggiorni arredati con gusto, camere da letto accoglienti e bagni che sembrano spa private: tutto è pensato per offrirti ispirazione e permetterti di valutare concretamente le soluzioni proposte.
                </p>
                <p>
                  I nostri consulenti sono a tua disposizione per accompagnarti in questo viaggio, spiegandoti le caratteristiche di ogni materiale, le funzionalità delle soluzioni esposte e le possibilità di personalizzazione. Non c'è alcun impegno: il nostro obiettivo è aiutarti a trovare l'ispirazione giusta e a comprendere le potenzialità del design italiano per la tua casa.
                </p>
                <p>
                  Lo showroom De Rosa Home ospita le collezioni dei più prestigiosi brand italiani e internazionali del settore arredamento. Qui puoi vedere dal vivo le finiture, confrontare i materiali e valutare la qualità costruttiva di ogni prodotto. I nostri ambienti vengono periodicamente rinnovati per presentarti sempre le ultime tendenze del design contemporaneo.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Address */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Indirizzo</h3>
                  <p className="text-muted-foreground">Via Masullo, 33A, 80010 Quarto (NA)</p>
                  <a 
                    href="https://maps.google.com/?q=De+Rosa+Home+Quarto+Via+Masullo+33A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tortora-dark font-medium text-sm hover:underline mt-2 inline-block"
                  >
                    Apri in Google Maps →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Orari di Apertura</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p><strong>Lunedì - Venerdì:</strong> 8:30 - 13:00 / 14:30 - 19:00</p>
                    <p><strong>Sabato:</strong> 8:30 - 13:00</p>
                    <p><strong>Domenica:</strong> Chiuso</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Contatti</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+390817081770" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +39 081 708 1770
                    </a>
                    <a 
                      href="mailto:info@derosahome.net" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      info@derosahome.net
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Find Section */}
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
              Cosa Troverai
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Ambienti Completi da Esplorare
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Nel nostro showroom potrai esplorare ambienti completi e realistici, 
              dalle cucine funzionanti ai soggiorni arredati, dalle camere da letto 
              alle zone bagno. Ogni spazio è pensato per offrirti ispirazione concreta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-card border border-border rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="heading-3 text-foreground mb-4">Cucine Complete</h3>
              <p className="body-text text-muted-foreground">
                Oltre 15 composizioni cucina esposte, dalle soluzioni lineari alle cucine con isola. 
                Elettrodomestici funzionanti per valutare materiali e funzionalità.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="heading-3 text-foreground mb-4">Zone Living</h3>
              <p className="body-text text-muted-foreground">
                Soggiorni e living arredati con divani, pareti attrezzate e complementi. 
                Puoi sederti, toccare i tessuti e valutare il comfort di ogni seduta.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="heading-3 text-foreground mb-4">Camere e Bagni</h3>
              <p className="body-text text-muted-foreground">
                Zone notte complete con letti, armadi e cabine. Ambienti bagno con sanitari, 
                mobili e rubinetterie dei migliori brand del settore.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
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
                Come Raggiungerci
              </span>
              <h2 className="heading-2 text-foreground mb-6">
                Facile da Raggiungere, Comodo da Visitare
              </h2>
              <div className="space-y-4 body-text text-muted-foreground mb-8">
                <p>
                  Il nostro showroom si trova in una posizione strategica, facilmente raggiungibile sia 
                  in auto che con i mezzi pubblici. Disponiamo di un ampio parcheggio gratuito riservato 
                  ai nostri clienti, per garantirti una visita comoda e senza stress.
                </p>
                <p>
                  Ti consigliamo di prenotare un appuntamento per garantirti la disponibilità esclusiva 
                  di un nostro consulente, che ti accompagnerà durante tutta la visita rispondendo a 
                  ogni tua domanda. La consulenza è completamente gratuita e senza alcun impegno.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-tortora-dark mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">In Auto</h4>
                    <p className="text-sm text-muted-foreground">Tangenziale uscita Quarto. Ampio parcheggio gratuito.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-tortora-dark mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Con i Mezzi</h4>
                    <p className="text-sm text-muted-foreground">Circumflegrea, fermata Quarto. 10 min a piedi.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Image instead of map */}
              <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format" 
                  alt="Showroom De Rosa Home"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Galleria
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Scorci del Nostro Showroom
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Alcune immagini dei nostri ambienti espositivi. Ma le foto non possono 
              restituire la sensazione di camminare tra gli spazi, toccare i materiali 
              e sedersi sui divani. Ti aspettiamo per una visita dal vivo!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg aspect-[3/2]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={image} 
                  alt={`Showroom De Rosa Home ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ti Aspettiamo nel Nostro Showroom!"
        description="Prenota una visita guidata personalizzata. I nostri consulenti sono a tua disposizione per mostrarti tutte le soluzioni e rispondere a ogni tua domanda."
        primaryText="Prenota una Visita"
        secondaryText="Chiamaci Ora"
        variant="dark"
      />
    </Layout>
  );
};

export default Showroom;
