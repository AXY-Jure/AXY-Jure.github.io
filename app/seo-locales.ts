import {
  DEFAULT_LOCALE as RUNTIME_DEFAULT_LOCALE,
  SUPPORTED_LOCALES as RUNTIME_SUPPORTED_LOCALES,
} from "../src/i18n/config.js";

export type Locale = "en" | "it" | "de" | "fr";

export const SUPPORTED_LOCALES = RUNTIME_SUPPORTED_LOCALES as readonly Locale[];

export const DEFAULT_LOCALE = RUNTIME_DEFAULT_LOCALE as Locale;

export type PageMeta = {
  title: string;
  description: string;
  index?: boolean;
};

type LocalizedPageMeta = Pick<PageMeta, "title" | "description">;

export const ENGLISH_PAGE_META = {
  "/": {
    title: "Turn Every Store Interaction into Sales Intelligence",
    description: "AXY connects the retail ecosystem so in-store interactions become useful context for sales teams, customers, retailers and brands.",
  },
  "/product": {
    title: "Retail Collaboration Platform",
    description: "Explore the AXY platform: Sales App, Back Office, Customer App and shared retail collaboration workflows.",
  },
  "/sales-app": {
    title: "Sales App for Connected Retail",
    description: "Capture products shown, customer interest, next actions and follow-up in one connected sales workflow.",
  },
  "/back-office": {
    title: "Retail Back Office",
    description: "Manage products, customers, operations, permissions and insights across the AXY retail ecosystem.",
  },
  "/customer-experience": {
    title: "Connected Customer Experience",
    description: "Continue the customer journey after a store visit with products, wishlists, offers, warranty and service context.",
  },
  "/integrations": {
    title: "Retail Systems Integration Layer",
    description: "Connect ERP, CRM, POS, PIM, commerce and partner systems through AXY’s standardised API and shared retail data model.",
  },
  "/how-it-works": {
    title: "How AXY Works",
    description: "See how AXY captures retail activity, connects context, supports action and turns approved signals into useful intelligence.",
  },
  "/for-retailers": {
    title: "AXY for Retailers",
    description: "Help sales teams capture every visit, continue customer conversations and understand demand across stores.",
  },
  "/for-brands": {
    title: "AXY for Brands and Manufacturers",
    description: "Connect approved in-store activity with product, stock and sell-through data to support retailers and make clearer availability decisions.",
  },
  "/use-cases/retail-clienteling": {
    title: "Retail Clienteling",
    description: "Turn remembered customer context into a consistent clienteling workflow before, during and after each store visit.",
  },
  "/use-cases/in-store-sales-capture": {
    title: "In-Store Sales Capture",
    description: "Capture product presentations and customer intent before the transaction so valuable retail signals do not disappear.",
  },
  "/use-cases/product-demand-intelligence": {
    title: "Product Demand Intelligence",
    description: "Use permissioned product interest signals to understand demand ahead of sales and support better stock decisions.",
  },
  "/use-cases/retailer-brand-collaboration": {
    title: "Retailer and Brand Collaboration",
    description: "Connect shared catalogue, ordering, announcement, training, warranty and retail collaboration workflows.",
  },
  "/pricing": {
    title: "AXY Pricing",
    description: "Configure AXY pricing by users, business units, locations and optional modules, then send an inquiry for the exact selected beta setup.",
  },
  "/resources": {
    title: "Retail Clienteling Resources",
    description: "Read AXY’s practical clienteling guide and explore sales capture, product demand, collaboration and connected-system workflows.",
  },
  "/article": {
    title: "What Is Retail Clienteling? CRM, Store Visits and Follow-Up Explained",
    description: "A practical guide to retail clienteling, including CRM context, in-store activity, follow-up and the measurements that matter.",
  },
  "/about": {
    title: "About AXY",
    description: "Learn why AXY was created and how it connects retailers, brands, products, sales teams and customers.",
  },
  "/book-a-walkthrough": {
    title: "Book an AXY Walkthrough",
    description: "Request a guided AXY walkthrough focused on your stores, brands, workflows, integrations and first activation step.",
  },
  "/meeting-booked": {
    title: "AXY Walkthrough Booked",
    description: "Your tailored AXY walkthrough has been scheduled successfully.",
    index: false,
  },
  "/contact": {
    title: "Contact AXY",
    description: "Contact AXY about product questions, pricing, partnerships, integrations or the next step for your retail business.",
  },
  "/help": {
    title: "AXY Help Centre",
    description: "Choose an AXY Product Support topic, send a secure request, or contact the AXY Support Team by email.",
  },
  "/request-access": {
    title: "Request Beta Access | AXY",
    description: "Request AXY beta access for your retail, brand or partner team and hear from us about fit, timing and guided onboarding.",
  },
  "/create-account": {
    title: "Request AXY Beta Access",
    description: "Request access to the AXY closed beta for your company.",
    index: false,
  },
  "/login": {
    title: "Log In to AXY",
    description: "Access your AXY environment.",
    index: false,
  },
  "/legal": {
    title: "AXY Privacy Policy and Terms & Conditions",
    description: "AXY Privacy Policy and Terms & Conditions for the AXY platform and applications.",
    index: false,
  },
} as const satisfies Record<string, PageMeta>;

