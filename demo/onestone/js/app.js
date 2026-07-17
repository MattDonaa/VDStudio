/* global React, ReactDOM */
(function () {
  const h = React.createElement;

  const WHATSAPP_PHONE = ""; // Add the business phone in international format, e.g. "263771234567".
  const BRAND_NAME = "OneStone Interior Design and Decor";
  const DEFAULT_MESSAGE = "Hello OneStone, I would like a premium interior design consultation.";

  function whatsappUrl(message) {
    const encoded = encodeURIComponent(message || DEFAULT_MESSAGE);
    return WHATSAPP_PHONE
      ? `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
      : `https://api.whatsapp.com/send?text=${encoded}`;
  }

  const services = [
    {
      icon: "▣",
      title: "Bespoke TV Units",
      text: "Statement entertainment walls designed around your room proportions, cable management, storage and premium finishes.",
      bullets: ["Floating consoles", "Feature wall panels", "Hidden wiring"]
    },
    {
      icon: "◈",
      title: "Drywall & Ceilings",
      text: "Architectural bulkheads, tray ceilings and refined drywall details that add height, rhythm and luxury lighting layers.",
      bullets: ["Cove lighting", "Bulkheads", "Clean finishing"]
    },
    {
      icon: "✦",
      title: "Lighting Design",
      text: "Warm LED coves, pendant features, spotlights and mood lighting planned to elevate every residential interior.",
      bullets: ["Ambient lighting", "Accent lighting", "Fixture placement"]
    },
    {
      icon: "▤",
      title: "Kitchen Cabinetry",
      text: "Functional cabinets, shelves and premium storage solutions with modern surfaces and practical layouts.",
      bullets: ["High-gloss finishes", "Display shelves", "Storage optimization"]
    },
    {
      icon: "◍",
      title: "Interior Styling",
      text: "Curated color palettes, feature textures, soft furnishings and decor choices that make the space feel complete.",
      bullets: ["Color palettes", "Wall treatments", "Decor curation"]
    },
    {
      icon: "✓",
      title: "Turnkey Installation",
      text: "From concept to fabrication and final fit-out, OneStone coordinates a smooth site experience with skilled installers.",
      bullets: ["Site measurement", "Fabrication", "Quality handover"]
    }
  ];

  const portfolio = [
    {
      title: "Cove Lighting Ceiling Detail",
      category: "Ceilings",
      image: "assets/cove-lighting-detail.jpg",
      alt: "Premium white ceiling with warm cove lighting by OneStone"
    },
    {
      title: "Completed TV Feature Wall",
      category: "TV Units",
      image: "assets/tv-unit-living-room.jpg",
      alt: "Modern TV unit with timber slats, floating cabinet and white panel"
    },
    {
      title: "Kitchen Storage & Display",
      category: "Cabinetry",
      image: "assets/kitchen-cabinetry.jpg",
      alt: "Modern kitchen cabinetry with glossy cabinets and display shelving"
    },
    {
      title: "Open Plan Interior Finishing",
      category: "Full Interior",
      image: "assets/living-room-ceiling-wall.jpg",
      alt: "Living room renovation with feature wall, drywall ceiling and LED lighting"
    },
    {
      title: "Lighting Installation On Site",
      category: "Process",
      image: "assets/design-planning.jpg",
      alt: "OneStone designer planning an interior lighting and finishing project"
    },
    {
      title: "Craft Team & Site Finishers",
      category: "Team",
      image: "assets/craft-team.jpg",
      alt: "OneStone craft and installation team working together"
    }
  ];

  const process = [
    ["Consultation", "Tell us your goals, room measurements, inspiration and budget so we can map the best design direction."],
    ["Design & Quote", "We translate the brief into a clear concept, material direction, timeline and transparent project quotation."],
    ["Fabrication", "Custom units, drywall details and lighting components are prepared with attention to fit and finishing."],
    ["Installation", "Our team installs, cleans, checks details and hands over a polished space ready to enjoy."]
  ];

  const testimonials = [
    ["The TV unit changed the entire feel of the lounge. Clean finishing, warm lighting and very practical storage.", "Residential client"],
    ["OneStone understood the look we wanted and guided us through ceiling details, lights and final finishes.", "Home renovation client"],
    ["Professional installation team. The feature wall and cove lighting look premium in person and in photos.", "Interior upgrade client"]
  ];

  function Header() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      document.body.classList.toggle("menu-open", open);
      return () => document.body.classList.remove("menu-open");
    }, [open]);

    const close = () => setOpen(false);

    return h("header", { className: "site-header", id: "site-header" },
      h("nav", { className: "navbar container", "aria-label": "Main navigation" },
        h("a", { href: "#home", className: "brand", onClick: close, "aria-label": "OneStone home" },
          h("span", { className: "brand-mark", "aria-hidden": "true" }, "OS"),
          h("span", { className: "brand-text" },
            h("strong", null, "OneStone"),
            h("span", null, "Interior Design & Decor")
          )
        ),
        h("div", { className: `nav-links ${open ? "open" : ""}`, id: "primary-navigation" },
          ["Services", "Portfolio", "Process", "Contact"].map((item) =>
            h("a", { key: item, href: `#${item.toLowerCase()}`, onClick: close }, item)
          )
        ),
        h("div", { className: "nav-actions" },
          h("a", { className: "btn btn-primary btn-small", href: whatsappUrl("Hello OneStone, I want to book a design consultation."), target: "_blank", rel: "noreferrer" }, "WhatsApp Quote"),
          h("button", {
            className: "menu-toggle",
            type: "button",
            "aria-label": "Toggle menu",
            "aria-controls": "primary-navigation",
            "aria-expanded": open,
            onClick: () => setOpen(!open)
          }, h("span"), h("span"), h("span"))
        )
      )
    );
  }

  function Hero() {
    return h("section", { className: "hero-section", id: "home", "aria-labelledby": "hero-title" },
      h("div", { className: "hero-media", "aria-hidden": "true" },
        h("img", { src: "assets/cove-lighting-detail.jpg", alt: "", loading: "eager" })
      ),
      h("div", { className: "container hero-grid" },
        h("div", { className: "hero-copy" },
          h("span", { className: "hero-badge" }, "Premium Interior Designers"),
          h("h1", { id: "hero-title" }, "Luxury interiors crafted around your lifestyle."),
          h("p", null, "OneStone designs and installs refined residential interiors: bespoke TV units, drywall ceilings, warm cove lighting, cabinetry and finishing details that make every room feel considered."),
          h("div", { className: "hero-actions" },
            h("a", { className: "btn btn-primary", href: "#portfolio" }, "View Portfolio"),
            h("a", { className: "btn btn-whatsapp", href: whatsappUrl("Hello OneStone, can I get a consultation for my interior project?"), target: "_blank", rel: "noreferrer" }, "☘ Chat on WhatsApp")
          ),
          h("div", { className: "hero-metrics", "aria-label": "OneStone highlights" },
            h("div", { className: "metric-card" }, h("strong", null, "Custom"), h("span", null, "Designs made for your space")),
            h("div", { className: "metric-card" }, h("strong", null, "Turnkey"), h("span", null, "Design, build and installation")),
            h("div", { className: "metric-card" }, h("strong", null, "Premium"), h("span", null, "Lighting, finishes and details"))
          )
        ),
        h("aside", { className: "hero-contact-panel", "aria-label": "Contact OneStone" },
          h("figure", { className: "panel-image" },
            h("img", { src: "assets/team-collaboration.jpg", alt: "OneStone interior design team collaborating in a warm timber interior", loading: "lazy" }),
            h("figcaption", null, "OneStone Interior Design and Decor")
          ),
          h("ul", { className: "contact-list" },
            h("li", null, h("i", null, "📍"), h("span", null, h("strong", null, "Location"), "Share your project location for site assessment")),
            h("li", null, h("i", null, "💬"), h("span", null, h("strong", null, "WhatsApp"), "Instant consultation and quotation request")),
            h("li", null, h("i", null, "🛠"), h("span", null, h("strong", null, "Specialty"), "TV units • ceilings • lighting • cabinetry"))
          ),
          h("a", { className: "btn btn-dark", href: whatsappUrl("Hello OneStone, I saw your website and need a quotation."), target: "_blank", rel: "noreferrer" }, "Request a Premium Quote")
        )
      )
    );
  }

  function LogoStrip() {
    return h("div", { className: "logo-strip", "aria-label": "Core OneStone services" },
      h("div", { className: "container logo-strip-inner" },
        h("span", null, "Bespoke TV Units"),
        h("strong", null, "Drywall Ceilings"),
        h("span", null, "Cove Lighting"),
        h("strong", null, "Cabinetry"),
        h("span", null, "Turnkey Installation")
      )
    );
  }

  function Services() {
    return h("section", { className: "services-section", id: "services", "aria-labelledby": "services-title" },
      h("div", { className: "container" },
        h("div", { className: "section-heading" },
          h("span", { className: "eyebrow" }, "Services"),
          h("h2", { id: "services-title" }, "Everything you need for a premium interior finish."),
          h("p", null, "A full interior design and decor offer for homeowners who want clean lines, warm lighting, practical storage and a finished luxury feel.")
        ),
        h("div", { className: "services-grid" },
          services.map((service) => h("article", { className: "service-card", key: service.title },
            h("div", { className: "service-icon", "aria-hidden": "true" }, service.icon),
            h("h3", null, service.title),
            h("p", null, service.text),
            h("ul", null, service.bullets.map((bullet) => h("li", { key: bullet }, bullet)))
          ))
        )
      )
    );
  }

  function SignatureSection() {
    return h("section", { className: "split-section", "aria-labelledby": "signature-title" },
      h("div", { className: "container split-grid" },
        h("figure", { className: "split-image" },
          h("img", { src: "assets/living-room-ceiling-wall.jpg", alt: "Living room with OneStone drywall ceiling and feature wall in progress", loading: "lazy" })
        ),
        h("article", { className: "split-card" },
          h("span", { className: "eyebrow" }, "Signature Look"),
          h("h2", { id: "signature-title" }, "Architectural lighting, warm timber and tailored storage."),
          h("p", null, "OneStone brings together ceiling geometry, soft LED glow, wall textures and built-in units so the room feels intentional from the first glance."),
          h("ul", { className: "feature-list" },
            h("li", null, h("span", null, "01"), "Site-measured proportions for cleaner alignments"),
            h("li", null, h("span", null, "02"), "Material combinations that feel premium but remain livable"),
            h("li", null, h("span", null, "03"), "Installation workflow designed to reduce decision fatigue")
          ),
          h("a", { className: "btn btn-primary", href: whatsappUrl("Hello OneStone, I would like to discuss a full interior transformation."), target: "_blank", rel: "noreferrer" }, "Plan My Interior")
        )
      )
    );
  }

  function Portfolio() {
    const categories = ["All", ...Array.from(new Set(portfolio.map((item) => item.category)))];
    const [active, setActive] = React.useState("All");
    const [selected, setSelected] = React.useState(null);
    const visible = active === "All" ? portfolio : portfolio.filter((item) => item.category === active);

    React.useEffect(() => {
      const onKey = (event) => {
        if (event.key === "Escape") setSelected(null);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    return h("section", { className: "portfolio-section", id: "portfolio", "aria-labelledby": "portfolio-title" },
      h("div", { className: "container" },
        h("div", { className: "section-heading" },
          h("span", { className: "eyebrow" }, "Portfolio"),
          h("h2", { id: "portfolio-title" }, "Recent work and on-site craftsmanship."),
          h("p", null, "Browse real OneStone project imagery: from modern TV units to ceiling concepts, cabinetry and installation progress.")
        ),
        h("div", { className: "portfolio-filter", role: "list", "aria-label": "Portfolio category filter" },
          categories.map((category) => h("button", {
            key: category,
            type: "button",
            className: `filter-button ${active === category ? "active" : ""}`,
            onClick: () => setActive(category)
          }, category))
        ),
        h("div", { className: "portfolio-grid" },
          visible.map((item) => h("article", { className: "portfolio-card", key: item.title, onClick: () => setSelected(item), tabIndex: 0, onKeyDown: (e) => { if (e.key === "Enter") setSelected(item); } },
            h("img", { src: item.image, alt: item.alt, loading: "lazy" }),
            h("div", { className: "portfolio-overlay" },
              h("span", null, item.category),
              h("h3", null, item.title)
            )
          ))
        )
      ),
      selected && h("div", { className: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": selected.title, onClick: () => setSelected(null) },
        h("div", { className: "lightbox-dialog", onClick: (event) => event.stopPropagation() },
          h("button", { className: "lightbox-close", type: "button", onClick: () => setSelected(null), "aria-label": "Close image preview" }, "×"),
          h("img", { src: selected.image, alt: selected.alt }),
          h("div", { className: "lightbox-caption" },
            h("span", null, selected.category),
            h("h3", null, selected.title)
          )
        )
      )
    );
  }

  function Process() {
    return h("section", { className: "process-section", id: "process", "aria-labelledby": "process-title" },
      h("div", { className: "container" },
        h("div", { className: "section-heading" },
          h("span", { className: "eyebrow" }, "Process"),
          h("h2", { id: "process-title" }, "A seamless path from idea to installation."),
          h("p", null, "The OneStone process is built to make premium interior decisions easier, clearer and more enjoyable.")
        ),
        h("div", { className: "process-timeline" },
          process.map(([title, text]) => h("article", { className: "process-step", key: title },
            h("h3", null, title),
            h("p", null, text)
          ))
        )
      )
    );
  }

  function CtaBand() {
    return h("section", { className: "cta-band", "aria-label": "Get a OneStone quote" },
      h("div", { className: "container cta-panel" },
        h("div", null,
          h("h2", null, "Ready to give your room the OneStone finish?"),
          h("p", null, "Send photos, dimensions or a short brief on WhatsApp and request a tailored design consultation.")
        ),
        h("a", { className: "btn btn-whatsapp", href: whatsappUrl("Hello OneStone, I want to start my interior design project. Here are my room details:"), target: "_blank", rel: "noreferrer" }, "Start on WhatsApp")
      )
    );
  }

  function Testimonials() {
    return h("section", { className: "testimonials-section", "aria-labelledby": "testimonials-title" },
      h("div", { className: "container" },
        h("div", { className: "section-heading" },
          h("span", { className: "eyebrow" }, "Client Experience"),
          h("h2", { id: "testimonials-title" }, "Designed to feel premium, practical and personal."),
          h("p", null, "Use this section for verified client reviews once the final website is published.")
        ),
        h("div", { className: "testimonials-grid" },
          testimonials.map(([quote, author]) => h("article", { className: "testimonial-card", key: quote },
            h("div", { className: "stars", "aria-label": "Five star rating" }, "★★★★★"),
            h("blockquote", null, `“${quote}”`),
            h("cite", null, author)
          ))
        )
      )
    );
  }

  function Contact() {
    const [form, setForm] = React.useState({ name: "", phone: "", service: "", message: "" });

    const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
    const submit = (event) => {
      event.preventDefault();
      const message = [
        "Hello OneStone, I would like a project quotation.",
        form.name ? `Name: ${form.name}` : "",
        form.phone ? `Phone: ${form.phone}` : "",
        form.service ? `Service: ${form.service}` : "",
        form.message ? `Project details: ${form.message}` : ""
      ].filter(Boolean).join("\n");
      window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    };

    return h("section", { className: "contact-section", id: "contact", "aria-labelledby": "contact-title" },
      h("div", { className: "container contact-grid" },
        h("article", { className: "contact-card" },
          h("span", { className: "eyebrow" }, "Contact"),
          h("h2", { id: "contact-title" }, "Book your premium interior consultation."),
          h("p", null, "Share your room photos, approximate dimensions and design goals. OneStone can advise on layouts, materials, lighting and installation next steps."),
          h("ul", { className: "contact-methods" },
            h("li", null, h("i", null, "💬"), h("strong", null, "WhatsApp", h("span", null, "Fastest way to request a quote"))),
            h("li", null, h("i", null, "📍"), h("strong", null, "Site Visits", h("span", null, "Available by appointment after consultation"))),
            h("li", null, h("i", null, "⏱"), h("strong", null, "Project Planning", h("span", null, "Design direction, material selection and installation scheduling")))
          ),
          h("a", { className: "btn btn-primary", href: whatsappUrl("Hello OneStone, I need interior design help. Please contact me."), target: "_blank", rel: "noreferrer" }, "WhatsApp OneStone Now")
        ),
        h("form", { className: "contact-form", onSubmit: submit },
          h("div", { className: "form-grid" },
            h("label", { className: "form-field" }, "Name", h("input", { value: form.name, onChange: (e) => update("name", e.target.value), placeholder: "Your name", autoComplete: "name" })),
            h("label", { className: "form-field" }, "Phone", h("input", { value: form.phone, onChange: (e) => update("phone", e.target.value), placeholder: "Your phone number", autoComplete: "tel" })),
            h("label", { className: "form-field full" }, "Service Needed", h("input", { value: form.service, onChange: (e) => update("service", e.target.value), placeholder: "TV unit, ceiling, lighting, cabinetry..." })),
            h("label", { className: "form-field full" }, "Project Details", h("textarea", { value: form.message, onChange: (e) => update("message", e.target.value), placeholder: "Tell us about the room, desired style, measurements and timeline." }))
          ),
          h("button", { className: "btn btn-whatsapp", type: "submit" }, "Send Details on WhatsApp"),
          h("p", { className: "form-note" }, "This static website does not store your message. The button opens WhatsApp with your details ready to send.")
        )
      )
    );
  }

  function Footer() {
    const year = new Date().getFullYear();
    return h("footer", { className: "site-footer" },
      h("div", { className: "container footer-grid" },
        h("div", null,
          h("a", { href: "#home", className: "brand" },
            h("span", { className: "brand-mark", "aria-hidden": "true" }, "OS"),
            h("span", { className: "brand-text" }, h("strong", null, "OneStone"), h("span", null, "Interior Design & Decor"))
          ),
          h("p", null, `© ${year} ${BRAND_NAME}. Premium interiors, designed and installed.`)
        ),
        h("nav", { className: "footer-links", "aria-label": "Footer navigation" },
          h("a", { href: "#services" }, "Services"),
          h("a", { href: "#portfolio" }, "Portfolio"),
          h("a", { href: "#process" }, "Process"),
          h("a", { href: "#contact" }, "Contact")
        )
      )
    );
  }

  function App() {
    return h(React.Fragment, null,
      h(Header),
      h("main", { id: "main-content" },
        h(Hero),
        h(LogoStrip),
        h(Services),
        h(SignatureSection),
        h(Portfolio),
        h(Process),
        h(CtaBand),
        h(Testimonials),
        h(Contact)
      ),
      h(Footer),
      h("a", { className: "floating-whatsapp", href: whatsappUrl(DEFAULT_MESSAGE), target: "_blank", rel: "noreferrer", "aria-label": "Chat with OneStone on WhatsApp" }, "☘")
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
}());
