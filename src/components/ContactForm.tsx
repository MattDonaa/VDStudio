/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Send, Check, ShieldCheck, PhoneCall, Code } from "lucide-react";
import { LeadSubmission } from "../types";

// Placeholder Endpoint declarations
const CRM_LEAD_ENDPOINT = "YOUR_CRM_LEAD_ENDPOINT_HERE";
const WHATSAPP_NUMBER = "27657319062"; // Real business WhatsApp line

interface ContactFormProps {
  selectedInterest: string;
}

export default function ContactForm({ selectedInterest }: ContactFormProps) {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [packageInterest, setPackageInterest] = useState("Not sure yet");
  const [timeline, setTimeline] = useState("1-3 Months");
  const [message, setMessage] = useState("");
  const [wantsWhatsappCrm, setWantsWhatsappCrm] = useState(false);

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState<LeadSubmission | null>(null);

  // Sync package interest when selected from packages list
  useEffect(() => {
    if (selectedInterest) {
      if (selectedInterest.includes("Raw HTML")) {
        setPackageInterest("Raw HTML Website Delivery");
      } else if (selectedInterest.includes("Hosting Setup")) {
        setPackageInterest("Website Build + Hosting Setup");
      } else if (selectedInterest.includes("Premium Lead-Capture") || selectedInterest.includes("Lead System")) {
        setPackageInterest("Premium Lead-Capture Website System");
      } else {
        setPackageInterest(selectedInterest);
      }
    }
  }, [selectedInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form telemetry payload object mapping
    const leadData: LeadSubmission = {
      fullName,
      businessName,
      phone,
      email,
      businessType,
      currentWebsite,
      location,
      packageInterest,
      timeline,
      message,
      wantsWhatsappCrm,
      leadSource: "Veneer Digital Studio Website",
      pipelineStage: "New Enquiry",
      createdAt: new Date().toISOString(),
    };

    // Make live validation simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setLastSubmittedLead(leadData);

      // Log telemetry object for debugging console logs
      console.log("Veneer DS Lead Object Generated:", leadData);

      /*
        TODO: Connect this form to the wacrm lead capture endpoint
        // fetch(CRM_LEAD_ENDPOINT, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(leadData)
        // })
        
        TODO: Send this enquiry to Supabase or CRM webhook
        TODO: Track this CTA click in Google Analytics or Facebook Pixel
        TODO: Trigger live WhatsApp follow-up redirect if user is on mobile
      */
    }, 1200);
  };

  const resetForm = () => {
    setFullName("");
    setBusinessName("");
    setPhone("");
    setEmail("");
    setBusinessType("");
    setCurrentWebsite("");
    setLocation("");
    setPackageInterest("Not sure yet");
    setTimeline("1-3 Months");
    setMessage("");
    setWantsWhatsappCrm(false);
    setSubmitSuccess(false);
    setLastSubmittedLead(null);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Copywriting */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] block mb-2">
              Secure Project Application
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Let’s Align Your <span className="serif-font text-[#F27D26]">Digital Presence</span>
            </h2>
            <p className="mt-4 text-sm text-white/50 leading-relaxed font-light">
              Submit your woodwork/kitchen renovation business specifications below. We review every submission manually over your actual service area constraints so you receive a verified scope of launch options.
            </p>

            {/* Direct consultation call block */}
            <div className="mt-8 p-6 rounded-xl border border-white/5 bg-[#0A0A0A]/80 glass flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#F27D26]/10 text-[#F27D26] shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Need Direct Discussion?</h4>
                <p className="text-xs text-white/40 mt-1 leading-relaxed font-light">
                  Connect instantly to our WhatsApp desk. Avoid generic ticketing.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Veneer%20Digital%2520Studio%2C%20I%20want%2520to%20discuss%20a%20website%20build.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F27D26] font-semibold mt-2 hover:text-[#F27D26]/80 transition"
                >
                  WhatsApp: +27657319062
                </a>
              </div>
            </div>

            {/* Privacy details */}
            <div className="mt-6 flex items-center gap-2.5 text-[10px] text-white/45 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#F27D26]/80" />
              <span>Compliant with POPI Act (South Africa). Secure transmission.</span>
            </div>

            {/* Predefined JSON Object Viewer (Interactive Touchpoint) */}
            {lastSubmittedLead && (
              <div className="mt-8 p-6 rounded-2xl border border-green-500/20 bg-green-500/[0.02] animate-fade-in" data-aos="zoom-in">
                <div className="flex items-center gap-2 mb-3 text-green-400 font-semibold text-xs font-geist">
                  <Code className="w-4 h-4" />
                  <span>CRM Webhook Payload Ready (wacrm schema)</span>
                </div>
                <div className="p-4 bg-black/80 rounded-xl border border-white/5 overflow-x-auto">
                  <pre className="text-[10px] text-orange-400 font-mono leading-relaxed">
                    {JSON.stringify(lastSubmittedLead, null, 2)}
                  </pre>
                </div>
                <p className="text-[10px] text-white/40 mt-3 italic leading-relaxed">
                  ✓ The values above represent the telemetry package structured for database injection endpoints on submission callback.
                </p>
              </div>
            )}
          </div>

          {/* Right Column Interactive Form Form */}
          <div className="lg:col-span-7 bg-[#050505] glass p-8 rounded-xl relative overflow-hidden" data-aos="fade-left">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#F27D26] to-[#A85000]"></div>

            {!submitSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual Title */}
                <div className="border-b border-white/5 pb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist">Project Application Form</h3>
                  <p className="text-xs text-white/40 mt-1 font-geist">Please configure your specifications honestly so we can generate accurate scoping.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Johan van der Merwe"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Cabinetry / Wood Brand Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Cape Town Joiners"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Contact Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +27 82 123 4567"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. johan@capejoinery.co.za"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Type of Business */}
                  <div>
                    <label htmlFor="businessType" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Type of Custom woodcraft *
                    </label>
                    <input
                      id="businessType"
                      type="text"
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      placeholder="e.g. Kitchen Renovation, Bespoke Cabinetry"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>

                  {/* Location Area */}
                  <div>
                    <label htmlFor="location" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Location / Service Area *
                    </label>
                    <input
                      id="location"
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Knysna, Constantia, Sandton"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Package Interest */}
                  <div>
                    <label htmlFor="packageInterest" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Build Package Target
                    </label>
                    <select
                      id="packageInterest"
                      value={packageInterest}
                      onChange={(e) => setPackageInterest(e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white focus:outline-none transition duration-200"
                    >
                      <option value="Raw HTML Website Delivery">Raw HTML Website Delivery</option>
                      <option value="Website Build + Hosting Setup">Website Build + Hosting Setup</option>
                      <option value="Premium Lead-Capture Website System">Premium Lead-Capture Website System</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label htmlFor="timeline" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                      Target Project Timeline
                    </label>
                    <select
                      id="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white focus:outline-none transition duration-200"
                    >
                      <option value="Immediately">Immediately (Ready to launch)</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="Beyond 3 Months">Beyond 3 Months</option>
                    </select>
                  </div>
                </div>

                {/* Current Website URL */}
                <div>
                  <label htmlFor="currentWebsite" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                    Current Website URL (optional)
                  </label>
                  <input
                    id="currentWebsite"
                    type="url"
                    value={currentWebsite}
                    onChange={(e) => setCurrentWebsite(e.target.value)}
                    placeholder="e.g. www.capejoinery.co.za"
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                  />
                </div>

                {/* Message Textbox */}
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                    Project Requirements / Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your woodworking specialty, cabinet count, showroom size, or typical client project budget..."
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#F27D26]/80 rounded-sm px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition duration-200"
                  ></textarea>
                </div>

                {/* Active CRM Checkbox Option */}
                <div className="p-4 bg-[#F27D26]/5 rounded-xl border border-[#F27D26]/20 flex items-start gap-3">
                  <div className="flex h-5 items-center">
                    <input
                      id="wantsWhatsappCrm"
                      type="checkbox"
                      checked={wantsWhatsappCrm}
                      onChange={(e) => setWantsWhatsappCrm(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-350 text-orange-600 focus:ring-orange-550 accent-orange-550"
                    />
                  </div>
                  <div className="text-xs">
                    <label htmlFor="wantsWhatsappCrm" className="font-bold uppercase text-[10px] tracking-wider text-white cursor-pointer select-none">
                      Connect to a WhatsApp CRM workflow
                    </label>
                    <p className="text-[11px] text-white/40 mt-0.5 leading-normal font-light">
                      Select this check if you are interested in trying out automatic mobile pipelines to qualify client budgets before wasting travel mileage.
                    </p>
                  </div>
                </div>

                {/* Secure Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F27D26] hover:bg-white text-black text-xs font-bold uppercase tracking-widest disabled:from-neutral-700 disabled:to-neutral-800 py-4 px-6 rounded-sm text-center transition duration-300 shadow-xl shadow-orange-500/5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Submit Project Application</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Success Modal Inline State (No browser alert)
              <div className="py-12 px-6 text-center animate-fade-in">
                <div className="w-16 h-16 bg-[#F27D26]/10 rounded-full flex items-center justify-center text-[#F27D26] mx-auto mb-6 shadow-xl border border-[#F27D26]/20">
                  <Check className="w-8 h-8 font-extrabold" />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist">Application Received</h3>
                
                <p className="text-sm text-white/40 leading-relaxed mt-4 max-w-lg mx-auto font-light">
                  Your project enquiry has been received. Veneer Digital Studio will review your details and respond shortly.
                </p>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-sm border border-white/20 hover:bg-white/5 text-xs font-bold uppercase tracking-widest text-[#F27D26] hover:text-white transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Veneer%20Digital%20Studio%20I%20just%20submitted%20my%20form%20for%20${businessName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F27D26] hover:bg-white border border-[#F27D26] hover:border-white text-xs font-bold uppercase tracking-widest text-black transition duration-300 rounded-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct WhatsApp Fasttrack</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
