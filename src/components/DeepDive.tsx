/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICE_POINTS, SERVICE_GRID_IMAGES } from "../data";

interface DeepDiveProps {
  onStartProject: () => void;
}

export default function DeepDive({ onStartProject }: DeepDiveProps) {
  return (
    <section id="deep-dive" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column Content */}
          <div className="flex flex-col h-full justify-between lg:sticky lg:top-24" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F27D26] animate-spin-slow" />
                <span>Niche Strategic Framework</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                Websites that look premium and <br />
                <span className="serif-font text-[#F27D26]">
                  capture serious enquiries.
                </span>
              </h2>
              
              <p className="mt-8 text-base sm:text-lg text-white/50 font-light leading-relaxed">
                We do not only design attractive pages. We structure your website around trust, proof, service clarity, project enquiries, WhatsApp conversations, and Google visibility — so high-value clients know exactly why they should contact you.
              </p>

              {/* Vertical list points */}
              <div className="mt-12 space-y-8">
                {SERVICE_POINTS.map((pt) => (
                  <div
                    key={pt.id}
                    className="group relative pl-8 border-l-2 border-white/10 hover:border-[#F27D26] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F27D26]/60 group-hover:text-[#F27D26] transition-colors" />
                      <h3 className="text-lg font-medium text-white group-hover:text-[#F27D26] transition-colors">
                        {pt.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed font-geist">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Explore Links */}
            <div className="mt-12">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#F27D26] transition-colors border-b border-white/20 pb-1 hover:border-[#F27D26] cursor-pointer"
              >
                Discuss Custom Capabilities
                <ArrowRight className="w-4 h-4 text-[#F27D26]" />
              </button>
            </div>
          </div>

          {/* Right Column Bento Image Grid */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {/* Column 1 with translation offset */}
            <div className="space-y-4 pt-8">
              {/* Visual Direction (Kitchen project) */}
              <div className="glass relative aspect-[4/5] rounded-xl overflow-hidden group">
                <img
                  src={SERVICE_GRID_IMAGES.visualDirection.url}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  alt="Kitchen craftsmanship direction"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] text-[#F27D26] font-mono uppercase tracking-widest">
                    Concept Architecture
                  </span>
                  <p className="text-white font-medium mt-1 text-base">
                    {SERVICE_GRID_IMAGES.visualDirection.caption}
                  </p>
                </div>
              </div>

              {/* Website Build */}
              <div className="glass relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src={SERVICE_GRID_IMAGES.websiteBuild.url}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  alt="Fine joinery cabinetry construction details"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] text-[#F27D26] font-mono uppercase tracking-widest">
                    Production Core
                  </span>
                  <p className="text-white font-medium mt-1 text-base">
                    {SERVICE_GRID_IMAGES.websiteBuild.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* Lead Capture */}
              <div className="glass relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src={SERVICE_GRID_IMAGES.leadCapture.url}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  alt="Premium design showroom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] text-[#F27D26] font-mono uppercase tracking-widest">
                    WhatsApp CRM Integration
                  </span>
                  <p className="text-white font-medium mt-1 text-base">
                    {SERVICE_GRID_IMAGES.leadCapture.caption}
                  </p>
                </div>
              </div>

              {/* Growth/SEO Ready */}
              <div className="glass relative aspect-[4/5] rounded-xl overflow-hidden group">
                <img
                  src={SERVICE_GRID_IMAGES.growthReady.url}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  alt="Polished luxury wood panel"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] text-[#F27D26] font-mono uppercase tracking-widest">
                    Google Visibility
                  </span>
                  <p className="text-white font-medium mt-1 text-base">
                    {SERVICE_GRID_IMAGES.growthReady.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
