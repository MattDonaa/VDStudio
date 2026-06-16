import { createClient, SupabaseClient } from "@supabase/supabase-js";

if (typeof window !== "undefined") {
  console.log("VITE_SUPABASE_URL", (import.meta as any).env?.VITE_SUPABASE_URL);
  console.log("VITE_SUPABASE_ANON_KEY EXISTS", !!(import.meta as any).env?.VITE_SUPABASE_ANON_KEY);
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (typeof window === "undefined") return null;

  if (supabaseInstance) return supabaseInstance;

  const url = (import.meta as any).env?.VITE_SUPABASE_URL || (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_URL;
  const key = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || url === "YOUR_SUPABASE_URL" || key === "YOUR_SUPABASE_ANON_KEY") {
    console.warn(
      "Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL or VITE_SUPABASE_URL) are missing. Falling back to robust LocalStorage CMS engine."
    );
    return null;
  }

  try {
    supabaseInstance = createClient(url, key);
    console.log("Supabase client initialized", supabaseInstance);
    return supabaseInstance;
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    return null;
  }
}
