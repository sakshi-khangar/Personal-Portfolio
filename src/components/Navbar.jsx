// import React, { useState } from "react";
// import { Mail, Menu, X } from "lucide-react";
// import { navLinks, profile } from "../data.js";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollTo = (id) => {
//     setMenuOpen(false);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
  

//   return (
//     <header className="navbar">
//       <div className="nav-inner">
//         <div className="brand">
//           <div className="brand-mark">SK</div>
//           {profile.name}
//         </div>
//         <nav className="nav-links">
//           {navLinks.map((l) => (
//             <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(" ", "-"))}>{l}</button>
//           ))}
//         </nav>
//         <div className="nav-cta">
//           <a className="btn btn-ghost btn-sm" href={`mailto:${profile.email}`}>
//             <Mail size={15} /> Contact Me
//           </a>
//           <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)}>
//             {menuOpen ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>
//       </div>
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         {navLinks.map((l) => (
//           <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(" ", "-"))}>{l}</button>
//         ))}
//       </div>
//     </header>
//   );
// }


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data.js";

const toPath = (label) => {
  const slug = label.toLowerCase().replace(/\s+/g, "-");
  return slug === "home" ? "/" : `/${slug}`;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <div className="brand-mark">SK</div>
          {profile.name}
        </Link>
        <nav className="nav-links">
          {navLinks.map((l) => {
            const path = toPath(l);
            return (
              <Link
                key={l}
                to={path}
                className={location.pathname === path ? "active" : ""}
              >
                {l}
              </Link>
            );
          })}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href={`mailto:${profile.email}`}>
            <Mail size={15} /> Contact Me
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => {
          const path = toPath(l);
          return (
            <Link key={l} to={path} onClick={() => setMenuOpen(false)}>
              {l}
            </Link>
          );
        })}
      </div>
    </header>
  );
}