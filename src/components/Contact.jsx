import { motion } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <section id="contact-section">
      <motion.aside
        initial={{ scale: 5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1}}
        transition={{ duration: 0.5 }}
        className="contacts-wrapper">
      <header className="section-header">
          <h1>Let's connect!</h1>
        </header>
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
      </motion.aside>
    </section>
  );
}

export default Contact;