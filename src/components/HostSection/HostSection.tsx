import { BadgeCheck, CakeSlice, GraduationCap, ShieldCheck, Star } from "lucide-react";
import { host } from "../../data/listing";

export function HostSection() {
  return (
    <section aria-labelledby="host-section-heading">
      <h2 id="host-section-heading" style={{ fontSize: 22, fontWeight: 600, marginBottom: 24 }}>
        Meet your host
      </h2>
      <div className="host-section">
        <div className="host-section__profile">
          <div className="host-section__card">
            <div className="host-section__identity">
              <div className="host-section__avatar">
                <img src="/images/avatar-host.svg" alt="" />
                <BadgeCheck className="host-section__verified" size={23} aria-label="Verified host" />
              </div>
              <div className="host-section__name">{host.name}</div>
              <div className="host-section__role">{host.role}</div>
            </div>
            <div className="host-section__stats">
              <div>
                <span className="host-section__stat-value">{host.reviews.toLocaleString("en-IN")}</span>
                Reviews
              </div>
              <div>
                <span className="host-section__stat-value">
                  {host.rating} <Star size={12} fill="currentColor" />
                </span>
                Rating
              </div>
              <div>
                <span className="host-section__stat-value">{host.years}</span>
                Years hosting
              </div>
            </div>
          </div>
          <div className="host-section__facts">
            <p><CakeSlice size={22} aria-hidden="true" />{host.bornDecade}</p>
            <p><GraduationCap size={22} aria-hidden="true" />Where I went to school: {host.school}</p>
          </div>
        </div>

        <div className="host-section__details">
          <div className="host-section__cohosts-block">
            <h3>Co-Hosts</h3>
            <div className="host-section__cohosts">
              {host.coHosts.map((name, index) => (
                <div className="host-section__cohost" key={name}>
                  <span className={`host-section__cohost-avatar host-section__cohost-avatar--${(index % 6) + 1}`} aria-hidden="true">
                    {name.charAt(0)}
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="host-section__host-details">
            <h3>Host details</h3>
            <div className="host-section__response">
              Response rate: {host.responseRate}
              <br />
              {host.responseTime}
            </div>

            <button className="host-section__message-btn" type="button">
              Message host
            </button>

            <p className="host-section__protection">
              <ShieldCheck size={22} aria-hidden="true" />
              <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
