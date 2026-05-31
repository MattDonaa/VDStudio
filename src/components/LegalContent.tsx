import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

interface LegalContentProps {
  activeTab: "terms" | "privacy" | "popia";
  setActiveTab: (tab: "terms" | "privacy" | "popia") => void;
}

export default function LegalContent({ activeTab, setActiveTab }: LegalContentProps) {
  
  const handleTabClick = (tab: "terms" | "privacy" | "popia") => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Back to Home CTA */}
      <a 
        href="/"
        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </a>

      {/* Header Area */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
          Legal <span className="text-[#F27D26]">Policies</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl font-geist max-w-2xl leading-relaxed">
          Clear terms, transparent privacy practices, and South African POPIA-aligned data handling.
        </p>
        
        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F27D26]" />
          <p className="text-white/70 text-sm font-geist italic pl-2">
            “These policies are provided for transparency and should not be treated as legal advice. Clients should seek independent legal advice where required.”
          </p>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full items-start">
        {/* Tab Controls */}
        <div className="md:w-1/3 shrink-0 flex flex-col gap-3 sticky top-32 z-10 w-full">
          {(["terms", "privacy", "popia"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              aria-selected={activeTab === tab}
              role="tab"
              className={`
                text-left px-5 py-4 rounded-xl transition-all duration-300 font-geist text-sm uppercase tracking-wider
                ${activeTab === tab 
                  ? "bg-white/10 text-white shadow-[0_0_15px_rgba(242,125,38,0.15)] border border-[#F27D26]/30 relative" 
                  : "bg-transparent text-white/50 hover:bg-white/5 hover:text-white/80 border border-transparent"
                }
              `}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span>
                  {tab === "terms" && "1. Terms of Service"}
                  {tab === "privacy" && "2. Privacy Policy"}
                  {tab === "popia" && "3. POPIA Policy"}
                </span>
                {activeTab === tab && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
                )}
              </div>
              {/* Active Underline glow effect simulation */}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#F27D26]/60 to-transparent" />
              )}
            </button>
          ))}
          
          <div className="mt-12 hidden md:block">
            <h4 className="text-white font-geist text-sm mb-4">Contact Venue</h4>
            <a 
              href="mailto:studio@veneerdigital.co.za"
              className="inline-flex w-full justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-[#F27D26] hover:border-[#F27D26] transition-all group font-geist"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="md:w-2/3 w-full animate-fade-in pb-12">
          {activeTab === "terms" && <TermsOfService />}
          {activeTab === "privacy" && <PrivacyPolicy />}
          {activeTab === "popia" && <PopiaPolicy />}
          
          <div className="mt-20 block md:hidden">
            <h4 className="text-white font-geist text-sm mb-4 text-center">Questions about these policies? Contact Veneer Digital Studio.</h4>
             <a 
              href="mailto:studio@veneerdigital.co.za"
              className="inline-flex w-full justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-geist"
            >
              studio@veneerdigital.co.za
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="space-y-10 text-white/70 font-geist leading-relaxed text-[15px]">
      <div>
        <h2 className="text-3xl font-serif text-white mb-2">Terms of Service</h2>
        <p className="text-sm text-[#F27D26]">Updated: January 31st, 2026</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">1. Introduction</h3>
        <p>Explain that these Terms govern use of the Veneer Digital Studio website and any website design, digital presence, lead-capture, hosting setup, and related services provided by Veneer Digital Studio.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">2. Services Offered</h3>
        <p className="mb-2">Include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Premium website design</li>
          <li>Website development</li>
          <li>Raw HTML website delivery</li>
          <li>Hosting and domain setup assistance</li>
          <li>SEO-ready website structure</li>
          <li>WhatsApp-ready lead capture forms</li>
          <li>CRM-ready enquiry systems</li>
          <li>Website updates or support where agreed in writing</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">3. Quotes and Project Scope</h3>
        <p>Explain that all projects are quoted based on scope, content readiness, complexity, pages, integrations, revisions, and delivery type. Explain that any work outside the agreed scope may require a new quote or additional fee.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">4. Client Responsibilities</h3>
        <p>Clients must provide accurate business information, approved copy, images, logos, contact details, service lists, hosting/domain access where needed, and timely feedback.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">5. Raw HTML Website Delivery</h3>
        <p className="mb-2">Explain that where the client chooses raw HTML ZIP delivery:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Veneer Digital Studio delivers the website files and assets.</li>
          <li>The client is responsible for hosting, domain connection, server setup, backups, and future technical maintenance unless otherwise agreed.</li>
          <li>Veneer Digital Studio may provide documentation but is not responsible for third-party hosting issues after handover unless support is purchased.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">6. Hosting and Domain Setup Assistance</h3>
        <p className="mb-2">Explain that where hosting/domain setup is requested:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Veneer Digital Studio may assist with Netlify, Hostinger, DNS, domain pointing, and deployment.</li>
          <li>Third-party platforms remain subject to their own terms.</li>
          <li>The client remains responsible for subscription payments to hosting, domain, email, or third-party service providers unless otherwise agreed.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">7. Lead Capture and CRM Integration</h3>
        <p>Explain that lead forms, WhatsApp buttons, CRM-ready structures, and backend placeholders may be included. State that full CRM, WhatsApp API, Supabase, or automation setup is only included if agreed in the project scope.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">8. Payments</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fees, deposits, milestones, and payment terms will be stated in the project quote or invoice.</li>
          <li>Work may pause if payments are late.</li>
          <li>Deposits may be non-refundable once work has started.</li>
          <li>Final files or deployment may be withheld until outstanding balances are paid.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">9. Revisions</h3>
        <p>Explain that revision rounds must be agreed in the quote. Extra revisions, major direction changes, or new features may be charged separately.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">10. Client Content and Intellectual Property</h3>
        <p>Client retains ownership of their supplied logos, images, copy, and business assets. Veneer Digital Studio retains ownership of internal processes, templates, systems, reusable code patterns, and know-how. Once full payment is received, the client receives usage rights to the completed website deliverables agreed in the project scope.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">11. Portfolio Rights</h3>
        <p>Unless the client requests otherwise in writing, Veneer Digital Studio may display completed work in its portfolio, case studies, social media, and marketing materials.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">12. Third-Party Tools</h3>
        <p>Mention that websites may use tools such as Netlify, Hostinger, Supabase, Google Analytics, WhatsApp, Meta, Google Fonts, CDN-hosted assets, or other services. Veneer Digital Studio is not responsible for downtime, pricing changes, policy changes, or failures caused by third-party providers.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">13. SEO and Performance</h3>
        <p>Explain that SEO-ready structure does not guarantee first-page ranking, traffic, enquiries, or revenue. Performance depends on competition, content, domain age, backlinks, Google algorithms, client activity, and market demand.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">14. Limitation of Liability</h3>
        <p>State that Veneer Digital Studio is not liable for indirect loss, lost profits, lost leads, data loss, platform downtime, third-party failures, or issues caused by incorrect client-provided information.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">15. Termination</h3>
        <p>Either party may end a project according to written terms. The client remains responsible for work completed and costs incurred up to termination.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">16. Changes to Terms</h3>
        <p>Veneer Digital Studio may update these Terms from time to time. The updated date will show when changes were last made.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">17. Contact</h3>
        <p>For questions about these Terms, contact:<br/></p>
        <p>Veneer Digital Studio<br/>
        Email: <a href="mailto:studio@veneerdigital.co.za" className="text-[#F27D26] hover:underline">studio@veneerdigital.co.za</a><br/>
        Website: <a href="https://www.veneerdigital.co.za" className="text-[#F27D26] hover:underline">https://www.veneerdigital.co.za</a></p>
      </section>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-10 text-white/70 font-geist leading-relaxed text-[15px]">
      <div>
        <h2 className="text-3xl font-serif text-white mb-2">Privacy Policy</h2>
        <p className="text-sm text-[#F27D26]">Updated: January 31st, 2026</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">1. Introduction</h3>
        <p>Explain that Veneer Digital Studio respects privacy and is committed to protecting personal information collected through the website, enquiry forms, WhatsApp links, email, and related communication channels.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">2. Information We Collect</h3>
        <p className="mb-2">Include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name</li>
          <li>Business name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Location or service area</li>
          <li>Current website URL</li>
          <li>Business type</li>
          <li>Project requirements</li>
          <li>Package interest</li>
          <li>Timeline</li>
          <li>Messages submitted through forms</li>
          <li>Website usage data such as device, browser, IP address, pages visited, and analytics data where enabled</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">3. How We Collect Information</h3>
        <p className="mb-2">Include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Website contact/project forms</li>
          <li>WhatsApp click-to-chat links</li>
          <li>Email communication</li>
          <li>Phone calls</li>
          <li>Consultation requests</li>
          <li>Analytics and cookies where enabled</li>
          <li>CRM or lead capture tools where integrated</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">4. How We Use Information</h3>
        <p className="mb-2">Include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Responding to enquiries</li>
          <li>Preparing quotes</li>
          <li>Booking consultations</li>
          <li>Delivering website services</li>
          <li>Managing projects</li>
          <li>Improving website experience</li>
          <li>Following up on submitted enquiries</li>
          <li>Setting up lead capture or CRM workflows where requested</li>
          <li>Meeting legal or administrative obligations</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">5. Legal Basis / Lawful Processing</h3>
        <p className="mb-2">Explain that personal information is processed where:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The user consents by submitting a form or contacting the business</li>
          <li>Processing is necessary to respond to an enquiry or provide services</li>
          <li>Processing is necessary for legitimate business operations</li>
          <li>Processing is required by law</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">6. Sharing of Information</h3>
        <p className="mb-2">Explain that information may be shared only where necessary with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hosting providers</li>
          <li>Domain providers</li>
          <li>Email service providers</li>
          <li>CRM tools</li>
          <li>Analytics providers</li>
          <li>Payment/admin service providers</li>
          <li>Legal/accounting advisors where required</li>
          <li>Authorities where legally required</li>
        </ul>
        <p className="mt-2">State that personal information is not sold.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">7. Cookies and Analytics</h3>
        <p>Explain that the website may use cookies, analytics, tracking pixels, or similar technologies to understand site performance and improve user experience. Mention Google Analytics placeholder if installed. Allow users to disable cookies in their browser.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">8. WhatsApp and Third-Party Platforms</h3>
        <p>Explain that if users contact Veneer Digital Studio through WhatsApp, Meta/WhatsApp’s own privacy terms may apply. The same applies to third-party hosting, CRM, analytics, and communication platforms.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">9. Data Security</h3>
        <p className="mb-2">Explain that reasonable technical and organisational measures are used to protect personal information. Mention:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Secure platforms</li>
          <li>Access controls</li>
          <li>Limited internal access</li>
          <li>HTTPS where available</li>
          <li>Careful handling of enquiry data</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">10. Data Retention</h3>
        <p>Explain that enquiry and project data is kept only as long as needed for business, legal, administrative, project, or follow-up purposes.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">11. User Rights</h3>
        <p className="mb-2">Explain that users may request:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access to their personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion where legally allowed</li>
          <li>Objection to certain processing</li>
          <li>Withdrawal of consent where processing is based on consent</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">12. Children’s Privacy</h3>
        <p>State that the website is not intended for children and Veneer Digital Studio does not knowingly collect children’s personal information.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">13. International Transfers</h3>
        <p>Explain that some third-party platforms may store or process information outside South Africa. Where this happens, reasonable steps are taken to use reputable providers.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">14. Updates to This Policy</h3>
        <p>State that the Privacy Policy may be updated and the updated date will be changed.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">15. Contact</h3>
        <p>For privacy questions or requests, contact:<br/>
        Veneer Digital Studio<br/>
        Email: <a href="mailto:studio@veneerdigital.co.za" className="text-[#F27D26] hover:underline">studio@veneerdigital.co.za</a><br/>
        Website: <a href="https://www.veneerdigital.co.za" className="text-[#F27D26] hover:underline">https://www.veneerdigital.co.za</a></p>
      </section>
    </div>
  );
}

