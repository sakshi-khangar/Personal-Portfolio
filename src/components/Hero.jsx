import React from "react";
import { Sparkles, ExternalLink, Download, Github, Linkedin, Mail, PlayCircle } from "lucide-react";
import { profile, heroBadges, stats } from "../data.js";
import profileImage from "../assets/profile.jpg";

// export default function Hero() {
//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section className="hero">
//       <div className="hero-glow" />
//       <div className="hero-inner">
//         <div>
//           <div className="eyebrow"><Sparkles size={13} /> Hello, I'm</div>
//           <h1 className="hero-title">{profile.firstName} <span>{profile.lastName}</span></h1>
//           <div className="hero-role">{profile.role} <span className="code-icon">&lt;/&gt;</span></div>
//           <p className="hero-desc">
//             I build clean, scalable web applications with React.js on the front end
//             and Java Spring Boot underneath. Fresh out of my degree, sharp on fundamentals,
//             and ready to bring real projects to a real team.
//           </p>
//           <div className="hero-actions">
//             <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
//               View My Work <ExternalLink size={15} />
//             </button>
//             {/* TODO: point href at your actual resume PDF once you have one */}
//             <a className="btn btn-ghost" href="#" onClick={(e) => e.preventDefault()}>
//               <Download size={15} /> Download Resume
//             </a>
//           </div>
//           <div className="hero-socials">
//             <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
//             <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
//             <a className="social-btn" href={`mailto:${profile.email}`}><Mail size={17} /></a>
//           </div>
//         </div>

//         {/* <div className="hero-visual"> */}
// <div className="hero-visual">
//     <img
//         src={profileImage}
//         alt="Sakshi"
//         className="hero-photo"
//     />
// </div>
//           {/* {heroBadges.map((b) => (
//             <div className={`float-badge ${b.position}`} key={b.label}>
//               <span className="dot" style={{ background: b.color }} /> {b.label}
//             </div>
//           ))} */}
//           {/* TODO: swap this badge for a real embedded AI intro video later */}
//           <div className="ai-video-badge">
//             <PlayCircle size={16} color="#8b5cf6" />
//             AI Intro Video <span className="pill">SOON</span>
//           </div>
//         {/* </div> */}
//       </div>

//       <div className="stats-bar">
//         {stats.map((s) => (
//           <div className="stat" key={s.label}>
//             <div className="num">{s.num}</div>
//             <div className="lbl">{s.label}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      <img src={profileImage} alt="Sakshi" className="hero-photo" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={13} /> Hello, I'm</div>
          <h1 className="hero-title">{profile.firstName} <span>{profile.lastName}</span></h1>
          <div className="hero-role">{profile.role} <span className="code-icon">&lt;/&gt;</span></div>
          <p className="hero-desc">
            I build clean, scalable web applications with React.js on the front end
            and Java Spring Boot underneath. Fresh out of my degree, sharp on fundamentals,
            and ready to bring real projects to a real team.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View My Work <ExternalLink size={15} />
            </button>
           <a className="btn btn-ghost" href={profile.resumeUrl} download target="_blank" rel="noreferrer">
              <Download size={15} /> Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
            <a className="social-btn" href={`mailto:${profile.email}`}><Mail size={17} /></a>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}