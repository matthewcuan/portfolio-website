// Portfolio content.

const PORTFOLIO = {
  name: "Matthew Cuan",
  role: "Lead Software Engineer",
  location: "United States",
  status: "OMSCS student • Secret clearance",
  tagline: "Lead software engineer building reliable systems and tools.",
  bio: [
    "I build reliable software across desktop systems, backend services, and internal tooling.",
    "I'm in Georgia Tech's OMSCS program, hold Security+, and work with AI-assisted development tools."
  ],
  email: "matthewcuan@gmail.com",
  links: {
    github: "https://github.com/matthewcuan/",
    linkedin: "https://www.linkedin.com/in/matthew-cuan/",
    resume: "matthew-cuan-resume.pdf"
  },

  experience: [
    {
      company: "90meter Inc",
      role: "Lead Software Engineer",
      period: "2025 — Present",
      summary: "Lead development of Windows middleware and desktop software deployed to 1.5M+ endpoints.",
      bullets: [
        "Led development of a PQC-compliant security applet for forward-compatible authentication.",
        "Lead a team of 3 engineers delivering desktop and security software for clients.",
        "Built a certificate workflow improvement that reduced login friction.",
        "Built a CI/CD pipeline that cut the dev-to-test cycle by about 50%."
      ],
      stack: ["C#", "C++", ".NET Framework 4.8", "WinForms", "Jenkins", "RPC", "Codex", "Claude Code", "GitHub Copilot"]
    },
    {
      company: "90meter Inc",
      role: "Software Engineer",
      period: "2023 — 2025",
      summary: "Built enterprise PKI and authentication software across web, backend, and infrastructure layers.",
      bullets: [
        "Built a secure PKI operations platform spanning 100+ Python API endpoints.",
        "Integrated SQL, LDAP/Active Directory, X.509 parsing, RBAC, and audit logging.",
        "Delivered an operator-facing dashboard with JavaScript and 20+ automated Python tests.",
        "Revamped authentication software for non-domain-connected computers.",
        "Built automatic non-person entity certificate enrollment over EST."
      ],
      stack: ["Python", "JavaScript", "SQL", "LDAP/Active Directory", "nginx", "Linux"]
    }
  ],

  education: [
    {
      school: "Georgia Institute of Technology",
      program: "M.S. Computer Science (OMSCS), AI specialization",
      period: "Expected 2027",
      details: ["Currently enrolled"]
    },
    {
      school: "University of California, Berkeley",
      program: "Coursework in data structures, software engineering, and programming in R",
      period: "Graduated May 2022",
      details: [
        "Computational Structures in Data Science (CS88)",
        "Data Structures and Programming Methodology (CS61BL)",
        "Introduction to Software Engineering (CS169A)",
        "Introduction to Programming in R (STAT33A)"
      ]
    }
  ],

  projects: [
    {
      id: "chess",
      name: "Chess with Friends",
      year: "2023",
      kind: "Side project",
      tag: "Full stack",
      blurb: "Online two-player chess web app built with the MERN stack.",
      detail: "Built an online chess app with account and game storage through a RESTful API, bidirectional sockets for live multiplayer gameplay, and chat functionality for active games.",
      stack: ["JavaScript", "MongoDB", "React", "Node", "WebSocket", "HTML", "CSS"],
      role: "Developer",
      status: "Live",
      link: "https://melodious-speculoos-b36439.netlify.app/"
    },
    {
      id: "web-design",
      name: "Web Design Projects",
      year: "2023",
      kind: "Side project",
      tag: "Responsive design",
      blurb: "Responsive web design projects completed through freeCodeCamp.",
      detail: "A collection of projects created while completing freeCodeCamp's Responsive Web Design Certificate.",
      stack: ["HTML", "CSS"],
      role: "Developer",
      status: "Certificate projects",
      link: "https://www.freecodecamp.org/certification/matthew-cuan/responsive-web-design"
    },
    {
      id: "lunar-pandemic",
      name: "Lunar Pandemic 2061",
      year: "2022",
      kind: "Side project",
      tag: "Game engine",
      blurb: "2D tile-based world exploration engine completed with pair programming.",
      detail: "Implemented path-finding algorithms for zombie bots, procedural generation for world creation, and state persistence for saved games.",
      stack: ["Java"],
      role: "Developer",
      status: "Demo",
      link: "https://www.youtube.com/watch?v=2oU4z1A3X08&ab_channel=MatthewCuan"
    },
    {
      id: "chrome-extension",
      name: "ChatGPT Wiki Extension",
      year: "2023",
      kind: "Side project",
      tag: "Browser extension",
      blurb: "Chrome extension that summarizes Wikipedia article introductions into two short bullet points using ChatGPT.",
      detail: "Built a browser extension that sends Wikipedia article introductions to the OpenAI API and returns concise summaries directly in the page workflow.",
      stack: ["JavaScript", "OpenAI API", "HTML", "CSS"],
      role: "Developer",
      status: "Open source",
      link: "https://github.com/matthewcuan/gpt-wiki-extension"
    }
  ],

  writing: [],

  stack: {
    "Languages": ["C#", "C++", "JavaScript", "Python", "SQL"],
    "Frameworks": [".NET", "WinForms", "React", "nginx"],
    "Tools": ["Jenkins", "AWS", "Codex", "Claude Code", "GitHub Copilot"],
    "Credentials": ["CompTIA Security+", "US Secret Security Clearance"]
  }
};

window.PORTFOLIO = PORTFOLIO;
