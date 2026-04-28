import type { PublicReview } from "@/lib/supabase";

export function ReviewCard({ review, dark = false }: { review: PublicReview; dark?: boolean }) {
  const filled = Math.max(0, Math.min(5, review.stars));
  return (
    <article className={"rv-card" + (dark ? " rv-card-dark" : "")}>
      <div className="rv-card-stars" aria-label={`${filled} out of 5 stars`}>
        {"★".repeat(filled)}<span className="empty">{"★".repeat(5 - filled)}</span>
      </div>
      <p className="rv-card-quote">&ldquo;{review.quote}&rdquo;</p>
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
