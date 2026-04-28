import type { PublicReview } from "./supabase";

const ENDPOINT = "https://places.googleapis.com/v1/places";

type GoogleReview = {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
};

type PlaceDetails = {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
};

export async function fetchGoogleReviews(): Promise<PublicReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return [];

  try {
    const res = await fetch(`${ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) return [];
    const data = (await res.json()) as PlaceDetails;
    if (!data.reviews || data.reviews.length === 0) return [];

    return data.reviews
      .filter((r) => (r.text?.text || r.originalText?.text) && r.authorAttribution?.displayName)
      .map((r, i) => {
        const quote = (r.text?.text || r.originalText?.text || "").trim();
        const author = r.authorAttribution!.displayName!.trim();
        const rating = typeof r.rating === "number" ? Math.round(r.rating) : 5;
        return {
          id: r.name || `google-${i}`,
          name: author,
          role: r.relativePublishTimeDescription ? `Google review · ${r.relativePublishTimeDescription}` : null,
          quote,
          stars: Math.max(1, Math.min(5, rating)),
          created_at: r.publishTime || new Date().toISOString(),
          source: "google" as const,
        };
      });
  } catch {
    return [];
  }
}

export async function fetchGoogleSummary(): Promise<{ rating: number | null; count: number | null }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return { rating: null, count: null };

  try {
    const res = await fetch(`${ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { rating: null, count: null };
    const data = (await res.json()) as PlaceDetails;
    return {
      rating: typeof data.rating === "number" ? data.rating : null,
      count: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
    };
  } catch {
    return { rating: null, count: null };
  }
}
