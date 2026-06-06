/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Check, X, HelpCircle, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";

// TODO: Replace payment placeholder links with Payfast, Paystack, Ozow, or approved payment gateway checkout links.
const STARTER_PAYMENT_LINK = "YOUR_STARTER_PAYMENT_LINK_HERE";
const GROWTH_PAYMENT_LINK = "YOUR_GROWTH_PAYMENT_LINK_HERE";

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

interface PackageItem {
  id: "starter" | "growth" | "premium";
  title: string;
  price: string;
  description: string;
  included: string[];
  excluded: string[];
  ctaText: string;
  smallNote: string;
  isPopular: boolean;
}

const PACKAGES_DATA: PackageItem[] = [
  {
    id: "starter",
    title: "Premium Website Presence",
    price: "R699/month",
    description: "For woodworkers and kitchen businesses that need a high-end website that makes their workmanship look professional online.",
    included: [
      "Premium homepage and service sections",
      "Mobile-friendly design",
      "Gallery or project showcase",
      "Contact and WhatsApp calls-to-action",
      "SEO-ready structure",
      "Raw HTML delivery option available"
    ],
    excluded: [
      "Lead dashboard connection",
      "Lead status tracking",
      "Review request template support"
    ],
    ctaText: "Explore Website Presence",
    smallNote: "12-month minimum term. Build for high workmanship prestige.",
    isPopular: false
  },
  {
    id: "growth",
    title: "Website + Launch Setup",
    price: "R999/month",
    description: "For businesses that want the website built, deployed, and connected to hosting and domain setup without technical confusion.",
    included: [
      "Website build and deployment support",
      "Domain and hosting connection guidance",
      "Contact form setup",
      "WhatsApp button setup",
      "Google-ready metadata",
      "Launch support"
    ],
    excluded: [
      "Lead status tracking",
      "WhatsApp-ready follow-up workflow",
      "Review request template support"
    ],
    ctaText: "Plan My Launch",
    smallNote: "12-month minimum term. Best for complete stress-free launch guidance.",
    isPopular: true
  },
  {
    id: "premium",
    title: "Website Lead Control System",
    price: "From R1,699/month",
    description: "For serious wood, cabinetry, and kitchen businesses that want every enquiry captured, tracked, and ready for WhatsApp follow-up.",
    included: [
      "Website enquiry capture",
      "Lead dashboard connection",
      "Lead status tracking",
      "WhatsApp-ready follow-up workflow",
      "Review request template support",
      "Monthly monitoring and support"
    ],
    excluded: [],
    ctaText: "See the Lead System",
    smallNote: "Recommended for serious businesses wanting to master their incoming enquiries.",
    isPopular: false
  }
];

