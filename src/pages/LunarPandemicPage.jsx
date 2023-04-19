import React from 'react'

import ProjectLanding from '../components/ProjectLanding';
import lunarPandemic from "../assets/images/lunar_pandemic.png";


function LunarPandemic() {
  return (
    <div className="project-page">
      <ProjectLanding
        title="Lunar Pandemic 2061"
        linkTitle="Demo"
        link="https://www.youtube.com/watch?v=2oU4z1A3X08&ab_channel=MatthewCuan"
        pictures={lunarPandemic}
        tech="Java"
        words={
          <ul className="description-list">
            <li>2D tile-based world exploration engine completed with pair programming</li>
            <li>Implemented path-finding algorithms for zombie bots, procedural generation for world creation, and state persistence for game saves</li>
          </ul>
        }
      />
    </div>
  )
}

export default LunarPandemic