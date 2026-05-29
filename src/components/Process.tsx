/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Milestone } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black/60 relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass p-8 rounded-xl hover:border-[#F27D26]/30 transition-all duration-300 relative group flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={step.number * 80}
            >
              <div>
                {/* Step badge overlay */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#F27D26] bg-[#F27D26]/10 border border-[#F27D26]/20 px-2.5 py-1 rounded">
                    Phase 0{step.number}
                  </span>
                  <span className="text-5xl font-extrabold text-white/5 group-hover:text-[#F27D26]/10 transition-colors duration-300 font-instrument-serif italic">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist mb-3 group-hover:text-[#F27D26] transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-xs text-white/40 leading-relaxed font-geist">
                  {step.description}
                </p>
              </div>

              {/* Little bottom line border decor */}
              <div className="w-8 h-1 bg-[#F27D26]/10 group-hover:bg-[#F27D26]/65 rounded mt-6 transition-all duration-350"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
