/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import PainPoints from "./components/PainPoints";
import WebsiteComparison from "./components/WebsiteComparison";
import Marquee from "./components/Marquee";
import DeepDive from "./components/DeepDive";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import LeadFlowVisual from "./components/LeadFlowVisual";
import Process from "./components/Process";
import FAQ, { FAQ_DATA } from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import SEO from "./components/SEO";
import { agencyOrganizationSchema, getFAQSchema, getServiceSchema } from "./lib/schema";
import { RouterProvider, useRouter, scrollToElement } from "./lib/router";
import BlogView from "./components/BlogView";
import AdminBlogView from "./components/AdminBlogView";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsPage from "./components/TermsPage";
import PopiaPage from "./components/PopiaPage";
import CookiePolicyPage from "./components/CookiePolicyPage";
import FeaturedToolSection from "./components/FeaturedToolSection";
import GrowthToolsPage from "./components/GrowthToolsPage";
import GrowthToolDetailView from "./components/GrowthToolDetailView";

export default function App() {
  return (
    <RouterProvider>
      <SubApp />
    </RouterProvider>
  );
}

function SubApp() {
  const { pathname, navigate } = useRouter();
  const [selectedInterest, setSelectedInterest] = useState("");

  const homeSchemas = [
    agencyOrganizationSchema,
    getFAQSchema(FAQ_DATA),
    getServiceSchema(
      "Premium Website Design and Local SEO Build",
      "Premium website design and lead-capture systems for South African woodworkers, cupboard makers, joiners, cabinet makers, and kitchen renovators."
    )
  ];

  // Smooth scroll helper
  const scrollToContact = () => {
    console.log("[App.tsx scrollToContact] called. pathname:", pathname);
    if (pathname !== "/") {
      console.log("[App.tsx scrollToContact] Navigating from", pathname, "to Home page ('/')");
      navigate("/");
      setTimeout(() => {
        console.log("[App.tsx scrollToContact] Deferred scroll running after transition");
        scrollToElement("contact");
      }, 150);
    } else {
      console.log("[App.tsx scrollToContact] Already on Home, scrolling index contact");
      scrollToElement("contact");
    }
  };

  // Pre-choose interest dropdown option trigger
  const handleSelectPackageOrPath = (pkgName: string) => {
    setSelectedInterest(pkgName);
    scrollToContact();
  };

  // Safe AOS scroll-animations trigger setup
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.AOS) {
      // @ts-ignore
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
      // @ts-ignore
      window.AOS.refresh();
    }
  }, [pathname]);

  // --- SPO SPO-CMS ROUTING HANDLERS ---
  
  if (pathname === "/blog" || pathname === "/blog/") {
    return <BlogView onStartProject={scrollToContact} />;
  }

  if (pathname.startsWith("/blog/") && pathname !== "/blog/") {
    const slug = pathname.substring(6).replace(/\/$/, "");
    return <BlogView slug={slug} onStartProject={scrollToContact} />;
  }

  if (pathname === "/admin/blog" || pathname === "/admin/blog/") {
    return <AdminBlogView action="list" onStartProject={scrollToContact} />;
  }

  if (pathname === "/admin/blog/new" || pathname === "/admin/blog/new/") {
    return <AdminBlogView action="new" onStartProject={scrollToContact} />;
  }

  if (pathname.startsWith("/admin/blog/edit/")) {
    const editId = pathname.substring(17).replace(/\/$/, "");
    return <AdminBlogView action="edit" editId={editId} onStartProject={scrollToContact} />;
  }

  // --- GROWTH TOOLS ROUTING HANDLERS ---
  if (pathname === "/growth-tools" || pathname === "/growth-tools/") {
    return <GrowthToolsPage />;
  }

  if (pathname.startsWith("/growth-tools/") && pathname !== "/growth-tools/") {
    const toolId = pathname.substring(14).replace(/\/$/, "");
    return <GrowthToolDetailView toolId={toolId} />;
  }

  // --- NEW STANDALONE LEGAL ROUTING HANDLERS ---
  if (pathname === "/legal.html" || pathname === "/legal" || pathname === "/legal/") {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "privacy") {
        navigate("/privacy-policy");
      } else if (hash === "cookies" || hash === "cookie") {
        navigate("/cookie-policy");
      } else if (hash === "popia") {
        navigate("/popia-compliance");
      } else {
        navigate("/terms-and-conditions");
      }
    }
    return null;
  }

  if (pathname === "/privacy-policy" || pathname === "/privacy-policy/") {
    return <PrivacyPolicyPage />;
  }

  if (pathname === "/terms-and-conditions" || pathname === "/terms-and-conditions/") {
    return <TermsPage />;
  }

  if (pathname === "/popia-compliance" || pathname === "/popia-compliance/") {
    return <PopiaPage />;
  }

  if (pathname === "/cookie-policy" || pathname === "/cookie-policy/") {
    return <CookiePolicyPage />;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-clip font-geist">
      <SEO
        title="Veneer Digital Studio | Premium Websites & Local SEO in South Africa"
        description="Premium website design, local SEO, and custom digital systems for South African woodworkers, cabinet makers, joiners, cupboard specialists, and kitchen remodellers."
        canonical="https://www.veneerdigital.co.za"
        jsonLd={homeSchemas}
      />
      {/* Background Glow & Grid Decoration from Dark Luxury Theme Design HTML */}
      <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] orange-glow pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] orange-glow pointer-events-none"></div>
      </div>

      {/* Main Core Shell */}
      <div className="relative z-10">
        
        {/* Sticky glass-morphism header */}
        <Header onStartProject={scrollToContact} />

        {/* Hero Section */}
        <Hero
          onStartProject={scrollToContact}
          onExploreServices={() => {
            const servicesSec = document.getElementById("services");
            if (servicesSec) {
              servicesSec.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* Niche Core Feature Grid */}
        <FeatureGrid />

        {/* Real Carpenter & Contractor Pain Points */}
        <PainPoints />

        {/* This is not just another website comparison */}
        <WebsiteComparison />

        {/* Strategic Woodworking Marquee continuous ticker */}
        <Marquee />

        {/* Deep Dive Services Section (Capture serious enquiries grid split) */}
        <DeepDive onStartProject={scrollToContact} />

        {/* Portfolio Showcase Concept Blueprints */}
        <Portfolio onSelectProject={handleSelectPackageOrPath} />

        {/* Project Packages structured table cards (quoted per project adapt) */}
        <Packages onSelectPackage={handleSelectPackageOrPath} />

        {/* Custom Visual Pipeline workflow from visitor to whatsapp lead */}
        <LeadFlowVisual />

        {/* Free Growth Tools Featured Section */}
        <FeaturedToolSection />

        {/* Delivery Timeline / 6 step process mapping */}
        <Process />

        {/* Visible Frequently Asked Questions section before Lead form */}
        <FAQ />

        {/* Conversion Lead capture qualified application form */}
        <ContactForm selectedInterest={selectedInterest} />

        {/* Floating whatsapp action support circular button */}
        <FloatingWhatsApp />

        {/* Custom luxury South African copy footer */}
        <Footer />

        {/* Premium Cookie Consent Popup */}
        <CookieConsent />
        
      </div>
    </div>
  );
}
