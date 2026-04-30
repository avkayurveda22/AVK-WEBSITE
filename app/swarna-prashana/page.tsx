"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic, swarnaPrashana } from "@/lib/data";
import { Button, Kicker } from "@/components/ui";
import Icon from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function SwarnaPrashanaPage() {
  const next = swarnaPrashana.nextDose;

  return (
    <div className="page" data-screen-label="Swarna Prashana">
      <section className="page-head">
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Paediatric programme · Monthly
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Swarna Prashana <span style={{ fontStyle: "italic", color: "var(--sage-deep)" }}>— gold for growing children.</span>
          </motion.h1>
          <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            {swarnaPrashana.short}
          </motion.p>
          <motion.div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <WhatsAppCTA label="Reserve on WhatsApp"/>
            <a href={clinic.phoneHref} className="btn btn-ghost"><span>Call {clinic.phone}</span><Icon name="phone" size={14} stroke={2}/></a>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <Kicker>What it is</Kicker>
              <h2>An immunisation rooted in classical Ayurveda.</h2>
              <p style={{ color: "var(--ink-2)", marginTop: 18, fontSize: 16, lineHeight: 1.7 }}>
                Swarna Prashana is the practice of administering Suvarna Bhasma — finely purified gold — combined with honey, ghee and selected herbal extracts. A single drop is given to the child on the day of <em>Pushya Nakshatra</em>, considered the most auspicious lunar day for nourishment.
              </p>
              <p style={{ color: "var(--ink-2)", marginTop: 14, fontSize: 16, lineHeight: 1.7 }}>
                {swarnaPrashana.origin}
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
              style={{ background: "var(--sage-wash)", border: "1px solid var(--sage-soft)", borderRadius: "var(--radius-lg)", padding: "32px 36px" }}
            >
              <span className="eyebrow" style={{ color: "var(--sage-deep)" }}>At a glance</span>
              <dl className="sp-dl">
                <div><dt>Who it&rsquo;s for</dt><dd>{swarnaPrashana.ageRange}</dd></div>
                <div><dt>How often</dt><dd>{swarnaPrashana.cadence}</dd></div>
                <div><dt>Form</dt><dd>One drop, taken orally — honey, ghee &amp; Suvarna Bhasma</dd></div>
                <div><dt>Duration</dt><dd>5–10 minutes per visit</dd></div>
                <div><dt>Source text</dt><dd>Kashyap Samhita (classical paediatric Ayurveda)</dd></div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <Kicker>How it helps</Kicker>
            <h2>Eight benefits, observed over generations.</h2>
            <p style={{ maxWidth: "56ch", color: "var(--ink-3)", marginTop: 14 }}>
              Continued monthly doses through early childhood are traditionally associated with stronger immunity, sharper cognition and steadier growth. The effects build gradually — most families continue the programme for several years.
            </p>
          </motion.div>
          <motion.div
            className="sp-benefits"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
          >
            {swarnaPrashana.benefits.map((b, i) => (
              <motion.div key={b} className="sp-benefit" variants={staggerItem}>
                <span className="sp-benefit-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="sp-benefit-text">{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <Kicker>Upcoming dose</Kicker>
              <h2>The next Pushya Nakshatra falls on</h2>
              <div className="sp-date-card">
                <span className="sp-date-eyebrow">Mark your calendar</span>
                <div className="sp-date-big">{next.display}</div>
                <span className="sp-date-sub">{next.nakshatra}</span>
              </div>
              <p style={{ color: "var(--ink-3)", marginTop: 22, maxWidth: "52ch" }}>
                Doses are administered through the day at the clinic. Walk-ins are welcome, but a quick call ahead helps us avoid waiting time.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <WhatsAppCTA label="Reserve on WhatsApp"/>
                <a href={clinic.phoneHref} className="btn btn-ghost"><span>{clinic.phone}</span><Icon name="phone" size={14} stroke={2}/></a>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <Kicker>Frequently asked</Kicker>
              <div className="sp-faq">
                <div>
                  <h4>Is it safe for newborns?</h4>
                  <p>Yes. Swarna Bhasma used in Swarna Prashana is purified through classical processes and dosed appropriately for age. We adjust the formulation for infants, toddlers and older children.</p>
                </div>
                <div>
                  <h4>Does my child need to be unwell?</h4>
                  <p>No — this is preventive nourishment, not a treatment. Healthy children benefit just as much.</p>
                </div>
                <div>
                  <h4>What if we miss a Pushya date?</h4>
                  <p>It happens. Resume on the next Pushya Nakshatra — the cycle is forgiving and continuity over time is what matters.</p>
                </div>
                <div>
                  <h4>How long should we continue?</h4>
                  <p>The classical recommendation is from birth to 12 years. Many parents commit for the first 2–5 years and continue based on observed benefit.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            style={{ background: "var(--sage-wash)", border: "1px solid var(--sage-soft)", borderRadius: "var(--radius-lg)", padding: "56px 48px", textAlign: "center" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          >
            <Kicker>Have questions?</Kicker>
            <h2 style={{ maxWidth: "22ch", margin: "0 auto 16px" }}>Speak with Dr. Akshata before the next dose.</h2>
            <p className="lede" style={{ margin: "0 auto 28px" }}>
              A short consultation to walk you through the programme — what to expect, dosage by age and any specific concerns about your child.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <WhatsAppCTA size="lg"/>
              <Link href="/" style={{ textDecoration: "none" }}><Button variant="ghost" size="lg">Back to home</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
