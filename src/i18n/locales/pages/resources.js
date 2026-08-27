const questionRoutes = [
  '/use-cases/in-store-sales-capture',
  '/use-cases/product-demand-intelligence',
  '/use-cases/retailer-brand-collaboration',
  '/integrations',
];

const perspectiveRoutes = ['/for-retailers', '/for-brands'];

const resourcesCatalog = {
  en: {
    hero: {
      eyebrow: 'AXY resources',
      title: 'Practical guidance for the work behind better retail.',
      lead: 'Learn how to preserve customer and product context, follow up consistently, understand early interest signals and coordinate work across retailers and brands.',
      browse: 'Browse the resources',
      howItWorks: 'See how AXY works',
      imageAlt: 'Selected products arranged on a presentation table during a retail visit',
      imageCaption: 'Product context starts before the transaction.',
    },
    guide: {
      imageAlt: 'A retail specialist using a phone while presenting a product',
      imageCaption: 'Capture useful context during the work—not after it.',
      eyebrow: 'Featured guide',
      title: 'Retail clienteling: from the store visit to the next action.',
      lead: 'A practical introduction to customer context, in-store activity, product interest and follow-up—and the measures managers can review without turning the visit into administration.',
      takeaways: [
        'What clienteling adds beyond a CRM record',
        'What to capture during a store visit',
        'How to give every opportunity a clear next action',
        'Which adoption and opportunity signals managers can review',
      ],
      meta: 'Jure Malalan · Updated 14 July 2026 · 7 min read',
      action: 'Read the full clienteling guide',
    },
    questionsSection: {
      eyebrow: 'Explore by question',
      title: 'Choose the retail problem you are working on.',
      intro: 'Start with the question closest to your current workflow. Each path explains the problem, the AXY approach and the information involved.',
      items: [
        { number: '01', title: 'How do we capture product interest without slowing the sales team?', copy: 'Explore a practical workflow for recording products shown, customer responses and the next action during normal store work.', href: questionRoutes[0], link: 'Explore in-store sales capture' },
        { number: '02', title: 'How do we understand what customers wanted but did not buy?', copy: 'See how captured presentations, comparisons, wishlists and unavailable requests can add context to stock and product decisions.', href: questionRoutes[1], link: 'Explore product demand intelligence' },
        { number: '03', title: 'How can retailers and brands coordinate without exposing private data?', copy: 'Review the permission-controlled workflows that connect catalogue, availability, orders and after-sales activity.', href: questionRoutes[2], link: 'Explore retailer–brand collaboration' },
        { number: '04', title: 'How does AXY fit around the systems we already use?', copy: 'Learn how ERP, CRM, PIM, POS and commerce systems can connect through one shared integration layer.', href: questionRoutes[3], link: 'Explore AXY integrations' },
      ],
    },
    perspectives: {
      eyebrow: 'Choose your perspective',
      title: 'Start from your side of the retail network.',
      action: 'Explore this perspective',
      items: [
        { label: 'For retailers', title: 'Keep store activity, follow-up and stock context connected.', copy: 'See how AXY supports sales teams, managers and multi-location retail operations.', href: perspectiveRoutes[0] },
        { label: 'For brands and manufacturers', title: 'Understand approved store activity and support connected retailers.', copy: 'See how product information, availability and market signals move through the network.', href: perspectiveRoutes[1] },
      ],
    },
    cta: {
      eyebrow: 'See the workflow',
      title: 'Want to see the work in context?',
      body: 'Explore the connected AXY surfaces or book a walkthrough focused on your stores, products and systems.',
      platform: 'Explore the platform',
      walkthrough: 'Book a walkthrough',
    },
  },
  it: {
    hero: {
      eyebrow: 'Risorse AXY',
      title: 'Indicazioni concrete per il lavoro che rende migliore il retail.',
      lead: 'Scopri come preservare il contesto di clienti e prodotti, dare continuità ai follow-up, comprendere i primi segnali di interesse e coordinare il lavoro tra retailer e brand.',
      browse: 'Esplora le risorse',
      howItWorks: 'Scopri come funziona AXY',
      imageAlt: 'Prodotti selezionati disposti su un tavolo di presentazione durante una visita in negozio',
      imageCaption: 'Il contesto del prodotto nasce prima della transazione.',
    },
    guide: {
      imageAlt: 'Una specialista retail usa il telefono mentre presenta un prodotto',
      imageCaption: 'Acquisisci il contesto utile durante il lavoro, non dopo.',
      eyebrow: 'Guida in evidenza',
      title: 'Clienteling nel retail: dalla visita in negozio all’azione successiva.',
      lead: 'Un’introduzione pratica al contesto del cliente, all’attività in negozio, all’interesse per i prodotti e al follow-up, con le misure che i manager possono valutare senza trasformare la visita in burocrazia.',
      takeaways: [
        'Cosa aggiunge il clienteling rispetto a una scheda CRM',
        'Cosa acquisire durante una visita in negozio',
        'Come assegnare a ogni opportunità un’azione successiva chiara',
        'Quali segnali di adozione e opportunità possono valutare i manager',
      ],
      meta: 'Jure Malalan · Aggiornato il 14 luglio 2026 · 7 min di lettura',
      action: 'Leggi la guida completa al clienteling',
    },
    questionsSection: {
      eyebrow: 'Esplora per domanda',
      title: 'Scegli il problema retail su cui stai lavorando.',
      intro: 'Parti dalla domanda più vicina al tuo flusso attuale. Ogni percorso spiega il problema, l’approccio AXY e le informazioni coinvolte.',
      items: [
        { number: '01', title: 'Come possiamo acquisire l’interesse per un prodotto senza rallentare il team di vendita?', copy: 'Scopri un flusso pratico per registrare i prodotti mostrati, le reazioni dei clienti e l’azione successiva durante il normale lavoro in negozio.', href: questionRoutes[0], link: 'Esplora l’acquisizione dell’attività di vendita in negozio' },
        { number: '02', title: 'Come possiamo capire cosa desideravano i clienti ma non hanno acquistato?', copy: 'Scopri come presentazioni, confronti, wishlist e richieste non disponibili possono aggiungere contesto alle decisioni su scorte e prodotti.', href: questionRoutes[1], link: 'Esplora l’intelligence sulla domanda di prodotto' },
        { number: '03', title: 'Come possono coordinarsi retailer e brand senza esporre dati privati?', copy: 'Esamina i flussi controllati da permessi che collegano cataloghi, disponibilità, ordini e attività post-vendita.', href: questionRoutes[2], link: 'Esplora la collaborazione retailer–brand' },
        { number: '04', title: 'Come si integra AXY con i sistemi che utilizziamo già?', copy: 'Scopri come ERP, CRM, PIM, POS e piattaforme commerce possono collegarsi attraverso un unico livello di integrazione condiviso.', href: questionRoutes[3], link: 'Esplora le integrazioni AXY' },
      ],
    },
    perspectives: {
      eyebrow: 'Scegli il tuo punto di vista',
      title: 'Parti dal tuo ruolo nella rete retail.',
      action: 'Esplora questa prospettiva',
      items: [
        { label: 'Per i retailer', title: 'Mantieni collegate attività in negozio, follow-up e contesto delle scorte.', copy: 'Scopri come AXY supporta team di vendita, manager e attività retail con più sedi.', href: perspectiveRoutes[0] },
        { label: 'Per brand e produttori', title: 'Comprendi l’attività approvata in negozio e supporta i retailer connessi.', copy: 'Scopri come informazioni di prodotto, disponibilità e segnali di mercato attraversano la rete.', href: perspectiveRoutes[1] },
      ],
    },
    cta: {
      eyebrow: 'Guarda il flusso',
      title: 'Vuoi vedere il lavoro nel suo contesto?',
      body: 'Esplora le superfici AXY connesse o prenota una demo guidata dedicata ai tuoi negozi, prodotti e sistemi.',
      platform: 'Esplora la piattaforma',
      walkthrough: 'Prenota una demo guidata',
    },
  },
  de: {
    hero: {
      eyebrow: 'AXY Ressourcen',
      title: 'Praxiswissen für die Arbeit hinter erfolgreichem Handel.',
      lead: 'Erfahren Sie, wie Kunden- und Produktkontext erhalten bleibt, Follow-ups verlässlich stattfinden, frühe Interessenssignale verständlich werden und Händler sowie Marken ihre Arbeit koordinieren.',
      browse: 'Ressourcen entdecken',
      howItWorks: 'So funktioniert AXY',
      imageAlt: 'Ausgewählte Produkte auf einem Präsentationstisch während eines Beratungsgesprächs',
      imageCaption: 'Produktkontext entsteht schon vor der Transaktion.',
    },
    guide: {
      imageAlt: 'Eine Verkaufsberaterin nutzt ein Smartphone, während sie ein Produkt präsentiert',
      imageCaption: 'Nützlichen Kontext während der Arbeit erfassen, nicht erst danach.',
      eyebrow: 'Empfohlener Leitfaden',
      title: 'Clienteling im Einzelhandel: vom Store-Besuch zur nächsten Aktion.',
      lead: 'Eine praxisnahe Einführung in Kundenkontext, Aktivitäten im Geschäft, Produktinteresse und Follow-up – einschließlich der Kennzahlen, die Führungskräfte prüfen können, ohne den Besuch in Verwaltungsarbeit zu verwandeln.',
      takeaways: [
        'Was Clienteling über einen CRM-Eintrag hinaus ergänzt',
        'Was während eines Store-Besuchs erfasst werden sollte',
        'Wie jede Verkaufschance eine klare nächste Aktion erhält',
        'Welche Akzeptanz- und Chancensignale Führungskräfte prüfen können',
      ],
      meta: 'Jure Malalan · Aktualisiert am 14. Juli 2026 · 7 Min. Lesezeit',
      action: 'Vollständigen Clienteling-Leitfaden lesen',
    },
    questionsSection: {
      eyebrow: 'Nach Fragestellung entdecken',
      title: 'Wählen Sie die Herausforderung, an der Sie gerade arbeiten.',
      intro: 'Beginnen Sie mit der Frage, die Ihrem aktuellen Workflow am nächsten kommt. Jeder Pfad erklärt die Herausforderung, den AXY-Ansatz und die beteiligten Informationen.',
      items: [
        { number: '01', title: 'Wie erfassen wir Produktinteresse, ohne das Verkaufsteam auszubremsen?', copy: 'Entdecken Sie einen praktischen Workflow, um gezeigte Produkte, Kundenreaktionen und die nächste Aktion während der täglichen Arbeit zu erfassen.', href: questionRoutes[0], link: 'Verkaufsaktivitäten im Geschäft entdecken' },
        { number: '02', title: 'Wie erkennen wir, was Kunden wollten, aber nicht gekauft haben?', copy: 'Erfahren Sie, wie Präsentationen, Vergleiche, Wunschlisten und nicht verfügbare Anfragen Bestands- und Produktentscheidungen mit Kontext ergänzen.', href: questionRoutes[1], link: 'Analyse der Produktnachfrage entdecken' },
        { number: '03', title: 'Wie können Händler und Marken zusammenarbeiten, ohne private Daten offenzulegen?', copy: 'Sehen Sie sich berechtigungsgesteuerte Workflows an, die Katalog, Verfügbarkeit, Bestellungen und After-Sales-Aktivitäten verbinden.', href: questionRoutes[2], link: 'Zusammenarbeit von Händler und Marke entdecken' },
        { number: '04', title: 'Wie fügt sich AXY in unsere vorhandenen Systeme ein?', copy: 'Erfahren Sie, wie ERP-, CRM-, PIM-, POS- und Commerce-Systeme über eine gemeinsame Integrationsschicht verbunden werden.', href: questionRoutes[3], link: 'AXY Integrationen entdecken' },
      ],
    },
    perspectives: {
      eyebrow: 'Perspektive wählen',
      title: 'Beginnen Sie auf Ihrer Seite des Handelsnetzwerks.',
      action: 'Diese Perspektive entdecken',
      items: [
        { label: 'Für Händler', title: 'Store-Aktivitäten, Follow-up und Bestandskontext verbunden halten.', copy: 'Erfahren Sie, wie AXY Verkaufsteams, Führungskräfte und Handelsbetriebe mit mehreren Standorten unterstützt.', href: perspectiveRoutes[0] },
        { label: 'Für Marken und Hersteller', title: 'Freigegebene Store-Aktivitäten verstehen und verbundene Händler unterstützen.', copy: 'Erfahren Sie, wie Produktinformationen, Verfügbarkeit und Marktsignale durch das Netzwerk fließen.', href: perspectiveRoutes[1] },
      ],
    },
    cta: {
      eyebrow: 'Workflow ansehen',
      title: 'Möchten Sie die Arbeit im Zusammenhang sehen?',
      body: 'Entdecken Sie die verbundenen AXY-Oberflächen oder buchen Sie eine geführte Demo zu Ihren Stores, Produkten und Systemen.',
      platform: 'Plattform entdecken',
      walkthrough: 'Geführte Demo buchen',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Ressources AXY',
      title: 'Des conseils pratiques pour le travail qui améliore le retail.',
      lead: 'Découvrez comment préserver le contexte client et produit, assurer un suivi régulier, comprendre les premiers signaux d’intérêt et coordonner le travail entre détaillants et marques.',
      browse: 'Parcourir les ressources',
      howItWorks: 'Découvrir le fonctionnement d’AXY',
      imageAlt: 'Produits sélectionnés disposés sur une table de présentation pendant une visite en magasin',
      imageCaption: 'Le contexte produit commence avant la transaction.',
    },
    guide: {
      imageAlt: 'Une conseillère retail utilise un téléphone tout en présentant un produit',
      imageCaption: 'Capturez le contexte utile pendant le travail, pas après.',
      eyebrow: 'Guide à la une',
      title: 'Clienteling dans le retail : de la visite en magasin à la prochaine action.',
      lead: 'Une introduction pratique au contexte client, à l’activité en magasin, à l’intérêt produit et au suivi, ainsi qu’aux indicateurs que les responsables peuvent examiner sans transformer la visite en tâche administrative.',
      takeaways: [
        'Ce que le clienteling apporte au-delà d’une fiche CRM',
        'Ce qu’il faut saisir pendant une visite en magasin',
        'Comment associer une prochaine action claire à chaque opportunité',
        'Quels signaux d’adoption et d’opportunité les responsables peuvent examiner',
      ],
      meta: 'Jure Malalan · Mis à jour le 14 juillet 2026 · 7 min de lecture',
      action: 'Lire le guide complet sur le clienteling',
    },
    questionsSection: {
      eyebrow: 'Explorer par question',
      title: 'Choisissez le problème retail sur lequel vous travaillez.',
      intro: 'Commencez par la question la plus proche de votre workflow actuel. Chaque parcours explique le problème, l’approche AXY et les informations concernées.',
      items: [
        { number: '01', title: 'Comment saisir l’intérêt produit sans ralentir l’équipe de vente ?', copy: 'Découvrez un workflow pratique pour enregistrer les produits présentés, les réactions des clients et la prochaine action pendant le travail quotidien en magasin.', href: questionRoutes[0], link: 'Explorer la saisie de l’activité commerciale en magasin' },
        { number: '02', title: 'Comment comprendre ce que les clients souhaitaient sans l’acheter ?', copy: 'Découvrez comment les présentations, comparaisons, listes d’envies et demandes indisponibles enrichissent les décisions de stock et de produit.', href: questionRoutes[1], link: 'Explorer l’analyse de la demande produit' },
        { number: '03', title: 'Comment détaillants et marques peuvent-ils se coordonner sans exposer de données privées ?', copy: 'Examinez les workflows contrôlés par autorisations qui relient catalogue, disponibilité, commandes et activité après-vente.', href: questionRoutes[2], link: 'Explorer la collaboration détaillants–marques' },
        { number: '04', title: 'Comment AXY s’intègre-t-il aux systèmes que nous utilisons déjà ?', copy: 'Découvrez comment les systèmes ERP, CRM, PIM, POS et de commerce peuvent se connecter via une couche d’intégration partagée.', href: questionRoutes[3], link: 'Explorer les intégrations AXY' },
      ],
    },
    perspectives: {
      eyebrow: 'Choisissez votre perspective',
      title: 'Partez de votre position dans le réseau retail.',
      action: 'Explorer cette perspective',
      items: [
        { label: 'Pour les détaillants', title: 'Reliez l’activité en magasin, le suivi et le contexte des stocks.', copy: 'Découvrez comment AXY accompagne les équipes de vente, les responsables et les opérations retail multisites.', href: perspectiveRoutes[0] },
        { label: 'Pour les marques et les fabricants', title: 'Comprenez l’activité approuvée en magasin et accompagnez les détaillants connectés.', copy: 'Découvrez comment les informations produit, la disponibilité et les signaux du marché circulent dans le réseau.', href: perspectiveRoutes[1] },
      ],
    },
    cta: {
      eyebrow: 'Voir le workflow',
      title: 'Vous souhaitez voir le travail dans son contexte ?',
      body: 'Explorez les interfaces AXY connectées ou réservez une démonstration centrée sur vos magasins, vos produits et vos systèmes.',
      platform: 'Explorer la plateforme',
      walkthrough: 'Réserver une démonstration',
    },
  },
};

export default resourcesCatalog;
