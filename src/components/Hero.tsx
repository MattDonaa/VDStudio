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
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="max-w-2xl">
            {/* Active Accept pill */}
            <div 
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-geist"
              data-aos="fade-down"
            >
              <span className="relative flex h-1.5 w-1.5 align-middle">
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
              className="mt-8 text-base sm:text-lg text-white/50 font-light max-w-xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Veneer Digital Studio builds premium websites, WhatsApp-ready lead systems, and Google-ready online presences for South African woodworkers, cabinetry studios, kitchen builders, and luxury furniture makers.
            </p>

            {/* Primary CTA and Secondary CTA match Dark Luxury theme */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={onStartProject}
                className="group relative px-10 py-4 bg-[#F27D26] text-black font-bold uppercase tracking-widest text-[11px] rounded-sm overflow-hidden transition-transform active:scale-95 cursor-pointer w-full sm:w-auto text-center"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Start Project</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button 
                onClick={onExploreServices}
                className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-white/5 transition-all cursor-pointer w-full sm:w-auto text-center"
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                View Services
              </button>
            </div>
            
            {/* Core Message Overlay */}
            <div 
              className="mt-12 flex items-center gap-3 text-[10px] font-mono text-[#F27D26]/70 tracking-widest uppercase border-l-2 border-[#F27D26]/30 pl-4 py-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>“Your craftsmanship is premium. <br className="sm:hidden" />Your online presence should match it.”</span>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#F27D26]/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative w-full max-w-lg lg:max-w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#f27d26]/10 border border-white/10 group image-fallback">
              <img 
                src="https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Premium woodworking craftsmanship interface" 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-80 z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
