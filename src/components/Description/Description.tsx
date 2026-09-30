import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { listing } from "../../data/listing";

export function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section aria-labelledby="description-heading">
      <h2 id="description-heading" className="visually-hidden">
        About this space
      </h2>
      <a href="#" className="description__translate">
        Some info has been automatically translated. Show original
      </a>
      <p className={`description__text${expanded ? "" : " description__text--collapsed"}`}>
        {listing.description}
      </p>
      <button
        className="description__show-more"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? "Show less" : "Show more"}
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </section>
  );
}
