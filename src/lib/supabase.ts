import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  console.log("Supabase ENV:", {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_PUBLIC_SUPABASE_URL: import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!(
      import.meta.env.VITE_SUPABASE_ANON_KEY ||
      import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
    ),
    mode: import.meta.env.MODE,
  });

  if (typeof window === "undefined") return null;

  if (supabaseInstance) return supabaseInstance;

  const meta = import.meta as any;

  const url =
    meta.env?.NEXT_PUBLIC_SUPABASE_URL ||
    meta.env?.VITE_SUPABASE_URL ||
    meta.env?.VITE_PUBLIC_SUPABASE_URL;

  const key =
    meta.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    meta.env?.VITE_SUPABASE_ANON_KEY ||
    meta.env?.VITE_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !url ||
    !key ||
    url === "YOUR_SUPABASE_URL" ||
    key === "YOUR_SUPABASE_ANON_KEY"
  ) {
    console.warn(
      "Supabase environment variables are missing. Falling back to robust LocalStorage CMS engine."
    );
    return null;
  }

  try {
    supabaseInstance = createClient(url, key);
    console.log("Supabase initialized successfully:", url);

    return supabaseInstance;
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    return null;
  }
}
