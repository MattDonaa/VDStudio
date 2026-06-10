/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer } from "lucide-react";
import { MARQUEE_TAGS } from "../data";

export default function Marquee() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden" data-aos="fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest text-[#F27D26]/80 mb-10 uppercase flex items-center justify-center gap-2 font-bold">
          <Hammer className="w-3.5 h-3.5 animate-pulse text-[#F27D26]" />
          <span>Built for South African wood, kitchen, joinery, and renovation businesses</span>
        </p>

        <div className="relative w-full overflow-hidden mask-gradient-x">
          <style>{`
            .mask-gradient-x {
              mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
          
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {/* Loop 1 */}
            <div className="flex items-center gap-6">
              {MARQUEE_TAGS.map((tag, idx) => (
                <div
                  key={`tag1-${idx}`}
                  className="bg-neutral-950/60 border border-white/5 text-white/50 hover:text-white hover:border-[#F27D26]/30 px-6 py-3 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></span>
                  {tag}
                </div>
              ))}
            </div>

            {/* Loop 2 for Seamless Sliding */}
            <div className="flex items-center gap-6">
              {MARQUEE_TAGS.map((tag, idx) => (
                <div
                  key={`tag2-${idx}`}
                  className="bg-neutral-950/60 border border-white/5 text-white/50 hover:text-white hover:border-[#F27D26]/30 px-6 py-3 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></span>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
