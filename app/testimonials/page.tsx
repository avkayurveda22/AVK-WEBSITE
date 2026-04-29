import { testimonials as staticTestimonials } from "@/lib/data";
import { getSupabase, PublicReview } from "@/lib/supabase";
import { fetchGoogleReviews, fetchGoogleSummary, mergeReviews } from "@/lib/googleReviews";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";

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

async function loadReviews(): Promise<PublicReview[]> {
  const [site, google] = await Promise.all([fetchSiteReviews(), fetchGoogleReviews()]);
  return mergeReviews(site, google);
}

function fallback(): PublicReview[] {
  return staticTestimonials.map((t, i) => ({
    id: `seed-${i}`,
    name: t.name,
    role: t.role,
    quote: t.quote,
    stars: t.stars,
    created_at: new Date(Date.now() - i * 86400000).toISOString(),
    source: "site" as const,
  }));
}

export default async function TestimonialsPage() {
  const [live, summary] = await Promise.all([loadReviews(), fetchGoogleSummary()]);
  const reviews = live.length > 0 ? live : fallback();
  const ratingDisplay = summary.rating !== null ? `${summary.rating.toFixed(1)} / 5` : "4.9 / 5";
  const countDisplay = summary.count !== null ? `${summary.count}+` : "320+";

  return (
    <div className="page" data-screen-label="09 Testimonials">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Patient reviews</span>
        <h1>In their own words.</h1>
        <p className="lede">Every review below is from a real patient. Many also appear on our Google Business profile — you can cross-check there.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="grid-4" style={{ marginBottom: 56 }}>
          {[[ratingDisplay, "Google rating"], [countDisplay, "Google reviews"], ["96%", "Would recommend"], ["1,500+", "Patients seen"]].map(([n, l]) => (
            <div key={l} style={{ padding: "28px 24px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 42, color: "var(--sage-deep)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-3)", marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>

        <div className="rv-grid">
          {reviews.map((r) => <ReviewCard key={r.id} review={r}/>)}
        </div>
      </div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 12 }}>Your turn</span>
              <h2 style={{ marginBottom: 16 }}>Share your experience.</h2>
              <p style={{ color: "var(--ink-3)", maxWidth: "44ch", lineHeight: 1.7 }}>
                If AVK helped you — or if there&rsquo;s something we can do better — we&rsquo;d like to hear from you. Reviews are read by Dr. Akshata, moderated, and then published here for other patients to see.
              </p>
              <p style={{ color: "var(--ink-3)", maxWidth: "44ch", lineHeight: 1.7, marginTop: 14 }}>
                Prefer Google? You can also <a href="https://www.google.com/search?q=AVK+Ayurvedic+Clinic+Akshayanagar" target="_blank" rel="noopener noreferrer" className="link-u">leave a review on Google</a>.
              </p>
            </div>
            <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: "28px 32px" }}>
              <ReviewForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
