import { Star } from "lucide-react";
import { listing } from "../../data/listing";
import "./ReservationCard.css";

export function ReservationCard() {
  return (
    <div className="reservation-wrap">
      <div className="discount-card">
        <div className="discount-card__text">
          Get 10% off your next stay.
          <br />
          <a href="#" className="discount-card__terms">
            Terms apply
          </a>
        </div>
        <button className="discount-card__claim" type="button">
          Claim
        </button>
      </div>

      <div className="reservation-card">
        <div className="reservation-card__price-row">
          <span className="reservation-card__price">
            ₹{listing.price.toLocaleString("en-IN")}{" "}
            <span className="reservation-card__price-sub">for {listing.nights} nights</span>
          </span>
          <span className="reservation-card__rating">
            <Star size={12} fill="currentColor" />
            {listing.rating} · {listing.reviewCount} reviews
          </span>
        </div>

        <div className="reservation-card__fields">
          <div className="reservation-card__field-row">
            <div className="reservation-card__field">
              <div className="reservation-card__field-label">CHECK-IN</div>
              <div className="reservation-card__field-value">{listing.checkIn}</div>
            </div>
            <div className="reservation-card__field">
              <div className="reservation-card__field-label">CHECKOUT</div>
              <div className="reservation-card__field-value">{listing.checkOut}</div>
            </div>
          </div>
          <div className="reservation-card__guests">
            <div className="reservation-card__field-label">GUESTS</div>
            <div className="reservation-card__field-value">{listing.guests}</div>
          </div>
        </div>

        <button className="reservation-card__reserve-btn" type="button">
          Reserve
        </button>
        <p className="reservation-card__note">You won't be charged yet</p>

        <p className="reservation-card__cancellation">
          Free cancellation before {listing.cancellationDate}
        </p>
      </div>
    </div>
  );
}
