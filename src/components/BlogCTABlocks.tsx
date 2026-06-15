import React from "react";
import { MessageSquare, Calendar, Compass, ArrowUpRight, CheckCircle } from "lucide-react";

interface CTAProps {
  onStartProject?: () => void;
}

export function LeadAuditCTA({ onStartProject }: CTAProps) {
  const triggerAuditClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#0a0a0d] border border-[#F27D26]/20 bg-gradient-to-br from-black via-[#08080a] to-[#120902] rounded-3xl p-6 sm:p-8 md:p-10 my-12 animate-fade-in">
      {/* Light glow backdrops */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#F27D26]/[0.02] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#F27D26]/[0.01] blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#F27D26] uppercase mb-4 py-1 px-3 bg-[#F27D26]/5 rounded-full border border-[#F27D26]/10">
            <Calendar className="w-3 h-3" />
            <span>High-Ticket Lead Acceleration</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white mb-4 leading-tight">
            Book a Free <span className="serif-font text-[#F27D26] italic">Kitchen & Cupboard Lead Audit</span>
          </h3>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light mb-6">
            Stop losing premium kitchen renovations to contractors who compete on low prices. We will manually inspect your local service-area SEO positioning, review portfolios, and reveal exact steps to hook R150,000+ custom joinery commissions in your city.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/50 mb-2 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#F27D26]/80" />
              <span>Full competitor inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#F27D26]/80" />
              <span>South African SEO diagnosis</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-full md:w-auto self-stretch md:self-auto flex items-center justify-center">
          <button
            onClick={triggerAuditClick}
            className="w-full md:w-auto px-6 py-4 bg-gradient-to-r from-[#F27D26] to-[#D56512] hover:brightness-110 text-black font-extrabold uppercase tracking-widest text-[11px] rounded-full transition-all duration-300 shadow-xl shadow-[#F27D26]/10 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Claim Free Audit Blueprint</span>
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppVDSCTA() {
  const launchWhatsApp = () => {
    window.open("https://wa.me/27657319062?text=Hello%20Veneer%20Digital%20Studio%2C%20I%20am%20interested%20in%20upgrading%20my%20woodworking%2Fcabinetry%20website%20and%20leads%20system.", "_blank");
  };

  return (
    <div className="bg-[#080808]/70 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl p-6 sm:p-8 my-8 text-center relative overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-[#F27D26]/[0.005] pointer-events-none" />
      <div className="flex flex-col items-center max-w-md mx-auto">
        <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 border border-[#25D366]/20 shadow-[0_0_15px_rgba(37,211,102,0.1)]">
          <MessageSquare className="w-5 h-5 text-[#25D366]" />
        </div>
        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
          Want immediate, direct answers?
        </h4>
        <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
          Skip the contact emails. Chat directly with the VDS leads and woodwork-system specialists over WhatsApp. Ask us about custom pricing for kitchen builders & cabinet makers.
        </p>
        <button
          onClick={launchWhatsApp}
          className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-extrabold uppercase tracking-wider text-[11px] rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10 cursor-pointer"
        >
          <span>WhatsApp VDS Studio</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}

export function LeadGenerationCTA({ onStartProject }: CTAProps) {
  const triggerClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-[#0c0c0e] border border-white/5 hover:border-[#F27D26]/10 rounded-3xl p-6 sm:p-8 md:p-10 my-10 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
        <div className="w-12 h-12 shrink-0 bg-[#F27D26]/10 rounded-2xl flex items-center justify-center border border-[#F27D26]/20">
          <Compass className="w-6 h-6 text-[#F27D26]" />
        </div>
        <div className="flex-1">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
            Explore Kitchen Renovation Lead Systems
          </h4>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-4 sm:mb-0">
            Learn how we build custom qualification fields, dynamic showroom gallery layouts, and localized structural tags specifically aligned to command Johannesburg, Cape Town, and Durban kitchen design searches.
          </p>
        </div>
        <button
          onClick={triggerClick}
          className="shrink-0 w-full md:w-auto px-5 py-3 border border-[#F27D26] hover:bg-[#F27D26] hover:text-black font-extrabold uppercase tracking-wider text-[10px] rounded-full transition-all cursor-pointer text-[#F27D26] flex items-center justify-center gap-2"
        >
          <span>Examine Systems</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
