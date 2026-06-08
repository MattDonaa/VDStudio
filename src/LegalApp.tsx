import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LegalContent from "./components/LegalContent";
import CookieConsent from "./components/CookieConsent";

export default function LegalApp() {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy" | "popia" | "cookies">("terms");

  // Read hash on mount and listen to hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "terms" || hash === "privacy" || hash === "popia" || hash === "cookies") {
        setActiveTab(hash as "terms" | "privacy" | "popia" | "cookies");
      }
    };

    handleHashChange(); // Initial check
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative">
      {/* Glow Effect Top Left */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-br from-[#F27D26]/10 via-[#F27D26]/5 to-transparent w-full pointer-events-none rounded-full blur-[100px] opacity-70 -z-10" />

      {/* Header */}
      <Header onStartProject={() => { window.location.href = "/#contact"; }} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-32 pb-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
        <LegalContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Premium Cookie Consent Popup */}
      <CookieConsent />
    </div>
  );
}
