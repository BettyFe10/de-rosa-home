import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SubCategory {
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  introTitle: string;
  introText: string[];
  detailTitle: string;
  detailText: string[];
  subCategories: SubCategory[];
  features: string[];
}

const categoriesData: Record<string, CategoryData> = {
  superfici: {
    title: "Superfici",
    subtitle: "Gres, Parquet, Pietre Naturali, SPC, Marmi e Vetri",
    description: "Selezioniamo superfici e materiali per ogni ambiente: gres e grandi formati, parquet, pietre naturali e marmi, soluzioni SPC e vetri per progetti contemporanei e duraturi.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "L'Eccellenza delle Superfici: Pavimenti e Rivestimenti per Ogni Ambiente",
    introText: [
      "Le superfici rappresentano l'elemento fondante di ogni progetto d'interni: è sul pavimento che camminiamo ogni giorno, sono i rivestimenti a definire l'identità visiva di una stanza. In De Rosa Home selezioniamo con cura i migliori materiali disponibili sul mercato italiano e internazionale, offrendo una gamma completa che spazia dal gres porcellanato di ultima generazione alla pietra naturale più pregiata, dal parquet in legno massello ai rivestimenti tecnici di design.",
      "La scelta della superficie giusta richiede competenza e conoscenza approfondita dei materiali. Ogni ambiente ha esigenze specifiche: la cucina necessita di pavimenti resistenti alle macchie e facili da pulire, il bagno richiede materiali antiscivolo e resistenti all'umidità, il soggiorno merita superfici che esaltino l'eleganza e il comfort. I nostri consulenti ti guidano nella scelta più appropriata, considerando fattori tecnici, estetici e di budget.",
      "Collaboriamo con i più prestigiosi produttori di ceramiche, pietre e legni, garantendo materiali certificati, ecologici e di lunga durata. Ogni superficie che proponiamo è stata testata e selezionata per le sue prestazioni tecniche, la resistenza all'usura e la bellezza estetica che mantiene inalterata nel tempo."
    ],
    detailTitle: "Materiali e Lavorazioni: La Qualità che Fa la Differenza",
    detailText: [
      "Il nostro catalogo comprende le migliori collezioni di gres porcellanato in formati fino a 120x280 cm, ideali per creare superfici continue e minimaliste senza fughe visibili. Proponiamo effetti marmo, pietra, cemento e legno con una fedeltà sorprendente, rendendo accessibili estetiche lussuose a costi contenuti e con una manutenzione praticamente nulla.",
      "Per chi cerca l'autenticità dei materiali naturali, offriamo una selezione esclusiva di marmi, graniti, travertini e ardesie provenienti dalle migliori cave italiane e internazionali. Ogni lastra viene selezionata singolarmente per garantire venature e colorazioni uniche che rendono ogni ambiente irripetibile.",
      "Il parquet rappresenta una delle nostre specialità: proponiamo essenze pregiate come rovere, noce, teak e iroko in diverse lavorazioni — dalla spazzolatura alla piallatura a mano — e finiture che spaziano dall'olio naturale alla vernice opaca. Ogni tavola racconta una storia di artigianalità e tradizione, portando nella tua casa il calore e la naturalezza del legno vero."
    ],
    subCategories: [
      {
        title: "Pavimenti",
        description: "Gres porcellanato di ultima generazione in formati piccoli, medi e grandi. Effetti marmo, pietra, cemento e legno con finiture naturali, lappate o strutturate.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Rivestimenti",
        description: "Piastrelle da rivestimento in ceramica, mosaici, brick e formati decorativi per bagni, cucine e zone living. Collezioni dei migliori brand italiani.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Parquet",
        description: "Pavimenti in legno massello e prefinito nelle essenze più pregiate: rovere, noce, teak, iroko. Lavorazioni artigianali e finiture personalizzate.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Marmi e Pietre Naturali",
        description: "Marmi, graniti, travertini e ardesie selezionati dalle migliori cave. Ogni lastra è un pezzo unico con venature e colorazioni irripetibili.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "SPC",
        description: "Pavimenti SPC ad alte prestazioni: posa rapida, resistenza e look contemporaneo per ambienti dinamici e ristrutturazioni veloci.",
        image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Vetri e Vetrate",
        description: "Soluzioni in vetro per separazioni leggere, porte e complementi: trasparenze, finiture e dettagli su misura.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Gres porcellanato in formati fino a 120x280 cm",
      "Parquet in legno massello e prefinito di alta gamma",
      "Marmi e pietre naturali selezionati dalle migliori cave",
      "Soluzioni SPC per ristrutturazioni rapide e performance elevate",
      "Vetri e vetrate su misura per progetti contemporanei",
      "Posa professionale con garanzia su tutta la lavorazione",
      "Consulenza tecnica gratuita per la scelta dei materiali",
    ]
  },
  "arredo-bagno": {
    title: "Arredo Bagno",
    subtitle: "Rubinetteria, Igienici, Mobili, Accessori e Box Doccia",
    description: "Soluzioni complete per il bagno: rubinetteria, igienici, mobili e accessori, box doccia e termoarredo. Progetti curati, funzionali e coerenti con lo stile della casa.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Arredo Bagno Completo: Sanitari, Rubinetteria e Termoarredo di Design",
    introText: [
      "Il bagno è diventato uno degli ambienti più importanti della casa contemporanea, uno spazio dove il benessere personale e il design si incontrano ogni giorno. In De Rosa Home offriamo una selezione completa di soluzioni per l'arredo bagno che comprende sanitari delle migliori marche italiane, rubinetterie di design e sistemi di termoarredo che uniscono funzionalità ed eleganza.",
      "La nostra esperienza nel settore ci ha insegnato che un bagno ben progettato nasce dall'equilibrio perfetto tra estetica e funzionalità. Per questo proponiamo solo prodotti che superano rigorosi standard qualitativi: sanitari in ceramica di prima scelta con tecnologie di scarico avanzate per il risparmio idrico, rubinetterie con cartucce ceramiche di lunga durata e finiture resistenti alla corrosione, termoarredi che garantiscono comfort termico con un design che arreda.",
      "Collaboriamo con brand leader come Pozzi Ginori, Ideal Standard, Grohe, Hansgrohe, Tubes e molti altri, offrendo una gamma che spazia dal design minimalista contemporaneo allo stile classico rivisitato. I nostri consulenti specializzati ti guidano nella scelta delle soluzioni più adatte al tuo spazio, al tuo stile e al tuo budget."
    ],
    detailTitle: "Qualità Certificata per il Tuo Bagno",
    detailText: [
      "I nostri sanitari sono realizzati con ceramiche di prima scelta, trattate con smalti antibatterici e tecnologie di scarico senza brida che facilitano la pulizia e garantiscono la massima igiene. Proponiamo soluzioni sospese che liberano il pavimento facilitando le operazioni di pulizia, e modelli a terra per chi preferisce un'installazione tradizionale.",
      "La rubinetteria rappresenta un elemento chiave del bagno: offriamo miscelatori monocomando, termostatici e a incasso dei migliori produttori europei. Ogni rubinetto è dotato di sistemi di risparmio idrico integrati e finiture di pregio — dal cromo classico al nero opaco, dall'oro spazzolato al nichel satinato — per soddisfare ogni gusto estetico.",
      "I nostri termoarredi vanno ben oltre il semplice scaldasalviette: proponiamo radiatori di design firmati dai migliori designer italiani, disponibili in centinaia di colori e configurazioni. Soluzioni che riscaldano l'ambiente con efficienza energetica, arredando la parete con forme scultoree e materiali pregiati come l'acciaio, l'alluminio e la pietra ollare."
    ],
    subCategories: [
      {
        title: "Sanitari",
        description: "Vasi, bidet, lavabi e piatti doccia in ceramica di prima scelta. Modelli sospesi e a terra con tecnologie rimless e trattamenti antibatterici.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Rubinetteria",
        description: "Miscelatori, soffioni e sistemi doccia delle migliori marche europee. Finiture cromo, nero opaco, oro spazzolato e nichel satinato.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Mobili e Accessori Bagno",
        description: "Mobili sospesi e a terra, colonne, specchi e accessori coordinati. Soluzioni su misura per ottimizzare lo spazio e valorizzare il progetto.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Box Doccia",
        description: "Box doccia e chiusure in vetro con profili minimali, finiture e misure personalizzate per docce walk-in e cabine complete.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Termoarredo",
        description: "Scaldasalviette e radiatori di design che uniscono efficienza energetica e valore estetico. Centinaia di colori e configurazioni disponibili.",
        image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Ausili Bagno",
        description: "Ausili e soluzioni per il bagno in sicurezza: maniglioni, sedute, accessori e supporti pensati per comfort e autonomia.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Sanitari con tecnologia rimless e trattamento antibatterico",
      "Rubinetterie con cartucce ceramiche e risparmio idrico",
      "Termoarredi di design con alta efficienza energetica",
      "Mobili e accessori coordinati per progetti completi",
      "Box doccia su misura e soluzioni walk-in",
      "Ausili bagno per sicurezza e comfort quotidiano",
      "Installazione professionale con garanzia completa",
      "Ampia esposizione visibile nel nostro showroom",
    ]
  },
  "porte-infissi": {
    title: "Porte e Infissi",
    subtitle: "Porte da Interni e Serramenti di Qualità",
    description: "Porte da interni, portoncini blindati e infissi di alta qualità: soluzioni che combinano sicurezza, isolamento e design per ogni esigenza abitativa.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Porte e Infissi: Sicurezza, Isolamento e Design in Ogni Apertura",
    introText: [
      "Porte e infissi sono elementi fondamentali dell'architettura d'interni che influenzano profondamente l'estetica, il comfort e la sicurezza della tua abitazione. Una porta non è solo un elemento funzionale di separazione tra ambienti: è un dettaglio di design che caratterizza lo stile della casa, un elemento acustico che garantisce privacy e un componente di sicurezza che protegge la tua famiglia.",
      "In De Rosa Home offriamo una selezione accurata di porte da interni, portoncini blindati e serramenti che combinano le più avanzate tecnologie di isolamento termoacustico con un design che si integra perfettamente in ogni contesto abitativo. Lavoriamo con i migliori produttori italiani per garantire prodotti certificati, durevoli e esteticamente impeccabili.",
      "La scelta della porta giusta richiede una valutazione attenta di molteplici fattori: il tipo di apertura più adatto allo spazio disponibile, il livello di isolamento acustico necessario, le finiture che si armonizzano con il resto dell'arredamento, il sistema di sicurezza appropriato. I nostri consulenti ti accompagnano in ogni decisione con competenza e trasparenza."
    ],
    detailTitle: "Soluzioni per Ogni Esigenza: Dalla Porta a Battente allo Scorrevole a Scomparsa",
    detailText: [
      "La nostra gamma di porte da interni comprende modelli a battente, scorrevoli, a libro e filomuro nelle finiture più ricercate: dal legno laccato al vetro temperato, dal laminato effetto legno alle superfici in tessuto e cemento. Ogni porta viene realizzata su misura per adattarsi perfettamente alle dimensioni e allo stile del tuo ambiente.",
      "Per gli infissi proponiamo soluzioni in PVC, alluminio e legno-alluminio con vetrocamere a basso emissivo e gas argon, che garantiscono un isolamento termico eccezionale riducendo significativamente i consumi energetici. Le nostre finestre raggiungono valori di trasmittanza termica tra i migliori del mercato, assicurando comfort in ogni stagione.",
      "La sicurezza è una priorità: i nostri portoncini blindati sono certificati nelle classi di resistenza più elevate, dotati di serrature multipunto e cilindri europei anti-effrazione. Design e sicurezza si fondono in soluzioni che proteggono senza compromettere l'estetica dell'ingresso della tua casa."
    ],
    subCategories: [
      {
        title: "Porte da Interni",
        description: "Porte a battente, scorrevoli, a libro e filomuro in legno, vetro, laminato e finiture speciali. Su misura per ogni ambiente.",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Portoncini Blindati",
        description: "Porte blindate certificate con serrature multipunto, cilindri europei e finiture personalizzabili. Sicurezza e design in un unico prodotto.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Infissi e Serramenti",
        description: "Finestre e porte-finestre in PVC, alluminio e legno-alluminio con vetrocamere basso emissive. Massimo isolamento termoacustico.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Porte da interni su misura in ogni finitura e tipologia",
      "Portoncini blindati certificati nelle classi più elevate",
      "Infissi con trasmittanza termica ai vertici del mercato",
      "Posa in opera professionale con garanzia completa",
      "Consulenza energetica per accesso a bonus e detrazioni",
    ]
  },
  outdoor: {
    title: "Outdoor",
    subtitle: "Arredo per Esterni e Spazi All'Aperto",
    description: "Pergole, tende da sole, sedute, divani e tavoli per vivere al meglio i tuoi spazi esterni con stile e comfort tutto l'anno.",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Vivere l'Outdoor: Arredo per Terrazzi, Giardini e Spazi Esterni",
    introText: [
      "Gli spazi esterni della casa — terrazzi, giardini, verande e patii — rappresentano un'estensione naturale dell'abitazione che merita la stessa attenzione e cura riservata agli ambienti interni. In De Rosa Home progettiamo e forniamo soluzioni complete per l'outdoor che trasformano ogni spazio all'aperto in un luogo accogliente, funzionale e di design dove vivere momenti indimenticabili.",
      "La nostra proposta per l'esterno comprende sistemi di copertura come pergole bioclimatiche e tende da sole motorizzate, arredi in materiali resistenti alle intemperie come alluminio, teak e tessuti tecnici outdoor, e complementi che completano l'ambiente creando vere e proprie stanze a cielo aperto. Ogni soluzione è progettata per resistere agli agenti atmosferici mantenendo inalterata la bellezza nel tempo.",
      "Collaboriamo con i migliori brand del settore outdoor per offrirti divani modulari con strutture in alluminio e cuscini in tessuto drenante, tavoli da pranzo in teak certificato FSC, pergole con lamelle orientabili che si adattano alle condizioni climatiche e sistemi di illuminazione che creano atmosfere magiche nelle sere d'estate."
    ],
    detailTitle: "Materiali e Tecnologie per un Outdoor che Dura nel Tempo",
    detailText: [
      "I materiali che selezioniamo per l'outdoor sono progettati per resistere a sole, pioggia, vento e sbalzi di temperatura senza deteriorarsi. L'alluminio verniciato a polvere garantisce una struttura leggera ma resistente alla corrosione, il teak di prima scelta sviluppa nel tempo una patina argentata naturale che ne esalta il carattere, i tessuti tecnici in fibra olefinica sono resistenti ai raggi UV, alle muffe e allo sporco.",
      "Le nostre pergole bioclimatiche rappresentano il top di gamma per la copertura degli spazi esterni: dotate di lamelle in alluminio orientabili, si adattano automaticamente alle condizioni meteo permettendoti di goderti lo spazio all'aperto in ogni stagione. Integrano sistemi di illuminazione LED, riscaldamento a infrarossi e tende perimetrali per un comfort completo.",
      "Le tende da sole motorizzate con sensori vento e sole proteggono automaticamente i tuoi spazi esterni, estendendosi e ritraendosi in base alle condizioni climatiche. Disponibili in centinaia di tessuti e colori, si integrano perfettamente nell'architettura della tua casa."
    ],
    subCategories: [
      {
        title: "Pergole e Tende",
        description: "Pergole bioclimatiche con lamelle orientabili e tende da sole motorizzate con sensori intelligenti. Coperture per ogni spazio esterno.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Sedute e Divani",
        description: "Divani modulari, poltrone e sedute in materiali weather-proof: alluminio, teak, corda intrecciata e tessuti tecnici drenanti e anti-UV.",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Tavoli e Complementi",
        description: "Tavoli da pranzo, tavolini, consolle e complementi d'arredo per esterni in materiali resistenti alle intemperie con design contemporaneo.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Pergole bioclimatiche con lamelle orientabili motorizzate",
      "Arredi in teak, alluminio e tessuti tecnici outdoor",
      "Tende da sole motorizzate con sensori vento e sole",
      "Illuminazione LED integrata per atmosfere serali",
      "Progettazione personalizzata degli spazi esterni",
    ]
  },
  wellness: {
    title: "Wellness",
    subtitle: "Benessere Domestico e Relax Totale",
    description: "Mini piscine, saune, bagno turco e docce emozionali: trasforma la tua casa in un centro benessere privato.",
    heroImage: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Wellness a Casa Tua: Il Benessere Diventa Quotidiano",
    introText: [
      "Il concetto di benessere domestico ha assunto una nuova centralità nella vita contemporanea: sempre più persone desiderano poter godere dei benefici di saune, bagni turco e idromassaggi senza dover uscire di casa. In De Rosa Home rispondiamo a questa esigenza con una gamma completa di soluzioni wellness che trasformano la tua abitazione in un centro benessere privato.",
      "Le nostre proposte spaziano dalle mini piscine con idromassaggio e nuoto controcorrente alle saune finlandesi in legno di cedro e hemlock, dal bagno turco con cromoterapia e aromaterapia alle docce emozionali multisensoriali. Ogni soluzione è progettata per integrarsi armoniosamente nell'architettura della casa, senza stravolgere gli spazi esistenti.",
      "Collaboriamo con i migliori produttori europei di attrezzature per il benessere domestico, garantendo prodotti certificati, sicuri e conformi a tutte le normative vigenti. I nostri tecnici specializzati si occupano dell'installazione completa, dalle predisposizioni impiantistiche al collaudo finale, assicurando un funzionamento perfetto e duraturo."
    ],
    detailTitle: "Soluzioni su Misura per il Tuo Benessere Personale",
    detailText: [
      "Le nostre mini piscine e vasche idromassaggio sono disponibili in diverse dimensioni e configurazioni per adattarsi a qualsiasi spazio: da modelli compatti perfetti per terrazzi e giardini piccoli a soluzioni più ampie per chi dispone di ambienti dedicati. Ogni vasca è dotata di sistemi di filtrazione automatica, riscaldamento e disinfezione che garantiscono acqua sempre cristallina con una manutenzione minima.",
      "Le saune finlandesi che proponiamo sono realizzate in legni pregiati selezionati per le loro proprietà termiche e aromatiche. I nostri modelli includono stufe elettriche di ultima generazione con controllo digitale della temperatura e dell'umidità, panchine ergonomiche e illuminazione soffusa che crea l'atmosfera perfetta per il relax più profondo.",
      "Le docce emozionali rappresentano la frontiera più innovativa del benessere domestico: combinano getti d'acqua variabili, cromoterapia con luci LED multicolore, aromaterapia con diffusori integrati e musica con altoparlanti waterproof. Un'esperienza multisensoriale che trasforma la semplice doccia quotidiana in un rituale di benessere rigenerante."
    ],
    subCategories: [
      {
        title: "Mini Piscine",
        description: "Vasche idromassaggio e mini piscine con nuoto controcorrente per interni ed esterni. Sistemi di filtrazione e riscaldamento automatici.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Saune",
        description: "Saune finlandesi e a infrarossi in legni pregiati. Stufe con controllo digitale, panchine ergonomiche e illuminazione d'atmosfera.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Bagno Turco",
        description: "Cabine hammam con generatore di vapore, cromoterapia e aromaterapia integrata. L'esperienza spa nella tua casa.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Docce Emozionali",
        description: "Sistemi doccia multisensoriali con getti variabili, luci LED, aromaterapia e audio integrato per un'esperienza rigenerante.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Mini piscine con idromassaggio e nuoto controcorrente",
      "Saune finlandesi e a infrarossi in legni pregiati",
      "Bagni turco con cromoterapia e aromaterapia",
      "Docce emozionali multisensoriali",
      "Installazione completa e collaudo certificato",
    ]
  },
  caminetti: {
    title: "Caminetti",
    subtitle: "Calore, Atmosfera e Design",
    description: "Caminetti a legna, a gas, a bioetanolo e elettrici: soluzioni che riscaldano l'ambiente e arredano con stile la tua casa.",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Caminetti: Il Fascino del Fuoco al Centro della Tua Casa",
    introText: [
      "Il caminetto è da sempre simbolo di calore domestico, convivialità e atmosfera. Nella casa contemporanea, questo elemento ha evoluto il suo ruolo: non è più solo una fonte di riscaldamento, ma un vero oggetto di design che caratterizza l'ambiente e crea un punto focale di straordinario impatto visivo. In De Rosa Home proponiamo caminetti che uniscono tradizione e innovazione.",
      "La nostra gamma comprende caminetti a legna per chi ama l'autenticità della fiamma naturale e il profumo del legno che arde, modelli a gas per chi cerca la praticità dell'accensione istantanea e la regolazione precisa della fiamma, soluzioni a bioetanolo che non richiedono canna fumaria e possono essere installate ovunque, e caminetti elettrici di ultima generazione con effetto fiamma incredibilmente realistico.",
      "Ogni caminetto viene selezionato non solo per le sue prestazioni tecniche e la sua efficienza energetica, ma anche per il suo valore estetico. Proponiamo modelli a parete, ad angolo, centrali, bifacciali e sospesi, con rivestimenti in pietra, acciaio, ceramica e materiali compositi che si integrano perfettamente in ogni stile abitativo, dal classico al contemporaneo."
    ],
    detailTitle: "Tecnologia e Design: Caminetti per Ogni Esigenza",
    detailText: [
      "I nostri caminetti a legna sono dotati di camere di combustione ad alta efficienza che massimizzano il rendimento calorico riducendo le emissioni. Sistemi di vetro ceramico autopulente, prese d'aria esterne e post-combustione dei fumi garantiscono un funzionamento ottimale nel rispetto dell'ambiente e delle normative vigenti.",
      "I modelli a gas rappresentano la soluzione ideale per chi desidera il fascino del fuoco senza la gestione della legna: accensione con telecomando, regolazione della fiamma e programmazione oraria permettono un comfort totale. Le fiamme su letti di ciottoli o tronchi ceramici creano un effetto visivo indistinguibile dal fuoco naturale.",
      "I caminetti a bioetanolo offrono libertà totale di installazione: non necessitando di canna fumaria, possono essere posizionati in qualsiasi punto della casa, anche in appartamento. Le fiamme vere generano un calore piacevole e un'atmosfera unica, senza fumo, cenere o odori. Una soluzione perfetta per chi vive in condominio o desidera un punto fuoco aggiuntivo."
    ],
    subCategories: [
      {
        title: "Caminetti a Legna",
        description: "Camere di combustione ad alta efficienza con vetro ceramico autopulente. Il fascino autentico del fuoco a legna con tecnologia moderna.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Caminetti a Gas",
        description: "Accensione con telecomando, regolazione precisa della fiamma e programmazione oraria. Comfort totale senza gestione della legna.",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Caminetti a Bioetanolo",
        description: "Nessuna canna fumaria necessaria, installazione libera ovunque. Fiamme vere, niente fumo né cenere. Perfetti per appartamenti.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Caminetti a legna ad alta efficienza energetica",
      "Modelli a gas con accensione e controllo remoto",
      "Soluzioni a bioetanolo senza canna fumaria",
      "Rivestimenti personalizzabili in pietra, acciaio e ceramica",
      "Installazione professionale e certificazione impianti",
    ]
  },
  arredamento: {
    title: "Arredamento",
    subtitle: "Cucina, Living, Camera e Lavanderia",
    description: "Arrediamo ogni ambiente della tua casa con soluzioni su misura dei migliori brand italiani: dalla cucina alla lavanderia, ogni spazio è progettato per te.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Arredamento Completo: Ogni Ambiente, una Soluzione su Misura",
    introText: [
      "L'arredamento rappresenta il cuore dell'attività di De Rosa Home: da oltre 50 anni progettiamo e realizziamo ambienti completi che riflettono la personalità e lo stile di vita dei nostri clienti. Dalla cucina al living, dalla camera da letto alla lavanderia, ogni spazio viene studiato con la stessa cura e attenzione ai dettagli per creare un'armonia complessiva che rende la tua casa un luogo unico.",
      "Il nostro approccio si distingue per la progettazione integrata: non proponiamo singoli mobili, ma ambienti completi dove ogni elemento dialoga con gli altri creando un risultato armonioso e funzionale. I nostri progettisti lavorano con te per comprendere le tue esigenze quotidiane, le tue preferenze estetiche e il tuo budget, sviluppando proposte personalizzate che puoi visualizzare in anteprima attraverso render 3D fotorealistici.",
      "Collaboriamo con i più prestigiosi brand dell'arredamento italiano e internazionale, garantendo una qualità costruttiva eccellente, materiali certificati e finiture che durano nel tempo. Ogni progetto viene seguito dall'ideazione al montaggio finale da un team dedicato che assicura il rispetto dei tempi e la massima qualità in ogni fase."
    ],
    detailTitle: "Brand di Eccellenza e Qualità Costruttiva",
    detailText: [
      "La cucina è l'ambiente dove la nostra competenza si esprime al massimo: progettiamo cucine funzionali e belle, con piani di lavoro in materiali pregiati, cassetti e colonne organizzate, elettrodomestici integrati delle migliori marche e sistemi di illuminazione che valorizzano ogni dettaglio. Dall'angolo cottura compatto alla cucina con isola, ogni soluzione è pensata per le tue abitudini.",
      "Il living contemporaneo integra zona giorno, sala da pranzo e spazio relax in un unico ambiente fluido: proponiamo divani modulari, pareti attrezzate, tavoli da pranzo e complementi che definiscono le diverse aree funzionali senza separare gli spazi. Ogni elemento è scelto per creare un ambiente accogliente dove è bello vivere e ricevere.",
      "La camera da letto e la lavanderia completano il progetto abitativo: per la zona notte offriamo letti imbottiti, armadi e cabine armadio su misura, comodini e cassettiere coordinate. La lavanderia, spesso trascurata, merita una progettazione attenta che ottimizzi lo spazio con colonne porta-lavatrice, ripiani organizzati e sistemi stiro integrati."
    ],
    subCategories: [
      {
        title: "Cucina",
        description: "Cucine su misura con piani di lavoro pregiati, elettrodomestici integrati e soluzioni salvaspazio intelligenti. Dall'angolo cottura all'isola.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
        href: "/categoria/arredamento/cucina"
      },
      {
        title: "Living",
        description: "Divani modulari, pareti attrezzate, tavoli e complementi per un living contemporaneo dove zona giorno e sala da pranzo si fondono.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=400&fit=crop&auto=format",
        href: "/categoria/arredamento/living"
      },
      {
        title: "Camera da Letto",
        description: "Letti imbottiti, armadi e cabine armadio su misura, comodini e cassettiere coordinate per una zona notte di comfort e stile.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&auto=format",
        href: "/categoria/arredamento/camera"
      },
      {
        title: "Lavanderia",
        description: "Progetti funzionali per la lavanderia: colonne porta-lavatrice, ripiani organizzati, stendibiancheria integrati e sistemi stiro a scomparsa.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format",
        href: "/categoria/arredamento/lavanderia"
      }
    ],
    features: [
      "Cucine su misura con brand italiani di eccellenza",
      "Living modulari e personalizzabili",
      "Zone notte con armadi e cabine armadio su misura",
      "Lavanderie organizzate e funzionali",
      "Progettazione integrata con render 3D fotorealistici",
    ]
  },
  "carte-da-parati": {
    title: "Carte da Parati",
    subtitle: "Texture, Pattern e Soluzioni Decorative",
    description: "Carte da parati, rivestimenti murali e finiture decorative per dare carattere agli ambienti con soluzioni contemporanee e su misura.",
    heroImage: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Pareti che Raccontano: Carta da Parati e Rivestimenti Decorativi",
    introText: [
      "Le pareti sono una superficie narrativa: texture, pattern e colori possono trasformare completamente la percezione di uno spazio. In De Rosa Home selezioniamo collezioni decorative e soluzioni tecniche per valorizzare living, camere, bagni e spazi commerciali con un risultato elegante e coerente.",
      "Dalla carta vinilica lavabile alle texture materiche, fino a rivestimenti murali più tecnici, ti guidiamo nella scelta più adatta in base a ambiente, luce e manutenzione."
    ],
    detailTitle: "Materiali, Applicazione e Scelta Consapevole",
    detailText: [
      "La resa finale dipende tanto dal prodotto quanto dall'applicazione: per questo affianchiamo alla selezione estetica un supporto tecnico per materiali, fondi e posa, così da ottenere un risultato pulito e duraturo."
    ],
    subCategories: [
      {
        title: "Carte Viniliche",
        description: "Soluzioni pratiche e resistenti, ideali anche per ambienti vissuti e facilmente pulibili.",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Texture Materiche",
        description: "Effetti tessuto, pietra, cemento e superfici tattili per pareti che diventano protagoniste.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Rivestimenti Decorativi",
        description: "Pannelli e soluzioni decorative per progetti su misura e composizioni personalizzate.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Selezione di collezioni decorative contemporanee",
      "Soluzioni lavabili e resistenti per ambienti specifici",
      "Supporto tecnico su materiali, fondi e posa",
      "Consulenza per composizioni e abbinamenti",
      "Risultato coerente con il progetto d'interni",
    ]
  },
  illuminazione: {
    title: "Illuminazione",
    subtitle: "Luce Tecnica e Decorativa",
    description: "Progettiamo e selezioniamo soluzioni di illuminazione per valorizzare ogni ambiente: luce funzionale, scenografica e d'atmosfera.",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Illuminazione: Progettare la Luce Significa Progettare lo Spazio",
    introText: [
      "La luce definisce volumi, materiali e percezione degli ambienti. Un progetto di illuminazione ben studiato migliora comfort e funzionalità, creando anche atmosfere più calde e accoglienti.",
      "In De Rosa Home ti accompagniamo nella scelta tra luce tecnica e decorativa, integrando punti luce, temperature colore e controlli in modo semplice e coerente."
    ],
    detailTitle: "Tecnica, Atmosfera e Controllo",
    detailText: [
      "Dalla luce puntuale su isole cucina e piani lavoro alla luce diffusa per il living, fino a soluzioni decorative per dare carattere: ogni scelta viene calibrata su abitudini, arredi e materiali."
    ],
    subCategories: [
      {
        title: "Luce Tecnica",
        description: "Spot, strip LED, incassi e soluzioni per una luce precisa e funzionale.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Luce Decorativa",
        description: "Lampade sospese, da parete e da terra per un segno estetico forte e riconoscibile.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Controllo e Atmosfere",
        description: "Dimmer, scenari e soluzioni per gestire intensità e temperatura colore in modo intuitivo.",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Progettazione luce coerente con materiali e arredi",
      "Soluzioni LED efficienti e versatili",
      "Scenari e dimmer per atmosfera e comfort",
      "Consulenza su temperatura colore e resa cromatica",
      "Integrazione con cucine, living e bagno",
    ]
  },
  termoarredi: {
    title: "Termoarredi",
    subtitle: "Calore Funzionale e Design",
    description: "Radiatori e scaldasalviette di design per riscaldare con stile: soluzioni efficienti e personalizzabili per bagno e ambienti living.",
    heroImage: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Termoarredo: Quando il Calore Diventa Progetto",
    introText: [
      "Il termoarredo non è più un elemento tecnico da nascondere: oggi diventa parte del linguaggio estetico della casa. Proponiamo soluzioni che uniscono performance e design con finiture e colori coordinabili."
    ],
    detailTitle: "Efficienza, Finiture e Integrazione",
    detailText: [
      "Ti guidiamo nella scelta tra diverse potenze, tipologie e installazioni, mantenendo coerenza con rivestimenti, rubinetterie e arredo."
    ],
    subCategories: [
      {
        title: "Scaldasalviette",
        description: "Soluzioni per il bagno, verticali e orizzontali, con finiture e colori personalizzabili.",
        image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Radiatori di Design",
        description: "Elementi scultorei e minimali per living e zone di passaggio, con alte prestazioni.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Soluzioni Elettriche",
        description: "Termoarredi elettrici per comfort immediato e gestione semplice.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Termoarredi di design personalizzabili",
      "Soluzioni bagno coordinate con il progetto",
      "Supporto su potenze, installazioni e resa termica",
      "Finiture e colori per coerenza estetica",
      "Integrazione con arredo bagno e rivestimenti",
    ]
  },
  stufe: {
    title: "Stufe",
    subtitle: "Calore, Efficienza e Controllo",
    description: "Stufe e sistemi di riscaldamento per il comfort domestico: soluzioni efficienti e controllabili per ambienti contemporanei.",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Stufe: Comfort Termico con Soluzioni Evolute",
    introText: [
      "Le stufe moderne uniscono efficienza, sicurezza e gestione semplice. Proponiamo soluzioni pensate per offrire comfort costante e un'estetica coerente con lo stile della casa."
    ],
    detailTitle: "Tecnologia e Integrazione",
    detailText: [
      "Dalla scelta della potenza alla collocazione, fino alla gestione: affianchiamo ogni progetto con supporto tecnico e consulenza in showroom."
    ],
    subCategories: [
      {
        title: "Stufe ad Alta Efficienza",
        description: "Soluzioni progettate per massimizzare rendimento e comfort con consumi ottimizzati.",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Installazioni e Sicurezza",
        description: "Supporto su installazione, normative e integrazione con l'ambiente domestico.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Controllo e Comfort",
        description: "Gestione semplice e soluzioni per modulare il calore in base alle esigenze quotidiane.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Soluzioni efficienti e moderne",
      "Consulenza tecnica su potenza e collocazione",
      "Supporto su installazione e sicurezza",
      "Design integrabile in ogni stile",
      "Gestione semplice e comfort costante",
    ]
  },
  "ausili-bagno": {
    title: "Ausili Bagno",
    subtitle: "Comfort e Sicurezza in Ogni Dettaglio",
    description: "Ausili e accessori per il bagno in sicurezza: soluzioni pensate per comfort, autonomia e prevenzione, senza rinunciare a un'estetica curata.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Bagno in Sicurezza: Soluzioni Discrete e Funzionali",
    introText: [
      "Il bagno è uno degli ambienti più delicati della casa. Con ausili e accessori specifici è possibile aumentare sicurezza e comfort in modo semplice, discreto e coordinato con lo stile del progetto."
    ],
    detailTitle: "Soluzioni per Autonomia e Prevenzione",
    detailText: [
      "Proponiamo maniglioni, sedute e accessori tecnici selezionati per qualità e affidabilità, valutando insieme la configurazione migliore in base alle esigenze."
    ],
    subCategories: [
      {
        title: "Maniglioni e Supporti",
        description: "Supporti e maniglioni per aumentare la sicurezza durante i movimenti quotidiani.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Sedute e Accessori",
        description: "Sedute, accessori e soluzioni pratiche per comfort e autonomia.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&auto=format"
      },
      {
        title: "Consulenza in Showroom",
        description: "Supporto nella scelta e nella configurazione più adatta alle esigenze reali.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format"
      }
    ],
    features: [
      "Soluzioni bagno in sicurezza selezionate",
      "Integrazione discreta nel progetto d'interni",
      "Supporto su configurazioni e necessità specifiche",
      "Materiali affidabili e facili da pulire",
      "Consulenza dedicata in showroom",
    ]
  },
};

// Sub-pages for Arredamento
const arredamentoSubPages: Record<string, CategoryData> = {
  cucina: {
    title: "Cucina",
    subtitle: "Il Cuore della Casa",
    description: "Progettiamo cucine che combinano estetica e funzionalità, trasformando ogni preparazione in un piacere quotidiano.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Cucina dei Tuoi Sogni: Dove Design e Funzionalità si Incontrano",
    introText: [
      "La cucina rappresenta molto più di un semplice spazio dove preparare i pasti: è il cuore pulsante della casa, il luogo dove nascono ricordi indelebili, dove le famiglie si riuniscono e dove la creatività culinaria prende vita ogni giorno. In De Rosa Home comprendiamo profondamente questo significato e progettiamo cucine che non sono solo esteticamente appaganti, ma anche straordinariamente funzionali e durature nel tempo.",
      "Il nostro approccio alla progettazione delle cucine parte sempre dall'ascolto attento delle tue esigenze quotidiane. Come cucini? Quante persone utilizzano la cucina contemporaneamente? Hai bisogno di molto spazio per conservare gli alimenti? Preferisci un'isola centrale o una cucina a parete? Ogni dettaglio conta quando si tratta di creare lo spazio perfetto.",
      "Lavoriamo esclusivamente con i migliori brand italiani e internazionali, selezionando materiali di prima qualità che garantiscono resistenza all'usura, facilità di pulizia e bellezza che dura nel tempo. Dai piani di lavoro in quarzo composito alle ante in laminato di ultima generazione, ogni componente viene scelto per assicurare prestazioni eccellenti."
    ],
    detailTitle: "Perché Affidarsi a De Rosa Home per la Tua Cucina",
    detailText: [
      "Scegliere De Rosa Home per la progettazione della tua cucina significa affidarsi a professionisti con oltre 50 anni di esperienza nel settore. Il nostro team di progettisti utilizza software di ultima generazione per creare render 3D fotorealistici che ti permetteranno di vedere la tua cucina futura ancora prima che venga realizzata.",
      "Ogni progetto include una consulenza personalizzata gratuita, durante la quale analizziamo insieme lo spazio disponibile, le tue preferenze estetiche e le esigenze funzionali. Proponiamo soluzioni innovative come cassetti estraibili, illuminazione LED integrata, colonne dispensa organizzate e angoli attrezzati.",
      "Il nostro servizio non termina con la consegna: le nostre squadre di montatori certificati eseguono l'installazione con precisione millimetrica. E con la nostra garanzia estesa, potrai goderti la tua nuova cucina con la tranquillità di un'assistenza sempre disponibile."
    ],
    subCategories: [],
    features: [
      "Piani di lavoro in materiali pregiati (quarzo, dekton, laminato HPL)",
      "Elettrodomestici di ultima generazione delle migliori marche",
      "Soluzioni salvaspazio intelligenti e cassetti organizzati",
      "Illuminazione LED integrata con sensori di movimento",
      "Finiture personalizzabili in oltre 100 varianti colore",
    ]
  },
  living: {
    title: "Living",
    subtitle: "Spazi Aperti, Vita Fluida",
    description: "Progettiamo open space che integrano zona giorno, sala da pranzo e relax in un unico ambiente armonioso e contemporaneo.",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Il Living Contemporaneo: Dove la Vita Scorre Naturalmente",
    introText: [
      "Il concetto di living moderno supera i confini tradizionali delle stanze separate, creando spazi fluidi dove la vita domestica scorre naturalmente. L'open space che integra soggiorno, sala da pranzo e area relax è diventato la soluzione preferita da chi cerca un'abitazione contemporanea, luminosa e conviviale.",
      "Progettare un living richiede una visione d'insieme che consideri molteplici funzioni in un unico ambiente: l'area pranzo deve accogliere confortevolmente famiglia e ospiti, la zona relax deve offrire comfort e intimità. I nostri progettisti utilizzano elementi d'arredo per definire le diverse aree senza separarle.",
      "Proponiamo divani modulari che si adattano a qualsiasi configurazione, pareti attrezzate che integrano TV e librerie, tavoli da pranzo di design e complementi esclusivi. Sistemi di illuminazione zonale permettono di creare atmosfere diverse nelle varie aree del living."
    ],
    detailTitle: "L'Arte del Living con De Rosa Home",
    detailText: [
      "La progettazione di un living open space richiede esperienza e sensibilità che abbiamo maturato attraverso centinaia di progetti realizzati. Ogni living è unico, con le sue particolarità architettoniche e le esigenze specifiche di chi lo abiterà.",
      "Il nostro approccio integrato ci permette di progettare contemporaneamente tutte le zone del living, garantendo una coerenza estetica e funzionale che solo una visione unitaria può offrire. Scegliamo materiali e finiture che creano un dialogo armonioso tra le diverse aree.",
      "Grazie ai render 3D fotorealistici, potrai vedere il tuo living completo ancora prima che venga realizzato. Con il nostro servizio di montaggio coordinato, l'installazione avverrà in tempi rapidi e senza disagi."
    ],
    subCategories: [],
    features: [
      "Divani modulari di alta gamma con tessuti antimacchia",
      "Pareti attrezzate su misura con illuminazione integrata",
      "Tavoli da pranzo di design in materiali pregiati",
      "Illuminazione d'atmosfera dimmerabile e zonale",
      "Complementi d'arredo esclusivi e personalizzabili",
    ]
  },
  camera: {
    title: "Camera da Letto",
    subtitle: "Il Tuo Rifugio Personale",
    description: "Progettiamo camere da letto che invitano al riposo, con soluzioni che garantiscono comfort, armonia e benessere.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Camera da Letto: Il Santuario del Riposo e del Benessere",
    introText: [
      "La camera da letto è il luogo più intimo della casa, lo spazio dove il riposo e il benessere devono essere prioritari. È qui che inizia e si conclude ogni giornata, ed è fondamentale che questo ambiente sia progettato per favorire il relax totale e un sonno rigenerante.",
      "La scelta del letto rappresenta il cuore del progetto: proponiamo letti imbottiti con strutture ergonomiche, materassi di alta qualità e sistemi a doghe che garantiscono il massimo comfort. Ma la camera è molto più del solo letto: progettiamo armadi capienti e funzionali, cabine armadio organizzate, comodini e cassettiere.",
      "L'illuminazione gioca un ruolo fondamentale: proponiamo sistemi dimmerabili che permettono di passare da una luce brillante per le attività diurne a un'atmosfera soffusa per il relax serale. Ogni dettaglio viene studiato per creare un ambiente che favorisca il benessere psicofisico."
    ],
    detailTitle: "De Rosa Home: Esperti nella Zona Notte",
    detailText: [
      "La progettazione della zona notte richiede competenze specifiche che abbiamo sviluppato in oltre 50 anni di esperienza. Sappiamo che ogni persona ha esigenze diverse: chi preferisce armadi a ante battenti, chi scorrevoli; chi desidera una cabina armadio separata.",
      "Lavoriamo con i migliori produttori italiani di letti, armadi componibili e complementi per la zona notte. Proponiamo materiali di pregio come pelli naturali, tessuti tecnici antimacchia e legni pregiati.",
      "Il nostro servizio comprende anche la consulenza sul sistema letto: ti aiutiamo a scegliere il materasso più adatto considerando postura, eventuali problematiche e preferenze personali."
    ],
    subCategories: [],
    features: [
      "Letti imbottiti con contenitore e sistemi ergonomici",
      "Armadi scorrevoli su misura con illuminazione interna",
      "Cabine armadio completamente organizzate",
      "Comodini e cassettiere coordinate",
      "Tessuti e materiali premium di altissima qualità",
    ]
  },
  complementi: {
    title: "Complementi",
    subtitle: "Dettagli che Definiscono lo Stile",
    description: "Complementi d'arredo selezionati per completare ogni ambiente: superfici, materiali e dettagli che rendono il progetto davvero personale.",
    heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "Complementi d'Arredo: La Differenza Sta nei Dettagli",
    introText: [
      "Un progetto di interior non si chiude con i volumi principali: sono i complementi a rendere uno spazio coerente, accogliente e riconoscibile. Selezioniamo elementi che dialogano con materiali, colori e finiture, mantenendo uno stile essenziale e curato."
    ],
    detailTitle: "Coerenza, Materiali e Proporzioni",
    detailText: [
      "Ti aiutiamo a scegliere complementi e dettagli in modo equilibrato, evitando eccessi e mantenendo una linea estetica precisa su tutto l'ambiente."
    ],
    subCategories: [],
    features: [
      "Complementi coordinati con arredi e finiture",
      "Scelta guidata in showroom",
      "Soluzioni per living e zona notte",
      "Dettagli funzionali e decorativi",
      "Coerenza estetica del progetto",
    ]
  },
  lavanderia: {
    title: "Lavanderia",
    subtitle: "Organizzazione e Funzionalità",
    description: "Progettiamo lavanderie efficienti e organizzate, trasformando uno spazio spesso trascurato in un ambiente funzionale e ordinato.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop&auto=format",
    introTitle: "La Lavanderia Moderna: Organizzazione, Efficienza e Design",
    introText: [
      "La lavanderia è uno degli ambienti domestici più trascurati nella progettazione, eppure è uno spazio che utilizziamo quotidianamente e che merita la stessa attenzione riservata ad ogni altro ambiente della casa. In De Rosa Home progettiamo lavanderie funzionali, organizzate e anche belle da vedere, trasformando quello che spesso è un angolo caotico in un ambiente efficiente e ordinato.",
      "Una lavanderia ben progettata migliora sensibilmente la qualità della vita quotidiana: sapere dove riporre ogni cosa, avere spazio sufficiente per stendere, stirare e riporre la biancheria pulita, poter gestire il bucato in modo pratico e veloce sono vantaggi che si apprezzano ogni giorno. I nostri progetti ottimizzano ogni centimetro disponibile con soluzioni intelligenti.",
      "Proponiamo colonne porta-lavatrice e asciugatrice che sfruttano l'altezza della stanza, ripiani estraibili per la piegatura, asse da stiro a scomparsa integrata nel mobile, stendibiancheria nascosti e sistemi di organizzazione per i prodotti per il bucato. Tutto è pensato per rendere la routine della lavanderia più semplice e piacevole."
    ],
    detailTitle: "Soluzioni Intelligenti per la Tua Lavanderia",
    detailText: [
      "Le nostre lavanderie sono progettate con mobili su misura che si adattano perfettamente allo spazio disponibile, anche quando si tratta di angoli o nicchie di dimensioni ridotte. Utilizziamo materiali resistenti all'umidità e facili da pulire, con finiture che si coordinano con il resto dell'arredamento della casa.",
      "Ogni progetto include soluzioni di contenimento personalizzate: cassetti con divisori per i prodotti, ante con cesti integrati per la biancheria sporca suddivisa per colore, mensole regolabili e ganci per gli accessori. L'organizzazione è la chiave per una lavanderia che funziona davvero.",
      "Integriamo anche l'illuminazione funzionale con LED sottopensile per illuminare adeguatamente il piano di lavoro, e prese elettriche posizionate strategicamente per ferro da stiro e altri piccoli elettrodomestici. Nulla è lasciato al caso."
    ],
    subCategories: [],
    features: [
      "Colonne porta-lavatrice e asciugatrice salvaspazio",
      "Asse da stiro a scomparsa integrata nel mobile",
      "Sistemi di organizzazione per prodotti e biancheria",
      "Materiali resistenti all'umidità e facili da pulire",
      "Illuminazione LED funzionale sottopensile",
    ]
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const CategoriaPage = () => {
  const { categoria, sottocategoria } = useParams<{ categoria: string; sottocategoria?: string }>();
  const isArredoBagnoPage = categoria === "arredo-bagno" && !sottocategoria;
  
  let data: CategoryData | undefined;
  
  if (categoria === "arredamento" && sottocategoria) {
    data = arredamentoSubPages[sottocategoria];
  } else {
    data = categoriesData[categoria || "superfici"];
  }
  
  if (!data) {
    data = categoriesData.superfici;
  }

  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
        image={data.heroImage}
        primaryCta={{ text: "Richiedi Consulenza", href: "/contatti" }}
        secondaryCta={{ text: "Scopri lo Showroom", href: "/showroom" }}
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
              {isArredoBagnoPage && (
                <span className="mb-4 inline-flex rounded-full bg-tortora-light px-4 py-2 text-xs uppercase tracking-[0.25em] text-tortora-dark">
                  Il nostro focus principale
                </span>
              )}
              <h2 className="heading-2 text-foreground mb-6">
                {data.introTitle}
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                {data.introText.map((p, i) => (
                  <p key={i} className="leading-relaxed">{p}</p>
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

      {/* Sub-Categories */}
      {data.subCategories.length > 0 && (
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
                {isArredoBagnoPage ? "La Nostra Eccellenza" : "La Nostra Offerta"}
              </span>
              <h2 className="heading-2 text-foreground">
                {isArredoBagnoPage ? "Le Soluzioni Bagno Più Richieste" : "Cosa Troverai da De Rosa Home"}
              </h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {data.subCategories.map((sub) => (
                <motion.div key={sub.title} variants={itemVariants}>
                  {sub.href ? (
                    <Link to={sub.href} className="group block">
                      <SubCategoryCard {...sub} />
                    </Link>
                  ) : (
                    <SubCategoryCard {...sub} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Detail Section */}
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
                src={data.heroImage}
                alt={data.detailTitle}
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
              <h2 className="heading-2 text-foreground mb-6">
                {data.detailTitle}
              </h2>
              <div className="space-y-4 body-text text-muted-foreground">
                {data.detailText.map((p, i) => (
                  <p key={i} className="leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-foreground mb-4">
              I Nostri Punti di Forza
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 bg-secondary rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ArrowRight className="w-5 h-5 text-tortora-dark mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tortora-dark font-medium text-sm uppercase tracking-widest mb-4 block">
                Consulenza Gratuita
              </span>
              <h2 className="heading-2 text-foreground mb-4">
                Richiedi Informazioni su {data.title}
              </h2>
              <p className="body-text text-muted-foreground mb-6">
                Compila il form per ricevere una consulenza personalizzata e gratuita.
                I nostri esperti sono a tua disposizione per guidarti nella scelta
                delle soluzioni migliori per il tuo progetto.
              </p>
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

const SubCategoryCard = ({ title, description, image }: SubCategory) => (
  <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
    <div className="aspect-[3/2] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="heading-3 text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default CategoriaPage;
