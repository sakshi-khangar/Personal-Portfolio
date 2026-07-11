// import React from "react";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Skills from "./components/Skills.jsx";
// import Projects from "./components/Projects.jsx";
// import WhyHireMe from "./components/WhyHireMe.jsx";
// import Education from "./components/Education.jsx";
// import Contact from "./components/Contact.jsx";
// import Footer from "./components/Footer.jsx";

// export default function App() {
//   return (
//     <div className="site">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <WhyHireMe />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import WhyHireMe from "./components/WhyHireMe.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor";

function Home() {
  return (
    <>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyHireMe />
      <Education />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site">
         <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/why-me" element={<WhyHireMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}