export type PagePath = keyof typeof ENGLISH_PAGE_META;

const ITALIAN_PAGE_META = {
  "/": {
    title: "Trasforma ogni interazione in negozio in intelligence commerciale",
    description: "AXY connette l’ecosistema retail e trasforma le interazioni in negozio in un contesto utile per team di vendita, clienti, retailer e brand.",
  },
  "/product": {
    title: "Piattaforma di collaborazione retail",
    description: "Scopri la piattaforma AXY: Sales App, Back Office, Customer App e flussi condivisi per la collaborazione nel retail.",
  },
  "/sales-app": {
    title: "Sales App per un retail connesso",
    description: "Registra i prodotti presentati, l’interesse dei clienti, le prossime azioni e i follow-up in un unico flusso di vendita connesso.",
  },
  "/back-office": {
    title: "Back Office per il retail",
    description: "Gestisci prodotti, clienti, operazioni, autorizzazioni e insight in tutto l’ecosistema retail AXY.",
  },
  "/customer-experience": {
    title: "Customer App per un’esperienza connessa",
    description: "Prosegui il percorso del cliente dopo la visita in negozio con prodotti, wishlist, offerte, garanzie e assistenza sempre nel giusto contesto.",
  },
  "/integrations": {
    title: "Livello di integrazione per i sistemi retail",
    description: "Connetti ERP, CRM, POS, PIM, e-commerce e sistemi dei partner tramite l’API standardizzata e il modello dati retail condiviso di AXY.",
  },
  "/how-it-works": {
    title: "Come funziona AXY",
    description: "Scopri come AXY registra l’attività retail, connette il contesto, supporta le azioni e trasforma i segnali autorizzati in intelligence utile.",
  },
  "/for-retailers": {
    title: "AXY per i retailer",
    description: "Aiuta i team di vendita a registrare ogni visita, proseguire le conversazioni con i clienti e comprendere la domanda tra i diversi negozi.",
  },
  "/for-brands": {
    title: "AXY per brand e produttori",
    description: "Collega l’attività autorizzata in negozio ai dati di prodotto, stock e sell-through per supportare i retailer e decidere meglio sulla disponibilità.",
  },
  "/use-cases/retail-clienteling": {
    title: "Clienteling nel retail",
    description: "Trasforma il contesto ricordato sul cliente in un flusso di clienteling coerente prima, durante e dopo ogni visita in negozio.",
  },
  "/use-cases/in-store-sales-capture": {
    title: "Acquisizione dell’attività di vendita in negozio",
    description: "Registra le presentazioni dei prodotti e l’interesse del cliente prima della transazione, senza perdere segnali retail preziosi.",
  },
  "/use-cases/product-demand-intelligence": {
    title: "Intelligence sulla domanda di prodotto",
    description: "Usa i segnali autorizzati di interesse sui prodotti per anticipare la domanda e prendere decisioni di stock più informate.",
  },
  "/use-cases/retailer-brand-collaboration": {
    title: "Collaborazione tra retailer e brand",
    description: "Connetti cataloghi condivisi, ordini, annunci, formazione, garanzie e flussi di collaborazione nel retail.",
  },
  "/pricing": {
    title: "Prezzi AXY",
    description: "Configura i prezzi AXY per utenti, unità operative, sedi e moduli opzionali, poi invia una richiesta per l’esatto assetto beta selezionato.",
  },
  "/resources": {
    title: "Risorse sul clienteling nel retail",
    description: "Leggi la guida pratica di AXY al clienteling ed esplora vendita, domanda di prodotto, collaborazione e flussi tra sistemi connessi.",
  },
  "/article": {
    title: "Cos’è il retail clienteling? CRM, visite in negozio e follow-up",
    description: "Una guida pratica al retail clienteling: contesto CRM, attività in negozio, follow-up e metriche davvero rilevanti.",
  },
  "/about": {
    title: "Chi è AXY",
    description: "Scopri perché è nata AXY e come connette retailer, brand, prodotti, team di vendita e clienti.",
  },
  "/book-a-walkthrough": {
    title: "Prenota una demo guidata di AXY",
    description: "Richiedi una demo guidata di AXY dedicata a negozi, brand, flussi di lavoro, integrazioni e primo passo di attivazione.",
  },
  "/meeting-booked": {
    title: "Demo AXY prenotata",
    description: "La tua demo personalizzata di AXY è stata programmata correttamente.",
  },
  "/contact": {
    title: "Contatta AXY",
    description: "Contatta AXY per domande sul prodotto, prezzi, partnership, integrazioni o per definire il prossimo passo della tua attività retail.",
  },
  "/help": {
    title: "Centro assistenza AXY",
    description: "Scegli un argomento di supporto AXY, invia una richiesta sicura oppure contatta via e-mail il team di assistenza AXY.",
  },
  "/request-access": {
    title: "Richiedi l’accesso alla beta | AXY",
    description: "Richiedi l’accesso alla beta AXY per il tuo team retail, brand o partner e scopri compatibilità, tempistiche e onboarding guidato.",
  },
  "/create-account": {
    title: "Richiedi l’accesso alla beta AXY",
    description: "Richiedi l’accesso alla beta chiusa AXY per la tua azienda.",
  },
  "/login": {
    title: "Accedi ad AXY",
    description: "Accedi al tuo ambiente AXY.",
  },
  "/legal": {
    title: "Privacy e termini e condizioni di AXY",
    description: "Informativa sulla privacy e Termini e condizioni per la piattaforma e le applicazioni AXY.",
  },
} as const satisfies Record<PagePath, LocalizedPageMeta>;

