"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clinic, specialities, testimonials, coreComponents, swarnaPrashana } from "@/lib/data";
import { Button, Kicker } from "@/components/ui";
import Icon from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ReviewCard } from "@/components/ReviewCard";
import { ShareExperienceButton } from "@/components/ReviewModal";
import type { PublicReview } from "@/lib/supabase";

const seedReviews: PublicReview[] = testimonials.map((t, i) => ({
  id: `seed-${i}`,
  name: t.name,
  role: t.role,
  quote: t.quote,
  stars: t.stars,
  created_at: new Date(Date.now() - i * 86400000).toISOString(),
  source: "site" as const,
}));

const orthoReels = [
  {
    src: "/hero/Whole-Spine-Adobe-scaled.jpeg",
    label: "Spine & Backbone",
    kicker: "01 — Kati Bandhana",
    treatment: "Warm herbal poultices wrapped along the spine — releasing stiffness, decompressing pinched nerve roots and restoring postural balance.",
  },
  {
    src: "/hero/thumbnail_large_blog-knee-pain-2_tcm88-2779637.jpg",
    label: "Knee Joint",
    kicker: "02 — Janu Bandhana",
    treatment: "Medicated paste and cloth bandaged around the knee — drawing out inflammation, rebuilding cartilage support and steadying gait.",
  },
  {
    src: "/hero/Ankle-Pain.jpg",
    label: "Ankle Joint",
    kicker: "03 — Gulpha Bandhana",
    treatment: "Herbal bandaging around the ankle — calming swelling, restoring ligament tone and bringing the joint back into alignment.",
  },
];

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
  const [vIdx, setVIdx] = useState(0);
  const [reviews, setReviews] = useState<PublicReview[]>(seedReviews);

  useEffect(() => {
    let active = true;
    fetch("/api/reviews")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!active || !data || !Array.isArray(data.reviews) || data.reviews.length === 0) return;
        setReviews(data.reviews);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setVIdx((i) => (i + 1) % orthoReels.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page" data-screen-label="01 Home">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <Kicker>Ayurvedic Clinic · Bangalore · Est. 2022</Kicker>
              </motion.div>
              <motion.h1 className="h-display" initial="hidden" animate="visible" custom={1} variants={fadeUp}>
                Healing that reaches deeper.<br/>Relief that <span className="em">lasts longer.</span>
              </motion.h1>
              <motion.p className="hero-sub" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
                Non-surgical Ayurvedic care for Spine &amp; Joint, Skin and Geriatric concerns — through classical Marma therapy, herbal bandaging and personalized protocols.
              </motion.p>
              <motion.div className="hero-ctas" initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <WhatsAppCTA size="lg"/>
                <Link href="/specialists" style={{ textDecoration: "none" }}><Button variant="ghost" size="lg">Meet our specialists</Button></Link>
              </motion.div>
              <motion.div className="hero-stats" initial="hidden" animate="visible" custom={4} variants={fadeUp}>
                <div className="hero-stat"><div className="num">15<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Years of practice</div></div>
                <div className="hero-stat"><div className="num">1500<span style={{ color: "var(--sage)" }}>+</span></div><div className="lbl">Patients treated</div></div>
                <div className="hero-stat"><div className="num">4.9<span style={{ color: "var(--sage)", fontSize: 28 }}>/5</span></div><div className="lbl">On Google Reviews</div></div>
              </motion.div>
            </div>
            <motion.div style={{ position: "relative" }} initial="hidden" animate="visible" variants={scaleIn}>
              <div className="hero-img hero-reel">
                {orthoReels.map((r, i) => (
                  <motion.img
                    key={r.src}
                    src={r.src}
                    alt={r.label}
                    initial={false}
                    animate={{ opacity: i === vIdx ? 1 : 0, scale: i === vIdx ? 1 : 1.04 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ))}
                <div className="hero-reel-veil" />
                <div className="hero-reel-dots">
                  {orthoReels.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show ${orthoReels[i].label}`}
                      onClick={() => setVIdx(i)}
                      className={i === vIdx ? "active" : ""}
                    />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={vIdx}
                    className="hero-reel-caption"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <span className="kicker-mono">{orthoReels[vIdx].kicker}</span>
                    <h4>{orthoReels[vIdx].label}</h4>
                    <p>{orthoReels[vIdx].treatment}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
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
            <div><Kicker>Our three specialities</Kicker><h2>What we treat,<br/>and how deeply.</h2></div>
            <p style={{ maxWidth: "42ch", color: "var(--ink-3)", margin: 0 }}>Every speciality below is led by Dr. Akshata Shetty and supported by trained therapists and an in-house pharmacy.</p>
          </motion.div>
          <motion.div className="grid-3" style={{ gap: 20 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
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
          <motion.div
            style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 20, flexWrap: "wrap" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}
          >
            <div><Kicker>How we treat</Kicker><h2>Four core components,<br/>one personalized plan.</h2></div>
            <p style={{ maxWidth: "42ch", color: "var(--ink-3)", margin: 0 }}>Every treatment plan at AVK combines these four elements — calibrated to the individual, the condition and the constitution.</p>
          </motion.div>
          <motion.div className="grid-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {coreComponents.map(([t, d]) => (
              <motion.div key={t} className="card" variants={staggerItem}>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 10 }}>{t}</h4>
                <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14.5 }}>{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
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

      <section className="section">
        <div className="container">
          <motion.div
            className="sp-promo"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
          >
            <div className="sp-promo-body">
              <Kicker>For children · Pushya Nakshatra programme</Kicker>
              <h2 className="sp-promo-title">Swarna Prashana <span style={{ fontStyle: "italic", color: "var(--sage-deep)" }}>— now available at AVK.</span></h2>
              <p className="sp-promo-lede">{swarnaPrashana.short}</p>
              <ul className="sp-promo-pills">
                <li>Boosts immunity</li>
                <li>Sharpens memory</li>
                <li>Supports growth</li>
                <li>Ages 0–16</li>
              </ul>
              <div className="sp-promo-ctas">
                <Link href="/swarna-prashana" style={{ textDecoration: "none" }}>
                  <Button variant="sage">Learn more</Button>
                </Link>
                <a href={clinic.phoneHref} className="btn btn-ghost"><span>Call to reserve</span><Icon name="phone" size={14} stroke={2}/></a>
              </div>
            </div>
            <div className="sp-promo-date">
              <span className="sp-promo-date-eyebrow">Next dose</span>
              <div className="sp-promo-date-big">{swarnaPrashana.nextDose.display}</div>
              <span className="sp-promo-date-sub">{swarnaPrashana.nextDose.nakshatra}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <motion.div
            style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 40 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            <div>
              <Kicker>What patients say</Kicker>
              <h2 style={{ color: "var(--paper)", marginTop: 8 }}>4.9 on Google. 1,500+ patients seen.</h2>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <ShareExperienceButton variant="ghost" className="on-dark" label="Share your experience"/>
              <Link href="/testimonials" style={{ textDecoration: "none" }}><Button variant="ghost" className="on-dark">All reviews</Button></Link>
            </div>
          </motion.div>
          <motion.div className="rv-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {reviews.slice(0, 6).map((r) => (
              <motion.div key={r.id} variants={staggerItem}>
                <ReviewCard review={r} dark/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            style={{ background: "var(--sage-wash)", border: "1px solid var(--sage-soft)", borderRadius: "var(--radius-lg)", padding: "64px 56px", textAlign: "center" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
          >
            <Kicker>First visit?</Kicker>
            <h2 style={{ maxWidth: "18ch", margin: "0 auto 20px" }}>Begin your personalized Ayurveda consultation. </h2>
            <p className="lede" style={{ margin: "0 auto 32px" }}>A 45-minute consultation with our physician. We&rsquo;ll explain your constitution, what&rsquo;s out of balance, and whether Ayurveda is the right fit for what you&rsquo;re facing.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <WhatsAppCTA size="lg"/>
              <a href={clinic.phoneHref} className="btn btn-ghost btn-lg"><span>{clinic.phone}</span><Icon name="phone" size={14} stroke={2}/></a>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppFab/>
    </div>
  );
}
