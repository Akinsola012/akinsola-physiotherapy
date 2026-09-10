import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../../components/site-data";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><section className="page-hero shell"><p className="eyebrow">Services / {service.shortTitle}</p><h1>{service.title}</h1><p className="lead">{service.intro}</p><Link className="button" href="/contact">{service.cta}</Link></section><section className="section shell two-column"><div><p className="eyebrow">Who it may help</p><h2>Support shaped around the person, not a template.</h2><ul className="check-list">{service.helpsWith.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="image-placeholder service-image" role="img" aria-label={service.imageLabel}><span>{service.imageLabel}</span></div></section><section className="section tint"><div className="shell narrow"><p className="eyebrow">What to expect</p><h2>A clear plan, reviewed as you progress.</h2><p className="lead">{service.approach}</p></div></section><section className="section shell callout"><div><p className="eyebrow">Make an enquiry</p><h2>Let&apos;s discuss your needs.</h2><p>Get in touch to check availability, suitability and your next step.</p></div><Link className="button" href="/contact">{service.cta}</Link></section></>;
}
