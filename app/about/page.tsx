"use client";
import { motion } from "framer-motion";
import { Kicker } from "@/components/ui";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { benefits, comparison } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
} as const;

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
} as const;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
} as const;

export default function AboutPage() {
  return (
    <div className="page" data-screen-label="02 About">
      <section className="page-head"><div className="container">
        <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>About AVK</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>A small clinic in Akshayanagar — patient, classical, unhurried.</motion.h1>
      </div></section>

      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <Kicker>Our story</Kicker>
          <h2>Fifteen years, one pulse at a time.</h2>
          <p className="lede" style={{ margin: "24px 0" }}>AVK opened in 2022 as a two-room clinic above a pharmacy on Akshayanagar Main Road. We&rsquo;ve grown since — a dedicated therapy wing, an in-house pharmacy, a dedicated physician — but the rhythm of the clinic has not changed.</p>
          <p style={{ color: "var(--ink-3)" }}>One unhurried consultation at a time. No over-prescription, no packages pushed at the door. If Ayurveda isn&rsquo;t the right tool for what you&rsquo;ve brought in, we&rsquo;ll say so — and point you somewhere that is.</p>
        </motion.div>
        <motion.div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}>
          <img src="/knee.webp" alt="Knee therapy at AVK" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
        </motion.div>
      </div></div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Core principles</Kicker>
          <h2 style={{ maxWidth: "18ch", marginBottom: 48 }}>Six principles that shape how we practise.</h2>
        </motion.div>
        <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
          {[
            ["Treat the root, not the symptom", "Pain relief is only meaningful when its underlying cause is corrected."],
            ["Non-surgical and non-invasive", "No cuts, no injections, no long-term dependency on painkillers or steroids."],
            ["Personalized to the individual", "Treatment adapts to the patient's body, not the other way around."],
            ["Time-tested methods", "Based on classical Ayurvedic texts, refined by generations of practitioners."],
            ["Integrated with modern diagnostics", "X-rays, clinical assessments and orthopedic evaluation support every plan."],
            ["Holistic across body and lifestyle", "Posture, diet, sleep and daily routines are part of the healing plan."],
          ].map(([t, d]) => (
            <motion.div key={t} className="card" variants={staggerItem}>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 10 }}>{t}</h4>
              <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14.5 }}>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Benefits of the approach</Kicker>
          <h2 style={{ maxWidth: "22ch", marginBottom: 48 }}>What a full course of treatment delivers.</h2>
        </motion.div>
        <motion.div className="grid-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
          {benefits.map(([t, d]) => (
            <motion.div key={t} variants={staggerItem} style={{ padding: "22px 20px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: 18, marginBottom: 8, color: "var(--sage-deep)" }}>{t}</h4>
              <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 13.5 }}>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Why this approach</Kicker>
          <h2 style={{ maxWidth: "24ch", marginBottom: 12 }}>Ayurvedic care, compared.</h2>
          <p style={{ maxWidth: "58ch", color: "var(--ink-3)", marginBottom: 40 }}>Patients often come to AVK after trying conventional treatments. The Ayurvedic approach works with the body rather than overriding it.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
            <thead>
              <tr style={{ background: "var(--ink)", color: "var(--paper)" }}>
                <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Aspect</th>
                <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Conventional</th>
                <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sage-soft)" }}>AVK Ayurvedic</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([aspect, conv, avk], i) => (
                <tr key={aspect} style={{ background: i % 2 === 0 ? "var(--paper)" : "transparent", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
                  <td style={{ padding: "16px 18px", fontWeight: 600, color: "var(--ink)" }}>{aspect}</td>
                  <td style={{ padding: "16px 18px", color: "var(--ink-3)" }}>{conv}</td>
                  <td style={{ padding: "16px 18px", color: "var(--sage-deep)", fontWeight: 500 }}>{avk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <Kicker>Vision</Kicker>
            <h2>Ayurveda, practised well.</h2>
            <p className="lede" style={{ marginTop: 20 }}>Not a wellness brand. Not a spa. A working medical practice that takes the 3,000-year-old science seriously, and uses it to make a measurable difference to the people who walk in.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            <Kicker>In numbers</Kicker>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
              {[["4", "Years open"], ["1,500+", "Patients"], ["4", "Specialities"], ["4.9/5", "Google rating"], ["320+", "Reviews"], ["3", "Generations of some families"]].map(([n, l]) => (
                <motion.div key={l} variants={staggerItem} style={{ padding: "22px 20px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--sage-deep)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 6 }}>{l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div
          style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
        >
          <h2>Come meet us.</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>The best way to understand a clinic is to sit in one. A first consultation is ₹500.</p>
          <WhatsAppCTA size="lg"/>
        </motion.div>
      </div></section>
    </div>
  );
}
