import { motion } from 'framer-motion'
import React from 'react'

function Experience() {
  return (
    <section id="experience-section">
      <motion.aside 
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="column">
        <h1>Education</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur 
          </li>
          <li>Bullet 2</li>
          <li>Bullet 3</li>
          <li>Bullet 4</li>
          <li>Bullet 5</li>
        </ul>
      </motion.aside>
      <motion.aside 
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5}}
        className="column">
        <h1>Experience</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur 
          </li>
          <li>Bullet 2</li>
          <li>Bullet 3</li>
          <li>Bullet 4</li>
          <li>Bullet 5</li>
        </ul>
      </motion.aside>
    </section>
  )
}

export default Experience