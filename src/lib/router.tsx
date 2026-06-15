import { useState, useEffect, createContext, useContext, ReactNode } from "react";

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", to);
      setPathname(to);
      // Scroll to top on navigation
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

export function scrollToElement(elementId: string) {
  if (typeof window === "undefined") return;

  console.log(`[scrollToElement] Request to scroll to: "#${elementId}"`);
  let attempts = 0;
  const maxAttempts = 40; // Try up to 2 seconds (40 * 50ms)

  const attemptScroll = () => {
    const element = document.getElementById(elementId);
    console.log(`[scrollToElement] Attempt ${attempts + 1}: Found element "#${elementId}"?`, !!element);
    
    if (element) {
      console.log(`[scrollToElement] Element "#${elementId}" found. Performing browser-native scrollIntoView.`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(attemptScroll, 50);
    } else {
      console.error(`[scrollToElement] Failed to find element "#${elementId}" after 2 seconds.`);
    }
  };

  attemptScroll();
}
