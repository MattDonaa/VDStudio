/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "27657319062"; // Real business WhatsApp line

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Veneer%2520Digital%2520Studio%2C%20I%20want%2520to%20discuss%20a%20website%20build.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-[#050505]/95 border border-[#F27D26]/80 hover:border-white p-3.5 sm:px-4 sm:py-3 rounded-full text-white shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur"
        title="Discuss Project on WhatsApp"
      >
        {/* Pulsing Backlight glow */}
        <span className="absolute inset-0 rounded-full bg-[#F27D26]/10 group-hover:bg-[#F27D26]/25 blur-sm transition-all animate-ping duration-100"></span>
        
        {/* Message Circle icon */}
        <MessageCircle className="w-5 h-5 text-[#F27D26] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Desktop Text label */}
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase font-geist text-white/90 group-hover:text-white transition-colors">
          Discuss Project
        </span>
      </a>
    </div>
  );
}
