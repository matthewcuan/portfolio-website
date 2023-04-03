import React from 'react';

import ProjectLanding from '../components/ProjectLanding';
import ProjectProcess from '../components/ProjectProcess';
import Navbar from "../components/Navbar"
import ProjectNav from '../components/ProjectNav';

function ChessPage() {
  return (
    <div className="project-page">
      <Navbar />
      <ProjectLanding
        title="Chess with Friends"
        link="https://melodious-speculoos-b36439.netlify.app/"
        pictures="Pictures"
        tech="Tech"
        words="Words"
      />
      <ProjectProcess />
    </div>
  )
}

export default ChessPage