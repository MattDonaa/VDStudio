# OneStone Interior Design & Decor Website

## Project Name
OneStone Interior Design & Decor — Premium React Landing Website

## Goals
Create a premium, responsive, SEO-ready website for OneStone Interior Design and Decor to showcase interior design work, generate WhatsApp enquiries, and present a polished brand experience for potential clients.

## Currently Completed Features
- Premium single-page React website using static HTML, CSS and JavaScript.
- Responsive desktop, tablet and mobile layout.
- High-impact hero section with strong CTA buttons.
- Floating WhatsApp button and repeated CTA placements across the page.
- WhatsApp-ready contact form that opens WhatsApp with the visitor's filled details.
- Service catalog covering:
  - Bespoke TV units
  - Drywall ceilings
  - Cove and ambient lighting
  - Kitchen cabinetry
  - Interior styling
  - Turnkey installation
- Portfolio gallery using the provided OneStone project images.
- Category filters for portfolio items.
- Click-to-preview lightbox for portfolio images.
- Four-step process section: Consultation, Design & Quote, Fabrication, Installation.
- Client experience/testimonial section placeholders.
- SEO metadata including title, description, keywords, Open Graph, Twitter card and JSON-LD structured data.
- Accessibility improvements: semantic sections, skip link, labelled navigation, descriptive image alt text, keyboard-accessible portfolio cards, and no-JavaScript fallback content.
- `robots.txt` and web manifest included.

## Functional Entry URIs
- `/` or `/index.html` — Main OneStone landing page.
- `/#home` — Hero and primary contact panel.
- `/#services` — Services catalog.
- `/#portfolio` — Project image gallery and filters.
- `/#process` — OneStone process timeline.
- `/#contact` — Consultation CTA and WhatsApp message form.
- `/robots.txt` — Search crawler rules.
- `/site.webmanifest` — Basic web app metadata.

## Public URLs
- Production URL: Not published yet. Use the platform's **Publish tab** to publish the website and obtain the live URL.
- API endpoints: None used. This is a static frontend-only site.
- WhatsApp endpoint: `https://api.whatsapp.com/send?text=...` is used by default because a specific WhatsApp number was not visible in the provided images.

## Data Models, Structures, and Storage Services Used
No persistent database or storage service is used.

Static data structures are defined in `js/app.js`:
- `services` — service cards and bullet points.
- `portfolio` — image paths, titles, categories and alt text.
- `process` — step titles and descriptions.
- `testimonials` — placeholder testimonial content.

## Images Used
Provided images were downloaded into the `assets/` directory:
- `assets/team-billboard.jpg`
- `assets/cove-lighting-detail.jpg`
- `assets/living-room-ceiling-wall.jpg`
- `assets/kitchen-cabinetry.jpg`
- `assets/tv-unit-living-room.jpg`
- `assets/site-installation-lighting.jpg`
- `assets/install-team.jpg`
- `assets/onestone-reference-design.jpg`

## Features Not Yet Implemented
- Exact business phone number, email, physical address and opening hours were not visible/legible in the provided images, so they have not been hard-coded.
- Live social media links are not added because no verified handles were provided.
- Verified client testimonials are currently represented by polished placeholders.
- Dedicated multi-page service pages are not yet created.
- A domain-specific sitemap is not generated because the production domain is not known yet.

## Recommended Next Steps
1. Add OneStone's real WhatsApp number in `js/app.js`:
   ```js
   const WHATSAPP_PHONE = "263XXXXXXXXX";
   ```
2. Add the exact business address, phone number, email and service areas to the hero contact panel, footer and JSON-LD schema.
3. Replace placeholder testimonials with verified client reviews.
4. Add a published domain to the canonical URL and update `robots.txt` with the final sitemap URL.
5. Consider adding separate SEO landing pages for services such as custom TV units, drywall ceilings and kitchen cabinetry.
6. Compress/convert images to WebP for even faster loading after final content approval.

## Deployment
To deploy your website and make it live, please go to the **Publish tab** where you can publish your project with one click. The Publish tab will handle all deployment processes automatically and provide you with the live website URL.
