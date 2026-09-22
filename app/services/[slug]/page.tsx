import Link from "next/link";
import { notFound } from "next/navigation";
import {
  practice,
  conditionGroups,
  conditionDetails
} from "../../../components/site-data";

const allConditions = conditionGroups.flatMap((group) =>
  group.conditions.map((condition) => ({
    ...condition,
    group: group.group
  }))
);

export function generateStaticParams() {
  return allConditions.map((condition) => ({ slug: condition.slug }));
}

export default async function ConditionPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = allConditions.find((c) => c.slug === slug);
  const detail = conditionDetails.find((d) => d.slug === slug);

  if (!condition) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero shell">
        <p className="eyebrow">{condition.group}</p>
        <h1>{condition.title}</h1>
        <p className="lead">{detail?.intro ?? condition.description}</p>

        <div className="button-row" style={{ marginTop: "1.5rem" }}>
          <Link className="button" href="/contact">
            Book a Home Visit
          </Link>
          <a className="text-link" href={practice.whatsappHref}>
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              borderRadius: "12px",
              overflow: "hidden"
            }}
          >
            <img
              src={`/images/${condition.slug}.jpg`}
              alt={condition.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <div>
            <p className="eyebrow">Understanding</p>
            <h2>{detail?.understanding.heading ?? condition.title}</h2>
            {(detail?.understanding.paragraphs ?? [condition.description]).map(
              (para, i) => (
                <p key={i}>{para}</p>
              )
            )}
          </div>
        </div>
      </section>

      {detail?.symptoms && (
        <section className="section tint">
          <div className="shell">
            <p className="eyebrow">Symptoms</p>
            <h2>What to look for</h2>

            <div className="symptoms-grid">
              {detail.symptoms.map((symptom, i) => (
                <div className="symptom-item" key={i}>
                  <span className="symptom-icon">+</span>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail?.howWeTreat && (
        <section className="section">
          <div className="shell">
            <p className="eyebrow">Our Approach</p>
            <h2>{detail.howWeTreat.heading}</h2>

            <div className="treatment-list">
              {detail.howWeTreat.paragraphs.map((para, i) => (
                <div className="treatment-item" key={i}>
                  <p>{para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail?.faqs && detail.faqs.length > 0 && (
        <section className="section tint">
          <div className="shell">
            <p className="eyebrow">Frequently Asked</p>
            <h2>Common questions about {condition.title}</h2>

            <div className="faq-list">
              {detail.faqs.map((faq, i) => (
                <details className="faq-item" key={i}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell callout">
          <div>
            <h2>Ready to start recovery?</h2>
            <p>
              Book a home visit or send us a WhatsApp message to discuss your
              condition.
            </p>
          </div>
          <Link className="button" href="/contact">
            Book a Home Visit
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Link className="text-link" href="/services">
            ← Back to all conditions
          </Link>
        </div>
      </section>
    </main>
  );
}