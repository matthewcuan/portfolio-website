import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section id="welcome-section">
      <motion.aside
        className="introduction"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          Hey there! My name is <span className="my-name-is">Matthew Cuan</span>
        </h2>
        <p>
          <i className="intro">UC Berkeley alum, software developer, and Georgia Tech OMSCS student</i>
        </p>
        <div className="intro-actions">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="/#projects-section" className="cta-button primary">
            View Projects
          </motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="/#contact-section" className="cta-button">
            Contact Me
          </motion.a>
        </div>
      </motion.aside>
    </section>
  );
}

export default Welcome;
