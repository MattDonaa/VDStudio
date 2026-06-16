import React from "react";
import LegalLayout from "./LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      activeKey="terms"
      title="Terms and Conditions | Veneer Digital Studio"
      subtitle="Review the Terms of Service governing the use of Veneer Digital Studio's website, design packages, raw HTML delivery, and web services in South Africa."
      updatedDate="January 31st, 2026"
      seoTitle="Terms and Conditions | Veneer Digital Studio"
      seoDescription="Review the Terms of Service governing the use of Veneer Digital Studio's website, design packages, raw HTML delivery, and web services in South Africa."
      canonicalUrl="https://www.veneerdigital.co.za/terms-and-conditions"
    >
      <div className="space-y-12 leading-relaxed text-[15px] font-geist text-white/70">
        <div>
          <h2 className="text-3xl font-serif text-white tracking-tight mb-4">Terms of Service</h2>
          <p className="text-white/60">
            These Terms of Service govern the use of the Veneer Digital Studio website, along with any website design, digital transformation, custom lead-capture pipelines, hosting setups, and supporting services code delivered by our team.
          </p>
        </div>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">1. Introduction</h3>
          <p>
            By viewing our pages, ordering website packages, or engaging Veneer Digital Studio ("we", "us", "our") for design and development contracts, you agree to be fully bound by these Terms of Service. If you do not accept these provisions, you should refrain from engaging our services.
          </p>
        </section>

        <section className="border-[#F27D26]/10 border bg-[#F27D26]/[0.02] p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-3 tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
            2. Services Offered
          </h3>
          <p className="mb-4">We specialize in designing premium, conversion-ready web properties for carpentry and remodeling professionals. Our standard scope of services includes:</p>
          <ul className="list-disc pl-5 space-y-2 text-white/70">
            <li><strong className="text-white">Premium website design:</strong> Visual prototypes, layouts, typography pairing, and luxury styling.</li>
            <li><strong className="text-white">Website development:</strong> High performance code, fast loadings, and fluid transitions.</li>
            <li><strong className="text-white">Raw HTML website delivery:</strong> Complete source directory files prepared for offline deployment.</li>
            <li><strong className="text-white">Hosting and domain setup assistance:</strong> Guidance deploying assets to Netlify, Hostinger, Vercel, or custom servers.</li>
            <li><strong className="text-white">SEO-ready structures:</strong> Integration of rich local schemas, meta fields, and responsive indexing codes.</li>
            <li><strong className="text-white">WhatsApp-ready lead capture forms:</strong> Lead estimator components, consultation triggers, and chat triggers.</li>
            <li><strong className="text-white">CRM-ready structures:</strong> API layouts, clean webhook payloads, and database connectivity.</li>
            <li><strong className="text-white">Website maintenance:</strong> Ad-hoc code adjustments and updates as outlined in separate service SLAs.</li>
          </ul>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">3. Quotes and Project Scope</h3>
          <p>
            All website projects are quoted individually based on page count, structural complexity, interactive visualizer features, and custom CRM or database connections. Any modifications, extra assets, or features requested outside the initial agreed design scope will require a supplementary quote or an ad-hoc billable fee.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">4. Client Responsibilities</h3>
          <p>
            To deliver your website on schedule, we rely on responsive client cooperation. Clients agree to provide accurate company registration details, high-resolution product/cabinetry photos, approved logos, descriptive service catalogs, correct contact links, hosting access coordinates when requested, and prompt feedback on design reviews. We are not responsible for delivery delays resulting from slow content provisions.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">5. Raw HTML Website Delivery</h3>
          <p className="mb-3">For clients selecting a raw HTML ZIP file delivery option:</p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li>We hand over the fully built website code and verified dependencies in a zip package.</li>
            <li>The client retains complete ownership and is responsible for setting up independent hosting servers, domain configurations, SSL certificates, daily server backups, and future framework updates.</li>
            <li>Veneer Digital Studio provides comprehensive documentation but cannot be held liable for hosting downtime or misconfigured DNS records occurring after successful zip handover.</li>
          </ul>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">6. Hosting and Domain Setup Assistance</h3>
          <p className="mb-3">Where project scope explicitly includes hosting and domain configurations:</p>
          <ul className="list-disc pl-5 space-y-2.5">
            <li>We may configure projects to run on global services like Netlify, Vercel, or Hostinger and map custom .co.za DNS records.</li>
            <li>Usage remains subject to the Terms and Conditions of those respective platform operators.</li>
            <li>The client is directly responsible for recurring platform charges, server subscription payments, and domain registration renewals.</li>
          </ul>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">7. Lead Capture and CRM Integration</h3>
          <p>
            We prepare structured estimator forms, WhatsApp quick taps, and CRM-ready payloads. Standard packages provide the frontend code and database variables. Full automated connections to third-party databases, Webhooks, Supabase setups, or automated autoresponders are only configured if explicitly listed inside the project contract.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">8. Payments</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Applicable fees, non-refundable deposit terms, milestone splits, and payment options will be detailed on the initial project invoice.</li>
            <li>Website work processes may immediately pause if invoices are overdue.</li>
            <li>Deposits are non-refundable once design layout work has commenced.</li>
            <li>Clean folder deliveries, deployment handovers, and domain transfers will be withheld until all outstanding project invoices are paid in full.</li>
          </ul>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">9. Revisions</h3>
          <p>
            Project estimates specify the number of design review and correction rounds included. Major shifts in visual direction, unmentioned page additions, or structural redesigns requested after layouts are approved will be charged as extra revisions.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">10. Client Content and Intellectual Property</h3>
          <p>
            The client retains sole ownership of all graphics, photographs, logos, text copy, and commercial details supplied to us. Veneer Digital Studio retains complete ownership of internal programming scripts, reusable component layouts, pre-written server configurations, and proprietary developer systems. Upon receipt of full project payment, the client is granted a perpetual, non-exclusive license to use the completed website assembly for business operations.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">11. Portfolio Rights</h3>
          <p>
            Unless agreed otherwise in writing, Veneer Digital Studio reserves the right to exhibit completed web properties, visual blueprints, performance metrics, and client reviews inside our web portfolio, social marketing pipelines, and digital case studies.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">12. Third-Party Tools</h3>
          <p>
            Our builds rely on external utilities (e.g., Netlify hosting networks, Supabase schemas, Google Web fonts, FontAwesome libraries, Lucide vectors, and Meta Pixel triggers). Veneer Digital Studio is not responsible for pricing updates, service interruptions, or policy modifications introduced by third-party application providers.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">13. SEO and Performance</h3>
          <p>
            While we construct perfect structural SEO, Local Business schema, and mobile speed factors, we cannot outline or promise specific Google rankings, first-page guarantees, or monthly lead volumes. Local performance remains dependent on regional competitive density, Google core algorithm adjustments, client copywriting efforts, and general market demand.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">14. Limitation of Liability</h3>
          <p>
            Veneer Digital Studio is not liable for indirect losses, lost profits, missing leads, platform downtime, missed deadlines caused by hosting providers, or damages resulting from incorrect information provided during design sessions.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">15. Termination</h3>
          <p>
            Either party may suspend a design contract in accordance with the provisions specified in the signed project agreement. The client remains responsible for compensating all hours logged and milestone items produced up to the date of formal cancellation.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">16. Changes to Terms</h3>
          <p>
            We update these Terms as our systems evolve. The "Last updated" date displayed at the top of the document indicates when modifications were last committed.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">17. Contact</h3>
          <p className="mb-4">For any clarifications concerning these terms, please contact our team:</p>
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs text-white/80 space-y-2">
            <div><strong className="text-[#F27D26]">Entity:</strong> Veneer Digital Studio</div>
            <div><strong className="text-[#F27D26]">Email:</strong> <a href="mailto:studio@veneerdigital.co.za" className="hover:underline hover:text-[#F27D26]">studio@veneerdigital.co.za</a></div>
            <div><strong className="text-[#F27D26]">Website:</strong> <a href="https://www.veneerdigital.co.za" className="hover:underline hover:text-[#F27D26]">https://www.veneerdigital.co.za</a></div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
