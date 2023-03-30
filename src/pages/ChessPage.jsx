import React from 'react'

import ProjectLanding from '../components/ProjectLanding'

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
    </div>
  )
}

export default ChessPage