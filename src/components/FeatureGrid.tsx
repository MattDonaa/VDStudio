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
    <section id="services" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURE_CARDS.map((card, idx) => (
          <div
            key={card.id}
            className="glass p-8 rounded-xl flex flex-col gap-3 group hover:border-[#F27D26]/40 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Icon housing */}
            <div className="w-10 h-10 rounded-lg bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
              {getIcon(card.iconName)}
            </div>

            {/* Content info */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist group-hover:text-[#F27D26] transition-colors">
              {card.title}
            </h3>
            
            <p className="text-xs text-white/40 leading-relaxed font-geist">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
