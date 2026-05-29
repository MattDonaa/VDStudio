/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, Eye, FileText } from "lucide-react";

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onStartProject, onExploreServices }: HeroProps) {
  return (
    <section className="sm:pt-20 pt-16 mb-[60px] relative z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Active Accept pill */}
          <div 
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-geist"
            data-aos="fade-down"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F27D26]"></span>
            </span>
            <span>Accepting New Website Projects</span>
          </div>

          {/* Central Headline */}
          <h1 
            className="text-5xl sm:text-7xl font-light tracking-tight mt-2 text-white pb-2 leading-[1.05]"
            data-aos="fade-up"
          >
            Build a web presence worthy of your{" "}
            <br className="hidden sm:block" />
            <span className="serif-font text-[#F27D26]">craftsmanship.</span>
          </h1>

          {/* Subtext */}
          <p 
            className="mt-8 text-base sm:text-lg text-white/50 font-light max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Veneer Digital Studio builds premium websites, WhatsApp-ready lead systems, and Google-ready online presences for South African woodworkers, cabinetry studios, kitchen builders, and luxury furniture makers.
          </p>

          {/* Core Message Overlay */}
          <div 
            className="mt-6 flex justify-center items-center gap-2 text-[10px] font-mono text-[#F27D26]/80 tracking-widest uppercase"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span>“Your craftsmanship is premium. Your online presence should match it.”</span>
          </div>

          {/* Primary CTA and Secondary CTA match Dark Luxury theme */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onStartProject}
              className="group relative px-10 py-4 bg-[#F27D26] text-black font-bold uppercase tracking-widest text-sm rounded-sm overflow-hidden transition-transform active:scale-95 cursor-pointer w-full sm:w-auto text-center"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Start Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button 
              onClick={onExploreServices}
              className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/5 transition-all cursor-pointer w-full sm:w-auto text-center"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
