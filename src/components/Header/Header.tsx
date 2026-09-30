import { Globe, Menu, House } from "lucide-react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Airbnb home">
          <House size={28} aria-hidden="true" />
          <span>airbnb</span>
        </a>

        <SearchBar />

        <div className="header__right">
          <a href="#" className="header__link">
            Become a host
          </a>
          <button className="header__icon-btn" aria-label="Choose a language and region">
            <Globe size={18} />
          </button>
          <button className="header__profile" aria-label="Main menu">
            <Menu size={16} />
            <span className="header__avatar">
              <span aria-hidden="true">T</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
