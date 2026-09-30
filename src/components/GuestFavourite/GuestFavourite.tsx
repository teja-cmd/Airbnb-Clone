import { Star } from "lucide-react";
import { listing } from "../../data/listing";
import { LaurelWreath } from "../LaurelWreath/LaurelWreath";

export function GuestFavourite() {
  return (
    <div className="guest-favourite">
      <div className="guest-favourite__intro">
        <LaurelWreath color="black" side="left" />
        <div className="guest-favourite__title">Guest favourite</div>
        <LaurelWreath color="black" side="right" />
      </div>
      <div className="guest-favourite__subtitle">
        One of the most loved homes on Airbnb, according to guests
      </div>

      <div className="guest-favourite__score" aria-label={`Overall rating ${listing.rating}`}>
        <div className="guest-favourite__score-value">{listing.rating.toFixed(2)}</div>
        <div className="guest-favourite__stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
      </div>

      <div className="guest-favourite__reviews">
        <div className="guest-favourite__reviews-value">{listing.reviewCount}</div>
        <div className="guest-favourite__reviews-label">Reviews</div>
      </div>
    </div>
  );
}
