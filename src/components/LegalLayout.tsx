import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import SEO from "./SEO";
import { getBreadcrumbSchema } from "../lib/schema";
import { useRouter } from "../lib/router";
import { ArrowLeft, Shield } from "lucide-react";

interface LegalLayoutProps {
  activeKey: "privacy" | "terms" | "popia" | "cookies";
  title: string;
  subtitle: string;
  updatedDate: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  children: ReactNode;
}

export default function LegalLayout({
  activeKey,
  title,
  subtitle,
  updatedDate,
  seoTitle,
  seoDescription,
  canonicalUrl,
  children,
}: LegalLayoutProps) {
  const { pathname, navigate } = useRouter();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://www.veneerdigital.co.za" },
    { name: title, item: canonicalUrl },
  ]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const navItems = [
    { key: "terms", name: "1. Terms of Service", href: "/terms-and-conditions" },
    { key: "privacy", name: "2. Privacy Policy", href: "/privacy-policy" },
    { key: "popia", name: "3. POPIA Policy", href: "/popia-compliance" },
    { key: "cookies", name: "4. Cookie Policy", href: "/cookie-policy" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative overflow-x-hidden">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        jsonLd={breadcrumbSchema}
      />
      {/* Background Glow Effect */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-[#F27D26]/10 via-[#F27D26]/5 to-transparent w-full pointer-events-none rounded-full blur-[120px] opacity-70 -z-10" />

      {/* Header */}
      <Header onStartProject={() => { navigate("/#contact"); }} />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
        <div className="w-full">
          {/* Back to Home CTA */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>

          {/* Header Area */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white tracking-tight mb-4 leading-tight">
              {title.split(" | ")[0]}
            </h1>
            <p className="text-white/60 text-base md:text-lg font-geist max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-sm max-w-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F27D26]" />
              <p className="text-white/70 text-xs font-geist italic pl-2">
                “These policies are provided for transparency and should not be treated as legal advice. Clients should seek independent legal advice where required.”
              </p>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full items-start">
            {/* Left Sidebar Links (1/3 Width) */}
            <nav className="md:w-1/3 shrink-0 flex flex-col gap-3 sticky top-32 z-10 w-full">
              <h2 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2 px-1">Legal Documents</h2>
              {navItems.map((item) => {
                const isActive = activeKey === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`
                      text-left px-5 py-4 rounded-xl transition-all duration-300 font-geist text-xs uppercase tracking-wider block border
                      ${isActive
                        ? "bg-white/10 text-white shadow-[0_0_15px_rgba(242,125,38,0.12)] border-[#F27D26]/30 relative font-medium"
                        : "bg-transparent text-white/50 hover:bg-white/5 hover:text-white/80 border-transparent"
                      }
                    `}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
                      )}
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#F27D26]/60 to-transparent" />
                    )}
                  </a>
                );
              })}

              <div className="mt-12 hidden md:block">
                <h4 className="text-white font-geist text-xs mb-3 font-medium">Questions about policies?</h4>
                <a
                  href="mailto:studio@veneerdigital.co.za"
                  className="inline-flex w-full justify-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-black transition-all group font-geist font-bold uppercase tracking-wider"
                >
                  Email Our Team
                </a>
              </div>
            </nav>

            {/* Right Side Content Panel (2/3 Width) */}
            <article className="md:w-2/3 w-full animate-fade-in pb-12">
              <div className="mb-6 pb-6 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F27D26] uppercase tracking-wider">
                  Official Policy Document
                </span>
                <span className="text-xs text-white/40 font-mono">
                  Last updated: {updatedDate}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none text-white/75">
                {children}
              </div>

              {/* Mobile back contacts */}
              <div className="mt-16 block md:hidden pt-8 border-t border-white/5">
                <h4 className="text-white font-geist text-xs mb-4 text-center">Questions about these policies? Contact Veneer Digital Studio.</h4>
                <a
                  href="mailto:studio@veneerdigital.co.za"
                  className="inline-flex w-full justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-geist text-xs uppercase font-medium tracking-wider"
                >
                  studio@veneerdigital.co.za
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Premium Cookie Consent Popup */}
      <CookieConsent />
    </div>
  );
}
