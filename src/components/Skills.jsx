import React from "react";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">My Tech Stack</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-card" key={g.label}>
              <h4>{g.label}</h4>
              <div className="skill-tags">
                {g.items.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
