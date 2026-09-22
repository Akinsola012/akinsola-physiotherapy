import Link from "next/link";
import { practice } from "../../components/site-data";

export const metadata = {
  title: `Packages & Pricing — ${practice.name}`,
  description: "Transparent pricing for home physiotherapy across Ibadan and South-West Nigeria."
};

const packages = [
  {
    slug: "starter",
    name: "3-Session Starter",
    price: "₦75,000",
    sessions: "3 Sessions",
    description: "Ideal for individuals seeking a foundational approach to their health and well-being.",
    includes: [
      "Initial Assessment & Treatment",
      "2 Follow-up Treatments",
      "Personalised Treatment Plan",
      "Customer Support"
    ],
    location: "Ibadan only",
    featured: false
  },
  {
    slug: "comprehensive",
    name: "5-Session Comprehensive",
    price: "₦120,000",
    sessions: "5 Sessions",
    description: "Designed for individuals seeking a comprehensive approach to their recovery.",
    includes: [
      "Initial Assessment",
      "4 Follow-up Treatments",
      "Personalised Treatment Plan",
      "Priority Scheduling",
      "Customer Support"
    ],
    location: "Ibadan only",
    featured: true
  },
  {
    slug: "intensive",
    name: "9-Session Intensive Care",
    price: "₦210,000",
    sessions: "9 Sessions",
    description: "A premium package for individuals seeking intensive, ongoing care.",
    includes: [
      "Initial Assessment",
      "8 Follow-up Treatments",
      "Comprehensive Treatment Plan",
      "Priority Scheduling",
      "Direct Physio Line",
      "Customer Support"
    ],
    location: "Ibadan only",
    featured: false
  }
];

const faqs = [
  {
    q: "Do you offer payment plans?",
    a: "Yes — for our 5-session and 9-session packages, we offer flexible payment options. Contact us to discuss a plan that works for you."
  },
  {
    q: "Can I pay per session instead of a package?",
    a: "Yes. Per-session pricing is available. Contact us for details and we will recommend the best option for your condition."
  },
  {
    q: "Do you charge for travel?",
    a: "For Ibadan, travel is included. For Lagos, Abeokuta, Osogbo, and Ife, a small travel surcharge may apply — this will be clearly stated in your personalised quote."
  },
  {
    q: "Is the assessment fee separate?",
    a: "No — the initial assessment is included in all package prices. There are no hidden fees."
  },
  {
    q: "Do you accept insurance?",
    a: "We can provide receipts and treatment reports for insurance claims. We do not currently bill insurance companies directly, but we'll help you prepare the paperwork."
  },
  {
    q: "What if I need more than 9 sessions?",
    a: "Many conditions need ongoing care. After your initial package, we can arrange a continuation plan — often at a reduced per-session rate."
  }
];

export default function PricingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero shell">
        <p className="eyebrow">Packages & Pricing</p>
        <h1>Transparent pricing, no hidden fees.</h1>
        <p className="lead">
          Choose the package that fits your recovery journey. Every package
          begins with a full assessment so we can build a personalised plan
          around your goals.
        </p>
      </section>

      {/* HOME VISIT ASSESSMENT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="assessment-card">
            <div className="assessment-info">
              <p className="eyebrow">Start Here</p>
              <h2>Home Visit Assessment</h2>
              <p className="assessment-lead">
                A full initial assessment in your home — the foundation of
                your recovery plan.
              </p>

              <ul className="assessment-includes">
                <li>Full clinical assessment</li>
                <li>Personalised treatment plan</li>
                <li>First treatment session</li>
                <li>Written report & home programme</li>
              </ul>
            </div>

            <div className="assessment-price">
              <p className="assessment-from">From</p>
              <p className="assessment-amount">₦25,000</p>
              <p className="assessment-note">
                Included in all packages below
              </p>
              <Link className="button" href="/contact">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section tint">
        <div className="shell">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 48px" }}>
            <p className="eyebrow">Packages</p>
            <h2>Choose the best package for your needs.</h2>
            <p style={{ color: "var(--muted)" }}>
              Save when you book a package. Each includes the initial
              assessment, treatment sessions, and ongoing support.
            </p>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                className={`pricing-card ${pkg.featured ? "featured" : ""}`}
                key={pkg.slug}
              >
                {pkg.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}

                <p className="eyebrow">{pkg.sessions}</p>
                <h3>{pkg.name}</h3>
                <p className="pricing-amount">{pkg.price}</p>
                <p className="pricing-desc">{pkg.description}</p>

                <ul className="pricing-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>
                      <span className="pricing-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="pricing-location">📍 {pkg.location}</p>

                <Link className="button pricing-button" href="/contact">
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            <strong>Note:</strong> Final pricing depends on your condition,
            location, and frequency of visits. Contact us for a personalised
            quote — especially for Lagos, Abeokuta, Osogbo, and Ife.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="shell">
          <p className="eyebrow">Frequently Asked</p>
          <h2>Pricing questions, answered.</h2>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={i}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section tint">
        <div className="shell callout">
          <div>
            <h2>Not sure which package?</h2>
            <p>Tell us about your condition — we&apos;ll recommend the right fit.</p>
          </div>
          <Link className="button" href="/contact">
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  );
}