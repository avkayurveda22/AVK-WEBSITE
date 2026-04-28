"use client";
import { useState } from "react";
import { Button } from "./ui";
import Icon from "./Icon";

const MAX_QUOTE = 2000;

export function ReviewForm({ onDone }: { onDone?: () => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [stars, setStars] = useState(5);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, quote, stars }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not submit your review.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rv-done">
        <div className="rv-done-icon"><Icon name="check" size={22} stroke={2.5}/></div>
        <h4>Thank you.</h4>
        <p>Your review has been submitted and will appear on the site once approved. We&rsquo;re grateful you took the time.</p>
        {onDone && <Button variant="ghost" size="sm" onClick={onDone}>Close</Button>}
      </div>
    );
  }

  const display = hover || stars;

  return (
    <form className="rv-form" onSubmit={handleSubmit}>
      <div className="rv-stars-row">
        <label className="rv-label">Your rating</label>
        <div className="rv-stars" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={stars === n}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(n)}
              onClick={() => setStars(n)}
              className={"rv-star" + (n <= display ? " on" : "")}
            >★</button>
          ))}
        </div>
      </div>

      <div className="rv-field">
        <label className="rv-label" htmlFor="rv-name">Your name</label>
        <input
          id="rv-name"
          type="text"
          required
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Priya R."
        />
      </div>

      <div className="rv-field">
        <label className="rv-label" htmlFor="rv-role">Role &amp; location <span className="rv-optional">(optional)</span></label>
        <input
          id="rv-role"
          type="text"
          maxLength={120}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. Teacher · Jayanagar"
        />
      </div>

      <div className="rv-field">
        <label className="rv-label" htmlFor="rv-quote">Your experience</label>
        <textarea
          id="rv-quote"
          required
          rows={5}
          maxLength={MAX_QUOTE}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="What treatment did you receive, how was the experience, and what changed for you?"
        />
        <div className="rv-counter">{quote.length} / {MAX_QUOTE}</div>
      </div>

      {error && <div className="rv-error">{error}</div>}

      <div className="rv-actions">
        <Button variant="sage" type="submit">{submitting ? "Submitting…" : "Submit review"}</Button>
        <p className="rv-note">Reviews are moderated before they appear on the site.</p>
      </div>
    </form>
  );
}
