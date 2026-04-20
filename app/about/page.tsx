"use client";
import { Button, Kicker, ImgPH } from "@/components/ui";
import { useBooking } from "@/components/BookingContext";

export default function AboutPage() {
  const { openBooking } = useBooking();
  return (
    <div className="page" data-screen-label="02 About">
      <section className="page-head"><div className="container">
        <span className="eyebrow">About AVK</span>
        <h1>A small clinic in Akshayanagar — patient, classical, unhurried.</h1>
      </div></section>
      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
        <div>
          <Kicker>Our story</Kicker>
          <h2>Seventeen years, one pulse at a time.</h2>
          <p className="lede" style={{ margin: "24px 0" }}>AVK opened in 2008 as a two-room clinic above a pharmacy on Akshayanagar Main Road. We&rsquo;ve grown since — a dedicated therapy wing, an in-house pharmacy, four specialist physicians — but the rhythm of the clinic has not changed.</p>
          <p style={{ color: "var(--ink-3)" }}>One unhurried consultation at a time. No over-prescription, no packages pushed at the door. If Ayurveda isn&rsquo;t the right tool for what you&rsquo;ve brought in, we&rsquo;ll say so — and point you somewhere that is.</p>
        </div>
        <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <ImgPH label="Clinic, 2008" style={{ height: "100%", borderRadius: 0 }}/>
        </div>
      </div></div></section>
      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <Kicker>Values we hold to</Kicker>
        <h2 style={{ maxWidth: "18ch", marginBottom: 48 }}>Four principles that shape how we practise.</h2>
        <div className="grid-4">
          {[
            ["Classical texts first", "Every prescription is rooted in the Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya. Not trends."],
            ["Time over speed", "A first consultation is 45 minutes. A specialist consultation is longer. Ayurveda does not reward haste."],
            ["Honest prognosis", "If your condition needs an allopathic intervention, we'll tell you. We don't compete with modern medicine."],
            ["In-house dispensing", "Our pharmacy prepares classical formulations on-site — so we know what's in what you take home."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <h4 style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 10 }}>{t}</h4>
              <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14.5 }}>{d}</p>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section"><div className="container">
        <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
          <div>
            <Kicker>Vision</Kicker>
            <h2>Ayurveda, practised well.</h2>
            <p className="lede" style={{ marginTop: 20 }}>Not a wellness brand. Not a spa. A working medical practice that takes the 3,000-year-old science seriously, and uses it to make a measurable difference to the people who walk in.</p>
          </div>
          <div>
            <Kicker>In numbers</Kicker>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
              {[["17", "Years open"], ["9,400+", "Patients"], ["4", "Specialities"], ["4.9/5", "Google rating"], ["320+", "Reviews"], ["3", "Generations of some families"]].map(([n, l]) => (
                <div key={l} style={{ padding: "22px 20px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--sage-deep)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></section>
      <section className="section"><div className="container">
        <div style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}>
          <h2>Come meet us.</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>The best way to understand a clinic is to sit in one. A first consultation is ₹500.</p>
          <Button variant="sage" size="lg" onClick={() => openBooking()}>Book a first consultation</Button>
        </div>
      </div></section>
    </div>
  );
}
