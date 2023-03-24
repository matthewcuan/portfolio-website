import { motion } from 'framer-motion'
import React, { useState } from 'react'

function About() {

  const [animationPlayed, setAnimationPlayed] = useState(false);


  return (
    <section id="about-section">
      <motion.aside 
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="bio">
        <h2>
          Welcome to my portfolio page!
        </h2>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Varius quam quisque id diam vel quam 
          elementum pulvinar. Tristique sollicitudin nibh sit amet 
          commodo nulla facilisi. Nisl suscipit adipiscing bibendum 
          est ultricies integer quis auctor. Eu facilisis sed odio 
          morbi quis commodo. Nisi scelerisque eu ultrices vitae 
          auctor. Facilisis magna etiam tempor orci.
        </p>
      </motion.aside>
      <motion.aside 
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="photo">
          <img src="https://cdn1.iconfinder.com/data/icons/conceptual-figures-3/48/bl_1627_stick_man_brush_bucket_painter_artist_social_media-512.png"></img>
      </motion.aside>
    </section>
  )
}

export default About