export default function Packages({ onSelectPackage }: PackagesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<PackageItem | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [servicesOffered, setServicesOffered] = useState("");
  const [ownDomain, setOwnDomain] = useState("No");
  const [preferredDomain, setPreferredDomain] = useState("");
  const [alternativeDomain, setAlternativeDomain] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [hasGbp, setHasGbp] = useState("Not sure");
  const [hasLogo, setHasLogo] = useState("No");
  const [hasPhotos, setHasPhotos] = useState("No");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [preferredStyle, setPreferredStyle] = useState("Not sure yet");
  const [message, setMessage] = useState("");
  const [checkboxTerm, setCheckboxTerm] = useState(false);
  const [checkboxDomain, setCheckboxDomain] = useState(false);
  const [checkboxReview, setCheckboxReview] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFormError, setShowFormError] = useState("");

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCtaClick = (pkg: PackageItem) => {
    if (pkg.id === "premium") {
      // Consultation-based: scroll to main project form / enquiry structure in standard page
      onSelectPackage("Premium Lead System");
    } else {
      // Starter or Growth monthly package: Open custom modal checkout form flow
      setSelectedPkg(pkg);
      resetFormFields();
      setIsModalOpen(true);
    }
  };

  const resetFormFields = () => {
    setFullName("");
    setBusinessName("");
    setPhone("");
    setEmail("");
    setBusinessType("");
    setServicesOffered("");
    setOwnDomain("No");
    setPreferredDomain("");
    setAlternativeDomain("");
    setCurrentWebsite("");
    setLocationValue("");
    setHasGbp("Not sure");
    setHasLogo("No");
    setHasPhotos("No");
    setWhatsappNumber("");
    setPreferredStyle("Not sure yet");
    setMessage("");
    setCheckboxTerm(false);
    setCheckboxDomain(false);
    setCheckboxReview(false);
    setShowFormError("");
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFormError("");

    if (!selectedPkg) return;

    // Checks
    if (!fullName || !businessName || !phone || !email || !businessType || !locationValue || !whatsappNumber) {
      setShowFormError("Please fill out all required contact and business information fields.");
      return;
    }

    if (!checkboxTerm || !checkboxDomain || !checkboxReview) {
      setShowFormError("You must accept all terms and conditions checkboxes to proceed.");
      return;
    }

    setIsSubmitting(true);

    const bodyArgs = {
      "form-name": "vds-package-order",
      selectedPackage: selectedPkg.title,
      packagePrice: selectedPkg.price,
      fullName,
      businessName,
      phone,
      email,
      businessType,
      mainServices: servicesOffered,
      ownsDomain: ownDomain,
      preferredDomain,
      alternativeDomain,
      currentWebsite: currentWebsite ? `https://${currentWebsite}` : "",
      location: locationValue,
      hasGoogleBusinessProfile: hasGbp,
      hasLogo,
      hasBusinessPhotos: hasPhotos,
      whatsappNumber,
      preferredWebsiteStyle: preferredStyle,
      message,
      acceptedMinimumTerm: checkboxTerm ? "true" : "false",
      acceptedDomainNotice: checkboxDomain ? "true" : "false",
      acceptedReviewBeforeActivation: checkboxReview ? "true" : "false",
      paymentStatus: "Pending Payment",
      orderStatus: "New Order",
      leadSource: "VDS Website Package Order",
      createdAt: new Date().toISOString()
    };

    // TODO: During beta, Netlify Forms remains the fallback lead capture system.
    // TODO: Once CRM endpoint is stable, CRM submission can become the primary source.
    const CRM_ORDERS_ENDPOINT = "https://crm.veneerdigital.co.za/api/website-orders";

    // Strict CRM validation rules (JavaScript booleans instead of string representations)
    const crmPayload = {
      selectedPackage: selectedPkg.title,
      packagePrice: selectedPkg.price,
      fullName,
      businessName,
      phone,
      email,
      businessType,
      mainServices: servicesOffered,
      preferredDomain,
      alternativeDomain,
      ownsDomain: ownDomain === "Yes",
      currentWebsite: currentWebsite ? `https://${currentWebsite}` : "",
      location: locationValue,
      hasGoogleBusinessProfile: hasGbp === "Yes",
      hasLogo: hasLogo === "Yes",
      hasBusinessPhotos: hasPhotos === "Yes",
      whatsappNumber,
      preferredWebsiteStyle: preferredStyle,
      message,
      acceptedMinimumTerm: checkboxTerm,
      acceptedDomainNotice: checkboxDomain,
      acceptedReviewBeforeActivation: checkboxReview,
      paymentStatus: "Pending Payment",
      orderStatus: "New Order",
      leadSource: "VDS Website Package Order",
      createdAt: bodyArgs.createdAt
    };

    const crmPromise = fetch(CRM_ORDERS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(crmPayload)
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error(`CRM endpoint returned HTTP ${res.status}`);
      }
      return true;
    });

    const netlifyPromise = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(bodyArgs as any).toString()
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error(`Netlify returned HTTP ${res.status}`);
      }
      return true;
    });

    Promise.allSettled([crmPromise, netlifyPromise]).then((results) => {
      const crmResult = results[0];
      const netlifyResult = results[1];

      const crmSucceeded = crmResult.status === "fulfilled";
      const netlifySucceeded = netlifyResult.status === "fulfilled";

      if (crmSucceeded && !netlifySucceeded) {
        console.warn("CRM website-orders succeeded but Netlify Forms backup fell back:", (netlifyResult as PromiseRejectedResult).reason);
      }

      if (crmSucceeded) {
        setIsSubmitting(false);
        const redirectLink = selectedPkg.id === "starter" ? STARTER_PAYMENT_LINK : GROWTH_PAYMENT_LINK;
        if (redirectLink && redirectLink.startsWith("http") && !redirectLink.includes("YOUR_")) {
          window.location.href = redirectLink;
        } else {
          setIsSuccess(true);
        }
      } else {
        console.error("CRM website-orders submission failed during beta:", (crmResult as PromiseRejectedResult).reason);
        setIsSubmitting(false);
        setShowFormError("We could not send your order to the VDS dashboard. Please try again or contact us directly.");
      }
    });
  };

  return (
    <section id="project-packages" className="py-24 relative overflow-hidden bg-black">
      {/* Background orange circular glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Mouth-Watering Web Presence Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
            Project Packages <span className="serif-font text-[#F27D26]">Tailored to Your Craft</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-geist max-w-2xl mx-auto leading-relaxed">
            Choose a managed website presence built for South African carpenters, kitchen remodellers, interior designers, cabinet makers, and woodwork businesses that want to look professional online and capture better enquiries.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`glass p-8 rounded-xl flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "border-2 border-[#F27D26] md:-translate-y-2 scale-102 bg-white/[0.04] shadow-2xl shadow-orange-500/10"
                    : "hover:border-[#F27D26]/30 hover:-translate-y-1"
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F27D26] text-black text-[10px] font-bold px-4 py-1 rounded-sm uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Top copy */}
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white font-geist">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-3 min-h-[48px] font-geist leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="my-6">
                    <span className="text-3.5xl font-bold text-white font-geist tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-[#F27D26]/80 text-[9px] font-bold uppercase tracking-wider block mt-2 font-mono">
                      ✦ Managed Web Presence
                    </span>
                  </div>

                  {/* Bullet points mapping */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider block mb-3 font-mono">Included:</span>
                    <ul className="space-y-3">
                      {pkg.included.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                          <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400 mt-0.5" />
                          <span className="font-geist text-xs text-white/70">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Section */}
                  {pkg.excluded.length > 0 && (
                    <div className="mb-8 pt-4 border-t border-white/5">
                      <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider block mb-3 font-mono">Not Included:</span>
                      <ul className="space-y-3">
                        {pkg.excluded.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/40">
                            <X className="w-3.5 h-3.5 shrink-0 text-red-400/60 mt-0.5" />
                            <span className="font-geist text-xs text-white/40 line-through decoration-white/10">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Primary Button trigger */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => handleCtaClick(pkg)}
                    className={`block w-full py-3.5 px-4 text-center text-xs font-bold uppercase tracking-widest transition duration-300 cursor-pointer rounded-sm ${
                      isPopular
                        ? "bg-[#F27D26] text-black hover:bg-white hover:text-black shadow-lg shadow-orange-500/10"
                        : "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                  <p className="text-[10px] text-white/30 text-center mt-3 font-geist leading-tight">
                    {pkg.smallNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Subtle terms overlay notes */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-3 text-[11px] text-white/40 leading-relaxed font-sans" data-aos="fade-up">
          <p className="text-white/60 font-medium leading-relaxed">
            The monthly system fee keeps your lead dashboard active, your forms connected, your enquiry capture monitored, and your follow-up workflow ready — so your website continues working as a sales system, not just an online brochure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] text-[#F27D26]/70 font-mono text-center pt-2 border-t border-white/5 uppercase tracking-wider">
            <span>• Lead dashboard access</span>
            <span>• WhatsApp-ready view</span>
            <span>• Enquiry tracking</span>
            <span>• System monitoring</span>
          </div>
          <p className="text-[10px] text-white/30 font-mono pt-2">
            * Monthly packages are subject to a 12-month minimum contract term. Domain registration, email setup and annual domain renewal fees are billed separately where applicable.
          </p>
        </div>
      </div>

      {/* Premium Checkout Placement Modal */}
      {isModalOpen && selectedPkg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] flex flex-col animate-[zoomIn_0.2s_ease-out]"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#F27D26] tracking-wider font-mono">
                  Order Placement Flow
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                  Start Your VDS Website Plan
                </h3>
                <p className="text-xs text-white/50 mt-1">
                  Selected Profile: <strong className="text-white">{selectedPkg.title}</strong> — <span className="text-[#F27D26] font-bold">{selectedPkg.price}</span>
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-sm text-white/40 hover:text-white hover:bg-white/5 transition-colors absolute top-4 right-4 md:top-6 md:right-8"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            {isSuccess ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center py-12 px-4 space-y-6 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26] animate-bounce shrink-0">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Order Received Successfully</h2>
                <p className="text-sm text-white/60 max-w-md leading-relaxed font-geist">
                  Your enquiry has been received. Veneer Digital Studio will review your details and respond shortly response.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setIsModalOpen(false);
                  }}
                  className="px-8 py-3.5 bg-[#F27D26] hover:bg-white text-black font-bold uppercase tracking-widest text-[11px] rounded-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form 
                name="vds-package-order"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="flex-grow overflow-y-auto pt-6 space-y-6 pr-1 custom-scrollbar"
              >
                <input type="hidden" name="form-name" value="vds-package-order" />
                
                {/* Internal Smart Pricing disclaimer for developer and Client Onboarding success message */}
                <div className="p-4 bg-[#F27D26]/5 border border-[#F27D26]/20 rounded-md">
                  <p className="text-xs text-white/80 leading-relaxed font-geist">
                    <ShieldCheck className="w-4 h-4 text-[#F27D26] inline mr-1.5 shrink-0 align-sub" />
                    <strong>Onboarding Note:</strong> Once your order and payment are received, Veneer Digital Studio will review your details, confirm your domain requirements, and begin the onboarding process.
                  </p>
                </div>

              {/* Error indicator */}
              {showFormError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-xs text-red-200">
                  {showFormError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Prefilled Read Only package representation */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    1. Selected Package
                  </label>
                  <input
                    id="selectedPackage"
                    type="text"
                    name="selectedPackage"
                    readOnly
                    value={selectedPkg.title}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-sm px-4 py-3 text-sm text-[#F27D26] font-bold focus:outline-none cursor-not-allowed select-none"
                  />
                </div>

                {/* 2. Package Price */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    2. Package Price
                  </label>
                  <input
                    id="packagePrice"
                    type="text"
                    name="packagePrice"
                    readOnly
                    value={selectedPkg.price}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-sm px-4 py-3 text-sm text-[#F27D26] font-bold focus:outline-none cursor-not-allowed select-none"
                  />
                </div>

                {/* 3. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    3. Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 4. Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    4. Business Name *
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Cape Town Carpentry"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 5. Contact Phone Number */}
                <div>
                  <label htmlFor="modalPhone" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    5. Contact Phone *
                  </label>
                  <input
                    id="modalPhone"
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +27 82 123 4567"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 6. Email Address */}
                <div>
                  <label htmlFor="modalEmail" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    6. Email Address *
                  </label>
                  <input
                    id="modalEmail"
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. hello@business.co.za"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 7. Business Type */}
                <div>
                  <label htmlFor="modalBusinessType" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    7. Business Type *
                  </label>
                  <input
                    id="modalBusinessType"
                    type="text"
                    name="businessType"
                    required
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Cabinet Maker, Kitchen Remodeller"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 8. Main Services Offered */}
                <div>
                  <label htmlFor="servicesOffered" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    8. Main Services Offered
                  </label>
                  <input
                    id="servicesOffered"
                    type="text"
                    name="mainServices"
                    value={servicesOffered}
                    onChange={(e) => setServicesOffered(e.target.value)}
                    placeholder="e.g. Built-in cupboards, Timber restoration"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 9. Preferred Domain Name */}
                <div>
                  <label htmlFor="preferredDomain" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    9. Preferred Domain Name
                  </label>
                  <input
                    id="preferredDomain"
                    type="text"
                    name="preferredDomain"
                    value={preferredDomain}
                    onChange={(e) => setPreferredDomain(e.target.value)}
                    placeholder="e.g. capewoodwork.co.za"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 10. Alternative Domain Name */}
                <div>
                  <label htmlFor="alternativeDomain" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    10. Alternative Domain Name
                  </label>
                  <input
                    id="alternativeDomain"
                    type="text"
                    name="alternativeDomain"
                    value={alternativeDomain}
                    onChange={(e) => setAlternativeDomain(e.target.value)}
                    placeholder="e.g. capewoodcraft.co.za"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 11. Do you already own a domain? */}
                <div>
                  <label htmlFor="ownDomain" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    11. Do you already own a domain?
                  </label>
                  <select
                     id="ownDomain"
                     name="ownsDomain"
                     value={ownDomain}
                     onChange={(e) => setOwnDomain(e.target.value)}
                     className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                  >
                    <option value="No">No (We must register one for you)</option>
                    <option value="Yes">Yes (I own a custom domain)</option>
                  </select>
                </div>

                {/* 12. Current Website URL optional */}
                <div>
                  <label htmlFor="modalCurrentWebsite" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    12. Current Website (optional)
                  </label>
                  <div className="flex w-full bg-[#121212] border border-white/10 focus-within:border-[#F27D26]/80 rounded-sm overflow-hidden transition duration-200">
                    <span className="flex items-center pl-4 pr-1 text-white/40 text-sm select-none pointer-events-none">
                      https://
                    </span>
                    <input
                      id="modalCurrentWebsite"
                      type="text"
                      name="currentWebsite"
                      value={currentWebsite}
                      onChange={(e) => setCurrentWebsite(e.target.value.replace(/^https?:\/\//, ''))}
                      placeholder="www.rosebankjoinery.com"
                      className="w-full bg-transparent px-2 py-3 text-sm text-white placeholder-white/20 focus:outline-none outline-none border-none"
                    />
                  </div>
                </div>

                {/* 13. Business location / service area */}
                <div>
                  <label htmlFor="modalLocation" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    13. Business Location / Service Area *
                  </label>
                  <input
                    id="modalLocation"
                    type="text"
                    name="location"
                    required
                    value={locationValue}
                    onChange={(e) => setLocationValue(e.target.value)}
                    placeholder="e.g. Klerksdorp, NW & NW Gauteng"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 14. Do you have a Google Business Profile? */}
                <div>
                  <label htmlFor="hasGbp" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    14. Google Business Profile setup?
                  </label>
                  <select
                    id="hasGbp"
                    name="hasGoogleBusinessProfile"
                    value={hasGbp}
                    onChange={(e) => setHasGbp(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                  >
                    <option value="Yes">Yes (It is verified and live)</option>
                    <option value="No">No (I need to build one)</option>
                    <option value="Not sure">Not sure (I might have one)</option>
                  </select>
                </div>

                {/* 15. Do you have a logo? */}
                <div>
                  <label htmlFor="hasLogo" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    15. Do you have a logo?
                  </label>
                  <select
                    id="hasLogo"
                    name="hasLogo"
                    value={hasLogo}
                    onChange={(e) => setHasLogo(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                  >
                    <option value="No">No (Veneer can assist with basic styling)</option>
                    <option value="Yes">Yes (I already have vectors/PNG)</option>
                  </select>
                </div>

                {/* 16. Do you have business photos? */}
                <div>
                  <label htmlFor="hasPhotos" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    16. Do you have business photos?
                  </label>
                  <select
                    id="hasPhotos"
                    name="hasBusinessPhotos"
                    value={hasPhotos}
                    onChange={(e) => setHasPhotos(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                  >
                    <option value="No">No (We will use high-quality carpentry stock visuals)</option>
                    <option value="Yes">Yes (I have pictures of our setups and team)</option>
                  </select>
                </div>

                {/* 17. WhatsApp number to use on website */}
                <div>
                  <label htmlFor="whatsappNumber" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    17. WhatsApp line for click-to-chat *
                  </label>
                  <input
                    id="whatsappNumber"
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. +27 65 731 9062"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* 18. Preferred Website Style */}
                <div className="md:col-span-2">
                  <label htmlFor="preferredStyle" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    18. Preferred Website Style
                  </label>
                  <select
                    id="preferredStyle"
                    name="preferredWebsiteStyle"
                    value={preferredStyle}
                    onChange={(e) => setPreferredStyle(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3.5 text-sm text-white focus:outline-none transition duration-200"
                  >
                    <option value="Premium dark luxury">Premium dark luxury</option>
                    <option value="Clean modern">Clean modern</option>
                    <option value="Warm natural wood">Warm natural wood</option>
                    <option value="Minimal interior studio">Minimal interior studio</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* 19. Short description / message */}
                <div className="md:col-span-2">
                  <label htmlFor="modalMessage" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    19. Short Project Description / Messaging
                  </label>
                  <textarea
                    id="modalMessage"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Briefly describe what your business does and any special requests..."
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Compliance Checkboxes Section */}
              <div className="pt-6 border-t border-white/10 space-y-3 shrink-0">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptedMinimumTerm"
                    checked={checkboxTerm}
                    onChange={(e) => setCheckboxTerm(e.target.checked)}
                    className="mt-1 accent-[#F27D26] bg-[#121212] border-white/10 rounded cursor-pointer"
                  />
                  <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors leading-relaxed selection:bg-orange-500/30">
                    20. * I understand this plan has a 12-month minimum term.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptedDomainNotice"
                    checked={checkboxDomain}
                    onChange={(e) => setCheckboxDomain(e.target.checked)}
                    className="mt-1 accent-[#F27D26] bg-[#121212] border-white/10 rounded cursor-pointer"
                  />
                  <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors leading-relaxed selection:bg-orange-500/30">
                    21. * I understand domain registration/renewal fees may be billed separately where applicable.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptedReviewBeforeActivation"
                    checked={checkboxReview}
                    onChange={(e) => setCheckboxReview(e.target.checked)}
                    className="mt-1 accent-[#F27D26] bg-[#121212] border-white/10 rounded cursor-pointer"
                  />
                  <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors leading-relaxed selection:bg-orange-500/30">
                    22. * I understand VDS will review my order details before activating the monthly service.
                  </span>
                </label>
              </div>

              {/* Payment CTA Area */}
              <div className="pt-6 border-t border-white/10 bg-white/[0.01] p-4 rounded-md space-y-4 shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-geist">
                      <CreditCard className="w-4 h-4 text-[#F27D26]" />
                      Proceed to Secure Checkout
                    </h4>
                    <p className="text-[10px] text-white/50 mt-1 max-w-sm">
                      We process recurring subscription setups securely. You will sign your direct debit authorization link right after this submission.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/40 block font-mono uppercase">Setup Price</span>
                    <strong className="text-[#F27D26] text-xl font-geist">{selectedPkg.price}</strong>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#F27D26] hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition duration-300 flex items-center justify-center gap-2 select-none"
                >
                  {isSubmitting ? (
                    <span>Registering Order Details...</span>
                  ) : (
                    <>
                      <span>Proceed to Secure Payment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          </div>
        </div>
      )}
    </section>
  );
}
