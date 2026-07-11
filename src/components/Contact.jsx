import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "../data.js";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || "there";
    const email = form.email.value || "";
    const message = form.message.value || "";
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>Let's Work Together</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14.5, marginBottom: 10 }}>
            Have an opening for a full-stack developer? I'd love to hear from you.
          </p>
          <div>
            <div className="contact-info-item">
              <div className="ic"><Mail size={17} /></div>
              <div><div className="k">Email</div><div className="v">{profile.email}</div></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><Phone size={17} /></div>
              <div><div className="k">Phone</div><div className="v">{profile.phone}</div></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><MapPin size={17} /></div>
              <div><div className="k">Location</div><div className="v">{profile.location}</div></div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input name="name" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" placeholder="Tell me about the role or opportunity..." required />
          <button className="btn btn-primary" type="submit">
            Send Message <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