function PopiaPolicy() {
  return (
    <div className="space-y-10 text-white/70 font-geist leading-relaxed text-[15px]">
      <div>
        <h2 className="text-3xl font-serif text-white mb-2">POPIA Policy</h2>
        <p className="text-sm text-[#F27D26]">Updated: January 31st, 2026</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">1. Purpose of This POPIA Policy</h3>
        <p>Explain that this policy describes how Veneer Digital Studio handles personal information in line with South Africa’s Protection of Personal Information Act, 4 of 2013.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">2. Responsible Party</h3>
        <p>Veneer Digital Studio is the responsible party for personal information collected through its website, enquiry forms, communication channels, and project processes, unless otherwise agreed in writing.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">3. Personal Information Processed</h3>
        <p className="mb-2">Include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name and surname</li>
          <li>Business name</li>
          <li>Contact number</li>
          <li>Email address</li>
          <li>Location/service area</li>
          <li>Website URL</li>
          <li>Business/service details</li>
          <li>Project requirements</li>
          <li>Communication history</li>
          <li>Form submissions</li>
          <li>Technical website usage information where analytics are enabled</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">4. Purpose of Processing</h3>
        <p className="mb-2">Personal information may be processed to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Respond to website enquiries</li>
          <li>Prepare proposals and quotes</li>
          <li>Deliver website design and setup services</li>
          <li>Communicate with clients and prospects</li>
          <li>Manage projects and support requests</li>
          <li>Capture and organise leads</li>
          <li>Prepare CRM or WhatsApp follow-up workflows where requested</li>
          <li>Improve website performance and user experience</li>
          <li>Comply with legal or administrative obligations</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">5. POPIA Processing Principles</h3>
        <p className="mb-2">Explain in plain language that Veneer Digital Studio aims to comply with POPIA principles including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Accountability</li>
          <li>Processing limitation</li>
          <li>Purpose specification</li>
          <li>Further processing limitation</li>
          <li>Information quality</li>
          <li>Openness</li>
          <li>Security safeguards</li>
          <li>Data subject participation</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">6. Consent and Enquiries</h3>
        <p>Explain that submitting a form, sending a WhatsApp message, emailing the business, or requesting a consultation gives Veneer Digital Studio permission to process the submitted information for enquiry, quote, communication, and service delivery purposes.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">7. Direct Marketing</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Veneer Digital Studio may follow up with users who submitted an enquiry.</li>
          <li>Users may ask to stop receiving marketing or follow-up messages.</li>
          <li>Unsolicited electronic marketing will be handled in line with applicable POPIA rules.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">8. Security Safeguards</h3>
        <p>Explain that reasonable safeguards are used to prevent loss, misuse, unauthorised access, disclosure, alteration, or destruction of personal information. Mention that no system can be guaranteed 100% secure.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">9. Operators and Third-Party Service Providers</h3>
        <p className="mb-2">Explain that Veneer Digital Studio may use third-party operators such as:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hosting providers</li>
          <li>Domain providers</li>
          <li>Email platforms</li>
          <li>CRM tools</li>
          <li>WhatsApp/Meta services</li>
          <li>Supabase or database providers</li>
          <li>Analytics tools</li>
          <li>Form submission platforms such as Netlify Forms</li>
        </ul>
        <p className="mt-2">State that these providers may process information only where necessary for the relevant service.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">10. Data Subject Rights</h3>
        <p className="mb-2">Explain that under POPIA, users may request:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Confirmation whether personal information is held</li>
          <li>Access to personal information</li>
          <li>Correction or deletion of personal information</li>
          <li>Objection to processing where applicable</li>
          <li>Withdrawal of consent where applicable</li>
          <li>Submission of a complaint to the Information Regulator</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">11. Complaints</h3>
        <p>Explain that users may contact Veneer Digital Studio first for privacy or POPIA concerns. Users may also contact the Information Regulator South Africa through the official Information Regulator website if they believe their rights have been infringed.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">12. Retention</h3>
        <p>Explain that personal information is retained only for as long as necessary for enquiry handling, project delivery, legal, accounting, business, or legitimate follow-up purposes.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">13. Cross-Border Processing</h3>
        <p>Explain that some third-party platforms may process information outside South Africa. Veneer Digital Studio will use reasonable care when selecting service providers.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">14. Information Officer</h3>
        <p>Information Officer:<br/>
        Veneer Digital Studio<br/>
        Email: <a href="mailto:studio@veneerdigital.co.za" className="text-[#F27D26] hover:underline">studio@veneerdigital.co.za</a></p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">15. Contact</h3>
        <p>For POPIA-related requests, contact:<br/>
        Veneer Digital Studio<br/>
        Email: <a href="mailto:studio@veneerdigital.co.za" className="text-[#F27D26] hover:underline">studio@veneerdigital.co.za</a><br/>
        Website: <a href="https://www.veneerdigital.co.za" className="text-[#F27D26] hover:underline">https://www.veneerdigital.co.za</a></p>
      </section>
    </div>
  );
}
