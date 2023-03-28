import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact-section">
      <motion.aside
        className="contacts-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <header className="section-header">
          <h1>Let's connect!</h1>
        </header>
        <div className="social">
          <a id="twitter" className="contact underline" target="_blank" rel="noreferrer" href="https://twitter.com/cuan_codes/">
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
          <a id="github" className="contact underline" target="_blank" rel="noreferrer" href="https://github.com/matthewcuan/">
            <i className="fab fa-github"></i>
            Github
          </a>
          <a id="linkedin" className="contact underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-cuan/">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <div className="contact underline">
          <a className="underline" target="_blank" href="mailto:cuanmatthewl@gmail.com">
            <FontAwesomeIcon className="fab" icon={faEnvelope} />
            cuanmatthewl@gmail
          </a>
        </div>       
      </motion.aside>
    </section>
  );
}

export default Contact;