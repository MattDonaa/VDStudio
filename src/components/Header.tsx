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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 animate-fade-in">
      <div className="bg-[#0b0b0b]/60 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_12px_44px_rgba(0,0,0,0.6),0_0_20px_rgba(242,125,38,0.04)]">
        <div className="flex items-center justify-between gap-3 min-w-0">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 overflow-hidden shrink">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#F27D26] to-[#B65000] rounded-full flex items-center justify-center font-serif text-white text-[11px] font-extrabold tracking-tighter shadow-[0_0_12px_rgba(242,125,38,0.25)] group-hover:shadow-[0_0_18px_rgba(242,125,38,0.5)] group-hover:scale-105 transition-all duration-300 shrink-0">
              VDS
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-white/80 transition-colors font-geist truncate min-w-0">
              <span className="inline sm:hidden">Veneer Digital</span>
              <span className="hidden sm:inline">Veneer Digital Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-geist">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] font-medium text-white/50 hover:text-white transition-all duration-200 group/link py-1 px-1.5"
              >
                <span>{link.name}</span>
                {/* Subtle orange dot hover indicator with premium glow */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F27D26] rounded-full scale-0 group-hover/link:scale-100 transition-all duration-250 shadow-[0_0_8px_#F27D26,0_0_12px_#F27D26]"></span>
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onStartProject}
              className="hidden lg:inline-flex px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#F27D26] to-[#D56512] hover:from-white hover:to-white text-black font-bold uppercase tracking-wider text-[11px] transition-all duration-300 rounded-full cursor-pointer shrink-0 items-center justify-center shadow-lg hover:shadow-white/10"
            >
              Book Website Audit
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-250 focus:outline-none shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Floating glass list) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 border border-white/10 bg-[#080808]/95 backdrop-blur-xl px-5 py-5 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fade-in">
          <p className="text-[10px] text-white/40 tracking-wider font-sans leading-relaxed mb-4 border-b border-white/5 pb-3">
            Premium websites + lead dashboards for South African woodworkers.
          </p>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-xs font-semibold tracking-wide text-white/70 hover:text-[#F27D26] hover:bg-white/[0.02] px-3 py-2.5 rounded-xl border-b border-white/5 last:border-0 transition-all font-geist flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[9px] text-[#F27D26]/60 font-mono">✦</span>
              </a>
            ))}
            <button
              onClick={() => {
                handleLinkClick();
                onStartProject();
              }}
              className="mt-4 w-full py-3 bg-gradient-to-r from-[#F27D26] to-[#D56512] text-black text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#F27D26]/10 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer font-geist"
            >
              Book Website Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
