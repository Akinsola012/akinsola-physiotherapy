import Link from "next/link";
import { practice, conditionGroups } from "../../components/site-data";

export const metadata = {
  title: `What We Treat — ${practice.name}`,
  description: "Conditions we treat at home across South-West Nigeria."
};

export default function ServicesPage() {
  return (
    <main className="shell section">
      <p className="eyebrow">What We Treat</p>
      <h1>Conditions We Treat</h1>
      <p className="lead">
        Find your condition at a glance. We treat the most common muscle, joint
        and nerve conditions — at your home, across Ibadan and beyond.
      </p>

      {conditionGroups.map((group) => (
        <section key={group.group} style={{ marginTop: "3rem" }}>
          <h2>{group.group}</h2>
          <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
            {group.intro}
          </p>

          <div className="service-grid">
            {group.conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/services/${condition.slug}`}
                className="service-card"
              >
                <h3>{condition.title}</h3>
                <p>{condition.description}</p>
                <span>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="card" style={{ marginTop: "3rem" }}>
        <h3>Don't see your condition?</h3>
        <p>
          We treat many other conditions. Contact us and we will let you know
          how we can help.
        </p>
        <Link className="button" href="/contact">
          Ask About Your Condition
        </Link>
      </div>
    </main>
  );
}