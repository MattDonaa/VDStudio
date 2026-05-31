/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Marquee from "./components/Marquee";
import DeepDive from "./components/DeepDive";
import Portfolio from "./components/Portfolio";
import Solutions from "./components/Solutions";
import Packages from "./components/Packages";
import LeadFlowVisual from "./components/LeadFlowVisual";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState("");

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

        {/* Strategic Woodworking Marquee continuous ticker */}
        <Marquee />

        {/* Deep Dive Services Section (Capture serious enquiries grid split) */}
        <DeepDive onStartProject={scrollToContact} />

        {/* Portfolio Showcase Concept Blueprints */}
        <Portfolio onSelectProject={handleSelectPackageOrPath} />

        {/* Solutions Delivery Options Path (Raw, Assistance, Lead capture system) */}
        <Solutions onSelectSolution={handleSelectPackageOrPath} />

        {/* Project Packages structured table cards (quoted per project adapt) */}
        <Packages onSelectPackage={handleSelectPackageOrPath} />

        {/* Custom Visual Pipeline workflow from visitor to whatsapp lead */}
        <LeadFlowVisual />

        {/* Delivery Timeline / 6 step process mapping */}
        <Process />

        {/* Conversion Lead capture qualified application form */}
        <ContactForm selectedInterest={selectedInterest} />

        {/* Floating whatsapp action support circular button */}
        <FloatingWhatsApp />

        {/* Custom luxury South African copy footer */}
        <Footer />
        
      </div>
    </div>
  );
}
