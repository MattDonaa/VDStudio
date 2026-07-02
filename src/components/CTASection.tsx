import React from "react";
import { useRouter } from "../lib/router";
import { ArrowUpRight, MessageSquare } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CTASection({
  title = "Ready to Automate Your Woodworking Brand?",
  description = "Connect with Veneer Digital Studio to design high-performance websites, deploy direct lead pipelines, or hook up smart AI call receptionists for your shopfitting business.",
  buttonText = "Book Studio Audit",
  onButtonClick
}: CTASectionProps) {
  const { navigate } = useRouter();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden w-full border-t border-white/5 mt-12">
      {/* Visual background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F27D26]/40 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F27D26]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B65000]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="bg-gradient-to-br from-[#0c0c0c] to-[#050505] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text */}
        <div className="max-w-xl text-left relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-full text-[10px] font-mono tracking-widest text-[#F27D26] uppercase font-bold mb-4">
            <MessageSquare className="w-3 h-3" />
            <span>Connect with our studio</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3 font-serif">
            {title}
          </h3>
          <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed font-geist">
            {description}
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0 relative z-10 w-full md:w-auto">
          <button
            onClick={handleButtonClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F27D26] to-[#D56512] hover:from-white hover:to-white text-black font-geist text-xs uppercase font-extrabold tracking-wider transition-all duration-300 rounded-full cursor-pointer shadow-[0_10px_30px_rgba(242,125,38,0.2)] hover:shadow-white/10"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
