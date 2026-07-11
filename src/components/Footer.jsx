import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <div>© 2026 {profile.name}. Built with React.</div>
      <div className="footer-socials">
        <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
        <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
      </div>
      <div className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowUp size={16} />
      </div>
    </footer>
  );
}
