import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import ToolHero from "./ToolHero";
import ToolPlaceholder from "./ToolPlaceholder";
import RelatedTools from "./RelatedTools";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import { TOOLS_DATA, ToolItem } from "../lib/toolsData";
import { useRouter } from "../lib/router";
import { getBreadcrumbSchema } from "../lib/schema";
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react";

interface GrowthToolDetailViewProps {
  toolId: string;
}

export default function GrowthToolDetailView({ toolId }: GrowthToolDetailViewProps) {
  const { navigate } = useRouter();

  // Find the tool by ID
  const tool = TOOLS_DATA.find((t) => t.id === toolId);

  if (!tool) {
    // Fallback if not found
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center">
        <p className="mb-4">Tool not found</p>
        <button onClick={() => navigate("/growth-tools")} className="px-4 py-2 bg-[#F27D26] text-black">
          Back to Growth Tools
        </button>
      </div>
    );
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://www.veneerdigital.co.za" },
    { name: "Growth Tools", item: "https://www.veneerdigital.co.za/growth-tools" },
    { name: tool.name, item: `https://www.veneerdigital.co.za${tool.slug}` }
  ]);

  // Determine other related tools (excluding the current one) to display under "Related Tools"
  const allOtherToolIds = TOOLS_DATA.filter((t) => t.id !== tool.id).map((t) => t.id);
  // Just show two related tools
  const recommendedToolIds = allOtherToolIds.slice(0, 2);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/growth-tools");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Tool Specific SEO */}
      <SEO
        title={`${tool.name} | Veneer Digital Studio`}
        description={tool.description}
        canonical={`https://www.veneerdigital.co.za${tool.slug}`}
        jsonLd={breadcrumbSchema}
      />

      {/* Background glow aligned with VDS identity */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-[#F27D26]/10 via-[#F27D26]/5 to-transparent w-full pointer-events-none rounded-full blur-[120px] opacity-70 -z-10" />

      {/* Header */}
      <Header onStartProject={() => { navigate("/#contact"); }} />

      {/* Main content container */}
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
        <div className="w-full">
          {/* Back button */}
          <a
            href="/growth-tools"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Growth Tools
          </a>

          {/* Interactive Tool Hero */}
          <ToolHero tool={tool} />

          {/* Grid Layout: Tool Interface & Related Services */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8 w-full">
            {/* Left Panel: The Tool Placeholder */}
            <div className="w-full lg:w-2/3">
              {/* Short introductory summary */}
              <div className="mb-8 prose prose-invert max-w-none text-white/70 font-geist text-xs sm:text-sm leading-relaxed">
                <p>
                  Measuring your business performance is the first step towards digital transformation. This interactive utility is calibrated for local carpentry, shopfitting, and luxury renovation brands looking to measure performance without high developer overheads.
                </p>
              </div>

              {/* Sleek Tool Placeholder with notification form */}
              <ToolPlaceholder toolName={tool.name} />
            </div>

            {/* Right Panel: Related Services Sidebar */}
            <div className="w-full lg:w-1/3 sticky top-32 space-y-8">
              {/* Connected Services Box */}
              <div className="bg-[#0b0b0b]/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#F27D26] mb-6">
                  Related Services
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-geist mb-6">
                  Veneer Digital Studio provides custom-engineered integrations for these services to help streamline your workshop pipeline:
                </p>

                <div className="space-y-4">
                  {tool.relatedServices.map((service, idx) => (
                    <a
                      key={idx}
                      href={service.href}
                      onClick={() => {
                        navigate(service.href);
                        if (service.href.startsWith("/#")) {
                          setTimeout(() => {
                            const id = service.href.split("#")[1];
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 200);
                        }
                      }}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-[#F27D26]/20 rounded-xl group/svc transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#F27D26]" />
                        <span className="text-xs font-geist font-semibold text-white/80 group-hover/svc:text-white transition-colors">
                          {service.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover/svc:text-[#F27D26] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote Tip box */}
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl font-geist text-xs text-white/60 italic">
                “High-performance digital tools convert passive directory views into active high-ticket woodworking enquiries.”
              </div>
            </div>
          </div>

          {/* Related Tools Recommendation Section */}
          <RelatedTools toolIds={recommendedToolIds} />

          {/* FAQs Container */}
          <FAQSection faqs={tool.faqs} />

          {/* Book Call CTA block */}
          <CTASection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
