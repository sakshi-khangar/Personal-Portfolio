import React from "react";
import { Github } from "lucide-react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a className="project-link" href={l.url} target="_blank" rel="noreferrer" key={l.label}>
                    <Github size={14} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
