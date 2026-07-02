import React from "react";
import { useRouter } from "../lib/router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { navigate } = useRouter();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <nav className="flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase text-white/40 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
      <a
        href="/"
        onClick={(e) => handleLinkClick(e, "/")}
        className="hover:text-white flex items-center gap-1 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </a>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[#F27D26] font-medium truncate max-w-[200px] sm:max-w-none">
                {item.name}
              </span>
            ) : (
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href!)}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
