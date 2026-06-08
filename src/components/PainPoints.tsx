/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AlertCircle, Brain, Layers, Star } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: <AlertCircle className="w-5 h-5 text-[#F27D26]" />,
      title: "Enquiries get buried",
      description: "New project enquiries sit between supplier messages, family chats, staff updates, and old conversations."
    },
    {
      icon: <Brain className="w-5 h-5 text-[#F27D26]" />,
      title: "Follow-up depends on memory",
      description: "A client asks for a quote today, disappears tomorrow, and may never be followed up again."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#F27D26]" />,
      title: "No clear lead status",
      description: "It becomes hard to see who is new, who was contacted, who needs a quote, and who is ready for a site visit."
    },
    {
      icon: <Star className="w-5 h-5 text-[#F27D26]" />,
      title: "No review or re-engagement flow",
      description: "Completed jobs and old enquiries are rarely turned into reviews, repeat work, or future opportunities."
    }
  ];

  return (
    <section id="for-woodworkers" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      {/* Header element to hook the reader */}
      <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
          Your website may have your number on it — <span className="serif-font text-[#F27D26]">but are your enquiries being tracked?</span>
        </h2>
        
        <p className="mt-6 text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
          Most wood and kitchen businesses do respond to enquiries. The problem is that those enquiries often live inside WhatsApp chats, phone calls, screenshots, and memory. That makes follow-up inconsistent and serious opportunities easy to miss.
        </p>
      </div>

      {/* Grid items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {painPoints.map((item, idx) => (
          <div 
            key={idx}
            className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05),0_0_24px_rgba(242,125,38,0.02)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col gap-4 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Subtle premium inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

            <div className="w-10 h-10 rounded-2xl bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26] border border-[#F27D26]/10 group-hover:scale-105 duration-300">
              {item.icon}
            </div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist group-hover:text-[#F27D26] transition-colors mt-2">
              {item.title}
            </h3>

            <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed font-geist">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
