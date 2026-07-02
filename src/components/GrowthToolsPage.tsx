import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import { TOOLS_DATA } from "../lib/toolsData";
import GrowthToolCard from "./GrowthToolCard";
import { useRouter } from "../lib/router";
import { getBreadcrumbSchema } from "../lib/schema";
import { Sparkles } from "lucide-react";

export default function GrowthToolsPage() {
  const { navigate } = useRouter();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://www.veneerdigital.co.za" },
    { name: "Growth Tools", item: "https://www.veneerdigital.co.za/growth-tools" }
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative overflow-x-hidden">
      <SEO
        title="Interactive Growth Tools for Woodworkers | Veneer Digital Studio"
        description="Run our free interactive diagnostic tools designed specifically for cabinet makers, kitchen designers, and joinery brands to increase leads and calculate ROI."
        canonical="https://www.veneerdigital.co.za/growth-tools"
        jsonLd={breadcrumbSchema}
      />

      {/* Premium Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-br from-[#F27D26]/10 via-[#F27D26]/5 to-transparent w-full pointer-events-none rounded-full blur-[140px] opacity-70 -z-10" />

      {/* Header */}
      <Header onStartProject={() => { navigate("/#contact"); }} />

      {/* Main Area */}
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
        <div className="w-full">
          {/* Header Area */}
          <div className="mb-16 text-center flex flex-col items-center justify-center w-full">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#F27D26] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Studio Resource Portal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white tracking-tight mb-4 leading-tight">
              Interactive <span className="serif-font text-[#F27D26] italic">Growth Tools</span>
            </h1>
            
            <p className="text-white/60 text-base md:text-lg font-geist max-w-2xl leading-relaxed mx-auto text-center">
              Discover free interactive tools designed to help contractors and service businesses generate more leads, improve conversions and identify growth opportunities.
            </p>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-sm max-w-2xl text-left mx-auto">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F27D26]" />
              <p className="text-white/70 text-xs font-geist italic pl-2">
                “These tools are built specifically for South African woodworking, kitchen installation, and renovation brands to calculate true performance metrics.”
              </p>
            </div>
          </div>

          {/* Grid Layout of Exactly Seven Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {TOOLS_DATA.map((tool) => (
              <div key={tool.id} className="h-full">
                <GrowthToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
