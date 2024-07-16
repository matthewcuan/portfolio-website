import React from 'react'

function Experience() {
  return (
    <section id="experience-section">
      <div className='column'>
        <h1>Education</h1>
        <ul>
          <li><b>
            University of California, Berkeley Graduated May 2022
          </b></li>
          <li>
            Relevant Classes:
          </li>
          <li><i>
            Computational Structures in Data Science (CS88)
          </i></li>
          <li><i>
            Data Structures and Programming Methodology (CS61BL)
          </i></li>
          <li><i>
            Introduction to Software Engineering (CS169A)
          </i></li>
          <li><i>
            Introduction to Programming in R (STAT33A)
          </i></li>
        </ul>
        <br></br>
        <ul>
          <li><b>
            FreeCodeCamp
          </b></li>
          <li>
            Courses: Responsive Web Design Certificate
          </li>
        </ul>
      </div>
      <div className="column">
        <h1>Work Experience</h1>
        <ul>
          <li>
            <b>Software Engineer @ 90meter Inc</b>
          </li>
          <li>
            • Revamp proprietary software for smart card authentication on non-domain connected computers
          </li>
          <li>
            • Develop non-person entity automatic certificate enrollment software over EST protocol
          </li>
          <li>
            • Engineer a full stack web application for token and certificate issuing, tracking, and auditing
          </li>
          <li>
            • Contribute to PKCS#11 API, automate QA testing, and integrate CI/CD throughout the dev department 
          </li>
        </ul>
        <br></br>
        <ul>
          <li>
            <b>Full Stack Engineer @ FUNetix</b>
          </li>
          <li>
            • Build features for full stack educational literacy web game
          </li>
          <li>
            • Promote literacy worldwide through fun, interactive words games
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience