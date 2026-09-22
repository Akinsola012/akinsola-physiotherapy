import Link from "next/link";
import { practice, locations } from "../../components/site-data";
export const metadata = {
  title: `Location — ${practice.name}`,
  description: `Home physiotherapy across ${practice.serviceArea}.`
};

export default function LocationPage() {
  return (
    <main className="shell section">
      <p className="eyebrow">Where We Work</p>
      <h1>We come to you.</h1>
      <p className="lead">
        {practice.name} provides home physiotherapy across{" "}
        {practice.serviceArea}. No clinic visit needed — we bring the session
        to your home, at a time that works for you.
      </p>

      <div className="card-grid" style={{ marginTop: "2rem" }}>
        {locations.map((loc) => (
          <div className="card" key={loc.city}>
            <h3>{loc.city}</h3>
            <p>{loc.note}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h3>Not sure if we cover your area?</h3>
        <p>
          Send us a quick message with your address and we will let you know.
        </p>
        <Link className="button" href="/contact">
          Check my area
        </Link>
      </div>

      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>Opening Hours</h3>
        <p>{practice.hours}</p>
        <p>
          Call or WhatsApp: <a href={practice.phoneHref}>{practice.phone}</a>
        </p>
      </div>
    </main>
  );
}