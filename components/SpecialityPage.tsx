"use client";
import Link from "next/link";
import { clinic, specialities } from "@/lib/data";
import { Button, Kicker, ImgPH } from "./ui";
import Icon from "./Icon";
import { useBooking } from "./BookingContext";

export default function SpecialityPage({ slug, label }: { slug: string; label: string }) {
  const { openBooking } = useBooking();
  const s = specialities.find((x) => x.slug === slug);
  if (!s) return null;

  return (
    <div className="page" data-screen-label={label}>
      <section className="page-head"><div className="container">
        <span className="eyebrow">Speciality · {s.name}</span>
        <h1>{s.tagline}</h1>
        <p className="lede">{s.long}</p>
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="sage" onClick={() => openBooking(s.slug)}>Book a {s.name} consultation</Button>
          <a href={clinic.phoneHref} className="btn btn-ghost">Call {clinic.phone}</a>
        </div>
      </div></section>

      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
        <div>
          <Kicker>Conditions we treat</Kicker>
          <h2 style={{ marginBottom: 20 }}>The most common reasons people come in.</h2>
          <div>
            {s.conds.map((c, i) => (
              <div key={c} className="cond-row">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{c}</h4>
                  <p>Assessment, protocol and follow-up tailored to your presentation.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "sticky", top: 100 }}>
          <ImgPH label={s.name + " therapy"} style={{ height: "100%", borderRadius: 0 }}/>
        </div>
      </div></div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <Kicker>How we treat</Kicker>
        <h2 style={{ marginBottom: 12 }}>A four-stage programme.</h2>
        <p style={{ maxWidth: "56ch", color: "var(--ink-3)", marginBottom: 40 }}>Every {s.name} patient moves through the same structured pathway. Duration varies — some cases are resolved in weeks, others take three to six months.</p>
        <div className="timeline">
          {s.approach.map(([t, d], i) => (
            <div key={t} className="timeline-step">
              <div className="n">Stage 0{i + 1}</div>
              <h5>{t}</h5>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section"><div className="container">
        <Kicker>Other specialities</Kicker>
        <h2 style={{ marginBottom: 32 }}>Explore what else we do.</h2>
        <div className="grid-3">
          {specialities.filter((x) => x.slug !== s.slug).map((o) => (
            <Link key={o.slug} href={"/" + o.route} className="spec-card" style={{ textDecoration: "none" }}>
              <div className="icon"><Icon name={o.icon} size={24}/></div>
              <h3>{o.name}</h3>
              <p>{o.short}</p>
              <span className="more">Read more <Icon name="arrow" size={13} stroke={2}/></span>
            </Link>
          ))}
        </div>
      </div></section>

      <section className="section"><div className="container">
        <div style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}>
          <h2>Ready to start {s.name.toLowerCase()} treatment?</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>A 45-minute assessment is the first step.</p>
          <Button variant="sage" size="lg" onClick={() => openBooking(s.slug)}>Book a consultation</Button>
        </div>
      </div></section>
    </div>
  );
}
