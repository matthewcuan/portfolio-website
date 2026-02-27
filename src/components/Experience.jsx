import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    title: "Georgia Institute of Technology",
    details: [
      "Master of Science in Computer Science (OMSCS), Artificial Intelligence specialization",
      "Expected Graduation: 2027",
    ],
  },
  {
    title: "University of California, Berkeley",
    details: [
      "Graduated May 2022",
      "Computational Structures in Data Science (CS88)",
      "Data Structures and Programming Methodology (CS61BL)",
      "Introduction to Software Engineering (CS169A)",
      "Introduction to Programming in R (STAT33A)",
    ],
  },
  // {
  //   title: "freeCodeCamp",
  //   details: ["Responsive Web Design Certificate"],
  // },
];

const work = [
  {
    title: "Lead Software Engineer @ 90meter Inc (2025 - Present)",
    details: [
      "Lead, maintain, and develop a Windows desktop application used across 1.5M+ desktops",
      "Manage a team of 3 software engineers and work with clients to deliver smart card solutions",
      "Designed and developed certificate PIN prompt removal feature to improve user productivity",
      "Built a CI/CD pipeline that reduced development-to-test cycle time by about 50%",
      "Technologies: C#, C++, .NET Framework 4.8, WinForms, Jenkins, RPC",
    ],
  },
  {
    title: "Software Engineer @ 90meter Inc (2023 - 2025)",
    details: [
      "Developed a full-stack smart card management web application using .NET",
      "Implemented an audit report generator with 100+ built-in reports via dynamic LINQ queries",
      "Revamped smart card authentication software for non-domain connected computers",
      "Developed automatic non-person entity certificate enrollment software over EST protocol",
      "Technologies: C#, .NET 9, Blazor, Entity Framework, Microsoft SQL Server",
    ],
  },
  // {
  //   title: "Software Developer @ FUNetix (May 2023 - May 2024)",
  //   details: [
  //     "Built interactive features for a full-stack, responsive education literacy web app",
  //     "Technologies: React, JavaScript, HTML, CSS, Git",
  //   ],
  // },
];

function TimelineCard({ item, delay = 0 }) {
  return (
    <motion.article
      className="experience-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <h3>{item.title}</h3>
      <ul>
        {item.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </motion.article>
  );
}

function Experience() {
  return (
    <section id="experience-section">
      <div className="column">
        <h1>Education</h1>
        {education.map((item, index) => (
          <TimelineCard item={item} key={item.title} delay={index * 0.1} />
        ))}
      </div>
      <div className="column">
        <h1>Work Experience</h1>
        {work.map((item, index) => (
          <TimelineCard item={item} key={item.title} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
