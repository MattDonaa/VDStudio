/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Eye, HelpCircle, PhoneCall, Workflow, LayoutList, ClipboardCheck } from "lucide-react";

export default function LeadFlowVisual() {
  const pipelineSteps = [
    {
      id: "visitor",
      label: "1. Website Visitor",
      desc: "An interested client arrives on your high-end online presence.",
      icon: <Users className="w-5 h-5 text-[#F27D26]" />,
    },
    {
      id: "submit",
      label: "2. Project Enquiry",
      desc: "Visitor submits a structured interest form with layout specs.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#F27D26]" />,
    },
    {
      id: "dashboard",
      label: "3. Lead Dashboard",
      desc: "Enquiry details instantly populate your simple tracking console.",
      icon: <Eye className="w-5 h-5 text-[#F27D26]" />,
    },
    {
      id: "whatsapp",
      label: "4. WhatsApp Follow-up",
      desc: "Open chat automatically pre-filled with project scope notes.",
      icon: <PhoneCall className="w-5 h-5 text-[#F27D26] animate-bounce" />,
    },
    {
      id: "quote",
      label: "5. Quote / Site Visit",
      desc: "Dispatch your official proposal or schedule a live workspace walkthrough.",
      icon: <HelpCircle className="w-5 h-5 text-[#F27D26]" />,
    },
    {
      id: "won",
      label: "6. Won Job",
      desc: "Secure high-value carpentry, cupboard, or kitchen contracts.",
      icon: <Workflow className="w-5 h-5 text-[#F27D26]" />,
    },
  ];

  return (
    <section id="lead-flow" className="scroll-mt-28 py-24 bg-[#050505]/60 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono">
            <LayoutList className="w-3.5 h-3.5" />
            <span>Structured Lead Funnel Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white animate-fade-in">
            From website visitor <span className="serif-font text-[#F27D26]">to followed-up lead.</span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed font-light max-w-xl mx-auto">
            Your website should not only look premium. It should help your team see who enquired, what they need, and who still needs follow-up.
          </p>
        </div>

        {/* Desktop Connected Lines */}
        <div className="relative mt-12">
          {/* Connector Line decoration */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#F27D26]/10 via-[#F27D26]/40 to-[#F27D26]/10 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 xl:gap-8 relative z-10">
            {pipelineSteps.map((step, idx) => (
              <div
                key={step.id}
                className="glass rounded-xl p-8 lg:p-6 xl:p-8 flex flex-col items-center text-center relative group backdrop-blur-sm hover:border-[#F27D26]/40 transition-all duration-300 shadow-lg hover:shadow-[#F27D26]/5 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Visual Circle Badge */}
                <div className="w-12 h-12 rounded-lg bg-[#F27D26]/10 group-hover:bg-[#F27D26]/20 flex items-center justify-center mb-5 transition-colors duration-300 shadow">
                  {step.icon}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist group-hover:text-[#F27D26] transition-colors duration-200 mt-2">
                  {step.label}
                </h3>
                
                <p className="text-xs text-white/50 mt-3 leading-relaxed font-geist">
                  {step.desc}
                </p>

                {/* Micro chevron arrow between mobile columns */}
                <div className="hidden lg:group-last:hidden group-last:hidden absolute -right-4 xl:-right-5 top-[52px] text-[#F27D26]/30 font-bold z-20">
                  ➜
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Flow text line */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-sm font-semibold font-mono tracking-widest text-[#F27D26] uppercase">
            No more guessing who enquired, who replied, and who still needs follow-up.
          </p>
        </div>

        {/* Future CRM details alert card */}
        <div className="mt-16 glass border-[#F27D26]/20 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6" data-aos="zoom-in">
          <div className="p-4 bg-[#F27D26]/10 rounded-lg shrink-0">
            <Workflow className="w-8 h-8 text-[#F27D26]" />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#F27D26] uppercase block mb-1">
              Backend Integration Ready (wacrm compatibility)
            </span>
            <h4 className="text-white font-medium text-lg font-geist">
              Prepared for your WhatsApp Pipeline Management
            </h4>
            <p className="text-xs text-white/40 leading-relaxed mt-1.5 font-geist">
              Veneer Digital Studio builds lead objects fully compatible with CRM webhooks like <span className="text-[#F27D26] font-mono font-semibold">wacrm</span>, meaning form entries can trigger automatic customer logs, categorize joinery projects, dispatch Slack notifications, and start WhatsApp chatbot reminders instantly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
