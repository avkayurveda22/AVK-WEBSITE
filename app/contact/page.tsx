"use client";
import { useState } from "react";
import { clinic } from "@/lib/data";
import { Button, Kicker } from "@/components/ui";
import Icon from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="page" data-screen-label="10 Contact">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Contact & Booking</span>
        <h1>Find us, call us, or send a note.</h1>
      </div></section>
      <section className="section"><div className="container"><div className="contact-grid">
        <div>
          <Kicker>Write to us</Kicker>
          <h2 style={{ marginBottom: 24 }}>A direct enquiry form.</h2>
          {sent ? (
            <div className="card" style={{ background: "var(--sage-wash)", borderColor: "var(--sage-soft)" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--sage)", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="check" size={20} stroke={2.5}/>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>Message received</div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)" }}>We&rsquo;ll write back within one working day.</div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field"><label>Your name</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/></div>
              <div className="field"><label>Phone</label><input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}/></div>
              <div className="field"><label>Email (optional)</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/></div>
              <div className="field"><label>Message</label><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}/></div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="sage" type="submit">Send message</Button>
                <WhatsAppCTA variant="ghost" label="Or book on WhatsApp"/>
              </div>
            </form>
          )}
        </div>
        <div>
          <Kicker>Visit the clinic</Kicker>
          <h2 style={{ marginBottom: 24 }}>Akshayanagar, Bangalore.</h2>
          <div className="map-embed">
            <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ opacity: 0.55 }}>
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0 L0 0 0 30" fill="none" stroke="var(--line-2)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)"/>
              <path d="M-20 130 Q 80 120 160 145 T 420 140" stroke="var(--line-2)" strokeWidth="8" fill="none" opacity="0.6"/>
              <path d="M200 -20 Q 195 90 180 170 T 190 320" stroke="var(--line-2)" strokeWidth="6" fill="none" opacity="0.5"/>
              <rect x="40" y="40" width="60" height="50" fill="var(--sage-wash)" stroke="var(--line)"/>
              <rect x="120" y="200" width="80" height="40" fill="var(--sage-wash)" stroke="var(--line)"/>
              <rect x="250" y="60" width="100" height="60" fill="var(--sage-wash)" stroke="var(--line)"/>
            </svg>
            <div style={{ position: "absolute", left: "52%", top: "48%", transform: "translate(-50%,-100%)" }}>
              <div style={{ background: "var(--sage-deep)", color: "#fff", padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(0,0,0,.15)" }}>AVK Clinic</div>
              <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid var(--sage-deep)", margin: "0 auto" }}/>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--sage-deep)", border: "3px solid #fff", margin: "0 auto", boxShadow: "0 2px 6px rgba(0,0,0,.2)" }}/>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ position: "absolute", bottom: 16, right: 16, background: "#fff", color: "var(--ink)", borderColor: "var(--line)" }}>
              <span>Open in Maps</span><Icon name="arrow-up-right" size={14} stroke={2}/>
            </a>
          </div>
          <div style={{ marginTop: 24 }}>
            <div className="info-row"><div className="ic"><Icon name="pin" size={18}/></div><div><span className="lbl">Address</span><div className="val">{clinic.address1}</div><div className="sub">{clinic.address2}</div><div className="sub">{clinic.address3}</div></div></div>
            <div className="info-row"><div className="ic"><Icon name="phone" size={18}/></div><div><span className="lbl">Phone / WhatsApp</span><div className="val"><a href={clinic.phoneHref} className="link-u">{clinic.phone}</a></div></div></div>
            <div className="info-row"><div className="ic"><Icon name="mail" size={18}/></div><div><span className="lbl">Email</span><div className="val"><a href={"mailto:" + clinic.email} className="link-u">{clinic.email}</a></div></div></div>
            <div className="info-row"><div className="ic"><Icon name="clock" size={18}/></div><div><span className="lbl">Hours</span>{clinic.hours.map((h, i) => <div key={i} style={{ fontSize: 14.5, marginTop: i === 0 ? 2 : 4 }}><b>{h.d}</b> — <span style={{ color: "var(--muted)" }}>{h.t}</span></div>)}</div></div>
          </div>
        </div>
      </div></div></section>
    </div>
  );
}
