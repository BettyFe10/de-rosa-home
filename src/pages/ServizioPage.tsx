import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { CheckCircle, Compass, Wrench, MessageSquare, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  introTitle: string;
  introText: string[];
  icon: LucideIcon;
  steps: { title: string; description: string }[];
  benefitsTitle: string;
  benefitsText: string[];
  benefits: string[];
}

const servicesData: Record<string, ServiceData> = {
  progettazione: {
    title: "Progettazione",
    subtitle: "Dal sogno alla realtà",
    description: "Trasformiamo le tue idee in progetti concreti, con rendering 3D fotorealistici e soluzioni personalizzate per ogni ambiente della tua casa.",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Progettazione: Il Primo Passo Verso la Casa dei Tuoi Sogni",
    introText: [
      "La progettazione rappresenta il cuore pulsante del nostro lavoro e la fase più importante di ogni realizzazione. Ogni grande ambiente nasce da un'idea, da una visione, e noi siamo qui per trasformare quella visione in realtà concreta. I nostri designer esperti lavorano a stretto contatto con te per comprendere le tue esigenze, il tuo stile personale e il tuo budget, creando progetti su misura che superano ogni aspettativa.",
      "Il processo creativo inizia sempre con un dialogo approfondito: durante il primo incontro, i nostri progettisti ti ascoltano attentamente per comprendere non solo cosa desideri, ma soprattutto come vivi i tuoi spazi. Le tue abitudini quotidiane, le tue passioni, le esigenze della tua famiglia sono tutti elementi fondamentali che influenzano il progetto finale.",
      "Utilizziamo software di progettazione di ultima generazione che ci permettono di creare render 3D fotorealistici: potrai vedere la tua casa futura con una precisione straordinaria, valutando materiali, colori, illuminazione e disposizioni prima ancora che il progetto prenda vita. Questo approccio elimina le incertezze e ti permette di partecipare attivamente a ogni scelta.",
      "La nostra esperienza trentennale ci ha insegnato che ogni dettaglio conta: dalla scelta delle maniglie alla posizione delle prese elettriche, dalle finiture dei mobili ai sistemi di illuminazione integrata. Progettiamo pensando sia all'estetica che alla funzionalità, creando ambienti belli da vivere ogni giorno."
    ],
    icon: Compass,
    steps: [
      { 
        title: "Primo Incontro Conoscitivo", 
        description: "Ascoltiamo attentamente le tue esigenze, analizziamo lo spazio disponibile e definiamo insieme gli obiettivi del progetto. Questo momento è fondamentale per creare una relazione di fiducia." 
      },
      { 
        title: "Rilievi Tecnici e Analisi", 
        description: "Effettuiamo i rilievi accurati dell'ambiente, analizzando possibilità strutturali, impiantistiche e illuminotecniche. Valutiamo ogni vincolo e opportunità dello spazio." 
      },
      { 
        title: "Sviluppo Concept Design", 
        description: "Presentiamo le prime proposte creative attraverso moodboard ispirazioni, schizzi progettuali e idee di layout. Raccogliamo i tuoi feedback per affinare la direzione creativa." 
      },
      { 
        title: "Progetto Definitivo con Render 3D", 
        description: "Sviluppiamo il progetto esecutivo completo con render fotorealistici che ti permettono di vedere ogni dettaglio. Includiamo specifiche tecniche e materiali selezionati." 
      },
      { 
        title: "Preventivo Trasparente", 
        description: "Forniamo un preventivo dettagliato e completo, voce per voce, senza costi nascosti. Ogni scelta è documentata e il prezzo finale è garantito." 
      },
    ],
    benefitsTitle: "Perché Scegliere il Nostro Servizio di Progettazione",
    benefitsText: [
      "Affidare a De Rosa Home la progettazione dei tuoi ambienti significa scegliere un partner che mette la tua soddisfazione al primo posto. Il nostro team multidisciplinare combina competenze in architettura d'interni, design del mobile e illuminotecnica per offrirti un servizio completo e integrato.",
      "Lavoriamo con un approccio totalmente personalizzato: non esistono soluzioni preconfezionate, ma solo progetti pensati per te. Ogni proposta nasce dall'ascolto delle tue esigenze e viene sviluppata con creatività e competenza tecnica. Il risultato è un ambiente unico che riflette la tua personalità."
    ],
    benefits: [
      "Consulenza personalizzata completamente gratuita e senza impegno",
      "Render 3D fotorealistici inclusi per visualizzare ogni dettaglio",
      "Preventivi dettagliati e trasparenti senza costi nascosti",
      "Soluzioni su misura per ogni budget e ogni stile",
      "Assistenza continua durante tutto il processo progettuale",
    ]
  },
  montaggio: {
    title: "Montaggio",
    subtitle: "Precisione e cura dei dettagli",
    description: "Installazione professionale con squadre certificate ed esperte. Dalla consegna al montaggio finale, tutto curato con la massima attenzione.",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Il Montaggio Professionale: Dove il Progetto Prende Vita",
    introText: [
      "Il montaggio rappresenta la fase in cui il progetto sulla carta diventa realtà tangibile nella tua casa. È un momento delicato che richiede competenza, precisione e rispetto degli spazi abitativi. Le nostre squadre di montatori esperti lavorano con la massima cura, garantendo un'installazione impeccabile che valorizza ogni elemento del progetto.",
      "In De Rosa Home consideriamo il montaggio non come un semplice servizio accessorio, ma come parte integrante dell'esperienza che offriamo ai nostri clienti. Per questo investiamo continuamente nella formazione delle nostre squadre, che sono composte esclusivamente da professionisti qualificati con anni di esperienza nel settore dell'arredamento di alta gamma.",
      "Ogni fase dell'installazione viene pianificata nei minimi dettagli: dalla logistica delle consegne alla preparazione degli ambienti, dal montaggio vero e proprio alle finiture finali. Coordiniamo ogni aspetto per minimizzare i disagi e assicurare tempi certi di consegna, rispettando sempre gli impegni presi con il cliente.",
      "Utilizziamo esclusivamente attrezzature professionali e tecniche di montaggio certificate dai produttori. Questo garantisce non solo un risultato estetico impeccabile, ma anche la validità delle garanzie sui prodotti installati. Ogni nostro intervento è documentato e coperto dalla nostra garanzia di qualità."
    ],
    icon: Wrench,
    steps: [
      { 
        title: "Pianificazione Dettagliata", 
        description: "Organizziamo le consegne in coordinamento con i fornitori e stabiliamo un calendario preciso delle lavorazioni. Ti comunichiamo tempi e modalità con anticipo." 
      },
      { 
        title: "Preparazione dell'Ambiente", 
        description: "Prima dell'intervento, proteggiamo pavimenti, pareti e arredi esistenti con materiali specifici. Prepariamo l'ambiente per un'installazione ottimale." 
      },
      { 
        title: "Montaggio Professionale", 
        description: "I nostri tecnici specializzati eseguono l'installazione con precisione millimetrica, seguendo le specifiche del progetto e le indicazioni dei produttori." 
      },
      { 
        title: "Collaudo e Verifiche", 
        description: "Verifichiamo il corretto funzionamento di ogni elemento: ante, cassetti, meccanismi, elettrodomestici. Controlliamo la qualità delle finiture e degli allineamenti." 
      },
      { 
        title: "Consegna e Pulizia Finale", 
        description: "Ti consegniamo l'ambiente completamente finito, pulito e pronto per essere vissuto. Rimuoviamo tutti i materiali di imballaggio e ripristiniamo l'ordine." 
      },
    ],
    benefitsTitle: "I Vantaggi del Nostro Servizio di Montaggio",
    benefitsText: [
      "Scegliere il montaggio De Rosa Home significa affidarsi a professionisti che trattano la tua casa con lo stesso rispetto che avrebbero per la propria. Le nostre squadre sono formate per lavorare in ambienti abitati, minimizzando rumore, polvere e disagi per te e la tua famiglia.",
      "Ogni installazione è supervisionata da un responsabile di cantiere che coordina le operazioni e funge da punto di riferimento per qualsiasi esigenza. Questo garantisce il rispetto degli standard qualitativi e la risoluzione immediata di eventuali problematiche."
    ],
    benefits: [
      "Squadre di montatori certificati e continuamente formati",
      "Protezione accurata degli ambienti durante tutti i lavori",
      "Rispetto rigoroso dei tempi concordati con il cliente",
      "Pulizia finale completa inclusa nel servizio",
      "Garanzia estesa su tutti i lavori di installazione eseguiti",
    ]
  },
  consulenza: {
    title: "Consulenza",
    subtitle: "Esperti al tuo fianco",
    description: "Ti guidiamo nella scelta di materiali, colori e soluzioni con consigli professionali personalizzati e completamente senza impegno.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Consulenza Personalizzata: Il Primo Passo del Tuo Viaggio",
    introText: [
      "La consulenza rappresenta il primo e fondamentale passo verso la realizzazione della casa dei tuoi sogni. I nostri esperti ti accolgono nel nostro showroom o, se preferisci, direttamente a casa tua, per ascoltare le tue esigenze e proporti le soluzioni più adatte al tuo stile di vita e al tuo budget. Nessun impegno, nessuna pressione: solo consigli professionali per aiutarti a realizzare la tua visione.",
      "In De Rosa Home crediamo fermamente che l'ascolto sia la base di ogni buon progetto. Per questo i nostri consulenti dedicano tutto il tempo necessario a comprendere non solo cosa cerchi, ma soprattutto come vivi e come vorresti vivere i tuoi spazi. Le tue abitudini, le tue passioni, le esigenze della tua famiglia sono informazioni preziose che guidano ogni nostra proposta.",
      "La consulenza non si limita alla scelta dei mobili: i nostri esperti possono guidarti in ogni aspetto dell'interior design, dalla scelta dei colori alle combinazioni di materiali, dall'illuminazione ottimale alla disposizione degli spazi. Anni di esperienza nel settore ci permettono di offrirti una visione completa e competente.",
      "Durante la consulenza potrai toccare con mano campioni di materiali, sfogliare cataloghi delle migliori marche e vedere dal vivo le soluzioni esposte nel nostro showroom. Questo approccio sensoriale ti aiuta a fare scelte consapevoli, andando oltre le semplici immagini per comprendere davvero la qualità di ogni prodotto."
    ],
    icon: MessageSquare,
    steps: [
      { 
        title: "Primo Contatto", 
        description: "Ci contatti telefonicamente, via email o tramite il form sul sito. Ti ricontattiamo rapidamente per fissare un appuntamento nell'orario più comodo per te." 
      },
      { 
        title: "Incontro e Ascolto", 
        description: "Ti dedichiamo tutto il tempo necessario per comprendere le tue esigenze, il tuo stile e i tuoi obiettivi. Ogni dettaglio è importante per noi." 
      },
      { 
        title: "Presentazione Soluzioni", 
        description: "Ti mostriamo le soluzioni più adatte al tuo caso, spiegando caratteristiche dei materiali, funzionalità e fasce di prezzo. Rispondiamo a ogni domanda." 
      },
      { 
        title: "Tempo per Riflettere", 
        description: "Non esercitiamo alcuna pressione commerciale. Ti lasciamo tutto il tempo per riflettere, confrontare e decidere con serenità." 
      },
      { 
        title: "Disponibilità Continua", 
        description: "Rimaniamo a tua disposizione per rispondere a nuove domande, fornire approfondimenti e supportarti in ogni fase del percorso decisionale." 
      },
    ],
    benefitsTitle: "Il Valore della Consulenza De Rosa Home",
    benefitsText: [
      "La nostra consulenza è completamente gratuita perché crediamo che ogni cliente meriti di essere guidato con competenza, indipendentemente dalla portata del progetto. Non esistono domande banali: ogni dubbio merita una risposta professionale.",
      "I nostri consulenti sono professionisti del settore con anni di esperienza alle spalle. Non venditori, ma veri esperti di interior design capaci di guidarti nelle scelte più complesse con competenza e trasparenza."
    ],
    benefits: [
      "Consulenza completamente gratuita e senza alcun obbligo",
      "Nessuna pressione commerciale in nessuna fase",
      "Consulenti esperti in ogni tipologia di ambiente",
      "Possibilità di visita a domicilio su richiesta",
      "Campionature e materiali da vedere e toccare di persona",
    ]
  },
};

