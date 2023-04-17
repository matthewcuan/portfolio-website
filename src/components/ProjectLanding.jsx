import React from 'react';

import { motion } from 'framer-motion';

function ProjectLanding({ title, linkTitle, link, pictures, tech, words }) {
  return (
    <div id='project-landing'>
        <motion.aside 
          className="project-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="project-name">
            {title}
          </h1>
          <a 
            className="project-link underline" 
            href={link}
            target="_blank" 
            rel="noreferrer"
          >
            Link to {linkTitle}
          </a>
        </motion.aside>
        <div className="project-info">
          <div className="project-visuals">
            <img className="picture" src={pictures} />
          </div>
          <div className="project-description">
            <div className="word-description">
              <h2>Description: </h2>
              {words}
            </div>
            <div className="tech-description">
              <h2>Technologies: </h2>
              {tech}
            </div>
          </div>
        </div>
        {/* <div className="project-process">
          &#8595; Scroll down to learn more &#8595;
        </div> */}
    </div>
  )
}

export default ProjectLanding