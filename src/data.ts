/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  FeatureCard,
  ServicePoint,
  DeliverablePackage,
  ProjectPackage,
  PortfolioItem,
  ProcessStep,
} from "./types";

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "premium-builds",
    title: "Premium Website Builds",
    description: "Custom, high-end websites designed to make your craftsmanship look as valuable online as it does in person.",
    iconName: "layout",
  },
  {
    id: "whatsapp-capture",
    title: "WhatsApp-Ready Lead Capture",
    description: "Consultation forms and WhatsApp enquiry flows prepared for future CRM and pipeline integration.",
    iconName: "message",
  },
  {
    id: "google-ready",
    title: "Google-Ready Presence",
    description: "SEO structure, metadata, service sections, and performance foundations built to support local visibility.",
    iconName: "search",
  },
];

export const SERVICE_POINTS: ServicePoint[] = [
  {
    id: "dp-1",
    title: "Crafted Brand Presence",
    description: "Premium layouts, refined copy, and visual structure designed around your actual workmanship and services.",
  },
  {
    id: "dp-2",
    title: "Lead Capture Architecture",
    description: "Consultation forms, WhatsApp CTAs, project-type fields, and backend-ready lead objects prepared for CRM integration.",
  },
  {
    id: "dp-3",
    title: "SEO & Google Readiness",
    description: "Clean metadata, service descriptions, local SEO foundations, review sections, and fast-loading responsive pages.",
  },
];

export const MARQUEE_TAGS = [
  "Kitchen Remodellers",
  "Cabinet Makers",
  "Joinery Studios",
  "Woodworkers",
  "Built-In Cupboards",
  "Luxury Furniture Makers",
  "Interior Wood Specialists",
  "Renovation Brands",
  "Bespoke Installers",
];

export const SERVICE_GRID_IMAGES = {
  visualDirection: {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    caption: "Visual Direction",
  },
  websiteBuild: {
    url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    caption: "Website Build",
  },
  leadCapture: {
    url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
    caption: "Lead Capture",
  },
  growthReady: {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    caption: "Growth Ready",
  },
};

export const SOLUTIONS_PACKAGES: DeliverablePackage[] = [
  {
    id: "raw-html",
    title: "Raw HTML Website Delivery",
    badge: "Ownership First",
    description: "For business owners who want a complete premium website package they can keep, host, or hand over to their own technical person.",
    includes: [
      "Custom homepage",
      "Service sections",
      "Gallery/portfolio layout",
      "Contact form structure",
      "WhatsApp CTA",
      "SEO metadata",
      "Full HTML ZIP file",
      "Assets packaged",
      "Basic documentation",
    ],
    bottomLabel: "Self-host ready",
    ctaText: "Request Raw Website Package",
  },
  {
    id: "build-hosting",
    title: "Website Build + Hosting Setup",
    badge: "Most Practical",
    description: "For businesses that want the website built professionally and connected to hosting and domain setup without technical confusion.",
    includes: [
      "Full website build",
      "Hosting setup support",
      "Domain connection support",
      "Netlify/Hostinger deployment guidance",
      "WhatsApp button setup",
      "Basic SEO setup",
      "Google Analytics readiness",
    ],
    bottomLabel: "Launch assisted",
    ctaText: "Build My Website",
  },
  {
    id: "premium-lead-system",
    title: "Premium Lead-Capture Website System",
    badge: "Growth Ready",
    description: "For serious wood and kitchen businesses that want their website to capture, qualify, and route project enquiries into a WhatsApp-ready sales process.",
    includes: [
      "Premium website",
      "Consultation request form",
      "Project qualification fields",
      "WhatsApp enquiry flow",
      "CRM-ready lead structure",
      "Pipeline stage placeholder",
      "Lead source tracking readiness",
      "Future wacrm compatibility",
    ],
    bottomLabel: "CRM-ready",
    ctaText: "Build My Lead System",
  },
];

