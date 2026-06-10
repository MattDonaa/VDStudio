/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, Github, Phone, Shield, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020202] pt-16 pb-12 relative z-10" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded bg-[#F27D26] flex items-center justify-center text-black font-extrabold font-mono text-xs shadow shadow-[#F27D26]/15 group-hover:shadow-[#F27D26]/35 transition duration-300">
                VDS
              </div>
              <span className="font-semibold text-xl tracking-tight text-white font-geist">
                Veneer <span className="serif-font text-[#F27D26]">Digital</span> Studio
              </span>
            </a>
            
            <p className="text-white/40 text-xs leading-relaxed font-light max-w-sm">
              Premium websites and lead-capture systems for South African woodworkers, kitchen remodellers, cabinet makers, and joinery businesses.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.facebook.com/share/1CCiq1WXf7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F27D26] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/veneerdigital?s=11" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F27D26] transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4 text-xs text-white/40 font-geist">
              <li>
                <a href="#services" className="hover:text-[#F27D26] transition">
                  Raw HTML Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F27D26] transition">
                  Website Build
                </a>
              </li>
              <li>
                <a href="#project-packages" className="hover:text-[#F27D26] transition">
                  Hosting Setup
                </a>
              </li>
              <li>
                <a href="#lead-pipeline" className="hover:text-[#F27D26] transition">
                  Lead-Capture Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Businesses */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-6">For Businesses</h4>
            <ul className="space-y-4 text-xs text-white/40 font-geist">
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Kitchen Remodellers
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Cabinet Makers
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Joinery Studios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Woodworkers
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Renovation Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-xs text-white/40 font-geist">
              <li>
                <a href="#process" className="hover:text-[#F27D26] transition">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F27D26] transition">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#F27D26] transition">
                  Sitemap XML
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F27D26] transition">
                  Portfolio Blueprints
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F27D26] transition">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center gap-4 relative">
          <p className="text-[10px] text-white/30 font-mono shrink-0">
            © 2026 Veneer Digital Studio (Pty) Ltd. All rights reserved.
          </p>
          
          {/* Legal notes */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] text-white/30 font-mono w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:w-auto pb-4 md:pb-0 pr-0 md:pr-16 lg:pr-0">
            <a href="/legal.html#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/legal.html#terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/legal.html#cookies" className="hover:text-white transition">Cookie Policy</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
              className="hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
            >
              Cookie Preferences
            </button>
            <a href="/legal.html#popia" className="text-[#F27D26]/75 hover:text-[#F27D26] flex items-center gap-1 font-bold transition">
              <Shield className="w-3 h-3 text-[#F27D26]" />
              POPIA Compliant SA
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
