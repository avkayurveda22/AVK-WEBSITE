"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clinic, specialities, testimonials } from "@/lib/data";
import { Button, Kicker, ImgPH } from "@/components/ui";
import Icon from "@/components/Icon";
import { useBooking } from "@/components/BookingContext";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease } }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

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
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <Kicker>Ayurvedic Clinic · Bangalore · Est. 2011</Kicker>
              </motion.div>
              <motion.h1 className="h-display" initial="hidden" animate="visible" custom={1} variants={fadeUp}>
                Classical Ayurveda,<br/>for modern <span className="em">lives.</span>
              </motion.h1>
              <motion.p className="hero-sub" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
                Specialised care across Spine & Joint, Skin Ailments, Women & Men Wellness, and Geriatric & Family Medicine — in one unhurried clinic in Akshayanagar.
              </motion.p>
              <motion.div className="hero-ctas" initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <Button variant="sage" size="lg" onClick={() => openBooking()}>Book appointment</Button>
                <Link href="/specialists" style={{ textDecoration: "none" }}><Button variant="ghost" size="lg">Meet our specialists</Button></Link>
              </motion.div>
              <motion.div className="hero-stats" initial="hidden" animate="visible" custom={4} variants={fadeUp}>
                <div className="hero-stat"><div className="num">15<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Years of practice</div></div>
                <div className="hero-stat"><div className="num">9,400<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Patients treated</div></div>
                <div className="hero-stat"><div className="num">4.9<span style={{ color: "var(--sage)", fontSize: 28 }}>/5</span></div><div className="lbl">On Google Reviews</div></div>
              </motion.div>
            </div>
            <motion.div style={{ position: "relative" }} initial="hidden" animate="visible" variants={scaleIn}>
              <div className="hero-img">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=1000&fit=crop&q=80" alt="Ayurvedic herbs and mortar — traditional medicine" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
              </div>
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="eyebrow">Our promise</span>
                <h4>Unhurried consultation.</h4>
                <p>First visits are 45 minutes — no packages, no pressure.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <motion.div
            style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 20, flexWrap: "wrap" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}
          >
            <div><Kicker>Our four specialities</Kicker><h2>What we treat,<br/>and how deeply.</h2></div>
            <p style={{ maxWidth: "42ch", color: "var(--ink-3)", margin: 0 }}>Every speciality below is led by Dr. Akshata Shetty and supported by trained therapists and an in-house pharmacy.</p>
          </motion.div>
          <motion.div className="grid-2" style={{ gap: 20 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {specialities.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link href={"/" + s.route} className="spec-card" style={{ textDecoration: "none" }}>
                  <div className="icon"><Icon name={s.icon} size={24}/></div>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <div className="conds">{s.conds.slice(0, 4).join(" · ")}</div>
                  <span className="more">Read more <Icon name="arrow" size={13} stroke={2}/></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
            <motion.div
              style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleIn}
            >
              <img src="/unnamed.png" alt="Dr. Akshata Shetty" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 0 }}/>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0}>
              <Kicker>Who you&apos;ll see</Kicker>
              <h2>Dr. Akshata Shetty, <span className="h-display" style={{ color: "var(--sage-deep)" }}>BAMS</span></h2>
              <p className="lede" style={{ marginTop: 20 }}>Fifteen years of clinical Ayurveda. Chief physician at AVK — with a particular focus on spine and joint care, and general family medicine.</p>
              <p style={{ marginTop: 24, maxWidth: "52ch", color: "var(--ink-3)" }}>&ldquo;The body has a memory of balance. My job is to remove what&rsquo;s in the way — and then let nature do the rest.&rdquo;</p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/specialists" style={{ textDecoration: "none" }}><Button variant="ghost">Meet the team</Button></Link>
                <Link href="/about" style={{ textDecoration: "none" }}><Button variant="ghost">Our story</Button></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Kicker>What patients say</Kicker>
          </motion.div>
          <div style={{ position: "relative", minHeight: 280 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === tIdx ? 1 : 0, y: i === tIdx ? 0 : 12 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ position: i === tIdx ? "relative" : "absolute", top: 0, left: 0, right: 0, pointerEvents: i === tIdx ? "auto" : "none" }}
              >
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.35, color: "var(--paper)", maxWidth: "32ch" }}>&ldquo;{t.quote}&rdquo;</div>
                <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="avatar" style={{ background: "var(--sage-deep)", color: "var(--paper)" }}>{t.name[0]}</div>
                  <div>
                    <div style={{ color: "var(--paper)", fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "rgba(246,243,236,.6)", fontSize: 13 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 8, alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} style={{ width: 24, height: 3, border: 0, padding: 0, cursor: "pointer", background: i === tIdx ? "var(--paper)" : "rgba(246,243,236,.25)", transition: "background .3s" }}/>
            ))}
            <Link href="/testimonials" style={{ marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sage-soft)" }}>All reviews →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            style={{ background: "var(--sage-wash)", border: "1px solid var(--sage-soft)", borderRadius: "var(--radius-lg)", padding: "64px 56px", textAlign: "center" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
          >
            <Kicker>First visit?</Kicker>
            <h2 style={{ maxWidth: "18ch", margin: "0 auto 20px" }}>Come in for a pulse reading.</h2>
            <p className="lede" style={{ margin: "0 auto 32px" }}>A 45-minute consultation with our physician. We&rsquo;ll explain your constitution, what&rsquo;s out of balance, and whether Ayurveda is the right fit for what you&rsquo;re facing.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="sage" size="lg" onClick={() => openBooking()}>Book a consultation</Button>
              <a href={clinic.phoneHref} className="btn btn-ghost btn-lg"><span>{clinic.phone}</span><Icon name="phone" size={14} stroke={2}/></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