const GERMAN_PAGE_META = {
  "/": {
    title: "Jede Interaktion im Geschäft in Vertriebsintelligenz verwandeln",
    description: "AXY verbindet das Handelsökosystem und macht Interaktionen im Geschäft zu wertvollem Kontext für Verkaufsteams, Kunden, Händler und Marken.",
  },
  "/product": {
    title: "Plattform für Zusammenarbeit im Einzelhandel",
    description: "Entdecken Sie die AXY Plattform: Sales App, Back Office, Customer App und gemeinsame Abläufe für die Zusammenarbeit im Handel.",
  },
  "/sales-app": {
    title: "Sales App für vernetzten Handel",
    description: "Erfassen Sie präsentierte Produkte, Kundeninteresse, nächste Schritte und Follow-ups in einem vernetzten Verkaufsprozess.",
  },
  "/back-office": {
    title: "Back Office für den Einzelhandel",
    description: "Verwalten Sie Produkte, Kunden, Abläufe, Berechtigungen und Analysen im gesamten AXY Handelsökosystem.",
  },
  "/customer-experience": {
    title: "Customer App für ein vernetztes Kundenerlebnis",
    description: "Führen Sie die Customer Journey nach dem Ladenbesuch mit Produkten, Wunschlisten, Angeboten, Garantie- und Servicekontext weiter.",
  },
  "/integrations": {
    title: "Integrationsschicht für Handelssysteme",
    description: "Verbinden Sie ERP, CRM, POS, PIM, Commerce- und Partnersysteme über die standardisierte API und das gemeinsame Handelsdatenmodell von AXY.",
  },
  "/how-it-works": {
    title: "So funktioniert AXY",
    description: "Erfahren Sie, wie AXY Handelsaktivitäten erfasst, Kontext verbindet, Aktionen unterstützt und freigegebene Signale in nutzbare Erkenntnisse verwandelt.",
  },
  "/for-retailers": {
    title: "AXY für Händler",
    description: "Unterstützen Sie Verkaufsteams dabei, jeden Besuch zu erfassen, Kundengespräche fortzuführen und die Nachfrage über Filialen hinweg zu verstehen.",
  },
  "/for-brands": {
    title: "AXY für Marken und Hersteller",
    description: "Verbinden Sie freigegebene Aktivitäten im Geschäft mit Produkt-, Bestands- und Sell-through-Daten für bessere Verfügbarkeitsentscheidungen.",
  },
  "/use-cases/retail-clienteling": {
    title: "Clienteling im Einzelhandel",
    description: "Machen Sie vorhandenen Kundenkontext zu einem konsistenten Clienteling-Prozess vor, während und nach jedem Ladenbesuch.",
  },
  "/use-cases/in-store-sales-capture": {
    title: "Erfassung von Verkaufsaktivitäten im Geschäft",
    description: "Erfassen Sie Produktpräsentationen und Kundeninteresse vor der Transaktion, damit wertvolle Handelssignale erhalten bleiben.",
  },
  "/use-cases/product-demand-intelligence": {
    title: "Analyse der Produktnachfrage",
    description: "Nutzen Sie freigegebene Signale zum Produktinteresse, um Nachfrage früher zu erkennen und bessere Bestandsentscheidungen zu treffen.",
  },
  "/use-cases/retailer-brand-collaboration": {
    title: "Zusammenarbeit zwischen Händlern und Marken",
    description: "Verbinden Sie gemeinsame Katalog-, Bestell-, Ankündigungs-, Schulungs-, Garantie- und Handelsprozesse.",
  },
  "/pricing": {
    title: "AXY Preise",
    description: "Konfigurieren Sie AXY nach Nutzern, Geschäftseinheiten, Standorten und Modulen und senden Sie eine Anfrage für das ausgewählte Beta-Setup.",
  },
  "/resources": {
    title: "Ressourcen für Clienteling im Einzelhandel",
    description: "Lesen Sie den praktischen AXY Leitfaden und entdecken Sie die Erfassung von Verkaufsaktivitäten im Geschäft, Produktnachfrage, Zusammenarbeit und vernetzte Systemabläufe.",
  },
  "/article": {
    title: "Was ist Retail Clienteling? CRM, Ladenbesuche und Follow-up erklärt",
    description: "Ein praktischer Leitfaden zu Retail Clienteling, CRM-Kontext, Aktivitäten im Geschäft, Follow-up und aussagekräftigen Kennzahlen.",
  },
  "/about": {
    title: "Über AXY",
    description: "Erfahren Sie, warum AXY entwickelt wurde und wie es Händler, Marken, Produkte, Verkaufsteams und Kunden verbindet.",
  },
  "/book-a-walkthrough": {
    title: "AXY Demo buchen",
    description: "Fordern Sie eine geführte AXY Demo zu Ihren Filialen, Marken, Abläufen, Integrationen und dem ersten Aktivierungsschritt an.",
  },
  "/meeting-booked": {
    title: "AXY Demo gebucht",
    description: "Ihre individuelle AXY Demo wurde erfolgreich terminiert.",
  },
  "/contact": {
    title: "AXY kontaktieren",
    description: "Kontaktieren Sie AXY zu Produktfragen, Preisen, Partnerschaften, Integrationen oder dem nächsten Schritt für Ihr Handelsunternehmen.",
  },
  "/help": {
    title: "AXY Hilfe-Center",
    description: "Wählen Sie ein AXY Supportthema, senden Sie eine sichere Anfrage oder kontaktieren Sie das AXY Support-Team per E-Mail.",
  },
  "/request-access": {
    title: "Beta-Zugang anfragen | AXY",
    description: "Fragen Sie AXY Beta-Zugang für Ihr Handels-, Marken- oder Partnerteam an und erfahren Sie mehr zu Eignung, Zeitplan und Onboarding.",
  },
  "/create-account": {
    title: "AXY Beta-Zugang anfragen",
    description: "Fragen Sie Zugang zur geschlossenen AXY-Beta für Ihr Unternehmen an.",
  },
  "/login": {
    title: "Bei AXY anmelden",
    description: "Öffnen Sie Ihre AXY Umgebung.",
  },
  "/legal": {
    title: "AXY Datenschutz und Geschäftsbedingungen",
    description: "Datenschutzerklärung und Geschäftsbedingungen für die AXY Plattform und Anwendungen.",
  },
} as const satisfies Record<PagePath, LocalizedPageMeta>;

