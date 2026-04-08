import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { BrandSection } from "@/components/sections/BrandSection";
import { CTASection } from "@/components/sections/CTASection";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Compass, Wrench, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const environmentsData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  introTitle: string;
  introText: string[];
  whyChooseTitle: string;
  whyChooseText: string[];
  gallery: string[];
  features: string[];
}> = {
  cucina: {
    title: "Cucina",
    subtitle: "Il cuore pulsante della casa",
    description: "Progettiamo cucine che combinano estetica e funzionalità, trasformando ogni preparazione in un piacere quotidiano.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Cucina dei Tuoi Sogni: Dove Design e Funzionalità si Incontrano",
    introText: [
      "La cucina rappresenta molto più di un semplice spazio dove preparare i pasti: è il cuore pulsante della casa, il luogo dove nascono ricordi indelebili, dove le famiglie si riuniscono e dove la creatività culinaria prende vita ogni giorno. In De Rosa Home comprendiamo profondamente questo significato e progettiamo cucine che non sono solo esteticamente appaganti, ma anche straordinariamente funzionali e durature nel tempo.",
      "Il nostro approccio alla progettazione delle cucine parte sempre dall'ascolto attento delle tue esigenze quotidiane. Come cucini? Quante persone utilizzano la cucina contemporaneamente? Hai bisogno di molto spazio per conservare gli alimenti? Preferisci un'isola centrale o una cucina a parete? Queste sono solo alcune delle domande che i nostri progettisti ti porranno durante la consulenza iniziale, perché ogni dettaglio conta quando si tratta di creare lo spazio perfetto.",
      "Lavoriamo esclusivamente con i migliori brand italiani e internazionali, selezionando materiali di prima qualità che garantiscono resistenza all'usura, facilità di pulizia e bellezza che dura nel tempo. Dai piani di lavoro in quarzo composito alle ante in laminato di ultima generazione, ogni componente viene scelto con cura per assicurare prestazioni eccellenti e un'estetica contemporanea che non passa mai di moda."
    ],
    whyChooseTitle: "Perché Affidarsi a De Rosa Home per la Tua Cucina",
    whyChooseText: [
      "Scegliere De Rosa Home per la progettazione della tua cucina significa affidarsi a professionisti con oltre trent'anni di esperienza nel settore. Il nostro team di progettisti utilizza software di ultima generazione per creare render 3D fotorealistici che ti permetteranno di vedere la tua cucina futura ancora prima che venga realizzata.",
      "Ogni progetto include una consulenza personalizzata gratuita, durante la quale analizziamo insieme lo spazio disponibile, le tue preferenze estetiche e le esigenze funzionali. Proponiamo soluzioni innovative come cassetti estraibili, sistemi di illuminazione LED integrata, colonne dispensa organizzate e angoli attrezzati che massimizzano ogni centimetro disponibile.",
      "Il nostro servizio non termina con la consegna: le nostre squadre di montatori certificati eseguono l'installazione con precisione millimetrica, curando ogni dettaglio dalla posa delle ante alla regolazione delle cerniere. E con la nostra garanzia estesa, potrai goderti la tua nuova cucina con la tranquillità di un'assistenza sempre disponibile."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop&auto=format",
    ],
    features: [
      "Piani di lavoro in materiali pregiati (quarzo, dekton, laminato HPL)",
      "Elettrodomestici di ultima generazione delle migliori marche",
      "Soluzioni salvaspazio intelligenti e cassetti organizzati",
      "Illuminazione LED integrata con sensori di movimento",
      "Finiture personalizzabili in oltre 100 varianti colore",
    ]
  },
  bagno: {
    title: "Bagno",
    subtitle: "La tua spa personale",
    description: "Trasformiamo il bagno in un'oasi di relax e benessere, con soluzioni che uniscono design raffinato e comfort quotidiano.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Il Bagno come Rifugio: Design, Benessere e Funzionalità",
    introText: [
      "Il bagno moderno ha subito una trasformazione radicale rispetto al passato: da semplice spazio funzionale dedicato all'igiene personale, è diventato un vero e proprio rifugio domestico dove iniziare e concludere la giornata in totale relax. In De Rosa Home interpretiamo questa evoluzione creando ambienti bagno che coniugano l'eleganza del design italiano con le più innovative soluzioni di benessere.",
      "La progettazione di un bagno richiede competenze specifiche e una conoscenza approfondita dei materiali adatti agli ambienti umidi. I nostri progettisti sono specializzati nella creazione di spazi che ottimizzano ogni centimetro disponibile, proponendo soluzioni come sanitari sospesi che facilitano la pulizia, docce walk-in con cristallo temperato e rubinetterie di design che uniscono estetica e risparmio idrico.",
      "Dai rivestimenti in gres porcellanato effetto marmo ai mobili bagno laccati con ante push-to-open, ogni elemento viene selezionato con cura per garantire resistenza all'umidità, facilità di manutenzione e un'estetica che trasforma il bagno in una vera spa domestica. Proponiamo anche soluzioni tecnologiche come specchi retroilluminati con funzione antiappannamento, sistemi doccia multifunzione con cromoterapia e vasche idromassaggio freestanding."
    ],
    whyChooseTitle: "L'Esperienza De Rosa Home per il Tuo Bagno",
    whyChooseText: [
      "Affidare a De Rosa Home la progettazione del tuo bagno significa scegliere un partner che comprende l'importanza di questo ambiente nella vita quotidiana. Durante la consulenza iniziale, analizziamo insieme non solo lo spazio disponibile, ma anche le tue abitudini: preferisci la doccia o la vasca? Hai bisogno di molto spazio di contenimento? Desideri un'illuminazione soffusa per il relax o una luce brillante per il trucco?",
      "Collaboriamo con i migliori produttori di sanitari, rubinetterie e mobili bagno, offrendo una selezione esclusiva che spazia dal design minimalista contemporaneo allo stile classico rivisitato. Ogni proposta viene accompagnata da render 3D che ti permettono di visualizzare il risultato finale, modificando colori, materiali e disposizioni fino a trovare la soluzione perfetta.",
      "Il nostro servizio comprende anche la gestione degli aspetti tecnici come la predisposizione idraulica e l'impermeabilizzazione, coordinandoci con i professionisti del settore per garantire un risultato impeccabile sotto ogni aspetto."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop&auto=format",
    ],
    features: [
      "Sanitari sospesi di design con tecnologia rimless",
      "Docce walk-in con soffioni effetto pioggia e cromoterapia",
      "Mobili bagno su misura con cassetti organizzati",
      "Sistemi di illuminazione scenografica LED",
      "Predisposizione per riscaldamento a pavimento",
    ]
  },
  soggiorno: {
    title: "Soggiorno",
    subtitle: "Lo spazio dell'accoglienza",
    description: "Creiamo soggiorni che riflettono la tua personalità, luoghi perfetti per condividere momenti speciali con famiglia e amici.",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Il Soggiorno: Lo Specchio della Tua Personalità",
    introText: [
      "Il soggiorno rappresenta il biglietto da visita della tua casa, lo spazio dove accogli gli ospiti e trascorri i momenti più preziosi con la famiglia. È l'ambiente che deve riflettere al meglio la tua personalità, le tue passioni e il tuo stile di vita. In De Rosa Home progettiamo soggiorni che raccontano storie, creando ambienti dove ogni elemento dialoga armoniosamente con gli altri.",
      "La progettazione di un soggiorno richiede una visione d'insieme che tenga conto di molteplici fattori: la disposizione degli arredi in funzione della luce naturale, la scelta di un divano che sia al contempo confortevole ed esteticamente appagante, la creazione di una parete attrezzata che integri perfettamente TV, libri e oggetti decorativi. I nostri progettisti considerano ogni aspetto, proponendo soluzioni che massimizzano lo spazio e valorizzano l'ambiente.",
      "Lavoriamo con i migliori brand del settore per offrirti divani modulari di alta gamma, librerie e pareti attrezzate su misura, tavolini e complementi d'arredo esclusivi. Ogni proposta viene personalizzata in base alle tue preferenze: dai tessuti sfoderabili e lavabili per chi ha bambini o animali domestici, alle pelli pregiate per chi cerca l'eleganza senza tempo."
    ],
    whyChooseTitle: "L'Arte di Progettare Soggiorni con De Rosa Home",
    whyChooseText: [
      "Scegliere De Rosa Home per arredare il tuo soggiorno significa affidarsi a un team che conosce l'importanza dei dettagli. Durante la consulenza, esploriamo insieme le tue abitudini: ami organizzare cene con amici? Hai una collezione di libri che vuoi esporre? Desideri un angolo dedicato alla musica o al lavoro? Ogni risposta ci aiuta a creare un progetto realmente su misura.",
      "Proponiamo soluzioni innovative come sistemi modulari che si adattano a qualsiasi configurazione, illuminazione a LED integrata nelle librerie, imbottiti con meccanismi relax elettrici e tessuti antimacchia di ultima generazione. Ogni elemento viene scelto non solo per la sua bellezza, ma anche per la sua funzionalità e durabilità nel tempo.",
      "I nostri render 3D fotorealistici ti permetteranno di vedere il soggiorno dei tuoi sogni prima ancora che venga realizzato, dandoti la possibilità di modificare colori, materiali e disposizioni fino a raggiungere la perfezione. E con il nostro servizio di montaggio professionale, la consegna avverrà senza pensieri."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format",
    ],
    features: [
      "Divani componibili di alta gamma con tessuti antimacchia",
      "Pareti attrezzate su misura con illuminazione integrata",
      "Sistemi home theatre e multimediali integrati",
      "Illuminazione d'atmosfera dimmerabile",
      "Complementi d'arredo esclusivi e personalizzabili",
    ]
  },
  camera: {
    title: "Camera da Letto",
    subtitle: "Il tuo rifugio personale",
    description: "Progettiamo camere da letto che invitano al riposo, con soluzioni che garantiscono comfort, armonia e benessere.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Camera da Letto: Il Santuario del Riposo e del Benessere",
    introText: [
      "La camera da letto è il luogo più intimo della casa, lo spazio dove il riposo e il benessere devono essere prioritari sopra ogni altra considerazione. È qui che inizia e si conclude ogni giornata, ed è fondamentale che questo ambiente sia progettato per favorire il relax totale e un sonno rigenerante. In De Rosa Home creiamo camere che sono veri santuari del riposo.",
      "La scelta del letto rappresenta il cuore del progetto: proponiamo una selezione accurata di letti imbottiti con strutture ergonomiche, materassi di alta qualità e sistemi a doghe che garantiscono il massimo comfort. Ma la camera è molto più del solo letto: progettiamo armadi capienti e funzionali, cabine armadio organizzate con ogni tipo di accessorio, comodini e cassettiere che completano l'ambiente.",
      "L'illuminazione gioca un ruolo fondamentale nella camera da letto: proponiamo sistemi dimmerabili che permettono di passare da una luce brillante per le attività diurne a un'atmosfera soffusa per il relax serale. Ogni dettaglio, dalla scelta dei tessuti ai colori delle pareti, viene studiato per creare un ambiente che favorisca il benessere psicofisico."
    ],
    whyChooseTitle: "De Rosa Home: Esperti nella Zona Notte",
    whyChooseText: [
      "La progettazione della zona notte richiede competenze specifiche che in De Rosa Home abbiamo sviluppato in oltre trent'anni di esperienza. Sappiamo che ogni persona ha esigenze diverse: chi preferisce armadi a ante battenti, chi scorrevoli; chi desidera una cabina armadio separata, chi preferisce soluzioni più compatte. Ascoltiamo le tue necessità e proponiamo la soluzione più adatta.",
      "Lavoriamo con i migliori produttori italiani di letti imbottiti, armadi componibili e complementi per la zona notte. Proponiamo materiali di pregio come pelli naturali, tessuti tecnici antimacchia e legni pregiati, sempre nel rispetto del tuo budget. Ogni proposta viene accompagnata da render 3D che ti permettono di valutare colori, finiture e disposizioni.",
      "Il nostro servizio comprende anche la consulenza sul sistema letto: insieme ad esperti del settore, ti aiutiamo a scegliere il materasso più adatto alle tue esigenze, considerando fattori come la postura durante il sonno, eventuali problemi alla schiena e le preferenze personali in termini di rigidità."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop&auto=format",
    ],
    features: [
      "Letti imbottiti con contenitore e sistemi a doghe ergonomici",
      "Armadi scorrevoli su misura con illuminazione interna",
      "Cabine armadio completamente organizzate",
      "Comodini e cassettiere coordinate",
      "Tessuti e materiali premium di altissima qualità",
    ]
  },
  living: {
    title: "Living",
    subtitle: "Spazi aperti, vita fluida",
    description: "Progettiamo open space che integrano zone giorno e cucina in un unico ambiente armonioso, funzionale e contemporaneo.",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Il Living Contemporaneo: Dove la Vita Scorre Naturalmente",
    introText: [
      "Il concetto di living moderno supera i confini tradizionali delle stanze separate, creando spazi fluidi dove la vita domestica scorre naturalmente. L'open space che integra soggiorno, sala da pranzo e cucina è diventato la soluzione preferita da chi cerca un'abitazione contemporanea, luminosa e conviviale. In De Rosa Home progettiamo living che interpretano questa filosofia abitativa con competenza e creatività.",
      "Progettare un living richiede una visione d'insieme che consideri molteplici funzioni in un unico ambiente: la zona cottura deve essere efficiente e ben ventilata, l'area pranzo deve accogliere confortevolmente famiglia e ospiti, la zona relax deve offrire privacy pur mantenendo il dialogo con il resto dello spazio. I nostri progettisti utilizzano elementi architettonici e soluzioni d'arredo per definire le diverse aree senza separarle.",
      "Proponiamo isole cucina che diventano elementi centrali dello spazio, capaci di fungere sia da piano di lavoro che da tavolo conviviale. Librerie bifacciali che dividono gli ambienti lasciando passare la luce. Divani modulari che si adattano a qualsiasi configurazione. Sistemi di illuminazione zonale che permettono di creare atmosfere diverse nelle varie aree del living."
    ],
    whyChooseTitle: "De Rosa Home: Maestri nell'Arte del Living",
    whyChooseText: [
      "La progettazione di un living open space richiede esperienza e sensibilità che in De Rosa Home abbiamo maturato attraverso centinaia di progetti realizzati. Ogni living è unico, con le sue particolarità architettoniche, la sua esposizione alla luce e le esigenze specifiche di chi lo abiterà. Partiamo sempre da un'analisi approfondita dello spazio prima di proporre qualsiasi soluzione.",
      "Il nostro approccio integrato ci permette di progettare contemporaneamente cucina, zona pranzo e soggiorno, garantendo una coerenza estetica e funzionale che solo una visione unitaria può offrire. Scegliamo materiali, colori e finiture che creano un dialogo armonioso tra le diverse aree, proponendo soluzioni che valorizzano l'ambiente nel suo insieme.",
      "Grazie ai nostri render 3D fotorealistici, potrai vedere il tuo living completo ancora prima che venga realizzato. Questo ti permette di valutare proporzioni, colori e disposizioni, apportando modifiche fino a raggiungere il risultato perfetto. E con il nostro servizio di montaggio coordinato, l'installazione avverrà in tempi rapidi e senza disagi."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format",
    ],
    features: [
      "Isole cucina multifunzione con piano snack integrato",
      "Zone pranzo eleganti con tavoli allungabili",
      "Sistemi di separazione modulari e librerie bifacciali",
      "Illuminazione zonale intelligente e dimmerabile",
      "Arredamento continuo e coerente in ogni area",
    ]
  },
};

