import { Search, Plus, Minus, MapPin } from "lucide-react";
import { listing } from "../../data/listing";

export function Location() {
  return (
    <section id="location" aria-labelledby="location-heading">
      <h2 id="location-heading" style={{ fontSize: 22, fontWeight: 600 }}>
        Where you'll be
      </h2>
      <p style={{ fontSize: 15, marginTop: 4 }}>{listing.location}</p>

      <div className="location-map">
        <img src="/images/map-bg.svg" alt="Map showing the approximate area of Candolim, Goa" />
        <div className="location-map__pin" aria-hidden="true">
          <MapPin size={36} fill="currentColor" />
        </div>
        <button className="location-map__search" type="button">
          <Search size={14} style={{ marginRight: 6, display: "inline" }} />
          Search this area
        </button>
        <div className="location-map__controls">
          <button type="button" aria-label="Zoom in">
            <Plus size={16} />
          </button>
          <button type="button" aria-label="Zoom out">
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="location__note">Exact location will be provided after booking.</p>
    </section>
  );
}
