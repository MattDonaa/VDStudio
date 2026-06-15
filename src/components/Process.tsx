/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Milestone } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-24 bg-black/60 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono">
            <Milestone className="w-3.5 h-3.5" />
            <span>Structured Operational Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white font-geist">
            A Refined Process From <span className="serif-font text-[#F27D26]">First Conversation to Launch</span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed font-light max-w-xl mx-auto">
            We follow a structured roadmap ensuring your woodworking cabinetry website looks premium and captures serious local leads.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-10 hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05),0_0_24px_rgba(242,125,38,0.02)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={step.number * 80}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
              <div>
                {/* Step badge overlay */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#F27D26] bg-[#F27D26]/10 border border-[#F27D26]/20 px-2.5 py-1 rounded-full">
                    Phase 0{step.number}
                  </span>
                  <span className="text-5xl font-extrabold text-white/5 group-hover:text-[#F27D26]/15 transition-colors duration-300 font-instrument-serif italic">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist mb-3 group-hover:text-[#F27D26] transition-colors duration-200 mt-2">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed font-geist">
                  {step.description}
                </p>
              </div>

              {/* Little bottom line border decor */}
              <div className="w-8 h-1 bg-[#F27D26]/10 group-hover:bg-[#F27D26]/80 rounded-full mt-6 transition-all duration-350 shadow-[0_0_8px_#F27D26]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
