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
    { name: "Portfolio", href: "#portfolio" },
    { name: "Delivery Paths", href: "#delivery-paths" },
    { name: "Project Packages", href: "#project-packages" },
    { name: "Lead Pipeline", href: "#lead-pipeline" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex py-4 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F27D26] to-[#A85000] rounded-md flex items-center justify-center font-bold text-black text-xs shadow-md shadow-orange-500/10 group-hover:shadow-orange-500/30 transition-shadow">
              VDS
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-white group-hover:text-white/80 transition-colors font-geist">
              Veneer Digital Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-geist">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-xs uppercase tracking-widest font-geist"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all rounded-sm cursor-pointer"
            >
              Start Project
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/5 bg-[#080808]/95 backdrop-blur-lg px-6 py-6 absolute top-full left-0 w-full animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-[#F27D26] hover:underline decoration-[#F27D26] decoration-2 underline-offset-4 py-1.5 border-b border-white/5 last:border-0 transition-all"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleLinkClick();
                onStartProject();
              }}
              className="mt-2 w-full inline-flex items-center justify-center py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all rounded-sm"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
