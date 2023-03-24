import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section id="welcome-section">
      <div className="introduction">
        <motion.aside
          className="introduction"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h2>Hey there! My name is <h1  class="my-name-is">Matthew Cuan</h1></h2>
          <p>
            <i class="intro">uc berkeley alum and software developer</i>
          </p>
        </motion.aside >
      </div>
    </section>
  );
}

export default Welcome;
