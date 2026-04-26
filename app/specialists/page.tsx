import { specialists } from "@/lib/data";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export default function SpecialistsPage() {
  return (
    <div className="page" data-screen-label="03 Our Specialists">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Our Physician</span>
        <h1>One physician. Fifteen years of dedicated practice.</h1>
        <p className="lede">Dr. Akshata Shetty holds a BAMS qualification and leads every consultation at AVK — across all four specialities.</p>
      </div></section>
      <section className="section"><div className="container">
        {specialists.map((m) => (
          <div key={m.name} style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 56, padding: "48px 0", alignItems: "start" }} className="grid-2">
            <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <img src="/unnamed.png" alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 0 }}/>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>{m.years} experience</div>
              <h2 style={{ marginBottom: 6 }}>{m.name}</h2>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--sage-deep)", marginBottom: 8 }}>{m.role}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>Focus: {m.focus}</div>
              <p className="lede" style={{ maxWidth: "58ch" }}>{m.bio}</p>
              <div style={{ marginTop: 28 }}>
                <WhatsAppCTA size="sm" label="Book with Dr. Akshata on WhatsApp"/>
              </div>
            </div>
          </div>
        ))}
      </div></section>
      <section className="section"><div className="container">
        <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "56px", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
          <h2 style={{ color: "var(--paper)" }}>Not sure who to see?</h2>
          <p className="lede" style={{ margin: "16px auto 28px", color: "rgba(246,243,236,.75)" }}>Describe your concern when booking, and we&rsquo;ll match you to the right physician.</p>
          <WhatsAppCTA size="lg"/>
        </div>
      </div></section>
    </div>
  );
}
