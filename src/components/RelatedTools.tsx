import React from "react";
import { TOOLS_DATA } from "../lib/toolsData";
import GrowthToolCard from "./GrowthToolCard";
import { Sparkles } from "lucide-react";

interface RelatedToolsProps {
  toolIds: string[];
  title?: string;
  subtitle?: string;
}

export default function RelatedTools({
  toolIds,
  title = "Related Growth Tools",
  subtitle = "Run these interactive diagnostic tools to discover direct optimization pathways for your woodwork or remodeling brand."
}: RelatedToolsProps) {
  const filteredTools = TOOLS_DATA.filter((tool) => toolIds.includes(tool.id));

  if (filteredTools.length === 0) return null;

  return (
    <section className="py-12 border-t border-white/5 mt-8">
      <div className="text-left mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recommended for you</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-light tracking-tight text-white font-sans">
          {title}
        </h4>
        {subtitle && (
          <p className="mt-2 text-xs sm:text-sm text-white/50 font-geist">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="h-full">
            <GrowthToolCard tool={tool} />
          </div>
        ))}
      </div>
    </section>
  );
}
