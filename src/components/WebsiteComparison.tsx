/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, X } from "lucide-react";

export default function WebsiteComparison() {
  const normalPoints = [
    "Visitor sees your number",
    "WhatsApp messages get mixed with everything else",
    "Follow-up depends on memory",
    "No clear list of open enquiries",
    "No simple way to track quote opportunities"
  ];

  const vdsPoints = [
    "Visitor submits a structured enquiry",
    "Lead appears in your dashboard",
    "Status shows who needs follow-up",
    "WhatsApp follow-up is easier",
    "Website leads are clearly tracked"
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 py-12 relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#F27D26]/5 rounded-full blur-[80px] pointer-events-none -translate-y-12"></div>

      <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
        <span className="text-[10px] font-mono tracking-widest text-[#F27D26] uppercase">
          The System Separation
        </span>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-4 leading-tight">
          This is not <span className="serif-font text-[#F27D26]">just another website.</span>
        </h2>
        
        <p className="mt-6 text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
          A normal website shows your phone number. Our system captures the enquiry, stores the details, shows the lead in a dashboard, and helps your team follow up before the job goes cold.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        {/* Normal Website Left Column */}
        <div 
          className="glass p-8 md:p-10 rounded-xl border border-white/5 relative group hover:border-white/10 transition-all duration-300"
          data-aos="fade-right"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
            <h3 className="text-lg font-medium text-white/70">
              Normal Website
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 px-2.5 py-1 bg-white/5 rounded">
              Brochure Only
            </span>
          </div>

          <ul className="space-y-4">
            {normalPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </span>
                <span className="text-sm text-white/50 font-geist">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Veneer Digital Studio Right Column */}
        <div 
          className="glass p-8 md:p-10 rounded-xl border border-[#F27D26]/20 relative group hover:border-[#F27D26]/40 transition-all duration-300 bg-[#F27D26]/[0.01]"
          data-aos="fade-left"
        >
          {/* Highlight Accent Top Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F27D26] to-transparent rounded-t-xl opacity-80"></div>
          
          <div className="flex items-center justify-between border-b border-[#F27D26]/10 pb-6 mb-8">
            <h3 className="text-lg font-bold text-[#F27D26]">
              Veneer Digital Studio System
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#F27D26] px-2.5 py-1 bg-[#F27D26]/10 rounded font-bold">
              Sales Engine
            </span>
          </div>

          <ul className="space-y-4">
            {vdsPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full bg-[#F27D26]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                </span>
                <span className="text-sm text-white font-geist font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
