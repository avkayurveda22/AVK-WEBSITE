import { NextResponse } from "next/server";
import { getSupabase, PublicReview } from "@/lib/supabase";
import { fetchGoogleReviews } from "@/lib/googleReviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchSiteReviews(): Promise<PublicReview[]> {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, role, quote, stars, created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(60);
    if (error || !data) return [];
    return data.map((r) => ({
      id: r.id, name: r.name, role: r.role, quote: r.quote, stars: r.stars,
      created_at: r.created_at, source: "site" as const,
    }));
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const [site, google] = await Promise.all([fetchSiteReviews(), fetchGoogleReviews()]);
    const merged = [...site, ...google].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return NextResponse.json({ reviews: merged });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const role = typeof body.role === "string" ? body.role.trim() : "";
    const quote = typeof body.quote === "string" ? body.quote.trim() : "";
    const stars = Number(body.stars);

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: "Please enter a valid name (2–80 characters)." }, { status: 400 });
    }
    if (role.length > 120) {
      return NextResponse.json({ error: "Role/location is too long (max 120 characters)." }, { status: 400 });
    }
    if (quote.length < 20 || quote.length > 2000) {
      return NextResponse.json({ error: "Please write between 20 and 2000 characters in your review." }, { status: 400 });
    }
    if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
      return NextResponse.json({ error: "Stars must be a whole number from 1 to 5." }, { status: 400 });
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("reviews").insert({
      name,
      role: role || null,
      quote,
      stars,
      status: "pending",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
