import { testimonials } from "@/lib/data";
import { Stars } from "@/components/ui";

export default function TestimonialsPage() {
  return (
    <div className="page" data-screen-label="09 Testimonials">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Patient reviews</span>
        <h1>In their own words.</h1>
        <p className="lede">Every review below is from a real patient. Many also appear on our Google Business profile — you can cross-check there.</p>
      </div></section>
      <section className="section"><div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 56 }} className="grid-4">
          {[["4.9 / 5", "Google rating"], ["320+", "Reviews"], ["96%", "Would recommend"], ["9,400+", "Patients seen"]].map(([n, l]) => (
            <div key={l} style={{ padding: "28px 24px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 42, color: "var(--sage-deep)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-3)", marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
        <div className="t-masonry">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card">
              <Stars n={t.stars}/>
              <p className="quote-body">&ldquo;{t.quote}&rdquo;</p>
              <div className="t-head">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></section>
    </div>
  );
}
