import { createClient, SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (browserClient) return browserClient;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }
  browserClient = createClient(url, key, {
    auth: { persistSession: false },
  });
  return browserClient;
}

export type ReviewRow = {
  id: string;
  name: string;
  role: string | null;
  quote: string;
  stars: number;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export type PublicReview = {
  id: string;
  name: string;
  role: string | null;
  quote: string;
  stars: number;
  created_at: string;
  source: "site" | "google";
};
