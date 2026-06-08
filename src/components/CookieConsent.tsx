/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Cookie, Shield, Settings, X, Check } from "lucide-react";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Preference states
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Check storage on mount
  useEffect(() => {
    const consentValue = localStorage.getItem("vds_cookie_consent");
    if (!consentValue) {
      // Delay slightly for natural entrance feel
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Load current preferences if they exist in localStorage
      try {
        const prefs = JSON.parse(consentValue);
        if (prefs) {
          setAnalyticsConsent(!!prefs.analytics);
          setMarketingConsent(!!prefs.marketing);
        }
      } catch (e) {
        console.error("Error reading stored cookie preferences:", e);
      }
    }
  }, []);

  // Listen to global open event (useful for footer clicks)
  useEffect(() => {
    const handleOpenPreferences = () => {
      // Load from localStorage if present
      const consentValue = localStorage.getItem("vds_cookie_consent");
      if (consentValue) {
        try {
          const prefs = JSON.parse(consentValue);
          if (prefs) {
            setAnalyticsConsent(!!prefs.analytics);
            setMarketingConsent(!!prefs.marketing);
          }
        } catch (e) {}
      }
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const consentObject = {
      essential: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("vds_cookie_consent", JSON.stringify(consentObject));
    
    // Dispatch custom event to notify external trackers if configured
    window.dispatchEvent(new CustomEvent("vds-consent-updated", { detail: consentObject }));
    
    // Animate out
    setIsOpen(false);
    setTimeout(() => {
      setShowPreferences(false);
    }, 300);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleEssentialOnly = () => {
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsConsent, marketingConsent);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed z-50 bottom-0 left-0 right-0 p-4 md:p-6 md:top-auto md:left-auto md:right-6 md:bottom-6 md:max-w-md w-full animate-fade-in"
      style={{ animationDuration: "350ms" }}
    >
      <div className="bg-[#0c0c0c]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 shadow-[0_10px_40px_rgba(242,125,38,0.12)] relative overflow-hidden transition-all duration-300">
        
        {/* Subtle top indicator orange line representing active brand */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#F27D26] to-transparent opacity-80" />
        
        {/* Close trigger to just dismiss without forcing, but typically users should choose */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/30 hover:text-white/80 transition-colors"
          aria-label="Dismiss consent popup"
        >
          <X className="w-4 h-4" />
        </button>

        {!showPreferences ? (
          <div>
            {/* Standard Notice View */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium text-base tracking-tight leading-snug">
                We use cookies to refine your experience.
              </h3>
            </div>

            <p className="text-white/60 text-xs md:text-[13px] leading-relaxed font-light mb-6">
              Veneer Digital Studio uses essential cookies to keep the website working and optional analytics/marketing cookies to understand performance and improve our services. You can accept all cookies or continue with essential cookies only.
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F27D26] text-black font-semibold text-xs transition-all duration-200 hover:bg-[#F27D26]/90 shadow-sm hover:shadow-[#F27D26]/20 cursor-pointer"
              >
                Accept All
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleEssentialOnly}
                  className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium text-xs hover:bg-white/10 hover:text-white transition cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium text-xs hover:bg-white/10 hover:text-white flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Settings className="w-3 h-3" />
                  Preferences
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Preferences Management View */}
            <div className="flex items-center gap-3 mb-5">
              <button 
                onClick={() => setShowPreferences(false)}
                className="text-[#F27D26] hover:text-white transition-colors mr-1"
                aria-label="Back to general cookie settings"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-white font-medium text-base tracking-tight">
                Manage Preferences
              </h3>
            </div>

            {/* Cookies Preference Grid */}
            <div className="space-y-4 mb-6 pr-1 max-h-[220px] overflow-y-auto custom-scrollbar">
              
              {/* Category 1: Essential */}
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div>
                    <h4 className="text-white font-medium text-xs">Essential Cookies</h4>
                    <p className="text-[10px] text-[#F27D26] font-mono mt-0.5 uppercase tracking-wide">Always Active</p>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-[#F27D26]/20 border border-[#F27D26]/40 flex items-center px-0.5 justify-end">
                    <div className="w-3 h-3 rounded-full bg-[#F27D26]" />
                  </div>
                </div>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  Required for basic website functionality, form behaviour, security, and remembering your cookie choices.
                </p>
              </div>

              {/* Category 2: Analytics */}
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-1.5ClassName">
                  <h4 className="text-white font-medium text-xs">Analytics Cookies</h4>
                  <button 
                    onClick={() => setAnalyticsConsent(!analyticsConsent)}
                    className={`w-8 h-4 rounded-full transition-colors relative flex items-center px-0.5 cursor-pointer ${
                      analyticsConsent ? "bg-[#F27D26]" : "bg-white/10 border border-white/10"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-transform ${
                      analyticsConsent ? "translate-x-4 bg-black" : "bg-white/50"
                    }`} />
                  </button>
                </div>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  Help us understand website performance and improve the user experience.
                </p>
              </div>

              {/* Category 3: Marketing */}
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4 className="text-white font-medium text-xs">Marketing Cookies</h4>
                  <button 
                    onClick={() => setMarketingConsent(!marketingConsent)}
                    className={`w-8 h-4 rounded-full transition-colors relative flex items-center px-0.5 cursor-pointer ${
                      marketingConsent ? "bg-[#F27D26]" : "bg-white/10 border border-white/10"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-transform ${
                      marketingConsent ? "translate-x-4 bg-black" : "bg-white/50"
                    }`} />
                  </button>
                </div>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  Help us measure campaign performance and improve advertising relevance, including Meta Pixel where enabled.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-2.5">
              <button
                onClick={handleSavePreferences}
                className="w-1/2 py-2 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-medium text-xs hover:bg-white/20 transition cursor-pointer"
              >
                Save Choices
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-1/2 py-2 px-4 rounded-xl bg-[#F27D26] text-black font-semibold text-xs hover:bg-[#F27D26]/90 transition cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
