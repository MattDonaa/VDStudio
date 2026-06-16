import React from "react";
import LegalLayout from "./LegalLayout";

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      activeKey="cookies"
      title="Cookie Policy | Veneer Digital Studio"
      subtitle="Read our Cookie Policy to learn how Veneer Digital Studio uses cookies and localStorage to improve performance and customize your kitchen design & copywriting experience."
      updatedDate="January 31st, 2026"
      seoTitle="Cookie Policy | Veneer Digital Studio"
      seoDescription="Read our Cookie Policy to learn how Veneer Digital Studio uses cookies and localStorage to improve performance and customize your kitchen design & copywriting experience."
      canonicalUrl="https://www.veneerdigital.co.za/cookie-policy"
    >
      <div className="space-y-12 leading-relaxed text-[15px] font-geist text-white/70">
        <div>
          <h2 className="text-3xl font-serif text-white tracking-tight mb-4">Cookie Policy</h2>
          <p className="text-white/60">
            This Cookie Policy explains what cookies are, how Veneer Digital Studio uses them on our website, and how you can manage your preferences.
          </p>
        </div>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">1. What Cookies Are</h3>
          <p>
            Cookies are microscopic plain text files downloaded to your internet browser or device hardware memory when you open digital web pages. They helper-record user actions, preserve visual selections, remember form entries, and analyze performance data. This ensures a fluid, responsive, lock-tight service without forcing you to re-type preferences on every click.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">2. How We Use Cookies</h3>
          <p className="mb-4">
            We operate both temporary single-session cookies (flushed when you shut your browser tab) and long-term persistent cookies (which reside inside your cache files until they cross their expiry date or are wiped manually). We categorize cookies by their function:
          </p>
          <div className="space-y-6">
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide text-[#F27D26]">A. Essential Cookies (Technical Root)</h4>
              <p className="text-xs text-white/60">
                These are mandatory for loading web pages, verifying secured logins, routing form submissions, and logging your cookie options. Because we cannot build or show the core website properly without these nodes, they cannot be turned off.
              </p>
            </div>
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide text-[#F27D26]">B. Analytics & Optimization Cookies</h4>
              <p className="text-xs text-white/60">
                These record metrics concerning page loading frequencies, regional traffic cities, and visitor navigation timings. This statistical data is strictly compiled to assist us in polishing browser compatibility and improving layout responsiveness.
              </p>
            </div>
            <div className="p-5 bg-[#F27D26]/[0.02] border border-[#F27D26]/10 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide text-[#F27D26]">C. Marketing & Social Cookies</h4>
              <p className="text-xs text-white/60">
                These cookies track the efficiency of our woodworking and cabinet design campaigns. When activated, they help us model custom professional audiences on services like Google Ads or Meta Pixel, displaying matching offers to interested local builders.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">3. LocalStorage Consent Storage</h3>
          <p>
            For privacy and legal compliance, we record your specific cookie decisions within your local browser's secure <code>localStorage</code> folder using the key <code>vds_cookie_consent</code>. This decision is cataloged as a structured JSON object containing your specific preferences ("essential", "analytics", "marketing") along with the precise timestamp of your action. This prevents the cookie notification box from displaying on subsequent visits.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">4. Meta Pixel & Third-Party Trackers</h3>
          <p>
            Where requested by clients or implemented inside active campaigns, third-party trackers (such as Google Analytics or Meta Pixel) may write cookie elements onto your devices to compile conversion data regarding cabinet makers and kitchen designers. These trackers remain blocked on our platform unless you click 'Accept All' or switch them on inside our Consent Settings.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">5. Changing Your Preferences</h3>
          <p>
            You hold total control over your digital file details. You can flush stored history, delete active cookies, or block browser cookies directly in your browser's security settings. Alternatively, you can reload your preference parameters at any time by clicking the <strong className="text-white">Cookie Preferences</strong> button in our website footer, allowing you to edit choices instantly.
          </p>
        </section>

        <section className="border-t border-white/5 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">6. Contact Information</h3>
          <p className="mb-4">
            If you have any questions or require more details regarding our cookie policies, please reach out to our desk:
          </p>
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs text-white/80 space-y-2">
            <div><strong className="text-[#F27D26]">Entity:</strong> Veneer Digital Studio Representative Desk</div>
            <div><strong className="text-[#F27D26]">Email:</strong> <a href="mailto:matt@veneerdigital.co.za" className="hover:underline hover:text-[#F27D26]">matt@veneerdigital.co.za</a></div>
            <div><strong className="text-[#F27D26]">Website:</strong> <a href="https://www.veneerdigital.co.za" className="hover:underline hover:text-[#F27D26]">https://www.veneerdigital.co.za</a></div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
