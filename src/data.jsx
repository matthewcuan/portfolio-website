// Portfolio content.

const PORTFOLIO = {
  name: "Matthew Cuan",
  role: "Lead Software Engineer",
  location: "United States",
  status: "UC Berkeley alum • OMSCS student • Secret clearance",
  tagline: "Lead software engineer building reliable systems and tools.",
  bio: [
    "I build reliable software across backend services, security systems, and internal tooling.",
    "UC Berkeley graduate, currently in Georgia Tech's OMSCS program. I hold a US Secret security clearance and CompTIA Security+."
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
      summary: "Own Windows smart card middleware across minidriver, service, and token management for 1.5M+ endpoints.",
      bullets: [
        "Ship weekly release candidates and customer-targeted production builds, owning release validation, QA handoff, and escalations.",
        "Reduced support ticket volume by ~40% through deployment automation, standardized QA/support documentation, and release process improvements.",
        "Built a Jenkins CI/CD pipeline automating build, testing, deployment, versioning, and QA handoff — cutting development-to-test turnaround by 70%.",
        "Prototyped a PQC applet to evaluate next-generation cryptographic standards for smart card systems.",
        "Technically led 3 engineers across middleware development, PR review, mentoring, release decisions, QA triage, and customer-facing escalations."
      ],
      stack: ["C#", "C++", "Java", ".NET Framework 4.8", "WinForms", "Jenkins", "RPC", "Codex", "Claude Code", "GitHub Copilot"]
    },
    {
      company: "90meter Inc",
      role: "Software Engineer",
      period: "2023 — 2025",
      summary: "Built enterprise PKI and authentication software across web, backend, and infrastructure layers.",
      bullets: [
        "Built and maintained 100+ Python REST API endpoints for enterprise PKI workflows across certificate issuance, token lifecycle, audit, inventory, and reporting.",
        "Integrated SQL databases, LDAP/Active Directory, X.509 certificate parsing, RBAC, and audit logging for secure certificate and token lifecycle workflows.",
        "Delivered an operator-facing web dashboard with searchable PKI inventory, audit/reporting views, PDF export tooling, and automated Python regression tests.",
        "Enhanced non-domain Windows smart card authentication by adding workflows to view and remove certificate-to-user associations."
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
      program: "B.A. Integrative Biology",
      period: "Graduated May 2022",
      details: [
        "Data Structures and Programming Methodology (CS61BL)",
        "Introduction to Software Engineering (CS169A)",
        "Computational Structures in Data Science (CS88)"
      ]
    }
  ],

  projects: [
    {
      id: "ml-trading",
      name: "ML Trading Strategy Platform",
      year: "2026",
      kind: "OMSCS coursework",
      tag: "Machine learning",
      blurb: "Python trading analytics platform using pandas, NumPy, and ML models to simulate and evaluate portfolio strategies.",
      detail: "Built modular pipelines for data ingestion, strategy evaluation, and portfolio backtesting against historical market data. Deployed compute on AWS for on-demand backtesting and evaluated strategies with Sharpe ratio, volatility, and risk-adjusted return metrics.",
      stack: ["Python", "pandas", "NumPy", "AWS", "Q-Learner", "Decision Trees", "KNN"],
      role: "Developer",
      status: "Coursework"
    }
  ],

  writing: [],

  stack: {
    "Languages": ["Python", "C#", "JavaScript", "TypeScript", "SQL"],
    "Frameworks": [".NET", "WinForms", "React", "nginx"],
    "Tools": ["Jenkins", "AWS", "Git", "Linux"],
    "Credentials": ["CompTIA Security+", "US Secret Security Clearance"]
  }
};

export default PORTFOLIO;
