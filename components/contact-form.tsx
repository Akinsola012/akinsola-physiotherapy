"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ referral = false }: { referral?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const formAction = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!formAction) {
      event.preventDefault();
      setSubmitted(true);
    }
  }

  if (submitted) {
    return <p className="form-message" role="status">This preview form is ready for a secure form provider. Add its endpoint as described in the README before public launch.</p>;
  }

  return (
    <form className="contact-form" action={formAction} method="post" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="name" required /></label>
        <label>Phone number<input name="phone" type="tel" required /></label>
        <label>Email address<input name="email" type="email" required /></label>
        <label>{referral ? "Organisation" : "Service needed"}<input name={referral ? "organisation" : "service"} required /></label>
      </div>
      <label>How can I help?<textarea name="message" rows={5} required /></label>
      <p className="form-note">Please do not include emergency or detailed confidential medical information in this form.</p>
      <button className="button" type="submit">{referral ? "Send referral enquiry" : "Send enquiry"}</button>
    </form>
  );
}
