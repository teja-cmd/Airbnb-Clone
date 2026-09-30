import { Waves, Snowflake, KeyRound } from "lucide-react";
import { listing } from "../../data/listing";

const ICONS: Record<string, React.ReactNode> = {
  waves: <Waves size={26} />,
  snowflake: <Snowflake size={26} />,
  "key-round": <KeyRound size={26} />,
};

export function HostSummary() {
  return (
    <section aria-labelledby="host-summary-heading">
      <h2 id="host-summary-heading" className="visually-hidden">
        Hosted by {listing.hostName}
      </h2>
      <div className="host-summary">
        <div className="host-summary__avatar">
          <img src="/images/avatar-host.svg" alt="" />
        </div>
        <div>
          <div className="host-summary__title">Hosted by {listing.hostName}</div>
          <div className="host-summary__subtitle">{listing.hostYears} years hosting</div>
        </div>
      </div>

      <div className="highlights" style={{ marginTop: 32 }}>
        {listing.highlights.map((h) => (
          <div className="highlight" key={h.title}>
            <span className="highlight__icon" aria-hidden="true">
              {ICONS[h.icon]}
            </span>
            <div>
              <div className="highlight__title">{h.title}</div>
              <div className="highlight__body">{h.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
