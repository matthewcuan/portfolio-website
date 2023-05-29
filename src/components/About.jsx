import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Headshot from '../assets/images/headshot.png';

function About() {

  return (
    <section id="about-section">
      <motion.aside 
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="bio">
        <h2>
          Welcome to my portfolio page!
        </h2>
        <br></br>
        <p>
        As a highly motivated software engineer, I have 
        a passion for identifying complex issues and 
        building systems that solve them. After initially 
        pursuing a career in medicine and public health, 
        I was drawn to the creative and collaborative nature 
        of computer science, and made the decision to 
        transition my career.
        </p>
        <br></br>
        <p>
          <b>Languages: </b>JavaScript, HTML, CSS, Java, 
          Python, Node, Ruby on Rails, R
        </p>
        <br></br>
        <p>
          <b>Hobbies:</b> tennis, chess, hiking, gymmming
        </p>        
        <br></br>
        <p>
          <b>Guilt Pleasure:</b> removing the lint from the dryer
        </p>        
      </motion.aside>
      <motion.aside 
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="photo">
          <img src={Headshot}></img>
      </motion.aside>
    </section>
  )
}

export default About