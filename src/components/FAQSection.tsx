import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Learn more about this interactive tool and how implementing these digital systems improves conversion rates for local service brands."
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 relative overflow-hidden w-full border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F27D26]/[0.01] blur-[150px] pointer-events-none -z-10" />

      <div className="w-full">
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight font-sans">
            {title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-geist max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#080808]/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-[#F27D26]/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide font-geist hover:text-[#F27D26] transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-white/50 bg-white/5 p-1.5 rounded-full transition-all">
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#F27D26]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-4 text-xs sm:text-[13px] text-white/60 leading-relaxed font-geist bg-white/[0.01]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
