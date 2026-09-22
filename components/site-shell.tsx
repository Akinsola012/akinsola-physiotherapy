"use client";

import Link from "next/link";
import { useState } from "react";
import { practice } from "./site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/how-we-treat", label: "How We Treat" },
  { href: "/services", label: "What We Treat" },
  { href: "/pricing", label: "Packages" },
  { href: "/faq", label: "FAQS" },
  { href: "/contact", label: "Contact Us" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="shell top-bar-inner">
          <Link className="brand" href="/" aria-label={`${practice.name} home`}>
            <span className="brand-mark" aria-hidden="true">+</span>
            <span className="brand-text">
              <strong>BRAVE REHAB</strong>
            </span>
          </Link>

          <div className="top-contact">
            <span className="top-contact-item">
              <span aria-hidden="true">📍</span>
              <span>Ibadan</span>
            </span>
            <a href={practice.phoneHref} className="top-contact-item">
              <span aria-hidden="true">☎</span>
              <span>{practice.phone}</span>
            </a>
          </div>

          <Link className="button button-small top-cta" href="/contact">
            Book a Home Visit
          </Link>
        </div>
      </div>

      {/* NAV BAR */}
      <div className="nav-bar">
        <div className="shell nav-bar-inner">
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`nav ${mobileOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
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
          <p>
            We bring licensed physiotherapy into your home — personalised care
            for movement, recovery and everyday confidence.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>
            <Link href="/about">About Us</Link>
            <br />
            <Link href="/how-we-treat">How We Treat</Link>
            <br />
            <Link href="/services">What We Treat</Link>
            <br />
            <Link href="/pricing">Packages</Link>
            <br />
            <Link href="/faq">FAQs</Link>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <a href={practice.phoneHref}>{practice.phone}</a>
            <br />
            <a href={practice.whatsappHref}>WhatsApp: {practice.phone}</a>
            <br />
            <a href={practice.emailHref}>{practice.email}</a>
          </p>
          <p>{practice.serviceArea}</p>
          <p>{practice.hours}</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        © {new Date().getFullYear()} {practice.name}. All rights reserved.
      </div>
    </footer>
  );
}