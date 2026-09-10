import Link from "next/link";
import { practice, services } from "../components/site-data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Home visits in {practice.serviceArea}</p>
            <h1>Physiotherapy that helps you move with greater confidence.</h1>
            <p className="lead">Personalised rehabilitation for pain, recovery and everyday movement. I work with patients, families, hospitals, clinics and organisations to build practical plans that fit real life.</p>
            <div className="button-row"><Link className="button" href="/contact">Book an assessment</Link><Link className="text-link" href="/referrals">Refer a patient <span aria-hidden="true">→</span></Link></div>
            <p className="hero-note">{practice.credentials} · By appointment</p>
          </div>
          <div className="image-placeholder hero-image" role="img" aria-label="Placeholder for a professional photograph of a physiotherapist guiding a patient through a home exercise">
            <span>Replace with your professional photograph</span>
            <strong>Care that meets people where they are.</strong>
          </div>
        </div>
      </section>

      <section className="section shell intro-grid">
        <div><p className="eyebrow">A patient-centred approach</p><h2>Care built around your goals</h2></div>
        <p className="lead">Pain, surgery, illness or a gradual loss of balance can make ordinary tasks feel difficult. We start by understanding what matters most to you, then create a clear plan for your next step.</p>
      </section>

      <section className="section tint"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Services</p><h2>Support for movement, recovery and work</h2></div><Link className="text-link" href="/services">View all services <span aria-hidden="true">→</span></Link></div><div className="service-grid">{services.map((service) => <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}><p className="card-number">0{services.indexOf(service) + 1}</p><h3>{service.title}</h3><p>{service.summary}</p><span>Learn more <b aria-hidden="true">→</b></span></Link>)}</div></div></section>

      <section className="section shell"><p className="eyebrow">What to expect</p><h2>A straightforward path to your next step</h2><ol className="steps"><li><span>01</span><div><h3>Talk to me</h3><p>Tell me what is happening, where you are located and the support you need.</p></div></li><li><span>02</span><div><h3>Assessment</h3><p>I review your history, movement, daily activities and goals.</p></div></li><li><span>03</span><div><h3>Personalised plan</h3><p>We agree realistic rehabilitation goals and a plan that fits your life.</p></div></li><li><span>04</span><div><h3>Guided progress</h3><p>Sessions and home guidance are reviewed as you progress.</p></div></li></ol></section>

      <section className="section shell partner-section"><div><p className="eyebrow">For patients and partners</p><h2>Rehabilitation that connects the right people.</h2></div><div className="partner-cards"><article><h3>Patients and families</h3><p>Professional physiotherapy in a setting that supports comfort, routine and recovery.</p><Link href="/contact">Make an enquiry →</Link></article><article><h3>Hospitals and clinics</h3><p>Support continuity of rehabilitation after discharge or between appointments.</p><Link href="/referrals">Refer a patient →</Link></article><article><h3>Organisations</h3><p>Practical ergonomic assessments, education and workplace support.</p><Link href="/contact">Discuss a programme →</Link></article></div></section>

      <section className="section video-section"><div className="shell video-grid"><div className="video-placeholder" role="img" aria-label="Placeholder for a welcome video from the physiotherapist"><span>Welcome video</span><button type="button" aria-label="Video placeholder">▶</button></div><div><p className="eyebrow">Meet your physiotherapist</p><h2>Professional care starts with a conversation.</h2><p>Use this space for a short captioned video introducing yourself, the people you help and how to get started. A genuine video builds more trust than generic stock footage.</p><Link className="text-link" href="/about">About my approach <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="section shell callout"><div><p className="eyebrow">Start here</p><h2>Ready to discuss the right support?</h2><p>Book an assessment, refer a patient or contact me to discuss a collaboration.</p></div><div className="button-row"><Link className="button" href="/contact">Book an assessment</Link><Link className="button button-outline" href="/referrals">Refer a patient</Link></div></section>
    </>
  );
}
