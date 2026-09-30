import {
  BadgeCheck,
  KeyRound,
  Map,
  MessageCircle,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";
import { listing, ratingCategories, reviewChips } from "../../data/listing";
import { reviews } from "../../data/reviews";
import { LaurelWreath } from "../LaurelWreath/LaurelWreath";

const ratingIcons = {
  Cleanliness: Sparkles,
  Accuracy: BadgeCheck,
  "Check-in": KeyRound,
  Communication: MessageCircle,
  Location: Map,
  Value: Tag,
};

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading">
      <div className="reviews-hero">
        <div className="reviews-hero__score-wrap" aria-label="Overall rating 4.95">
          <div className="reviews-hero__laurel reviews-hero__laurel--left" aria-hidden="true">
            <LaurelWreath color="black" side="left" />
          </div>
          <div className="reviews-hero__score">{listing.rating.toFixed(2)}</div>
          <div className="reviews-hero__laurel reviews-hero__laurel--right" aria-hidden="true">
            <LaurelWreath color="black" side="right" />
          </div>
        </div>

        <h2 id="reviews-heading" className="reviews-hero__title">
          Guest favourite
        </h2>

        <p className="reviews-hero__text">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        <a href="#" className="reviews-how">
          How reviews work
        </a>
      </div>

      <div className="rating-categories">
        {ratingCategories.map((cat) => {
          if (cat.label === "Overall rating") {
            return (
              <div className="rating-category rating-category--overall" key={cat.label}>
                <span className="rating-category__label">{cat.label}</span>
                <div className="rating-distribution" aria-label="Rating distribution">
                  {[95, 5, 0, 0, 0].map((percent, index) => (
                    <div className="rating-distribution__row" key={5 - index}>
                      <span>{5 - index}</span>
                      <span className="rating-distribution__track">
                        <span style={{ width: `${percent}%` }} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          const Icon = ratingIcons[cat.label as keyof typeof ratingIcons];
          return (
            <div className="rating-category" key={cat.label}>
              <span className="rating-category__label">{cat.label}</span>
              <span className="rating-category__value">{cat.value.toFixed(1)}</span>
              <Icon className="rating-category__icon" size={28} strokeWidth={1.7} aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className="review-chips" role="list" aria-label="Common review topics">
        {reviewChips.map((chip) => (
          <span className="review-chip" role="listitem" key={chip.label}>
            <span aria-hidden="true">{chip.emoji}</span>
            {chip.label}
            <span className="review-chip__count">{chip.count}</span>
          </span>
        ))}
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <article className="review-card" key={r.id}>
            <div className="review-card__header">
              <div className="review-card__avatar">
                <img src={r.avatar} alt="" />
              </div>
              <div>
                <div className="review-card__name">{r.name}</div>
                <div className="review-card__meta">{r.timeOnAirbnb}</div>
              </div>
            </div>
            <div className="review-card__rating">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} size={10} fill="currentColor" />
              ))}
              <span>· {r.date}</span>
            </div>
            <p className="review-card__text">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
