import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section id="welcome-section">
      <div className="introduction">
        <motion.aside
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
        >
        <h1>My name is Matthew Cuan</h1>
        <p>
          <i>uc berkeley alum and software developer</i>
        </p>
        </motion.aside >
      </div>
    </section>
  );
}

export default Welcome;
