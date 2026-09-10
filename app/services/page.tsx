import Link from "next/link";
import { services } from "../../components/site-data";

export default function ServicesPage() {
  return <><section className="page-hero shell"><p className="eyebrow">Services</p><h1>Physiotherapy tailored to your needs.</h1><p className="lead">Explore the areas of support available. Every plan begins with an assessment and is adapted to your goals and circumstances.</p></section><section className="section shell service-list">{services.map((service, index) => <article key={service.slug} className="service-list-item"><span>0{index + 1}</span><div><h2>{service.title}</h2><p>{service.summary}</p></div><Link className="text-link" href={`/services/${service.slug}`}>Explore service <b aria-hidden="true">→</b></Link></article>)}</section></>;
}
