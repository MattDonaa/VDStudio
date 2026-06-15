import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (typeof window === "undefined") return null;

  if (supabaseInstance) return supabaseInstance;

  const meta = import.meta as any;
  const url = meta.env?.NEXT_PUBLIC_SUPABASE_URL || meta.env?.VITE_SUPABASE_URL;
  const key = meta.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || meta.env?.VITE_SUPABASE_ANON_KEY;
  console.log("ENV CHECK", {
  VITE_SUPABASE_URL: meta.env?.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: meta.env?.VITE_SUPABASE_ANON_KEY,
  MODE: meta.env?.MODE
});

  if (!url || !key || url === "YOUR_SUPABASE_URL" || key === "YOUR_SUPABASE_ANON_KEY") {
    console.warn(
      "Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL or VITE_SUPABASE_URL) are missing. Falling back to robust LocalStorage CMS engine."
    );
    return null;
  }

  try {
    supabaseInstance = createClient(url, key);
    return supabaseInstance;
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    return null;
  }
}
