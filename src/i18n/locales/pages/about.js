const sharedMedia = {
  journey: [
    { number: '01', image: '/images/about/sales-app-customer-overview.webp' },
    { number: '02', image: '/images/about/customer-app-home.webp' },
    { number: '03', image: '/images/about/mobile-analytics.webp' },
  ],
};

const aboutCatalog = {
  en: {
    hero: {
      eyebrow: 'About AXY',
      title: 'Built on the shop floor, not in a slide deck.',
      lead: 'AXY connects the work happening in stores with the relationships and product decisions that follow.',
      primaryAction: 'Get guided setup',
      secondaryAction: 'See how AXY works',
      figures: {
        visit: { alt: 'The private VIP room prepared for a customer visit', caption: 'The visit' },
        relationship: { alt: 'A retail specialist and customer considering jewellery together', caption: 'The relationship' },
        product: { alt: 'A jeweller fitting a handcrafted ring at a workbench', caption: 'The product' },
      },
    },
    journeySection: {
      eyebrow: 'The missing layer',
      title: 'Retail remembers. Most systems do not.',
      intro: 'Store teams learn what customers want, what they compare and what gets in the way. AXY keeps that context connected instead of letting it disappear at closing time.',
      journey: [
        { ...sharedMedia.journey[0], title: 'Capture', copy: 'Sales activity while it happens.', alt: 'AXY Sales App customer overview displayed on an iPhone' },
        { ...sharedMedia.journey[1], title: 'Continue', copy: 'Customer context after the visit.', alt: 'AXY Customer App home screen displayed on an iPhone' },
        { ...sharedMedia.journey[2], title: 'Understand', copy: 'Product and demand context for the next decision.', alt: 'AXY mobile analytics displayed on an iPhone' },
      ],
      quote: 'CRMs model pipelines. ERPs model stock. AXY connects the retail journey between them.',
    },
    principles: {
      eyebrow: 'How we build',
      title: 'Four practical rules.',
      intro: 'Less ceremony. More context that helps the next person do the right thing.',
      items: [
        ['Retailer relationship first', 'AXY strengthens the retailer’s customer relationship. It never competes with it.'],
        ['Permission-based collaboration', 'Sharing between partners is explicit, scoped and reversible.'],
        ['Practical workflows', 'If a workflow slows the sales floor, it does not ship.'],
        ['Structured context', 'Activity becomes useful when teams can act on it.'],
      ],
    },
    founder: {
      imageAlt: 'Jure Malalan, founder of AXY',
      imageCaption: 'Jure Malalan · Founder, AXY',
      eyebrow: 'Founder',
      title: 'First-hand retail experience, translated into software.',
      body: 'AXY is led by Jure Malalan. Years spent inside premium retail, service and brand relationships shaped a product built around the work teams actually do.',
      facts: [
        ['Company', 'XY Sales d.o.o.'],
        ['Based in', 'Zagreb, Croatia'],
        ['Product status', 'Live, Beta and Planned — stated clearly'],
      ],
    },
    cta: {
      eyebrow: 'Start with one workflow',
      title: 'See how AXY fits your retail network.',
      primaryAction: 'Get guided setup',
      secondaryAction: 'See how AXY works',
    },
  },
  it: {
    hero: {
      eyebrow: 'Chi è AXY',
      title: 'Nato in negozio, non in una presentazione.',
      lead: 'AXY collega il lavoro svolto in negozio con le relazioni e le decisioni di prodotto che ne derivano.',
      primaryAction: 'Configurazione guidata',
      secondaryAction: 'Scopri come funziona AXY',
      figures: {
        visit: { alt: 'La sala VIP privata preparata per la visita di un cliente', caption: 'La visita' },
        relationship: { alt: 'Una specialista retail e una cliente valutano insieme un gioiello', caption: 'La relazione' },
        product: { alt: 'Un artigiano orafo adatta un anello fatto a mano al banco di lavoro', caption: 'Il prodotto' },
      },
    },
    journeySection: {
      eyebrow: 'Il livello che mancava',
      title: 'Il retail ricorda. La maggior parte dei sistemi no.',
      intro: 'I team in negozio scoprono cosa desiderano i clienti, cosa confrontano e cosa ostacola la vendita. AXY mantiene collegato questo contesto, invece di lasciarlo scomparire a fine giornata.',
      journey: [
        { ...sharedMedia.journey[0], title: 'Acquisisci', copy: 'L’attività di vendita mentre accade.', alt: 'Panoramica cliente della AXY Sales App visualizzata su un iPhone' },
        { ...sharedMedia.journey[1], title: 'Continua', copy: 'Il contesto del cliente dopo la visita.', alt: 'Schermata iniziale della AXY Customer App visualizzata su un iPhone' },
        { ...sharedMedia.journey[2], title: 'Comprendi', copy: 'Contesto su prodotto e domanda per la decisione successiva.', alt: 'Analytics mobile di AXY visualizzati su un iPhone' },
      ],
      quote: 'I CRM modellano le pipeline. Gli ERP modellano le scorte. AXY collega il percorso retail tra i due.',
    },
    principles: {
      eyebrow: 'Come sviluppiamo',
      title: 'Quattro regole concrete.',
      intro: 'Meno formalità. Più contesto per aiutare chi interviene dopo a fare la cosa giusta.',
      items: [
        ['Prima la relazione del retailer', 'AXY rafforza la relazione del retailer con il cliente. Non entra mai in competizione con essa.'],
        ['Collaborazione basata sui permessi', 'La condivisione tra partner è esplicita, circoscritta e revocabile.'],
        ['Flussi di lavoro pratici', 'Se un flusso rallenta il lavoro in negozio, non viene rilasciato.'],
        ['Contesto strutturato', 'L’attività diventa utile quando i team possono agire su di essa.'],
      ],
    },
    founder: {
      imageAlt: 'Jure Malalan, fondatore di AXY',
      imageCaption: 'Jure Malalan · Fondatore, AXY',
      eyebrow: 'Fondatore',
      title: 'Esperienza diretta nel retail, trasformata in software.',
      body: 'AXY è guidata da Jure Malalan. Anni trascorsi nel retail premium, nei servizi e nelle relazioni con i brand hanno dato forma a un prodotto costruito attorno al lavoro reale dei team.',
      facts: [
        ['Società', 'XY Sales d.o.o.'],
        ['Sede', 'Zagabria, Croazia'],
        ['Stato del prodotto', 'Live, Beta e Planned — indicati con chiarezza'],
      ],
    },
    cta: {
      eyebrow: 'Inizia da un solo flusso',
      title: 'Scopri come AXY si integra nella tua rete retail.',
      primaryAction: 'Configurazione guidata',
      secondaryAction: 'Scopri come funziona AXY',
    },
  },
  de: {
    hero: {
      eyebrow: 'Über AXY',
      title: 'Auf der Verkaufsfläche entstanden, nicht in einer Präsentation.',
      lead: 'AXY verbindet die Arbeit im Geschäft mit den Beziehungen und Produktentscheidungen, die daraus entstehen.',
      primaryAction: 'Geführte Einrichtung',
      secondaryAction: 'So funktioniert AXY',
      figures: {
        visit: { alt: 'Der private VIP-Raum, vorbereitet für einen Kundenbesuch', caption: 'Der Besuch' },
        relationship: { alt: 'Eine Verkaufsberaterin und eine Kundin betrachten gemeinsam Schmuck', caption: 'Die Beziehung' },
        product: { alt: 'Ein Goldschmied passt einen handgefertigten Ring an der Werkbank an', caption: 'Das Produkt' },
      },
    },
    journeySection: {
      eyebrow: 'Die fehlende Ebene',
      title: 'Der Handel erinnert sich. Die meisten Systeme nicht.',
      intro: 'Store-Teams erfahren, was Kunden wünschen, vergleichen und was sie vom Kauf abhält. AXY hält diesen Kontext verbunden, statt ihn am Ende des Tages verschwinden zu lassen.',
      journey: [
        { ...sharedMedia.journey[0], title: 'Erfassen', copy: 'Verkaufsaktivitäten in dem Moment, in dem sie entstehen.', alt: 'AXY Sales App mit Kundenübersicht auf einem iPhone' },
        { ...sharedMedia.journey[1], title: 'Fortsetzen', copy: 'Kundenkontext nach dem Besuch.', alt: 'Startseite der AXY Customer App auf einem iPhone' },
        { ...sharedMedia.journey[2], title: 'Verstehen', copy: 'Produkt- und Nachfragekontext für die nächste Entscheidung.', alt: 'Mobile AXY-Analysen auf einem iPhone' },
      ],
      quote: 'CRM-Systeme bilden Pipelines ab. ERP-Systeme bilden Bestände ab. AXY verbindet die Handelsreise dazwischen.',
    },
    principles: {
      eyebrow: 'Wie wir entwickeln',
      title: 'Vier praktische Regeln.',
      intro: 'Weniger Formalitäten. Mehr Kontext, damit die nächste Person richtig handeln kann.',
      items: [
        ['Die Händlerbeziehung zuerst', 'AXY stärkt die Kundenbeziehung des Händlers. AXY tritt nie mit ihr in Wettbewerb.'],
        ['Zusammenarbeit auf Basis von Berechtigungen', 'Das Teilen zwischen Partnern ist ausdrücklich, klar begrenzt und widerrufbar.'],
        ['Praktische Workflows', 'Ein Workflow, der die Verkaufsfläche ausbremst, wird nicht veröffentlicht.'],
        ['Strukturierter Kontext', 'Aktivität wird dann wertvoll, wenn Teams daraus handeln können.'],
      ],
    },
    founder: {
      imageAlt: 'Jure Malalan, Gründer von AXY',
      imageCaption: 'Jure Malalan · Gründer, AXY',
      eyebrow: 'Gründer',
      title: 'Erfahrung aus erster Hand im Handel, übersetzt in Software.',
      body: 'AXY wird von Jure Malalan geleitet. Jahre im Premiumhandel, im Service und in Markenbeziehungen haben ein Produkt geprägt, das sich an der tatsächlichen Arbeit der Teams orientiert.',
      facts: [
        ['Unternehmen', 'XY Sales d.o.o.'],
        ['Sitz', 'Zagreb, Kroatien'],
        ['Produktstatus', 'Live, Beta und Planned — klar ausgewiesen'],
      ],
    },
    cta: {
      eyebrow: 'Mit einem Workflow starten',
      title: 'Entdecken Sie, wie AXY in Ihr Handelsnetzwerk passt.',
      primaryAction: 'Geführte Einrichtung',
      secondaryAction: 'So funktioniert AXY',
    },
  },
  fr: {
    hero: {
      eyebrow: 'À propos d’AXY',
      title: 'Conçu sur le terrain, pas dans une présentation.',
      lead: 'AXY relie le travail réalisé en magasin aux relations et aux décisions produit qui suivent.',
      primaryAction: 'Configuration guidée',
      secondaryAction: 'Découvrir le fonctionnement d’AXY',
      figures: {
        visit: { alt: 'Le salon VIP privé préparé pour la visite d’un client', caption: 'La visite' },
        relationship: { alt: 'Une conseillère retail et une cliente examinent ensemble un bijou', caption: 'La relation' },
        product: { alt: 'Un joaillier ajuste une bague artisanale à son établi', caption: 'Le produit' },
      },
    },
    journeySection: {
      eyebrow: 'La couche manquante',
      title: 'Le retail se souvient. La plupart des systèmes, non.',
      intro: 'Les équipes en magasin découvrent ce que veulent les clients, ce qu’ils comparent et ce qui freine leur décision. AXY conserve ce contexte au lieu de le laisser disparaître à la fermeture.',
      journey: [
        { ...sharedMedia.journey[0], title: 'Capturer', copy: 'L’activité commerciale au moment où elle se déroule.', alt: 'Vue client de la AXY Sales App affichée sur un iPhone' },
        { ...sharedMedia.journey[1], title: 'Poursuivre', copy: 'Le contexte client après la visite.', alt: 'Écran d’accueil de la AXY Customer App affiché sur un iPhone' },
        { ...sharedMedia.journey[2], title: 'Comprendre', copy: 'Le contexte produit et demande pour la prochaine décision.', alt: 'Analyses mobiles AXY affichées sur un iPhone' },
      ],
      quote: 'Les CRM modélisent les pipelines. Les ERP modélisent les stocks. AXY relie le parcours retail entre les deux.',
    },
    principles: {
      eyebrow: 'Notre façon de concevoir',
      title: 'Quatre règles concrètes.',
      intro: 'Moins de formalités. Plus de contexte pour aider la prochaine personne à prendre la bonne décision.',
      items: [
        ['La relation du détaillant avant tout', 'AXY renforce la relation du détaillant avec son client. La plateforme ne la concurrence jamais.'],
        ['Une collaboration fondée sur les autorisations', 'Le partage entre partenaires est explicite, limité et réversible.'],
        ['Des workflows pratiques', 'Un workflow qui ralentit les équipes en magasin n’est pas mis en production.'],
        ['Un contexte structuré', 'L’activité devient utile lorsque les équipes peuvent agir à partir d’elle.'],
      ],
    },
    founder: {
      imageAlt: 'Jure Malalan, fondateur d’AXY',
      imageCaption: 'Jure Malalan · Fondateur, AXY',
      eyebrow: 'Fondateur',
      title: 'Une expérience directe du retail, traduite en logiciel.',
      body: 'AXY est dirigée par Jure Malalan. Des années passées dans le retail premium, les services et les relations avec les marques ont façonné un produit construit autour du travail réel des équipes.',
      facts: [
        ['Société', 'XY Sales d.o.o.'],
        ['Siège', 'Zagreb, Croatie'],
        ['Statut du produit', 'Live, Beta et Planned — indiqués clairement'],
      ],
    },
    cta: {
      eyebrow: 'Commencez par un workflow',
      title: 'Découvrez comment AXY s’intègre à votre réseau retail.',
      primaryAction: 'Configuration guidée',
      secondaryAction: 'Découvrir le fonctionnement d’AXY',
    },
  },
};

export default aboutCatalog;
