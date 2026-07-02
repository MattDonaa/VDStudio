import React from "react";
import { TOOLS_DATA, getIcon } from "../lib/toolsData";
import { useRouter } from "../lib/router";
import { HelpCircle } from "lucide-react";

interface RelatedToolsInlineProps {
  toolIds: string[];
}

export default function RelatedToolsInline({ toolIds }: RelatedToolsInlineProps) {
  const { navigate } = useRouter();
  const matchedTools = TOOLS_DATA.filter((t) => toolIds.includes(t.id));

  if (matchedTools.length === 0) return null;

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 font-geist">
      <span className="text-[10px] uppercase font-mono tracking-wider text-white/30 shrink-0 flex items-center gap-1">
        <HelpCircle className="w-3 h-3 text-[#F27D26]" />
        Related Tools:
      </span>
      <div className="flex flex-wrap gap-2">
        {matchedTools.map((tool) => {
          const Icon = getIcon(tool.iconName);
          return (
            <a
              key={tool.id}
              href={tool.slug}
              onClick={(e) => {
                e.preventDefault();
                navigate(tool.slug);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] hover:bg-[#F27D26]/10 border border-white/5 hover:border-[#F27D26]/20 rounded-full text-[11px] font-medium text-white/70 hover:text-[#F27D26] transition-all"
            >
              <Icon className="w-3 h-3 text-[#F27D26]" />
              <span>{tool.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
