const articles = [
  ["What to expect from your first home physiotherapy session", "A clear guide to preparing for an assessment and getting the most from it."],
  ["Preparing your home for safe rehabilitation after discharge", "Simple, practical considerations for a safer recovery environment."],
  ["Supporting an older relative with confidence and safety at home", "Ways families can encourage independence while respecting dignity."],
  ["Simple ways to make your desk set-up more comfortable", "Ergonomic changes and movement habits for desk-based work."],
  ["When should you seek physiotherapy for back or joint pain?", "Useful signals to discuss with a healthcare professional."],
  ["How families can support a home exercise plan", "Helpful encouragement without taking over the patient’s goals."]
];

export default function ResourcesPage() {
  return <><section className="page-hero shell"><p className="eyebrow">Patient resources</p><h1>Clear guidance for everyday movement and recovery.</h1><p className="lead">Short articles and videos can help patients and families feel more prepared. This starter collection is ready for your expert content.</p></section><section className="section shell resource-grid">{articles.map(([title, summary], index) => <article className="resource-card" key={title}><p className="card-number">Article 0{index + 1}</p><h2>{title}</h2><p>{summary}</p><span className="muted">Add your article, video or downloadable guide here.</span></article>)}</section></>;
}
