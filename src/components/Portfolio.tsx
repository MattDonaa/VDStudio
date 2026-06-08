/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Milestone, LayoutTemplate } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data";

interface PortfolioProps {
  onSelectProject: (pkgName: string) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 bg-neutral-900/30 border-y border-white/5 relative">
      <div className="absolute top-0 inset-x-0 h-[250px] bg-gradient-to-b from-orange-950/5 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F27D26]/30 bg-[#F27D26]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono mb-4">
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>Modular Prototypes & Live Designs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white pr-4" data-aos="fade-up">
              Engineered Woodwork Website <span className="serif-font text-[#F27D26]">Blueprints</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-xl font-geist text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="50">
              Explore our premium website layouts explicitly designed for joiners and furniture artists. These interactive layouts can be imported, modified, and launch-ready in days.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="text-[10px] uppercase font-bold text-[#F27D26] tracking-widest glass px-4 py-2.5 rounded-sm">
            🌍 Serving South Africa Nationally
          </div>
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-[#F27D26]/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05)] flex flex-col justify-between group relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Subtle inner light overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

              <div>
                {/* Mockup Top Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative bg-[#050505] image-fallback">
                  {/* Fallback Elements behind the image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F27D26]/40 z-0">
                    <LayoutTemplate className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-[10px] uppercase font-mono tracking-widest">Preview Unavailable</span>
                  </div>

                  <img
                    src={item.mockupUrl}
                    className="absolute inset-0 object-cover w-full h-full transition duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-85 z-10"
                    alt={`${item.title} web project blueprint`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Glass Card Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Status Indicator Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start z-20">
                    <span className="bg-[#F27D26] text-black text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-md font-geist">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="bg-[#050505]/95 border border-[#F27D26]/30 backdrop-blur-sm text-[#F27D26] text-[8px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-full shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 relative">
                  <span className="text-[9px] text-[#F27D26]/80 font-mono tracking-widest uppercase block mb-1">
                    Demo Blueprint Model
                  </span>
                  
                  <h3 className="text-base font-bold text-white group-hover:text-[#F27D26] transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs text-white/50 leading-relaxed font-geist">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Row */}
              <div className="px-6 pb-6 relative">
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] text-white/40 font-mono">{item.duration}</span>
                  {item.externalUrl ? (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#F27D26] hover:text-[#FF9B54] font-bold uppercase tracking-widest inline-flex items-center gap-1 cursor-pointer transition-colors duration-200"
                    >
                      Deploy This Style
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(item.category)}
                      className="text-xs text-[#F27D26] hover:text-[#FF9B54] font-bold uppercase tracking-widest inline-flex items-center gap-1 cursor-pointer transition-colors duration-200"
                    >
                      Deploy This Style
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Note */}
        <div className="mt-12 text-center text-xs font-mono text-white/40 max-w-lg mx-auto leading-relaxed border border-dashed border-white/10 rounded-2xl p-4 bg-neutral-900/10">
          ⚙️ Note: All layouts above represent editable, launchable demo templates configured with custom WhatsApp triggers. Your project will be tailored fully to your business requirements.
        </div>
      </div>
    </section>
  );
}
