import React from "react";
import { Briefcase, Rocket, BookOpen, Code2, Users } from "lucide-react";
import { strengths } from "../data.js";

const icons = { Rocket, BookOpen, Code2, Users };

export default function WhyHireMe() {
  return (
    <section id="why-me" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow"><Briefcase size={13} style={{ marginRight: 2 }} /> Why Hire Me</div>
          <h2 className="section-title">No corporate experience yet — here's what I bring instead</h2>
        </div>
        <div className="why-grid">
          {strengths.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div className="why-card" key={s.title}>
                <div className="why-icon"><Icon size={20} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
