import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contatti = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Parliamone"
        title="Contattaci"
        description="Siamo qui per rispondere a ogni tua domanda e aiutarti a realizzare il tuo progetto. Prenota una consulenza gratuita e senza impegno."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop&auto=format"
        height="medium"
        align="center"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-foreground mb-6">
              Il Primo Passo Verso la Casa dei Tuoi Sogni
            </h2>
            <div className="space-y-4 body-text text-muted-foreground">
              <p>
                Contattare De Rosa Home è il primo passo verso la realizzazione del tuo progetto di arredamento. 
                Che tu stia pensando di rinnovare una singola stanza o di arredare un'intera abitazione, 
                il nostro team di esperti è pronto ad ascoltarti e a proporti le soluzioni più adatte 
                alle tue esigenze, al tuo stile e al tuo budget.
              </p>
              <p>
                La nostra consulenza è completamente gratuita e senza alcun impegno: crediamo che ogni 
                cliente meriti tempo, attenzione e consigli professionali, indipendentemente dalla 
                portata del progetto. Compila il form, chiamaci o passa a trovarci nel nostro showroom: 
                saremo felici di conoscerti e di iniziare insieme questo viaggio.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Richiedi Informazioni
              </span>
              <h2 className="heading-3 text-foreground mb-6">
                Prenota la Tua Consulenza Gratuita
              </h2>
              <p className="body-text text-muted-foreground mb-8">
                Compila il form con i tuoi dati e raccontaci brevemente il tuo progetto. 
                Ti contatteremo entro 24 ore lavorative per fissare un appuntamento, 
                sia nel nostro showroom che direttamente a casa tua se preferisci.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <ConsultationForm />
              </div>

              {/* Trust Signals */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tortora-dark" />
                  <span className="text-sm text-muted-foreground">Risposta garantita entro 24 ore</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tortora-dark" />
                  <span className="text-sm text-muted-foreground">Consulenza completamente gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tortora-dark" />
                  <span className="text-sm text-muted-foreground">Nessun obbligo di acquisto</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                  Informazioni
                </span>
                <h2 className="heading-3 text-foreground mb-6">
                  Come Raggiungerci e Contattarci
                </h2>
                <p className="body-text text-muted-foreground mb-6">
                  Puoi contattarci attraverso diversi canali: telefono, email, WhatsApp o 
                  venendo direttamente nel nostro showroom. Siamo sempre disponibili a 
                  rispondere alle tue domande e a fornirti tutte le informazioni di cui hai bisogno.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Showroom</h3>
                  <p className="text-muted-foreground">Via Roma 123</p>
                  <p className="text-muted-foreground">80100 Napoli (NA)</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tortora-dark font-medium text-sm hover:underline mt-2 inline-block"
                  >
                    Apri in Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Telefono</h3>
                  <a 
                    href="tel:+390811234567" 
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    +39 081 123 4567
                  </a>
                  <a 
                    href="tel:+393331234567" 
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    +39 333 123 4567 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:info@derosahome.it" 
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    info@derosahome.it
                  </a>
                  <a 
                    href="mailto:progetti@derosahome.it" 
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    progetti@derosahome.it
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Orari</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p><strong>Lunedì - Venerdì:</strong> 9:30 - 13:00 / 15:30 - 19:30</p>
                    <p><strong>Sabato:</strong> 9:30 - 13:00 / 16:00 - 20:00</p>
                    <p><strong>Domenica:</strong> Chiuso</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">Seguici sui Social</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Seguici per scoprire le nostre ultime realizzazioni, novità dal mondo del design 
                  e ispirazioni per la tua casa.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Domande Frequenti
            </span>
            <h2 className="heading-2 text-foreground">
              Hai Qualche Dubbio?
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              className="bg-card border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                La consulenza è davvero gratuita?
              </h3>
              <p className="body-text text-muted-foreground">
                Sì, la nostra consulenza iniziale è completamente gratuita e senza alcun obbligo. 
                Ti dedichiamo tutto il tempo necessario per ascoltare le tue esigenze e proporti 
                le soluzioni più adatte, sia che tu decida poi di procedere con noi sia che tu 
                voglia valutare altre opzioni.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                Fate consulenze a domicilio?
              </h3>
              <p className="body-text text-muted-foreground">
                Certamente! Se preferisci, i nostri consulenti possono venire direttamente a casa 
                tua per effettuare i rilievi e discutere del progetto nel contesto reale degli 
                spazi da arredare. Questo servizio è incluso e non comporta costi aggiuntivi.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                Quanto tempo ci vuole per avere un preventivo?
              </h3>
              <p className="body-text text-muted-foreground">
                Dopo il primo incontro e i rilievi necessari, prepariamo una proposta completa 
                con render 3D e preventivo dettagliato in circa 7-10 giorni lavorativi. Per 
                progetti particolarmente complessi i tempi possono essere leggermente più lunghi.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                Lavorate solo a Napoli?
              </h3>
              <p className="body-text text-muted-foreground">
                Il nostro showroom si trova a Napoli, ma realizziamo progetti in tutta la 
                Campania e, per progetti di una certa portata, anche in altre regioni d'Italia. 
                Contattaci per valutare insieme la fattibilità del tuo progetto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted">
        <div className="w-full h-[450px] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-medium">Mappa Interattiva</p>
            <p className="text-sm text-muted-foreground">Via Roma 123, 80100 Napoli</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