const FRENCH_PAGE_META = {
  "/": {
    title: "Transformez chaque interaction en magasin en intelligence commerciale",
    description: "AXY connecte l’écosystème retail afin que chaque interaction en magasin devienne un contexte utile pour les équipes de vente, les clients, les détaillants et les marques.",
  },
  "/product": {
    title: "Plateforme de collaboration retail",
    description: "Découvrez la plateforme AXY : Sales App, Back Office, Customer App et workflows partagés pour la collaboration retail.",
  },
  "/sales-app": {
    title: "Sales App pour un retail connecté",
    description: "Enregistrez les produits présentés, l’intérêt client, les prochaines actions et le suivi dans un workflow de vente connecté.",
  },
  "/back-office": {
    title: "Back Office pour le retail",
    description: "Gérez les produits, clients, opérations, autorisations et analyses dans l’ensemble de l’écosystème retail AXY.",
  },
  "/customer-experience": {
    title: "Customer App pour une expérience connectée",
    description: "Prolongez le parcours client après la visite avec les produits, listes d’envies, offres, garanties et informations de service dans un même contexte.",
  },
  "/integrations": {
    title: "Couche d’intégration des systèmes retail",
    description: "Connectez ERP, CRM, POS, PIM, plateformes e-commerce et systèmes partenaires via l’API standardisée et le modèle de données partagé d’AXY.",
  },
  "/how-it-works": {
    title: "Comment fonctionne AXY",
    description: "Découvrez comment AXY enregistre l’activité retail, relie le contexte, guide l’action et transforme les signaux autorisés en intelligence utile.",
  },
  "/for-retailers": {
    title: "AXY pour les détaillants",
    description: "Aidez les équipes de vente à enregistrer chaque visite, poursuivre les échanges clients et comprendre la demande dans tous les magasins.",
  },
  "/for-brands": {
    title: "AXY pour les marques et fabricants",
    description: "Reliez l’activité autorisée en magasin aux données produit, stock et sell-through pour accompagner les détaillants et mieux gérer la disponibilité.",
  },
  "/use-cases/retail-clienteling": {
    title: "Clienteling dans le retail",
    description: "Transformez le contexte client disponible en un workflow de clienteling cohérent avant, pendant et après chaque visite en magasin.",
  },
  "/use-cases/in-store-sales-capture": {
    title: "Saisie de l’activité commerciale en magasin",
    description: "Enregistrez les présentations produit et l’intérêt client avant la transaction afin de conserver les signaux retail essentiels.",
  },
  "/use-cases/product-demand-intelligence": {
    title: "Analyse de la demande produit",
    description: "Exploitez les signaux autorisés d’intérêt produit pour anticiper la demande et prendre de meilleures décisions de stock.",
  },
  "/use-cases/retailer-brand-collaboration": {
    title: "Collaboration entre détaillants et marques",
    description: "Connectez les workflows partagés de catalogue, commande, annonce, formation, garantie et collaboration retail.",
  },
  "/pricing": {
    title: "Tarifs AXY",
    description: "Configurez AXY selon les utilisateurs, unités opérationnelles, sites et modules, puis envoyez une demande pour l’offre bêta sélectionnée.",
  },
  "/resources": {
    title: "Ressources sur le clienteling retail",
    description: "Consultez le guide pratique AXY et explorez la saisie de l’activité commerciale en magasin, la demande produit, la collaboration et les workflows connectés.",
  },
  "/article": {
    title: "Qu’est-ce que le retail clienteling ? CRM, visites et suivi expliqués",
    description: "Un guide pratique du retail clienteling : contexte CRM, activité en magasin, suivi client et indicateurs réellement utiles.",
  },
  "/about": {
    title: "À propos d’AXY",
    description: "Découvrez pourquoi AXY a été créé et comment la plateforme connecte détaillants, marques, produits, équipes de vente et clients.",
  },
  "/book-a-walkthrough": {
    title: "Réserver une démo guidée d’AXY",
    description: "Demandez une démo guidée d’AXY centrée sur vos magasins, marques, workflows, intégrations et première étape d’activation.",
  },
  "/meeting-booked": {
    title: "Démo AXY réservée",
    description: "Votre démo AXY personnalisée a bien été programmée.",
  },
  "/contact": {
    title: "Contacter AXY",
    description: "Contactez AXY pour toute question sur le produit, les tarifs, les partenariats, les intégrations ou la prochaine étape pour votre activité retail.",
  },
  "/help": {
    title: "Centre d’aide AXY",
    description: "Choisissez un sujet d’assistance AXY, envoyez une demande sécurisée ou contactez l’équipe Support AXY par e-mail.",
  },
  "/request-access": {
    title: "Demander l’accès à la bêta | AXY",
    description: "Demandez l’accès à la bêta AXY pour votre équipe retail, marque ou partenaire et échangez avec nous sur l’adéquation, le calendrier et l’onboarding.",
  },
  "/create-account": {
    title: "Demander l’accès à la bêta AXY",
    description: "Demandez l’accès à la bêta fermée AXY pour votre entreprise.",
  },
  "/login": {
    title: "Se connecter à AXY",
    description: "Accédez à votre environnement AXY.",
  },
  "/legal": {
    title: "Confidentialité et conditions générales AXY",
    description: "Politique de confidentialité et Conditions générales applicables à la plateforme et aux applications AXY.",
  },
} as const satisfies Record<PagePath, LocalizedPageMeta>;