export const PROJECT_PACKAGES: ProjectPackage[] = [
  {
    id: "essential",
    title: "Essential Presence",
    description: "For newer or smaller businesses that need a premium online foundation.",
    price: "Quoted per project",
    features: [
      "One-page premium website",
      "Services overview",
      "Contact form",
      "WhatsApp CTA",
      "Basic SEO metadata",
      "Mobile responsive build",
    ],
    ctaText: "Request Quote",
  },
  {
    id: "signature",
    title: "Signature Website",
    description: "For established kitchen, cabinetry, and woodworking businesses that need a more complete digital presence.",
    price: "Custom quote",
    features: [
      "Multi-section premium website",
      "Service pages/sections",
      "Portfolio/gallery showcase",
      "Consultation form",
      "Google-ready metadata",
      "Analytics-ready setup",
      "Hosting/domain setup option",
    ],
    ctaText: "Start Signature Build",
    isPopular: true,
  },
  {
    id: "lead-system",
    title: "Lead System",
    description: "For businesses that want website enquiries prepared for CRM and WhatsApp follow-up.",
    price: "Custom quote",
    features: [
      "Premium website system",
      "Lead qualification form",
      "WhatsApp enquiry flow",
      "CRM webhook placeholder",
      "Pipeline-ready lead data",
      "Review/testimonial section",
      "SEO and analytics readiness",
    ],
    ctaText: "Build Lead System",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Knysna Kitchen Co.",
    category: "Kitchen Remodeller Website",
    description: "Bespoke solid oak cabinet builder showcase with live interactive room visualizer references.",
    mockupUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    duration: "Web Presence Concept",
    badge: "Case Study Style",
  },
  {
    id: "port-2",
    title: "Constantia Joinery Studio",
    category: "Joinery Studio Website",
    description: "High-contrast visual gallery for a Cape Town wooden window frames and door manufacturer.",
    mockupUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
    duration: "Responsive Showcase",
  },
  {
    id: "port-3",
    title: "Outeniqua Wood Artisans",
    category: "Furniture Maker Showcase",
    description: "Elegantly framed catalogs with custom quotation triggers for luxury sleeper furniture.",
    mockupUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    duration: "Interactive Catalog",
  },
  {
    id: "port-4",
    title: "Bespoke Built-In Cupboards",
    category: "Built-In Cupboard Lead Page",
    description: "Multi-step kitchen layout estimator form driving users straight to WhatsApp appointment booking.",
    mockupUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    duration: "WhatsApp Integration",
    badge: "15% Conversion Boost",
  },
  {
    id: "port-5",
    title: "Summit Wood Renovations",
    category: "Renovation Brand Landing Page",
    description: "Local SEO landing project capturing Gauteng kitchen refacing & joinery resurfacing requests.",
    mockupUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    duration: "Google SEO Optimized",
  },
  {
    id: "port-6",
    title: "Prestige Cabinets SA",
    category: "Cabinet Maker Portfolio",
    description: "High-end product showcase for bespoke walk-in-closets and state-of-the-art office joinery.",
    mockupUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    duration: "Lead Capture Setup",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description: "We understand your business, services, project types, target clients, and current online presence.",
  },
  {
    number: 2,
    title: "Direction",
    description: "We define the visual style, website structure, messaging, and lead capture flow.",
  },
  {
    number: 3,
    title: "Build",
    description: "We design and build the premium website using the cloned dark/orange visual system.",
  },
  {
    number: 4,
    title: "Prepare Lead Capture",
    description: "We set up forms, WhatsApp CTAs, CRM-ready lead data, and future webhook placeholders.",
  },
  {
    number: 5,
    title: "Delivery or Launch",
    description: "You either receive the raw HTML ZIP package or we assist with hosting and domain setup.",
  },
  {
    number: 6,
    title: "Growth Readiness",
    description: "The site is structured for SEO, analytics, Google visibility, reviews, and future CRM workflows.",
  },
];
