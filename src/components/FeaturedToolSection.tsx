import React from "react";
import { TOOLS_DATA } from "../lib/toolsData";
import GrowthToolCard from "./GrowthToolCard";
import { useRouter } from "../lib/router";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedToolSection() {
  const { navigate } = useRouter();

  // Pick 4 tools to feature
  const featuredTools = TOOLS_DATA.slice(0, 4);

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/growth-tools");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="growth-tools-section" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]/40">
      {/* Glow background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F27D26]/[0.01] blur-[150px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight font-sans">
            Free <span className="serif-font text-[#F27D26] italic">Growth Tools</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-geist">
            Discover free interactive tools designed to help contractors and service businesses generate more leads, improve conversions and identify growth opportunities.
          </p>
        </div>

        {/* 4 Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16" data-aos="fade-up" data-aos-delay="100">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="h-full">
              <GrowthToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* View All Button CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <a
            href="/growth-tools"
            onClick={handleViewAllClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#F27D26] text-white hover:text-black hover:bg-[#F27D26] font-geist text-xs uppercase font-extrabold tracking-wider rounded-full transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>View All Growth Tools</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
