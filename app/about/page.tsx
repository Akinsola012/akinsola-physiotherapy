import Link from "next/link";
import { practice } from "../../components/site-data";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero shell">
        <p className="eyebrow">About Us</p>
        <h1>Care that meets you where you are</h1>
        <p className="lead">
          At <strong>Brave Rehab</strong>, we believe healing doesn&apos;t always
          need prescriptions or surgery — it needs movement, care, and the
          right guidance.
        </p>
      </section>

      {/* PORTRAIT + STORY */}
      <section className="section shell two-column">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            borderRadius: "12px",
            overflow: "hidden"
          }}
        >
          <img
            src="/images/about-me.jpg"
            alt="Brave Rehab physiotherapist portrait"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        <div>
          <p className="eyebrow">Our Approach</p>
          <h2>We listen first, explain clearly, and focus on what matters.</h2>
          <p>
            We are physiotherapists who put your goals at the centre of every
            session — understanding how symptoms affect your life, what you
            want to return to, and what support is realistic in your home.
          </p>
          <p>
            Rooted in a passion for healthcare and community service, we
            started Brave Rehab to bring professional rehabilitation into
            Nigerian homes — where recovery happens best. Because when people
            move better, they live better.
          </p>
          <p>
            We are a licensed, evidence-based physiotherapy practice serving{" "}
            <strong>{practice.serviceArea}</strong>, bringing musculoskeletal
            and neurological care directly to your home.
          </p>
          <Link className="button" href="/contact">
            Book an assessment
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="section tint">
        <div className="shell">
          <p className="eyebrow">Our Values</p>
          <h2>What guides our care</h2>

          <div className="detail-grid">
            <div>
              <h3>Respectful care</h3>
              <p>Your goals, privacy, and comfort guide the plan.</p>
            </div>
            <div>
              <h3>Clear communication</h3>
              <p>You should understand what we are working on and why.</p>
            </div>
            <div>
              <h3>Practical rehabilitation</h3>
              <p>Exercises and advice should fit your routine and abilities.</p>
            </div>
            <div>
              <h3>Collaboration</h3>
              <p>
                With consent, we work constructively with families and
                healthcare partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="shell callout">
          <div>
            <h2>Ready to get started?</h2>
            <p>Book a home visit or send us a WhatsApp message.</p>
          </div>
          <Link className="button" href="/contact">
            Book a Home Visit
          </Link>
        </div>
      </section>
    </>
  );
}