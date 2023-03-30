import React from 'react'

function ProjectLanding({ title, link, pictures, tech, words }) {
  return (
    <div id='project-landing'>
        <div className="project-header">
          <h1 className="project-name">
            {title}
          </h1>
          <a className="project-link" 
            href={link}
            target="_blank" rel="noreferrer"
          >
            Link to Website
          </a>
        </div>
        <div className="project-info">
          <div className="project-visuals">
            {pictures}
          </div>
          <div className="project-description">
            <div className="tech-description">{tech}</div>
            <div className="word-description">{words}</div>
          </div>
        </div>
        <div className="project-process">
          &#8595; Scroll down to learn more &#8595;
        </div>
    </div>
  )
}

export default ProjectLanding