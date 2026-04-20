"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { conditions, clinic } from "@/lib/data";
import { Button, Kicker } from "@/components/ui";
import Icon from "@/components/Icon";
import { useBooking } from "@/components/BookingContext";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export default function ConditionPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useBooking();
  const c = conditions.find((x) => x.slug === slug);

  if (!c) return (
    <div className="page"><section className="page-head"><div className="container">
      <h1>Condition not found</h1>
      <Link href="/">Go home</Link>
    </div></section></div>
  );

  const related = conditions.filter((x) => x.speciality === c.speciality && x.slug !== c.slug).slice(0, 4);

  return (
    <div className="page" data-screen-label={`Condition — ${c.name}`}>
      <section className="page-head"><div className="container">
        <Link href={c.specialityRoute} style={{ textDecoration: "none" }}>
          <motion.span className="eyebrow" style={{ cursor: "pointer" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Icon name="arrow" size={11} stroke={2} style={{ transform: "rotate(180deg)", marginRight: 6 }}/>{c.speciality}
          </motion.span>
        </Link>
        <motion.h1 style={{ marginTop: 16 }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>{c.name}</motion.h1>
        <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>{c.description}</motion.p>
        <motion.div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <Button variant="sage" onClick={() => openBooking()}>Book a consultation</Button>
          <a href={clinic.phoneHref} className="btn btn-ghost">Call {clinic.phone}</a>
        </motion.div>
      </div></section>

      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
        <div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <Kicker>Symptoms</Kicker>
            <h2 style={{ marginBottom: 24 }}>How it typically presents.</h2>
          </motion.div>
          <motion.div style={{ display: "flex", flexDirection: "column", gap: 12 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
            {c.symptoms.map((s) => (
              <motion.div key={s} variants={staggerItem} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                <span style={{ color: "var(--sage)", fontSize: 18, lineHeight: 1 }}>+</span>
                <p style={{ margin: 0, color: "var(--ink-2)" }}>{s}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <Kicker>Common causes</Kicker>
            <h2 style={{ marginBottom: 24 }}>What leads to this condition.</h2>
          </motion.div>
          <motion.div style={{ display: "flex", flexDirection: "column", gap: 12 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
            {c.causes.map((cause) => (
              <motion.div key={cause} variants={staggerItem} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                <span style={{ color: "var(--terra)", fontSize: 18, lineHeight: 1 }}>+</span>
                <p style={{ margin: 0, color: "var(--ink-2)" }}>{cause}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div></div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <Kicker>The Ayurvedic perspective</Kicker>
          <h2 style={{ maxWidth: "24ch", marginBottom: 24 }}>How Ayurveda understands {c.name.toLowerCase()}.</h2>
          <p className="lede" style={{ maxWidth: "72ch" }}>{c.ayurvedicView}</p>
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Treatment at AVK</Kicker>
          <h2 style={{ marginBottom: 12 }}>How Dr. Akshata Shetty treats {c.name.toLowerCase()}.</h2>
          <p style={{ maxWidth: "56ch", color: "var(--ink-3)", marginBottom: 40 }}>Every treatment plan is individualised after a thorough consultation. Below is the typical protocol.</p>
        </motion.div>
        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
          {c.treatments.map(([t, d], i) => (
            <motion.div key={t} className="timeline-step" variants={staggerItem}>
              <div className="n">0{i + 1}</div>
              <h5>{t}</h5>
              <p>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      {related.length > 0 && (
        <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <Kicker>Related conditions</Kicker>
            <h2 style={{ marginBottom: 32 }}>Other {c.speciality.toLowerCase()} conditions we treat.</h2>
          </motion.div>
          <div className="grid-4">
            {related.map((r, i) => (
              <motion.div key={r.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.4, ease }}>
                <Link href={`/conditions/${r.slug}`} className="card" style={{ textDecoration: "none", cursor: "pointer", display: "block", height: "100%" }}>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: 20, marginBottom: 8 }}>{r.name}</h4>
                  <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14 }}>{r.description.slice(0, 100)}...</p>
                  <span className="more" style={{ marginTop: 12, display: "inline-block" }}>Read more <Icon name="arrow" size={13} stroke={2}/></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div></section>
      )}

      <section className="section"><div className="container">
        <motion.div
          style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
        >
          <h2>Dealing with {c.name.toLowerCase()}?</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>A 45-minute consultation is the first step towards relief.</p>
          <Button variant="sage" size="lg" onClick={() => openBooking()}>Book a consultation</Button>
        </motion.div>
      </div></section>
    </div>
  );
}
