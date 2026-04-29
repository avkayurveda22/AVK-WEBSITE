"use client";
import { useState } from "react";
import type { PublicReview } from "@/lib/supabase";
import Icon from "./Icon";

const CLAMP_THRESHOLD = 240;

export function ReviewCard({ review, dark = false }: { review: PublicReview; dark?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const filled = Math.max(0, Math.min(5, review.stars));
  const isLong = review.quote.length > CLAMP_THRESHOLD;
  const clamp = isLong && !expanded;

  return (
    <article className={"rv-card" + (dark ? " rv-card-dark" : "")}>
      <div className="rv-card-stars" aria-label={`${filled} out of 5 stars`}>
        {"★".repeat(filled)}<span className="empty">{"★".repeat(5 - filled)}</span>
      </div>
      <p className={"rv-card-quote" + (clamp ? " clamped" : "")}>
        &ldquo;{review.quote}&rdquo;
      </p>
      {isLong && (
        <button
          type="button"
          className="rv-card-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <span>{expanded ? "Show less" : "Read full review"}</span>
          <Icon
            name="chevron"
            size={14}
            stroke={2}
            style={{ transform: expanded ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform .2s" }}
          />
        </button>
      )}
      <div className="rv-card-foot">
        <div className="rv-card-avatar">{review.name.charAt(0).toUpperCase()}</div>
        <div>
          <div className="rv-card-name">{review.name}</div>
          {review.role && <div className="rv-card-role">{review.role}</div>}
        </div>
        {review.source === "google" && <span className="rv-card-source">Google</span>}
      </div>
    </article>
  );
}
