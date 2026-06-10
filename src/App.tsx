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
<<<<<<< HEAD
import FAQ, { FAQ_DATA } from "./components/FAQ";
=======
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
<<<<<<< HEAD
import SEO from "./components/SEO";
import { agencyOrganizationSchema, getFAQSchema, getServiceSchema } from "./lib/schema";
=======
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState("");

<<<<<<< HEAD
  const homeSchemas = [
    agencyOrganizationSchema,
    getFAQSchema(FAQ_DATA),
    getServiceSchema(
      "Premium Website Design and Local SEO Build",
      "Premium website design and lead-capture systems for South African woodworkers, cupboard makers, joiners, cabinet makers, and kitchen renovators."
    )
  ];

=======
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289
  // Smooth scroll helper
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-clip font-geist">
<<<<<<< HEAD
      <SEO
        title="Veneer Digital Studio | Premium Websites & Local SEO in South Africa"
        description="Premium website design, local SEO, and custom digital systems for South African woodworkers, cabinet makers, joiners, cupboard specialists, and kitchen remodellers."
        canonical="https://www.veneerdigital.co.za"
        jsonLd={homeSchemas}
      />
=======
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289
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

        {/* Delivery Timeline / 6 step process mapping */}
        <Process />

<<<<<<< HEAD
        {/* Visible Frequently Asked Questions section before Lead form */}
        <FAQ />

=======
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289
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
