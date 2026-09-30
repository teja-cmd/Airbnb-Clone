import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { nearbyStays } from "../../data/nearbyStays";

const PER_PAGE = 5;

export function NearbyStays() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(nearbyStays.length / PER_PAGE);
  const visible = nearbyStays.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="nearby-stays" aria-labelledby="nearby-heading">
      <div className="nearby-stays__header">
        <h2 id="nearby-heading" className="nearby-stays__title">
          More stays near Candolim
        </h2>
        <div className="nearby-stays__controls">
          <span className="nearby-stays__page">
            {page + 1} / {totalPages}
          </span>
          <button
            className="nearby-stays__nav-btn"
            type="button"
            disabled={page === 0}
            aria-label="Previous stays"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className="nearby-stays__nav-btn"
            type="button"
            disabled={page === totalPages - 1}
            aria-label="Next stays"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="nearby-stays__track">
        {visible.map((stay) => (
          <div className="nearby-card" key={stay.id}>
            <img src={stay.image} alt={stay.title} />
            <div className="nearby-card__title">{stay.title}</div>
            <div className="nearby-card__meta">
              <span>₹{stay.price.toLocaleString("en-IN")} for 5 nights</span>
              <span className="nearby-card__rating">
                <Star size={12} fill="currentColor" />
                {stay.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
