import React from 'react'

import ProjectLanding from '../components/ProjectLanding'
import fccProjects from "../assets/images/web_design.png";

function WebDesign() {
  return (
    <div className="project-page">
      <ProjectLanding
        title="Web Design Projects"
        linkTitle="Projects"
        link="https://www.freecodecamp.org/certification/matthew-cuan/responsive-web-design"
        pictures={fccProjects}
        tech="HTML, Cascading Style Sheets (CSS)"
        words="Words"
      />
    </div>
  )
}

export default WebDesign