import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How much does a professional website cost for a carpentry or kitchen company in South Africa?",
    answer: "A bespoke website built by Veneer Digital Studio starts from R4,499 for raw HTML delivery and R7,999 to R14,999 for full-featured, WhatsApp-ready platforms. This includes mobile responsiveness, Google Indexing optimization, and premium lead routing tailored specifically to capture high-ticket kitchen and built-in cupboard commissions."
  },
  {
    question: "Do you design websites specifically for cabinet makers, woodworkers, and kitchen remodellers?",
    answer: "Yes, absolutely. We specialize specifically in the joinery, cabinetry, shopfitting, and luxury kitchen remodeling industries inside South Africa. We understand the unique challenges you face—like showing before & after photo galleries, highlighting cabinet quantities, describing bespoke woodwork species, and filtering out low-budget inquiries."
  },
  {
    question: "How long does a business website take to build and launch?",
    answer: "A standard landing page or raw HTML delivery takes 5 to 10 working days. A complete Lead Engine with a built-in interactive dashboard takes approximately 3 to 4 weeks, depending on content availability, custom showroom photo integrations, and domain setups."
  },
  {
    question: "Do you include Google indexing and Local SEO setup for South African cities?",
    answer: "Yes, every single layout we build is fully SEO-ready. We configure accurate LocalBusiness schema, target high-volume regional keywords naturally, register your package for correct Google crawling, and construct search-engine-friendly structure. We cover major metros like Sandton, Pretoria East, Constantia, Umhlanga, and Knysna."
  },
  {
    question: "How does the WhatsApp Lead Capture system work on the website?",
    answer: "We integrate direct WhatsApp buttons and custom pre-filled inquiry options. When a visitor views your kitchen cabinets or bespoke shopfitting work, they can click a button that populates a detailed message on WhatsApp—saving them time and instantly launching a collaborative, warm chat directly on your phone."
  },
  {
    question: "Can you redesign my existing cabinet making or shopfitting website?",
    answer: "Yes, we handle complete custom redesigns. We will migrate your existing copywriting and visual portfolios, upgrade the layouts to mobile-optimized luxury interfaces, build custom lead capture widgets, and implement correct redirects to preserve any legacy Google SEO rankings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F27D26]/[0.01] blur-[150px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequestly Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Clear Answers for <span className="serif-font text-[#F27D26] italic">Serious Clients</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-geist">
            Learn more about our premium digital studio, target timelines, transparent South African cabinetry-centric pricing structures, and Local SEO integrations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4" data-aos="fade-up" data-aos-delay="100">
          {FAQ_DATA.map((item, idx) => {
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
