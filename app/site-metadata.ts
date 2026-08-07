import type { Metadata } from "next";

type PageMeta = { title: string; description: string; index?: boolean };

const DEFAULT_DESCRIPTION = "AXY connects retailers, brands, sales teams, products and customers—turning everyday retail interactions into structured intelligence.";
const SOCIAL_IMAGE = "/images/surface-sales-app.jpg";

const PAGE_META: Record<string, PageMeta> = {
  "/": { title: "Turn Every Store Interaction into Sales Intelligence", description: "AXY connects the retail ecosystem so in-store interactions become useful context for sales teams, customers, retailers and brands." },
  "/product": { title: "Retail Collaboration Platform", description: "Explore the AXY platform: Sales App, Back Office, Customer Experience and shared retail collaboration workflows." },
  "/sales-app": { title: "Sales App for Connected Retail", description: "Capture products shown, customer interest, next actions and follow-up in one connected sales workflow." },
  "/back-office": { title: "Retail Back Office", description: "Manage products, customers, operations, permissions and insights across the AXY retail ecosystem." },
  "/customer-experience": { title: "Connected Customer Experience", description: "Continue the customer journey after a store visit with products, wishlists, offers, warranty and service context." },
  "/integrations": { title: "AXY Integrations", description: "Understand how AXY can work independently or connect retail, product, messaging and business systems." },
  "/how-it-works": { title: "How AXY Works", description: "See how AXY captures retail activity, connects context, supports action and turns approved signals into useful intelligence." },
  "/for-retailers": { title: "AXY for Retailers", description: "Help sales teams capture every visit, continue customer conversations and understand demand across stores." },
  "/for-brands": { title: "AXY for Brands and Manufacturers", description: "Collaborate with retail partners through shared catalogues, orders, announcements, warranty workflows and permissioned insight." },
  "/use-cases/retail-clienteling": { title: "Retail Clienteling", description: "Turn remembered customer context into a consistent clienteling workflow before, during and after each store visit." },
  "/use-cases/in-store-sales-capture": { title: "In-Store Sales Capture", description: "Capture product presentations and customer intent before the transaction so valuable retail signals do not disappear." },
  "/use-cases/product-demand-intelligence": { title: "Product Demand Intelligence", description: "Use permissioned product interest signals to understand demand ahead of sales and support better stock decisions." },
  "/use-cases/retailer-brand-collaboration": { title: "Retailer and Brand Collaboration", description: "Connect shared catalogue, ordering, announcement, training, warranty and retail collaboration workflows." },
  "/pricing": { title: "AXY Pricing", description: "Start with AXY Free or configure a plan around your users, business units and optional modules." },
  "/resources": { title: "Connected Retail Resources", description: "Practical guidance for retail clienteling, sales capture, product demand, operations and brand collaboration." },
  "/article": { title: "What Is Retail Clienteling? CRM, Store Visits and Follow-Up Explained", description: "A practical guide to retail clienteling, including CRM context, in-store activity, follow-up and the measurements that matter." },
  "/about": { title: "About AXY", description: "Learn why AXY was created and how it connects retailers, brands, products, sales teams and customers." },
  "/book-a-walkthrough": { title: "Book an AXY Walkthrough", description: "Request a guided AXY walkthrough focused on your stores, brands, workflows, integrations and first activation step." },
  "/meeting-booked": { title: "AXY Walkthrough Booked", description: "Your tailored AXY walkthrough has been scheduled successfully.", index: false },
  "/contact": { title: "Contact AXY", description: "Contact AXY about product questions, pricing, partnerships, integrations or the next step for your retail business." },
  "/help": { title: "AXY Help Centre", description: "Find guidance for setting up and using the AXY platform." },
  "/create-account": { title: "Create an AXY Account", description: "Start setting up AXY for your retail business." },
  "/login": { title: "Log In to AXY", description: "Access your AXY environment.", index: false },
  "/legal": { title: "AXY Legal Information", description: "AXY legal information and policy documents.", index: false },
};

export function metadataForPath(path: string): Metadata {
  const page = PAGE_META[path] ?? { title: "Page Not Found", description: DEFAULT_DESCRIPTION, index: false };
  const canonical = canonicalUrlForPath(path);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: page.index === false ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: "AXY",
      title: page.title,
      description: page.description,
      url: canonical,
      images: [{ url: SOCIAL_IMAGE, width: 1600, height: 900, alt: "AXY connected retail platform" }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [SOCIAL_IMAGE] },
  };
}

export function canonicalUrlForPath(path: string) {
  return path === "/" ? "https://axy.net/" : `https://axy.net${path.replace(/\/+$/, "")}/`;
}

export const staticPagePaths = Object.keys(PAGE_META);
export const sitemapPaths = Object.entries(PAGE_META).filter(([, value]) => value.index !== false).map(([path]) => path);
