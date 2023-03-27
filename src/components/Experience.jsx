import { motion } from 'framer-motion'
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
        </ul>
      </div>
      <div className="column">
        <h1>Work Experience</h1>
        <ul>
          <li>
            Roy Cloud School
          </li>
          <li>
            • Spearheaded and taught innovative middle school SEL 
            elective centered around kindness and leadership
          </li>
          <li>
            •	Developed lessons twice a week teaching communication, 
            collaboration, and self-management 
          </li>
          <li>
            •	Managed student-led kindness campaign involving local 
            high schools, elementary schools, parents, teachers, school 
            staff, international organizations, and professional 
            speakers and authors  
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience