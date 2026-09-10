import Link from "next/link";
import { practice } from "./site-data";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/referrals", label: "For Referrers" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label={`${practice.name} home`}>
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>{practice.name}</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="button button-small" href="/contact">Book an assessment</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">{practice.credentials}</p>
          <h2>{practice.name}</h2>
          <p>Personalised physiotherapy for movement, recovery and everyday confidence.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p><a href={practice.phoneHref}>{practice.phone}</a><br /><a href={practice.emailHref}>{practice.email}</a></p>
          <p>{practice.serviceArea}</p>
        </div>
        <div>
          <h3>Important</h3>
          <p>This website does not provide emergency medical care. For urgent symptoms or a medical emergency, seek immediate medical help.</p>
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} {practice.name}. Replace this with your Privacy Notice and terms links before launch.</div>
    </footer>
  );
}
