/**
 * Reusable Structured Data (JSON-LD) Schemas and Builders
 * formatted specifically for South African local SEO context.
 */

export const DOMAIN_NAME = "https://www.veneerdigital.co.za";

export const agencyOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Veneer Digital Studio",
  "url": DOMAIN_NAME,
  "logo": `${DOMAIN_NAME}/assets/logo.png`,
  "image": `${DOMAIN_NAME}/assets/og-image.jpg`,
  "description": "Premium website design, local SEO, and custom digital systems for South African woodworkers, cupboard makers, joiners, cabinet makers, and kitchen renovators.",
  "telephone": "+27 18 462 1000", // Standard South Africa example format / local business details
  "email": "hello@veneerdigital.co.za",
  "priceRange": "ZAR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Central Avenue",
    "addressLocality": "Klerksdorp",
    "addressRegion": "North West",
    "postalCode": "2571",
    "addressCountry": "ZA"
  },
  "areaServed": [
    { "@type": "City", "name": "Klerksdorp" },
    { "@type": "City", "name": "Johannesburg" },
    { "@type": "City", "name": "Pretoria" },
    { "@type": "City", "name": "Cape Town" },
    { "@type": "City", "name": "Durban" },
    { "@type": "City", "name": "Bloemfontein" },
    { "@type": "City", "name": "Gqeberha" },
    { "@type": "City", "name": "Port Elizabeth" },
    { "@type": "City", "name": "East London" },
    { "@type": "City", "name": "Polokwane" },
    { "@type": "City", "name": "Nelspruit" },
    { "@type": "City", "name": "Mbombela" },
    { "@type": "City", "name": "Kimberley" },
    { "@type": "City", "name": "Rustenburg" },
    { "@type": "City", "name": "Mahikeng" },
    { "@type": "City", "name": "Potchefstroom" },
    { "@type": "City", "name": "Vereeniging" },
    { "@type": "City", "name": "Vanderbijlpark" },
    { "@type": "City", "name": "Pietermaritzburg" },
    { "@type": "City", "name": "George" },
    { "@type": "City", "name": "Mossel Bay" },
    { "@type": "City", "name": "Paarl" },
    { "@type": "City", "name": "Stellenbosch" },
    { "@type": "City", "name": "Centurion" },
    { "@type": "City", "name": "Midrand" },
    { "@type": "City", "name": "Sandton" },
    { "@type": "City", "name": "Randburg" },
    { "@type": "City", "name": "Roodepoort" },
    { "@type": "City", "name": "Benoni" },
    { "@type": "City", "name": "Boksburg" },
    { "@type": "City", "name": "Kempton Park" },
    { "@type": "City", "name": "Alberton" },
    { "@type": "City", "name": "Germiston" },
    { "@type": "City", "name": "Krugersdorp" },
    { "@type": "City", "name": "Soweto" },
    { "@type": "Country", "name": "South Africa" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/veneerdigital",
    "https://www.instagram.com/veneerdigital",
    "https://www.linkedin.com/company/veneerdigital"
  ]
};

export function getLocalBusinessSchema(
  name: string,
  description: string,
  city: string,
  region: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name,
    "description": description,
    "url": DOMAIN_NAME,
    "image": `${DOMAIN_NAME}/assets/og-image.jpg`,
    "telephone": "+27 18 462 1000",
    "email": "hello@veneerdigital.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": region,
      "addressCountry": "ZA"
    },
    "areaServed": [
      { "@type": "City", "name": city },
      { "@type": "Country", "name": "South Africa" }
    ],
    "priceRange": "ZAR"
  };
}

export function getServiceSchema(
  name: string,
  description: string,
  providerName: string = "Veneer Digital Studio"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": providerName,
      "url": DOMAIN_NAME
    },
    "serviceType": "Premium Website Design and Local SEO Build",
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    }
  };
}

export function getFAQSchema(
  questionsAndAnswers: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questionsAndAnswers.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.item
    }))
  };
}
