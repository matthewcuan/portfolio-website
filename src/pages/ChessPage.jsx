import React from 'react';

import ProjectLanding from '../components/ProjectLanding';
import ProjectProcess from '../components/ProjectProcess';

function ChessPage() {
  return (
    <div className="project-page">
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