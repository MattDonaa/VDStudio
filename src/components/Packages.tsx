/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Sparkles, HelpCircle } from "lucide-react";
import { PROJECT_PACKAGES } from "../data";

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section id="project-packages" className="py-24 relative overflow-hidden">
      {/* Background orange circular glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 mb-8 px-4 py-1.5 border border-[#F27D26]/30 bg-[#F27D26]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26] font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>South African Industry Woodworking Quote Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Project Packages <span className="serif-font text-[#F27D26]">Tailored to Your Craft</span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed font-light max-w-xl mx-auto">
            Every build is quoted around your business size, website complexity, content readiness, and whether you need hosting or CRM setup.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECT_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`glass p-8 rounded-xl flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "border-2 border-[#F27D26] md:-translate-y-2 scale-102 bg-white/[0.04]"
                    : "hover:border-[#F27D26]/30"
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F27D26] text-black text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Top copy */}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white font-geist">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-white/40 mt-2 min-h-[32px] font-geist">
                    {pkg.description}
                  </p>

                  <div className="my-6">
                    <span className="text-3xl font-bold text-white font-geist tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-[#F27D26]/75 text-[10px] font-bold uppercase tracking-wider block mt-1 font-mono">
                      ✦ Custom Project Quotation
                    </span>
                  </div>

                  {/* Bullet points mapping */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? "text-[#F27D26]" : "text-[#F27D26]"}`} />
                        <span className="font-geist text-xs text-white/60">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Button trigger */}
                <div>
                  <button
                    onClick={() => onSelectPackage(pkg.title)}
                    className={`block w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-widest transition duration-300 cursor-pointer rounded-sm ${
                      isPopular
                        ? "bg-[#F27D26] text-black hover:bg-white hover:text-black shadow-lg shadow-orange-500/10"
                        : "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
