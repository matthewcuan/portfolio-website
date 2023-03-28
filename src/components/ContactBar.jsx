import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactBar() {
  return (
    <div>
      <motion.aside 
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2}}
        className="contact-bar">
        <a id="twitter" className="contact underline" target="_blank" rel="noreferrer" href="https://twitter.com/cuan_codes/">
          <i className="fab fa-twitter"></i>
        </a>
        <a id="github" className="contact underline" target="_blank" rel="noreferrer" href="https://github.com/matthewcuan/">
          <i className="fab fa-github"></i>
        </a>
        <a id="linkedin" className="contact underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-cuan/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="contact underline" target="_blank" href="mailto:cuanmatthewl@gmail.com">
          <FontAwesomeIcon className="fab" icon={faEnvelope} />
        </a>
      </motion.aside>
      
    </div>
  )
}

export default ContactBar