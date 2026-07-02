import React, { useState } from "react";
import { Hammer, Star, Send, Bell, Sparkles } from "lucide-react";

interface ToolPlaceholderProps {
  toolName: string;
}

export default function ToolPlaceholder({ toolName }: ToolPlaceholderProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // Silent success, logs locally or mock
  };

  return (
    <div className="relative bg-[#080808]/40 border border-white/5 rounded-3xl p-6 sm:p-10 mb-16 overflow-hidden backdrop-blur-md">
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F27D26]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative inner borders */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-xl mx-auto text-center py-6 relative z-10">
        {/* Animated Icon Container */}
        <div className="inline-flex relative mb-6">
          <div className="w-16 h-16 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center text-[#F27D26] relative overflow-hidden group">
            <Hammer className="w-6 h-6 animate-pulse" />
            <div className="absolute inset-0 bg-[#F27D26]/5 rounded-full animate-ping scale-75 opacity-50 pointer-events-none" />
          </div>
          <span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#F27D26] to-[#B65000] text-white p-1 rounded-full text-[8px] border border-[#050505]">
            <Sparkles className="w-3 h-3" />
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-3 font-serif">
          Interactive <span className="text-[#F27D26] italic">{toolName}</span> is Under Assembly
        </h3>
        <p className="text-xs sm:text-[13px] text-white/55 leading-relaxed mb-8 font-geist max-w-md mx-auto">
          Our engineering team is wrapping up the final algorithmic nodes and responsive visualization parameters. Enter your email below to receive priority access the moment this tool launches.
        </p>

        {/* Action Form */}
        {submitted ? (
          <div className="bg-[#F27D26]/5 border border-[#F27D26]/20 rounded-2xl p-4 text-center max-w-md mx-auto animate-fade-in">
            <p className="text-[#F27D26] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              ✦ Thank You!
            </p>
            <p className="text-white/70 text-xs font-geist">
              We have flagged your email for early launch invites.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your professional email..."
              required
              className="flex-grow px-5 py-3.5 bg-white/5 border border-white/10 focus:border-[#F27D26]/50 focus:outline-none rounded-xl text-xs text-white placeholder-white/30 font-geist transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#F27D26] text-black hover:bg-white text-xs font-bold uppercase tracking-wider font-geist rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Notify Me</span>
            </button>
          </form>
        )}

        {/* Visual Mock Interface Wireframe Accent */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-2.5 items-stretch opacity-35 max-w-md mx-auto select-none pointer-events-none">
          <div className="flex gap-2">
            <div className="h-6 w-1/3 bg-white/5 rounded-md" />
            <div className="h-6 w-2/3 bg-white/5 rounded-md" />
          </div>
          <div className="h-20 bg-white/[0.03] rounded-lg border border-white/5 flex items-center justify-center text-[9px] font-mono text-white/20 uppercase tracking-widest">
            Visualizer Output Node
          </div>
          <div className="h-8 bg-[#F27D26]/5 rounded-md border border-[#F27D26]/10" />
        </div>
      </div>
    </div>
  );
}
