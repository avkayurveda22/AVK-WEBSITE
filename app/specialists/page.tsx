"use client";
import { specialists } from "@/lib/data";
import { Button, ImgPH } from "@/components/ui";
import { useBooking } from "@/components/BookingContext";

export default function SpecialistsPage() {
  const { openBooking } = useBooking();
  return (
    <div className="page" data-screen-label="03 Our Specialists">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Our Specialists</span>
        <h1>Four physicians. One shared standard of practice.</h1>
        <p className="lede">Every AVK physician holds a BAMS qualification and has completed formal residency. We do not employ therapists as &ldquo;doctors&rdquo; — a distinction the clinic takes seriously.</p>
      </div></section>
      <section className="section"><div className="container">
        {specialists.map((m, i) => (
          <div key={m.name} style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 56, padding: "48px 0", borderBottom: i < specialists.length - 1 ? "1px solid var(--line)" : "none", alignItems: "start" }} className="grid-2">
            <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <ImgPH label={m.name.split(" ")[1] || m.name} style={{ height: "100%", borderRadius: 0 }}/>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>0{i + 1} · {m.years} experience</div>
              <h2 style={{ marginBottom: 6 }}>{m.name}</h2>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--sage-deep)", marginBottom: 8 }}>{m.role}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>Focus: {m.focus}</div>
              <p className="lede" style={{ maxWidth: "58ch" }}>{m.bio}</p>
              <div style={{ marginTop: 28 }}>
                <Button variant="sage" size="sm" onClick={() => openBooking()}>Book with {m.name.split(" ")[0]} {m.name.split(" ")[1]}</Button>
              </div>
            </div>
          </div>
        ))}
      </div></section>
      <section className="section"><div className="container">
        <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "56px", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
          <h2 style={{ color: "var(--paper)" }}>Not sure who to see?</h2>
          <p className="lede" style={{ margin: "16px auto 28px", color: "rgba(246,243,236,.75)" }}>Describe your concern when booking, and we&rsquo;ll match you to the right physician.</p>
          <Button variant="sage" size="lg" onClick={() => openBooking()}>Book an appointment</Button>
        </div>
      </div></section>
    </div>
  );
}
