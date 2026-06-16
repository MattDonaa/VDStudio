import fs from 'fs';
import path from 'path';

// Clean semantic HTML snippet corresponding to Veneer Digital Studio
const STATIC_ROOT_CONTENT = `
<div class="relative min-h-screen bg-[#050505] text-white font-geist">
  <!-- Header -->
  <header class="py-6 px-12 border-b border-white/5 flex justify-between items-center max-w-5xl mx-auto">
    <div class="font-bold text-lg text-white tracking-wide">VDS <span class="text-[#F27D26]">Veneer Digital Studio</span></div>
    <nav class="hidden md:flex gap-6 text-sm text-white/50">
      <a href="#services" class="hover:text-white">Services</a>
      <a href="#portfolio" class="hover:text-white">Live Demos</a>
      <a href="#packages" class="hover:text-white">Packages</a>
      <a href="#process" class="hover:text-white">Process</a>
      <a href="#faq" class="hover:text-white">F.A.Q</a>
      <a href="#contact" class="hover:text-white font-bold text-[#F27D26]">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="max-w-5xl mx-auto px-6 py-20 text-center">
    <h1 class="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
      Websites that look premium and <br/>
      <span class="text-[#F27D26] italic font-serif">capture serious enquiries.</span>
    </h1>
    <p class="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg mb-8 leading-relaxed">
      We build premium websites, WhatsApp-ready lead capture systems, and Google-ready online presences for South African woodworkers, cabinet makers, joiners, cupboard specialists, and kitchen remodellers.
    </p>
    <div class="flex justify-center gap-4">
      <a href="#contact" class="px-6 py-3 bg-[#F27D26] text-black font-bold uppercase tracking-wider text-xs rounded-full">Book Website Audit</a>
      <a href="#services" class="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-white/10">Explore Services</a>
    </div>
  </section>

  <!-- Feature Grid -->
  <section id="services" class="max-w-5xl mx-auto px-6 py-16 border-t border-white/5">
    <h2 class="text-xs font-mono tracking-widest text-[#F27D26] uppercase text-center mb-12">Core Capabilities</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-lg font-medium text-white mb-2">Premium Website Builds</h3>
        <p class="text-xs text-white/50">Custom, high-end websites designed to make your craftsmanship look as valuable online as it does in person.</p>
      </div>
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-lg font-medium text-white mb-2">WhatsApp-Ready Lead Capture</h3>
        <p class="text-xs text-white/50">Consultation forms and WhatsApp enquiry flows prepared for future CRM and pipeline integration.</p>
      </div>
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-lg font-medium text-white mb-2">Google-Ready Presence</h3>
        <p class="text-xs text-white/50">SEO structure, metadata, service sections, and performance foundations built to support local visibility.</p>
      </div>
    </div>
  </section>

  <!-- Solutions/Deliverables Section -->
  <section id="packages" class="max-w-5xl mx-auto px-6 py-16 border-t border-white/5">
    <h2 class="text-2xl sm:text-3xl font-light text-center mb-12">Veneer Delivery <span class="text-[#F27D26] italic font-serif">Packages</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-8 bg-[#080808]/50 border border-white/5 rounded-3xl">
        <span class="text-[9px] font-mono uppercase tracking-wider text-[#F27D26]">Ownership First</span>
        <h3 class="text-xl font-medium text-white mt-2 mb-3">Raw HTML Website Delivery</h3>
        <p class="text-xs text-white/50 mb-6 font-light">For business owners who want a complete premium website package they can keep, host, or hand over to their own technical person.</p>
        <ul class="text-[11px] text-white/40 space-y-2 mb-8">
          <li>✓ Custom homepage & Showcase grid</li>
          <li>✓ Gallery/portfolio layout structures</li>
          <li>✓ Contact form structure & WhatsApp CTA</li>
          <li>✓ South Africa friendly SEO metadata</li>
        </ul>
      </div>
      <div class="p-8 bg-[#080850]/20 border border-[#F27D26]/20 rounded-3xl">
        <span class="text-[9px] font-mono uppercase tracking-wider text-[#F27D26]">Most Practical Choice</span>
        <h3 class="text-xl font-medium text-white mt-2 mb-3">Website Build + Hosting Setup</h3>
        <p class="text-xs text-white/50 mb-6 font-light">For businesses that want the website built professionally and connected to hosting and domain setup without technical confusion.</p>
        <ul class="text-[11px] text-white/40 space-y-2 mb-8">
          <li>✓ Full website layout build & launch support</li>
          <li>✓ Domestic Domain connection & setup assistance</li>
          <li>✓ Netlify, Vercel or Hostinger assistance</li>
          <li>✓ Integrated WhatsApp response triggers</li>
        </ul>
      </div>
      <div class="p-8 bg-[#080808]/50 border border-white/5 rounded-3xl">
        <span class="text-[9px] font-mono uppercase tracking-wider text-[#F27D26]">Growth Enabled</span>
        <h3 class="text-xl font-medium text-white mt-2 mb-3">Premium Lead-Capture System</h3>
        <p class="text-xs text-white/50 mb-6 font-light">For serious wood and kitchen businesses that want their website to capture, qualify, and route project enquiries into a WhatsApp sales process.</p>
        <ul class="text-[11px] text-white/40 space-y-2 mb-8">
          <li>✓ Premium website + interactive lead qualification</li>
          <li>✓ Filtered consultation fields & WhatsApp flow</li>
          <li>✓ CRM-ready lead objects structure</li>
          <li>✓ Analytics, GTM, and tracking readiness</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Portfolio Showcases -->
  <section id="portfolio" class="max-w-5xl mx-auto px-6 py-16 border-t border-white/5">
    <h2 class="text-2xl sm:text-3xl font-light text-center mb-12">Luxury Portfolio blueprints built across <span class="text-[#F27D26] italic font-serif">South Africa</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden p-6">
        <div class="text-[10px] text-[#F27D26] uppercase font-mono mb-2">Kitchen Remodeller Website</div>
        <h3 class="text-lg font-medium text-white mb-2">D&D Woodworks in Klerksdorp</h3>
        <p class="text-xs text-white/50 font-light">Bespoke solid oak cabinet builder showcase with live interactive room visualizer references.</p>
      </div>
      <div class="bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden p-6">
        <div class="text-[10px] text-[#F27D26] uppercase font-mono mb-2">Joinery Studio Website</div>
        <h3 class="text-lg font-medium text-white mb-2">Space Kitchen in Johannesburg</h3>
        <p class="text-xs text-white/50 font-light">Space Kitchens & Cupboards designs and installs premium kitchens, built-in cupboards Johannesburg, South Africa</p>
      </div>
      <div class="bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden p-6">
        <div class="text-[10px] text-[#F27D26] uppercase font-mono mb-2">Built-In Cupboard Lead Page</div>
        <h3 class="text-lg font-medium text-white mb-2">Lingerwood in Bloemfontein</h3>
        <p class="text-xs text-white/50 font-light">At Lingenfelder, we design, manufacture, and install custom kitchen cabinets, ceiling-high cupboards, bathroom vanities, and custom wood furniture.</p>
      </div>
    </div>
  </section>

  <!-- Process -->
  <section id="process" class="max-w-5xl mx-auto px-6 py-16 border-t border-white/5">
    <h2 class="text-xs font-mono tracking-widest text-[#F27D26] uppercase text-center mb-12">The Six Step Delivery Timeline</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-[#080808]/40 border-l border-[#F27D26]/30">
        <div class="text-2xl font-serif text-[#F27D26] mb-2">01</div>
        <h3 class="text-base font-semibold text-white mb-1">Discovery</h3>
        <p class="text-xs text-white/40">We understand your business, services, project types, target clients, and current online presence.</p>
      </div>
      <div class="p-6 bg-[#080808]/40 border-l border-[#F27D26]/30">
        <div class="text-2xl font-serif text-[#F27D26] mb-2">02</div>
        <h3 class="text-base font-semibold text-white mb-1">Direction</h3>
        <p class="text-xs text-white/40">We define the visual style, website structure, messaging, and lead capture flow.</p>
      </div>
      <div class="p-6 bg-[#080808]/40 border-l border-[#F27D26]/30">
        <div class="text-2xl font-serif text-[#F27D26] mb-2">03</div>
        <h3 class="text-base font-semibold text-white mb-1">Build</h3>
        <p class="text-xs text-white/40">We design and build the premium website using the cloned dark/orange visual system.</p>
      </div>
    </div>
  </section>

  <!-- F.A.Q. Accordion -->
  <section id="faq" class="max-w-5xl mx-auto px-6 py-16 border-t border-white/5">
    <h2 class="text-2xl sm:text-3xl font-light text-center mb-12 text-white">Frequently Asked <span class="text-[#F27D26] italic font-serif">Questions</span></h2>
    <div class="space-y-4 max-w-3xl mx-auto">
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-sm font-semibold text-white">How much does a professional website cost for a carpentry or kitchen company in South Africa?</h3>
        <p class="mt-2 text-xs text-white/50">A bespoke website built by Veneer Digital Studio starts from R4,499 for raw HTML delivery and R7,999 to R14,999 for full-featured, WhatsApp-ready platforms.</p>
      </div>
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-sm font-semibold text-white">Do you design websites specifically for cabinet makers, woodworkers, and kitchen remodellers?</h3>
        <p class="mt-2 text-xs text-white/50">Yes, absolutely. We specialize specifically in the joinery, cabinetry, shopfitting, and luxury kitchen remodeling industries inside South Africa.</p>
      </div>
      <div class="p-6 bg-[#080808]/50 border border-white/5 rounded-2xl">
        <h3 class="text-sm font-semibold text-white">Do you include Google indexing and Local SEO setup for South African cities?</h3>
        <p class="mt-2 text-xs text-white/50">Yes, every single layout we build is fully SEO-ready. We configure accurate LocalBusiness schema, target high-volume regional keywords naturally, and prepare accurate geographic mappings.</p>
      </div>
    </div>
  </section>

  <!-- Contact Lead Application -->
  <section id="contact" class="max-w-3xl mx-auto px-6 py-20 text-center border-t border-white/5">
    <h2 class="text-3xl font-light text-white mb-4">Book Your <span class="text-[#F27D26] italic font-serif">Website Audit</span></h2>
    <p class="text-xs text-white/50 mb-8 max-w-lg mx-auto">Get in touch directly with our digital specialists so we can discuss raw delivery, custom hosting integrations, or WhatsApp systems.</p>
    <div class="text-[#F27D26] font-mono text-sm uppercase">Email: hello@veneerdigital.co.za | Line: +27 65 731 9062</div>
  </section>

  <!-- Footer -->
  <footer class="py-12 border-t border-white/5 max-w-5xl mx-auto text-center text-xs text-white/30">
    <p class="mb-4">© 2026 Veneer Digital Studio (Pty) Ltd. All rights reserved. Registered in South Africa.</p>
    <div class="flex justify-center gap-4 text-[10px] font-mono">
      <a href="/privacy-policy" class="hover:text-white">Privacy Policy</a>
      <a href="/terms-and-conditions" class="hover:text-white">Terms of Service</a>
      <a href="/popia-compliance" class="hover:text-white">POPIA Compliance</a>
      <a href="/cookie-policy" class="hover:text-white">Cookie Policy</a>
      <a href="/sitemap.xml" class="hover:text-white">Sitemap XML</a>
    </div>
  </footer>
</div>
`;

function prerender() {
  const distIndex = path.resolve(process.cwd(), 'dist', 'index.html');
  if (!fs.existsSync(distIndex)) {
    console.error(`dist/index.html not found! Prerendering skipped.`);
    return;
  }

  let htmlContent = fs.readFileSync(distIndex, 'utf8');

  // Inject our rich static content into <div id="root"></div>
  const target = '<div id="root"></div>';
  const replacement = `<div id="root">${STATIC_ROOT_CONTENT}</div>`;

  if (htmlContent.includes(target)) {
    htmlContent = htmlContent.replace(target, replacement);
    fs.writeFileSync(distIndex, htmlContent, 'utf8');
    console.log(`Successfully SEO pre-rendered built index.html at ${distIndex}`);
  } else {
    // If it's already pre-rendered or has something inside, check or overwrite
    console.log('Skipping prerender: target div not matching empty state or already compiled.');
  }
}

prerender();
