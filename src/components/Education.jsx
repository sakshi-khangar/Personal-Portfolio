import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap edu-cert-grid">
        <div>
          <div className="eyebrow"><GraduationCap size={13} /> Education</div>
          <h2 className="section-title" style={{ marginBottom: 30 }}>Academic Background</h2>
          <div className="timeline">
            {education.map((e) => (
              <div className="timeline-item" key={e.school}>
                <span className="timeline-dot" />
                <h4>{e.degree}</h4>
                <div className="meta">{e.school}</div>
                <span className="score">{e.score}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow"><Award size={13} /> Certifications</div>
          <h2 className="section-title" style={{ marginBottom: 30 }}>Verified Learning</h2>
          <div className="cert-list">
            {certifications.map((c) => (
              <div className="cert-item" key={c.title}>
                <div className="cert-icon"><Award size={18} /></div>
                <div>
                  <h5>{c.title}</h5>
                  <p>{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