const ServizioPage = () => {
  const { servizio } = useParams<{ servizio: string }>();
  const data = servicesData[servizio || "progettazione"] || servicesData.progettazione;
  const Icon = data.icon;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
        image={data.heroImage}
        primaryCta={{ text: "Richiedi Consulenza", href: "/contatti" }}
        secondaryCta={{ text: "Scopri gli Ambienti", href: "/ambienti/cucina" }}
        height="large"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-full bg-tortora-light flex items-center justify-center mb-8">
                <Icon className="w-10 h-10 text-foreground" />
              </div>
              <h2 className="heading-2 text-foreground mb-6">
                {data.introTitle}
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                {data.introText.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={data.heroImage} 
                alt={data.title}
                className="w-full h-full object-cover aspect-[4/3] rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
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
              Il Processo
            </span>
            <h2 className="heading-2 text-foreground">
              Come Lavoriamo con Te
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {data.steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  {index < data.steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-0.5 h-full bg-border -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="heading-3 text-foreground mb-2">{step.title}</h3>
                  <p className="body-text text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="order-2 lg:order-1 overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&auto=format" 
                alt="Benefits"
                className="w-full h-full object-cover aspect-[4/3]"
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
                I Vantaggi
              </span>
              <h2 className="heading-2 text-foreground mb-6">
                {data.benefitsTitle}
              </h2>
              <div className="space-y-4 body-text text-muted-foreground mb-8">
                {data.benefitsText.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-tortora-dark flex-shrink-0 mt-0.5" />
                    <span className="body-text text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Inizia Ora
              </span>
              <h2 className="heading-2 text-foreground mb-4">
                Richiedi il Servizio di {data.title}
              </h2>
              <p className="body-large text-muted-foreground">
                Compila il form per richiedere informazioni sul nostro servizio di {data.title.toLowerCase()}. 
                Ti contatteremo entro 24 ore per fissare un appuntamento senza impegno.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Vuoi Vedere i Nostri Lavori?"
        description="Visita il nostro showroom e lasciati ispirare dalle nostre realizzazioni. Oltre 800 mq di ambienti allestiti per trovare l'ispirazione giusta."
        primaryText="Prenota una Visita"
        secondaryText="Contattaci"
      />
    </Layout>
  );
};

export default ServizioPage;
