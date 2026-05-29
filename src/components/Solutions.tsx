/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Sparkles, FolderDown, CloudLightning, Database } from "lucide-react";
import { SOLUTIONS_PACKAGES } from "../data";

interface SolutionsProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export default function Solutions({ onSelectSolution }: SolutionsProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "raw-html":
        return <FolderDown className="w-5 h-5 text-[#F27D26]" />;
      case "build-hosting":
        return <CloudLightning className="w-5 h-5 text-[#F27D26] animate-pulse" />;
      case "premium-lead-system":
        return <Database className="w-5 h-5 text-[#F27D26]" />;
      default:
        return <FolderDown className="w-5 h-5 text-[#F27D26]" />;
    }
  };

  return (
    <section id="delivery-paths" className="py-24 bg-black/40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Select Your Engagement Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Website <span className="serif-font text-[#F27D26]">Delivery Options</span>
          </h2>
          <p className="mt-4 text-sm text-white/50 font-light max-w-xl mx-auto">
            Choose the build path that fits how hands-on you want to be after your design is created.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="glass p-8 rounded-xl flex flex-col justify-between hover:border-[#F27D26]/30 transition duration-300 relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                {/* Badge top right & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-neutral-950 border border-white/5 rounded-lg group-hover:border-[#F27D26]/35 transition-colors duration-300">
                    {getIcon(pkg.id)}
                  </div>
                  <span className="text-[9px] text-[#F27D26] font-mono border border-[#F27D26]/20 bg-[#F27D26]/10 px-2.5 py-1 rounded">
                    {pkg.badge}
                  </span>
                </div>

                {/* Info titles */}
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist mb-2 pr-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-white/40 mb-6 leading-relaxed font-geist">
                  {pkg.description}
                </p>

                {/* Included Feature Bullet Checkbox */}
                <div className="border-t border-white/5 pt-6">
                  <p className="text-[9px] uppercase font-mono text-[#F27D26]/80 tracking-widest mb-4">
                    What's Included:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((incl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                        <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                        <span className="font-geist text-xs text-white/60">{incl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Area */}
              <div className="border-t border-white/5 pt-6 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] uppercase tracking-wider text-white/30 font-mono">
                    Pricing Rate
                  </span>
                  <span className="text-[10px] text-[#F27D26] bg-[#F27D26]/10 border border-[#F27D26]/20 px-2 py-0.5 rounded font-mono font-bold lowercase">
                    quoted per project
                  </span>
                </div>
                <button
                  onClick={() => onSelectSolution(pkg.title)}
                  className="block w-full py-3 px-4 bg-white hover:bg-[#F27D26] text-black hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm text-center cursor-pointer"
                >
                  {pkg.ctaText}
                </button>
                <p className="text-center text-[9px] text-white/40 mt-3 font-mono">
                  ✦ {pkg.bottomLabel} status
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
