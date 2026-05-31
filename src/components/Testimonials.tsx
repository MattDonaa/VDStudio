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
          className="glass p-8 rounded-xl flex flex-col gap-4 border border-white/5 group hover:border-[#F27D26]/20 transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="text-sm text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Here you will insert a real client review once your Google Business Profile starts receiving feedback. Great for SEO."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-xs font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[10px] text-white/40 font-mono">BUSINESS_NAME_HERE • Klerksdorp</p>
          </div>
        </div>

        {/* Placeholder Review 2 */}
        <div 
          className="glass p-8 rounded-xl flex flex-col gap-4 border border-white/5 group hover:border-[#F27D26]/20 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="text-sm text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Ensure this features a real review from a carpentry or kitchen remodeling client in South Africa to improve local relevance."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-xs font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[10px] text-white/40 font-mono">BUSINESS_NAME_HERE • Pretoria</p>
          </div>
        </div>

        {/* Placeholder Review 3 */}
        <div 
          className="glass p-8 rounded-xl flex flex-col gap-4 border border-white/5 group hover:border-[#F27D26]/20 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex text-[#F27D26] gap-1">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 text-white/20" />
          </div>
          <p className="text-sm text-white/70 italic font-geist leading-relaxed">
            "Placeholder text: Local SEO is boosted when reviews mention the services you provided, like website design, or lead capture systems."
          </p>
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="text-xs font-bold text-white tracking-widest uppercase mb-1">CLIENT_NAME_HERE</p>
            <p className="text-[10px] text-white/40 font-mono">BUSINESS_NAME_HERE • Cape Town</p>
          </div>
        </div>
      </div>
    </section>
  );
}
