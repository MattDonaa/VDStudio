import React from "react";
import { getIcon, ToolItem } from "../lib/toolsData";
import Breadcrumb from "./Breadcrumb";

interface ToolHeroProps {
  tool: ToolItem;
}

export default function ToolHero({ tool }: ToolHeroProps) {
  const Icon = getIcon(tool.iconName);

  return (
    <div className="relative mb-12 sm:mb-16">
      {/* Breadcrumb path */}
      <Breadcrumb
        items={[
          { name: "Growth Tools", href: "/growth-tools" },
          { name: tool.name }
        ]}
      />

      {/* Hero Header Layout */}
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        {/* Tool Icon Box */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-2xl flex items-center justify-center text-[#F27D26] shadow-[0_0_20px_rgba(242,125,38,0.1)] shrink-0">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        {/* Text Container */}
        <div className="flex-grow max-w-3xl">
          {/* Badge & Label */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] font-bold">
              {tool.type}
            </span>
            <span className="text-white/20 font-mono text-[10px]">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono tracking-widest text-white/50 uppercase font-medium">
              Free Utility
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-white tracking-tight leading-tight mb-4">
            {tool.name}
          </h1>

          {/* Description */}
          <p className="text-white/60 text-xs sm:text-sm font-geist leading-relaxed">
            {tool.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
