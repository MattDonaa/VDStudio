import {
  Calculator,
  Globe,
  Cpu,
  Search,
  MessageSquare,
  Star,
  Percent,
  LucideIcon
} from "lucide-react";

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  type: "Interactive Calculator" | "Performance Audit" | "Interactive Assessment" | "Marketing Audit" | "Automation Utility";
  iconName: "Calculator" | "Globe" | "Cpu" | "Search" | "MessageSquare" | "Star" | "Percent";
  relatedServices: { name: string; href: string }[];
  faqs: { question: string; answer: string }[];
  subtitle: string;
}

export const TOOLS_DATA: ToolItem[] = [
  {
    id: "lost-revenue-calculator",
    slug: "/growth-tools/lost-revenue-calculator",
    name: "Lost Revenue Calculator",
    subtitle: "Missed calls are missed commissions. Find out exactly how much slow response times are costing your joinery or kitchen showroom business.",
    description: "Calculate how much revenue businesses lose from missed calls and slow lead response.",
    type: "Interactive Calculator",
    iconName: "Calculator",
    relatedServices: [
      { name: "AI Receptionist Systems", href: "/#services" },
      { name: "Lead Follow-up Automation", href: "/#lead-pipeline" }
    ],
    faqs: [
      {
        question: "How does response time affect lead conversion rates for contractors?",
        answer: "Studies show that calling a prospect within 5 minutes of a form submission increases conversions by over 391%. In South African cabinetry and construction, homeowners often call multiple contractors; the first one to respond professionally usually secures the quotation meeting."
      },
      {
        question: "What counts as a 'lost lead' in this calculation?",
        answer: "A lost lead is any prospect who reaches out via your website, Google Business Profile, or phone but fails to connect with you due to a missed call, delayed email reply, or slow WhatsApp response, and consequently hires a competitor."
      }
    ]
  },
  {
    id: "website-grader",
    slug: "/growth-tools/website-grader",
    name: "Website Grader",
    subtitle: "Is your website an elegant digital showroom or a quiet portfolio? Let's check how effectively your pages convert high-end traffic.",
    description: "Analyze website conversion performance and identify opportunities to improve lead generation.",
    type: "Performance Audit",
    iconName: "Globe",
    relatedServices: [
      { name: "Raw HTML Websites", href: "/#services" },
      { name: "Custom Web Design", href: "/#services" }
    ],
    faqs: [
      {
        question: "Why does my current carpentry portfolio get visits but no inquiries?",
        answer: "Typical portfolios present flat images without structured conversion prompts, pricing estimates, or friction-free WhatsApp tunnels. A high-converting studio website uses interactive design packages to prompt instant user interest."
      },
      {
        question: "How does the website grader evaluate conversion rate optimization (CRO)?",
        answer: "The grader looks at visual trust anchors, mobile-friendly touch targets, headline relevancy, load performance speed, and lead-capture systems tailored to South African woodworkers."
      }
    ]
  },
  {
    id: "ai-readiness-assessment",
    slug: "/growth-tools/ai-readiness-assessment",
    name: "AI Readiness Assessment",
    subtitle: "Evaluate how prepared your woodworking or joinery brand is to integrate AI call receptionists, automated follow-ups, and custom smart workflows.",
    description: "Evaluate how prepared a business is to implement AI automation.",
    type: "Interactive Assessment",
    iconName: "Cpu",
    relatedServices: [
      { name: "AI Receptionist Systems", href: "/#services" },
      { name: "ROI / Automation Services", href: "/#project-packages" }
    ],
    faqs: [
      {
        question: "Is AI actually useful for a South African cabinet maker or shopfitter?",
        answer: "Absolutely. Woodworking owners are usually hands-on or out on site. While you are assembling boards, AI systems can answer inbound calls, book design showroom consultations, and reply to basic quotation questions in real time."
      },
      {
        question: "What are the primary indicators of high AI readiness?",
        answer: "Having existing digital CRM databases, automated email handles, consistent lead flow, and a team eager to offload repetitive phone calling duties to automated receptionists."
      }
    ]
  },
  {
    id: "google-profile-score",
    slug: "/growth-tools/google-profile-score",
    name: "Google Profile Score",
    subtitle: "Check the health, ranking efficiency, and keyword coverage of your Google Business Profile to capture local kitchen and cabinetry searches.",
    description: "Analyze the health and optimization of a Google Business Profile.",
    type: "Marketing Audit",
    iconName: "Search",
    relatedServices: [
      { name: "Google Business Profile Optimization", href: "/#services" },
      { name: "Local SEO Setup", href: "/#faq" }
    ],
    faqs: [
      {
        question: "How important is Google Business Profile for local woodworkers?",
        answer: "It is the #1 channel for free inbound leads. When South Africans search for 'built-in cupboards Sandton' or 'kitchen renovations Cape Town', Google displays the local 3-pack Map listings. An optimized profile ensures you appear at the top."
      },
      {
        question: "What factors are evaluated to calculate my Google Profile score?",
        answer: "Review frequency, high-resolution kitchen photography uploads, category precision, local keyword optimization in service lists, and response times on Google Chat."
      }
    ]
  },
  {
    id: "quote-follow-up-generator",
    slug: "/growth-tools/quote-follow-up-generator",
    name: "Quote Follow-up Generator",
    subtitle: "Draft customized, low-friction follow-up copy to gently nudge South African homeowners who stopped responding after receiving their kitchen quote.",
    description: "Generate professional follow-up messages for unresponsive prospects.",
    type: "Automation Utility",
    iconName: "MessageSquare",
    relatedServices: [
      { name: "Lead Follow-up Automation", href: "/#lead-pipeline" },
      { name: "CRM-ready Lead Dashboards", href: "/#lead-pipeline" }
    ],
    faqs: [
      {
        question: "When should I follow up on a major kitchen or shopfitting quote?",
        answer: "Ideally, follow up within 48 hours of sending the quotation to confirm receipt. If they go quiet, a second structured follow-up should occur at 5 days, focusing on material choices, showroom samples, or custom scope alterations."
      },
      {
        question: "How do I avoid sounding pushy when following up on quotations?",
        answer: "Rather than asking 'Are you going to pay the deposit?', offer value. Ask if they need assistance selecting raw wood species, or if they would like to review wood sample variants."
      }
    ]
  },
  {
    id: "review-request-generator",
    slug: "/growth-tools/review-request-generator",
    name: "Review Request Generator",
    subtitle: "Craft highly personalized, friendly Google review requests that make satisfied South African clients eager to share their cabinet-making experience.",
    description: "Generate high-converting Google review request messages.",
    type: "Automation Utility",
    iconName: "Star",
    relatedServices: [
      { name: "Review Automation Systems", href: "/#services" },
      { name: "Google Business Profile SEO", href: "/#services" }
    ],
    faqs: [
      {
        question: "Why do so few woodworking clients leave reviews on Google?",
        answer: "Homeowners simply forget once the kitchen or cupboard installation is finished. Providing a direct, hyper-convenient click-to-review link with a friendly, personalized request boosts feedback rates by over 70%."
      },
      {
        question: "Can I automate the Google review request process?",
        answer: "Yes. Our Review Automation systems send review requests via WhatsApp or email automatically once a project's status is marked as 'completed' in your lead management system."
      }
    ]
  },
  {
    id: "contractor-roi-calculator",
    slug: "/growth-tools/contractor-roi-calculator",
    name: "Contractor ROI Calculator",
    subtitle: "Estimate the concrete financial returns and monthly ROI of implementing high-converting web designs, lead routers, and automated receptionists.",
    description: "Estimate the ROI of implementing AI automation and lead generation systems.",
    type: "Interactive Calculator",
    iconName: "Percent",
    relatedServices: [
      { name: "ROI / Automation Services", href: "/#project-packages" },
      { name: "Lead-Capture Systems", href: "/#lead-pipeline" }
    ],
    faqs: [
      {
        question: "How fast do VDS digital systems pay for themselves?",
        answer: "Most cabinetry and joinery clients recoup their entire annual system investment with a single high-ticket kitchen commission. Automated follow-ups convert leads that would have otherwise gone cold."
      },
      {
        question: "What metrics are used to calculate system ROI?",
        answer: "We compare average project sizes, client closing rates, monthly traffic counts, lead submission rates, and manual labor time saved through CRM/AI automation."
      }
    ]
  }
];

export function getIcon(iconName: string) {
  switch (iconName) {
    case "Calculator": return Calculator;
    case "Globe": return Globe;
    case "Cpu": return Cpu;
    case "Search": return Search;
    case "MessageSquare": return MessageSquare;
    case "Star": return Star;
    case "Percent": return Percent;
    default: return Calculator;
  }
}
