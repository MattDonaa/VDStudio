/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout, MessageSquare, Search } from "lucide-react";
import { FEATURE_CARDS } from "../data";

export default function FeatureGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case "layout":
        return <Layout className="w-5 h-5 text-[#F27D26] group-hover:scale-110 duration-300" />;
      case "message":
        return <MessageSquare className="w-5 h-5 text-[#F27D26] group-hover:scale-110 duration-300" />;
      case "search":
        return <Search className="w-5 h-5 text-[#F27D26] group-hover:scale-110 duration-300" />;
      default:
        return <Layout className="w-5 h-5 text-[#F27D26]" />;
    }
  };

  return (
    <section id="services" className="scroll-mt-28 mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURE_CARDS.map((card, idx) => (
          <div
            key={card.id}
            className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-10 flex flex-col gap-4 group hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(242,125,38,0.06),0_0_24px_rgba(242,125,38,0.02)] transition-all duration-500 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Subtle premium inner highlights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none" />

            {/* Icon housing */}
            <div className="w-12 h-12 rounded-2xl bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26] border border-[#F27D26]/10 group-hover:border-[#F27D26]/30 transition-all duration-300">
              {getIcon(card.iconName)}
            </div>

            {/* Content info */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist group-hover:text-[#F27D26] transition-colors mt-2">
              {card.title}
            </h3>
            
            <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed font-geist">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
