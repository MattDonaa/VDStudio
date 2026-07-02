import React from "react";
import { getIcon, ToolItem } from "../lib/toolsData";
import { ArrowRight } from "lucide-react";
import { useRouter } from "../lib/router";

interface GrowthToolCardProps {
  tool: ToolItem;
}

export default function GrowthToolCard({ tool }: GrowthToolCardProps) {
  const Icon = getIcon(tool.iconName);
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(tool.slug);
  };

  return (
    <div className="group relative bg-[#0b0b0b]/60 backdrop-blur-xl border border-white/10 hover:border-[#F27D26]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(242,125,38,0.06)] h-full overflow-hidden">
      {/* Decorative background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F27D26]/10 to-transparent rounded-full pointer-events-none blur-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-300" />
      
      <div>
        {/* Header: Icon & Coming Soon Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-xl flex items-center justify-center text-[#F27D26] group-hover:scale-110 group-hover:bg-[#F27D26] group-hover:text-black transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-full text-[10px] font-mono tracking-widest text-[#F27D26] uppercase font-bold animate-pulse">
            ● Coming Soon
          </span>
        </div>

        {/* Content */}
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2 block">
          {tool.type}
        </span>
        <h3 className="text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-[#F27D26] transition-colors font-geist">
          {tool.name}
        </h3>
        <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed font-light mb-8">
          {tool.description}
        </p>
      </div>

      {/* Action Button */}
      <a
        href={tool.slug}
        onClick={handleClick}
        className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-geist text-xs uppercase font-bold tracking-wider hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-black transition-all group/btn"
      >
        <span>Explore Tool</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
