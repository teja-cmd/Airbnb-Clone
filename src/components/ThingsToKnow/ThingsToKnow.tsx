import { CalendarX, KeyRound, Shield } from "lucide-react";
import { thingsToKnow } from "../../data/listing";

export function ThingsToKnow() {
  return (
    <section aria-labelledby="things-to-know-heading">
      <h2 id="things-to-know-heading" style={{ fontSize: 22, fontWeight: 600 }}>
        Things to know
      </h2>
      <div className="things-to-know">
        <div className="things-to-know__col">
          <CalendarX size={24} aria-hidden="true" />
          <h3>Cancellation policy</h3>
          <ul>
            {thingsToKnow.cancellation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="things-to-know__learn-more" type="button">
            Learn more
          </button>
        </div>
        <div className="things-to-know__col">
          <KeyRound size={24} aria-hidden="true" />
          <h3>House rules</h3>
          <ul>
            {thingsToKnow.houseRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <button className="things-to-know__learn-more" type="button">
            Learn more
          </button>
        </div>
        <div className="things-to-know__col">
          <Shield size={24} aria-hidden="true" />
          <h3>Safety &amp; property</h3>
          <ul>
            {thingsToKnow.safety.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="things-to-know__learn-more" type="button">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
