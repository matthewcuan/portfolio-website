import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section id="welcome-section">
      <div className="introduction">
        <motion.aside
          className="introduction"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2>Hey there! My name is <div className="my-name-is">Matthew Cuan</div></h2>
          <p>
            <i className="intro">uc berkeley alum and software developer</i>
          </p>
        </motion.aside >
      </div>
    </section>
  );
}

export default Welcome;
