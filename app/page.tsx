"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clinic, specialities, testimonials } from "@/lib/data";
import { Button, Kicker, ImgPH } from "@/components/ui";
import Icon from "@/components/Icon";
import { useBooking } from "@/components/BookingContext";

export default function HomePage() {
  const { openBooking } = useBooking();
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page" data-screen-label="01 Home">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <Kicker>Ayurvedic Clinic · Bangalore · Est. 2008</Kicker>
              <h1 className="h-display">Classical Ayurveda,<br/>for modern <span className="em">lives.</span></h1>
              <p className="hero-sub">Specialised care across Spine & Joint, Skin Ailments, Women & Men Wellness, and Geriatric & Family Medicine — in one unhurried clinic in Akshayanagar.</p>
              <div className="hero-ctas">
                <Button variant="sage" size="lg" onClick={() => openBooking()}>Book appointment</Button>
                <Link href="/specialists" style={{ textDecoration: "none" }}><Button variant="ghost" size="lg">Meet our specialists</Button></Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><div className="num">17<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Years of practice</div></div>
                <div className="hero-stat"><div className="num">9,400<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Patients treated</div></div>
                <div className="hero-stat"><div className="num">4.9<span style={{ color: "var(--sage)", fontSize: 28 }}>/5</span></div><div className="lbl">On Google Reviews</div></div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="hero-img"><ImgPH label="Hero — clinic or physician at work"/></div>
              <div className="hero-card">
                <span className="eyebrow">Our promise</span>
                <h4>Unhurried consultation.</h4>
                <p>First visits are 45 minutes — no packages, no pressure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 20, flexWrap: "wrap" }}>
            <div><Kicker>Our four specialities</Kicker><h2>What we treat,<br/>and how deeply.</h2></div>
            <p style={{ maxWidth: "42ch", color: "var(--ink-3)", margin: 0 }}>Every speciality below is led by a senior physician and supported by trained therapists and an in-house pharmacy.</p>
          </div>
          <div className="grid-2" style={{ gap: 20 }}>
            {specialities.map((s) => (
              <Link key={s.slug} href={"/" + s.route} className="spec-card" style={{ textDecoration: "none" }}>
                <div className="icon"><Icon name={s.icon} size={24}/></div>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <div className="conds">{s.conds.slice(0, 4).join(" · ")}</div>
                <span className="more">Read more <Icon name="arrow" size={13} stroke={2}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
            <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <ImgPH label="Dr. Vinay M — portrait" style={{ height: "100%", borderRadius: 0 }}/>
            </div>
            <div>
              <Kicker>Who you'll see</Kicker>
              <h2>Dr. Vinay M, <span className="h-display" style={{ color: "var(--sage-deep)" }}>BAMS</span></h2>
              <p className="lede" style={{ marginTop: 20 }}>Seventeen years of clinical Ayurveda. Founder of AVK and resident physician — with a particular focus on spine and joint care, and general family medicine.</p>
              <p style={{ marginTop: 24, maxWidth: "52ch", color: "var(--ink-3)" }}>&ldquo;The body has a memory of balance. My job is to remove what&rsquo;s in the way — and then get out of the way.&rdquo;</p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/specialists" style={{ textDecoration: "none" }}><Button variant="ghost">Meet the team</Button></Link>
                <Link href="/about" style={{ textDecoration: "none" }}><Button variant="ghost">Our story</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <Kicker>What patients say</Kicker>
          <div style={{ position: "relative", minHeight: 280 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ position: i === tIdx ? "relative" : "absolute", top: 0, left: 0, right: 0, opacity: i === tIdx ? 1 : 0, transition: "opacity .5s", pointerEvents: i === tIdx ? "auto" : "none" }}>
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.35, color: "var(--paper)", maxWidth: "32ch" }}>&ldquo;{t.quote}&rdquo;</div>
                <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="avatar" style={{ background: "var(--sage-deep)", color: "var(--paper)" }}>{t.name[0]}</div>
                  <div>
                    <div style={{ color: "var(--paper)", fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "rgba(246,243,236,.6)", fontSize: 13 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 8, alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} style={{ width: 24, height: 3, border: 0, padding: 0, cursor: "pointer", background: i === tIdx ? "var(--paper)" : "rgba(246,243,236,.25)" }}/>
            ))}
            <Link href="/testimonials" style={{ marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sage-soft)" }}>All reviews →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ background: "var(--sage-wash)", border: "1px solid var(--sage-soft)", borderRadius: "var(--radius-lg)", padding: "64px 56px", textAlign: "center" }}>
            <Kicker>First visit?</Kicker>
            <h2 style={{ maxWidth: "18ch", margin: "0 auto 20px" }}>Come in for a pulse reading.</h2>
            <p className="lede" style={{ margin: "0 auto 32px" }}>A 45-minute consultation with our physician. We&rsquo;ll explain your constitution, what&rsquo;s out of balance, and whether Ayurveda is the right fit for what you&rsquo;re facing.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="sage" size="lg" onClick={() => openBooking()}>Book a consultation</Button>
              <a href={clinic.phoneHref} className="btn btn-ghost btn-lg"><span>{clinic.phone}</span><Icon name="phone" size={14} stroke={2}/></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
