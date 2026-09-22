import Link from "next/link";
import { practice } from "../components/site-data";

export const metadata = {
  title: `${practice.name} — Home Physiotherapy in Ibadan`,
  description: "Licensed physiotherapists bringing expert care to your home."
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">{practice.credentials}</p>
            <h1>Home Physiotherapy You Can Trust</h1>
            <p className="lead">
              Licensed physiotherapists bringing expert care to your doorstep.
              Personalised recovery, at your pace, in your own space.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">
                Book a Home Visit
              </Link>
              <a className="text-link" href={practice.phoneHref}>
                Call {practice.phone}
              </a>
            </div>
            <p className="hero-note">
              Serving {practice.serviceArea} · {practice.hours}
            </p>
          </div>
          <div
  style={{
    position: "relative",
    width: "100%",
    height: "400px",
    borderRadius: "12px",
    overflow: "hidden"
  }}
>
  <img
    src="/images/hero-photo.jpg"
    alt="Brave Rehab physiotherapist at work"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  />
</div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="shell">
          <div className="detail-grid">
            <div>
              <p className="eyebrow">Licensed</p>
              <p>Licensed physiotherapists you can trust.</p>
            </div>
            <div>
              <p className="eyebrow">Home Visits</p>
              <p>We come to you — across South-West Nigeria.</p>
            </div>
            <div>
              <p className="eyebrow">7 Days a Week</p>
              <p>Available Monday to Sunday, 7am – 7pm.</p>
            </div>
            <div>
              <p className="eyebrow">One-on-One</p>
              <p>Personal sessions focused on your recovery.</p>
            </div>
          </div>
        </div>
      </section>

{/* PACKAGES PREVIEW */}
<section className="section tint">
  <div className="shell">
    <div className="section-heading">
      <div>
        <p className="eyebrow">Packages</p>
        <h2>Transparent pricing, no hidden fees.</h2>
      </div>
      <Link className="text-link" href="/pricing">
        View all packages →
      </Link>
    </div>

    <div className="pricing-grid">
      <div className="pricing-card">
        <p className="eyebrow">3 Sessions</p>
        <h3>Starter</h3>
        <p className="pricing-amount">₦75,000</p>
        <p className="pricing-desc">
          Ideal for foundational assessment and immediate concerns.
        </p>
        <Link className="button" href="/pricing" style={{ marginTop: "auto" }}>
          See Details
        </Link>
      </div>

      <div className="pricing-card featured">
        <div className="pricing-badge">Most Popular</div>
        <p className="eyebrow">5 Sessions</p>
        <h3>Comprehensive</h3>
        <p className="pricing-amount">₦120,000</p>
        <p className="pricing-desc">
          For conditions needing sustained, structured care.
        </p>
        <Link className="button" href="/pricing" style={{ marginTop: "auto" }}>
          See Details
        </Link>
      </div>

      <div className="pricing-card">
        <p className="eyebrow">9 Sessions</p>
        <h3>Intensive Care</h3>
        <p className="pricing-amount">₦210,000</p>
        <p className="pricing-desc">
          Premium care for complex or ongoing conditions.
        </p>
        <Link className="button" href="/pricing" style={{ marginTop: "auto" }}>
          See Details
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* WHAT WE TREAT PREVIEW */}
      <section className="section tint">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What We Treat</p>
              <h2>Conditions we see every day.</h2>
            </div>
            <Link className="text-link" href="/services">
              View all conditions →
            </Link>
          </div>

          <div className="service-grid">
            <Link className="service-card" href="/services/back-pain-sciatica">
              <h3>Back Pain & Sciatica</h3>
              <p>Lower back pain, disc problems, and shooting leg pain.</p>
              <span>Learn more →</span>
            </Link>
            <Link className="service-card" href="/services/stroke">
              <h3>Stroke Recovery</h3>
              <p>Regain movement, balance, and independence after stroke.</p>
              <span>Learn more →</span>
            </Link>
            <Link className="service-card" href="/services/knee-pain">
              <h3>Knee Pain</h3>
              <p>Osteoarthritis, injuries, and post-surgery recovery.</p>
              <span>Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="how-to-start">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">How to Get Started</p>
            <h2>Getting started is simpler than you think.</h2>
            <p>
              Here is what the process looks like — from your first call to your
              first home visit.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Call or Message Us</h3>
              <p>
                Reach out by phone at{" "}
                <a href={practice.phoneHref}>
                  <strong>{practice.phone}</strong>
                </a>{" "}
                or through our contact form. No referral needed. We respond the
                same day.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Free Assessment</h3>
              <p>
                We conduct a brief, confidential assessment to understand your
                situation and determine the right treatment plan. We also
                explain our packages and pricing.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Begin Treatment</h3>
              <p>
                Most patients start within the same week. Your first visit
                includes a full assessment, meeting your physiotherapist, and
                starting your personalised recovery plan.
              </p>
            </div>
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