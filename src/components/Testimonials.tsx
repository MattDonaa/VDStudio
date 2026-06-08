/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-16 relative z-10" id="reviews">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#F27D26] text-[10px] uppercase font-bold tracking-widest font-mono block mb-3">
          Local SEO / Google Reviews Placeholder
        </span>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
          Client <span className="serif-font text-[#F27D26] italic">Feedback</span>
        </h2>
        <p className="text-sm text-white/50 leading-relaxed font-geist">
          Trust-building copy: Placeholder for real Google Business Profile reviews. Authentic client feedback builds trust with South African woodworkers, carpenters, and renovation companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Review 1 */}
        <div 
          className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05),0_0_24px_rgba(242,125,38,0.02)] transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Subtle inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <p className="text-xs sm:text-[13px] text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Here you will insert a real client review once your Google Business Profile starts receiving feedback. Great for SEO."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-[10px] font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[9px] text-white/40 font-mono">BUSINESS_NAME_HERE • Klerksdorp</p>
          </div>
        </div>

        {/* Placeholder Review 2 */}
        <div 
          className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05),0_0_24px_rgba(242,125,38,0.02)] transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Subtle inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <p className="text-xs sm:text-[13px] text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Ensure this features a real review from a carpentry or kitchen remodeling client in South Africa to improve local relevance."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-[10px] font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[9px] text-white/40 font-mono">BUSINESS_NAME_HERE • Pretoria</p>
          </div>
        </div>

        {/* Placeholder Review 3 */}
        <div 
          className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#F27D26]/25 hover:bg-[#0c0c0c]/90 hover:shadow-[0_20px_48px_rgba(242,125,38,0.05),0_0_24px_rgba(242,125,38,0.02)] transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Subtle inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 text-white/20" />
          </div>
          <p className="text-xs sm:text-[13px] text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Local SEO is boosted when reviews mention the services you provided, like website design, or lead capture systems."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-[10px] font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[9px] text-white/40 font-mono">BUSINESS_NAME_HERE • Cape Town</p>
          </div>
        </div>
      </div>
    </section>
  );
}
