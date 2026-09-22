import Link from "next/link";
import { practice } from "../../components/site-data";

export const metadata = {
  title: `How We Treat — ${practice.name}`,
  description: "Our evidence-based, patient-centred approach to physiotherapy."
};

const pillars = [
  {
    number: "01",
    title: "Evidence-Based Assessment",
    text: "Every session begins with a structured clinical assessment — history, physical examination, and functional testing. We identify the underlying cause of your symptoms, not just the symptoms themselves. Where needed, we screen for red flags and coordinate with your doctor for imaging or specialist referral."
  },
  {
    number: "02",
    title: "Personalised Treatment Plan",
    text: "Your goals guide the plan. Whether you are returning to work, sport, or daily independence, we design a realistic, measurable programme around your priorities — not a generic protocol. You will know what we are treating, why, and how progress will be measured."
  },
  {
    number: "03",
    title: "Active Rehabilitation",
    text: "Hands-on therapy provides short-term relief, but lasting recovery comes from active rehabilitation. We combine manual therapy and modalities (TENS, infrared) with progressive exercise, movement retraining, and self-management education — so gains are maintained long after discharge."
  },
  {
    number: "04",
    title: "Coordinated Care",
    text: "With your consent, we work alongside your doctor, specialists, and family caregivers. We share assessment findings, provide written progress reports, and adjust the plan based on medical guidance. This ensures safe, joined-up care in your home."
  }
];
const equipment = [
  "Blood pressure monitor",
  "TENS machine",
  "EMS device",
  "Ultrasound therapy",
  "Infrared light therapy",
  "Resistance bands",
  "Mobility aids",
  "Disposable gloves",
  "Analgesic (pain-relief) cream",
  "Educational materials",
  "Clinical documentation",
  "Other equipment as needed"
];

export default function HowWeTreatPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero shell">
        <p className="eyebrow">Our Approach</p>
        <h1>How We Treat</h1>
        <p className="lead">
          A structured, evidence-based approach to rehabilitation — delivered
          in your home, tailored to your goals, and coordinated with your
          medical team.
        </p>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="shell">
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div className="pillar-item" key={pillar.number}>
                <p className="pillar-number">{pillar.number}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BRING */}
      <section className="section tint">
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
              src="/images/how-we-treat.jpg"
              alt="Physiotherapy treatment in progress"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <div>
            <p className="eyebrow">What We Bring</p>
            <h2>Clinical equipment, ready for every session.</h2>
            <p>
              We arrive fully equipped — no need to prepare anything. Just
              find a comfortable space and we&apos;ll handle the rest.
            </p>

            <div className="bring-grid">
              {equipment.map((item) => (
                <div className="bring-item" key={item}>
                  <span className="bring-icon">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              className="button"
              href="/contact"
              style={{ marginTop: "1.75rem" }}
            >
              Book a Home Visit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="shell callout">
          <div>
            <h2>Ready to start your recovery?</h2>
            <p>Book a home visit or send us a WhatsApp message.</p>
          </div>
          <Link className="button" href="/contact">
            Book a Home Visit
          </Link>
        </div>
      </section>
    </main>
  );
}