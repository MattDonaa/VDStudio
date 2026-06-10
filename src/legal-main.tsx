import { StrictMode } from "react";
<<<<<<< HEAD
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import LegalApp from "./LegalApp";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <LegalApp />
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

=======
import { createRoot } from "react-dom/client";
import "./index.css";
import LegalApp from "./LegalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LegalApp />
  </StrictMode>
);
>>>>>>> 07e6250aa189921d68ecceaa3a5f60cdb432e289
