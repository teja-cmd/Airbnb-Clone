import { Search, House } from "lucide-react";
import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar" role="search">
      <button className="search-bar__segment search-bar__segment--location" type="button">
        <span className="search-bar__icon" aria-hidden="true">
          <House size={18} strokeWidth={2.1} />
        </span>
        <span className="search-bar__value">Anywhere</span>
      </button>

      <span className="search-bar__divider" aria-hidden="true" />

      <button className="search-bar__segment search-bar__segment--date" type="button">
        <span className="search-bar__value">Anytime</span>
      </button>

      <span className="search-bar__divider" aria-hidden="true" />

      <button className="search-bar__segment search-bar__segment--guests" type="button">
        <span className="search-bar__value">Add guests</span>
      </button>

      <button className="search-bar__submit" type="button" aria-label="Search">
        <Search size={16} strokeWidth={3} />
      </button>
    </div>
  );
}
