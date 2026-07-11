export const profile = {
  name: "Sakshi Khangar",
  firstName: "Sakshi",
  lastName: "Khangar",
  role: "Java Full Stack Developer",
  email: "khangars095@gmail.com",
  phone: "+91 72764 02003",
  location: "Nagpur, India",
  github: "https://github.com/sakshi-khangar",
  linkedin: "https://www.linkedin.com/in/sakshikhangar",
  resumeUrl: "/resume.pdf",
  summary:
    "I'm an enthusiastic, detail-oriented Computer Technology graduate who learns best by building. Instead of stopping at tutorials, I take every concept — REST APIs, relational databases, React state management — and turn it into a working project I can show. I'm now looking for an entry-level role where I can keep doing exactly that, alongside a team that will push me further.",
};

export const navLinks = ["About", "Skills", "Projects", "Why Me", "Education", "Contact"];

export const heroBadges = [
  { label: "React", color: "#61dafb", position: "b1" },
  { label: "Java", color: "#f89820", position: "b2" },
  { label: "Spring", color: "#6db33f", position: "b3" },
  { label: "MySQL", color: "#00758f", position: "b4" },
];

export const stats = [
  { num: "3", label: "Projects Shipped" },
  { num: "10+", label: "Technologies" },
  { num: "3", label: "Certifications" },
  { num: "Open", label: "To Opportunities" },
];

export const skillGroups = [
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
  { label: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { label: "Database", items: ["MySQL", "SQL"] },
  { label: "Tools & IDEs", items: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Jira"] },
  { label: "Deployment", items: ["Vercel"] },
];

export const projects = [
  {
    title: "Cinebok — Movie Ticket Booking System",
    tag: "Full Stack",
    desc: "A full-stack movie ticket booking platform with an interactive seat-selection UI, RESTful APIs for listings and bookings, and a MySQL data layer tested end-to-end with Postman.",
    tech: ["React.js", "Spring Boot", "Java", "MySQL"],
    links: [
      { label: "Frontend", url: "https://github.com/sakshi-khangar/Cinebok-Frontend" },
      { label: "Backend", url: "https://github.com/sakshi-khangar/Cinebok-Backend" },
    ],
  },
  {
    title: "React Weather App",
    tag: "React",
    desc: "A responsive weather app built with React Hooks, pulling live conditions from a third-party weather API with graceful error handling for invalid searches.",
    tech: ["React.js", "JavaScript", "Weather API"],
    links: [{ label: "GitHub", url: "https://github.com/sakshi-khangar/React-Weather-Application" }],
  },
  {
    title: "Image Search App",
    tag: "JavaScript",
    desc: "A responsive image search tool using vanilla JS and DOM manipulation, with paginated 'Show More' loading against a public image API.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    links: [{ label: "GitHub", url: "https://github.com/sakshi-khangar/Image-Search-App" }],
  },
  // {
  //   title: "Funny-Jokes-Generator",
  //   tag: "Javascript",
  //   desc: "The main goal of this project is to understand how JavaScript works with HTML elements using DOM manipulation. A predefined list of jokes is stored in an array, and one joke is selected randomly using Math.random() whenever the button is clicked.",
  //   tach: ["HTML", "CSS", "Javascript","Rest API"],
  //   links: [{label: "GitHub", url: "https://github.com/sakshi-khangar/Funny-Jokes-Generator"}],
  // }
];

export const strengths = [
  {
    icon: "Rocket",
    title: "Fast Learner",
    desc: "I pick up new frameworks and ship with them in days, not months — this whole stack was self-taught alongside my degree.",
  },
  {
    icon: "BookOpen",
    title: "Strong Fundamentals",
    desc: "A Computer Technology degree backed by IBM and I.T. Vedant certifications in SQL, Java and web development.",
  },
  {
    icon: "Code2",
    title: "Builder, Not Just Learner",
    desc: "Three shipped projects — a booking system, a weather app and a search tool — each with a live GitHub repo, not just tutorials.",
  },
  {
    icon: "Users",
    title: "Team-Ready",
    desc: "Comfortable with Git workflows, Jira boards and Postman-driven API collaboration from day one on any team.",
  },
];

export const education = [
  { school: "Priyadarshini College of Engineering, Nagpur", degree: "B.Tech — Computer Technology", score: "72.20%" },
  { school: "Bhartiya Krishi Vidyalaya & Jr. College, Nagpur", degree: "Class XII", score: "88.67%" },
  { school: "Ashirwad English High School, Nagpur", degree: "Class X", score: "72.60%" },
];

export const certifications = [
  { title: "SQL and Relational Databases 101", issuer: "IBM" },
  { title: "Java Essentials Certification", issuer: "I.T. Vedant" },
  { title: "Full Stack Web Development with Java", issuer: "I. T. Vedant" },
];
