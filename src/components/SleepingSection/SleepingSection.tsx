import { sleepingAreas } from "../../data/listing";

export function SleepingSection() {
  return (
    <section aria-labelledby="sleeping-heading">
      <h2 id="sleeping-heading" style={{ fontSize: 22, fontWeight: 600 }}>
        Where you'll sleep
      </h2>
      <div className="sleeping-grid">
        {sleepingAreas.map((area) => (
          <div className="sleeping-card" key={area.id}>
            <img src={area.image} alt={area.title} />
            <div className="sleeping-card__body">
              <div className="sleeping-card__title">{area.title}</div>
              <div className="sleeping-card__detail">{area.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