export const LOCALIZED_PAGE_META = {
  en: ENGLISH_PAGE_META,
  it: ITALIAN_PAGE_META,
  de: GERMAN_PAGE_META,
  fr: FRENCH_PAGE_META,
} as const;

export const FALLBACK_PAGE_META: Record<Locale, LocalizedPageMeta> = {
  en: {
    title: "Page Not Found",
    description: "AXY connects retailers, brands, sales teams, products and customers—turning everyday retail interactions into structured intelligence.",
  },
  it: {
    title: "Pagina non trovata",
    description: "AXY connette retailer, brand, team di vendita, prodotti e clienti, trasformando le interazioni quotidiane in intelligence strutturata.",
  },
  de: {
    title: "Seite nicht gefunden",
    description: "AXY verbindet Händler, Marken, Verkaufsteams, Produkte und Kunden und macht tägliche Interaktionen zu strukturierter Intelligence.",
  },
  fr: {
    title: "Page Introuvable",
    description: "AXY connecte détaillants, marques, équipes de vente, produits et clients afin de transformer les interactions quotidiennes en intelligence structurée.",
  },
};

export const SOCIAL_IMAGE_ALT: Record<Locale, string> = {
  en: "AXY connected retail platform",
  it: "Piattaforma retail connessa AXY",
  de: "Vernetzte Einzelhandelsplattform von AXY",
  fr: "Plateforme retail connectée AXY",
};

export const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  en: "en_US",
  it: "it_IT",
  de: "de_DE",
  fr: "fr_FR",
};
