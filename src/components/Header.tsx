/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onStartProject: () => void;
}

export default function Header({ onStartProject }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Live Demos", href: "#portfolio" },
    { name: "Lead System", href: "#lead-flow" },
    { name: "For Woodworkers", href: "#for-woodworkers" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex py-3 sm:py-4 items-center justify-between gap-3 min-w-0">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0 overflow-hidden shrink">
            <div className="w-9 h-9 bg-gradient-to-br from-[#F27D26] to-[#B65000] rounded-full flex items-center justify-center font-serif text-white text-xs font-extrabold tracking-tighter shadow-[0_0_12px_rgba(242,125,38,0.2)] group-hover:shadow-[0_0_16px_rgba(242,125,38,0.4)] group-hover:scale-105 transition-all duration-300 shrink-0">
              VDS
            </div>
            <span className="text-sm font-medium tracking-wide text-white group-hover:text-white/80 transition-colors font-geist truncate min-w-0">
              <span className="inline sm:hidden">Veneer Digital</span>
              <span className="hidden sm:inline">Veneer Digital Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-geist">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 group/link py-2"
              >
                <span>{link.name}</span>
                {/* Subtle orange dot hover indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F27D26] rounded-full scale-0 group-hover/link:scale-100 transition-transform duration-200 shadow-[0_0_8px_#F27D26]"></span>
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onStartProject}
              className="hidden lg:inline-flex px-5 py-2.5 bg-gradient-to-r from-[#F27D26] to-[#D56512] text-black text-[11px] font-bold uppercase tracking-wider hover:brightness-115 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30 transition-all duration-200 rounded-full cursor-pointer shrink-0 items-center justify-center"
            >
              Book Website Audit
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F27D26] focus:ring-offset-2 focus:ring-offset-black shrink-0 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/5 bg-[#080808]/98 backdrop-blur-lg px-6 py-6 absolute top-full left-0 w-full animate-fade-in-down shadow-2xl z-50 overflow-hidden">
          <p className="text-[11px] text-white/50 tracking-wide font-sans leading-relaxed mb-6 border-b border-white/10 pb-4">
            Premium websites + lead dashboards for woodworkers and kitchen remodellers.
          </p>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-[#F27D26] hover:bg-white/[0.02] px-3 py-3 rounded-lg border-b border-white/5 last:border-0 transition-all font-geist flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-white/20 font-mono">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                handleLinkClick();
                onStartProject();
              }}
              className="mt-6 w-full py-3.5 bg-gradient-to-r from-[#F27D26] to-[#D56512] text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-[#F27D26]/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer font-sans"
            >
              Book Website Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