const services = [
  {
    title: "Progettazione",
    description: "Progettiamo insieme a te ogni dettaglio, trasformando i tuoi desideri in soluzioni concrete e personalizzate.",
    icon: Compass,
    href: "/servizi/progettazione"
  },
  {
    title: "Montaggio",
    description: "Installazione professionale con squadre esperte e attenzione ai dettagli in ogni fase.",
    icon: Wrench,
    href: "/servizi/montaggio"
  },
  {
    title: "Consulenza",
    description: "Ti guidiamo nella scelta dei materiali e delle soluzioni più adatte al tuo stile di vita.",
    icon: MessageSquare,
    href: "/servizi/consulenza"
  },
];

const AmbientePage = () => {
  const { ambiente } = useParams<{ ambiente: string }>();
  const data = environmentsData[ambiente || "cucina"] || environmentsData.cucina;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
        image={data.heroImage}
        primaryCta={{ text: "Richiedi Preventivo", href: "/contatti" }}
        secondaryCta={{ text: "Vedi lo Showroom", href: "/showroom" }}
        height="large"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-foreground mb-8 text-center">
              {data.introTitle}
            </h2>
            <div className="space-y-4 body-text text-muted-foreground">
              {data.introText.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>
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
              Le Nostre Realizzazioni
            </span>
            <h2 className="heading-2 text-foreground">
              Galleria {data.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((image, index) => (
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
                  alt={`${data.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Il Nostro Approccio
              </span>
              <h2 className="heading-2 text-foreground mb-8">
                {data.whyChooseTitle}
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                {data.whyChooseText.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Caratteristiche
              </span>
              <h3 className="heading-3 text-foreground mb-6">
                Cosa Include il Nostro Servizio
              </h3>
              <ul className="space-y-4">
                {data.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-tortora mt-2 flex-shrink-0" />
                    <span className="body-text text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img 
                  src={data.gallery[0]} 
                  alt={data.title}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </motion.div>
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
            <h2 className="heading-2 text-foreground">
              Come Possiamo Aiutarti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <BrandSection 
        title={`Brand per la ${data.title}`}
        subtitle="I migliori marchi italiani e internazionali per realizzare il tuo progetto"
      />

      {/* Form */}
      <section className="section-padding bg-background">
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
                Richiedi una Consulenza Gratuita
              </h2>
              <p className="body-large text-muted-foreground">
                Raccontaci il tuo progetto per la {data.title.toLowerCase()}. Ti contatteremo entro 24 ore per fissare un appuntamento nel nostro showroom o direttamente a casa tua.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ConsultationForm ambiente={ambiente} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default AmbientePage;
