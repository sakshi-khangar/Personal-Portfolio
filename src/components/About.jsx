import React from "react";
import { Code2 } from "lucide-react";
import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <div className="about-card">
          <div className="about-card-icon"><Code2 size={22} /></div>
          <h3 style={{ fontSize: 19, marginBottom: 8 }}>What I Do</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            I design and build full-stack web applications — from React interfaces
            down to Spring Boot APIs and MySQL schemas — turning ideas into working software.
          </p>
        </div>
        <div>
          <div className="eyebrow">About Me</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>A builder who learns by shipping</h2>
          <p className="about-text">{profile.summary}</p>
          <div className="info-grid">
            <div className="info-item"><div className="k">Name</div><div className="v">{profile.name}</div></div>
            <div className="info-item"><div className="k">Status</div><div className="v">Fresh Graduate</div></div>
            <div className="info-item"><div className="k">Location</div><div className="v">{profile.location}</div></div>
            <div className="info-item"><div className="k">Email</div><div className="v" style={{ fontSize: 13 }}>{profile.email}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
