import React from 'react';

import ProjectLanding from '../components/ProjectLanding';
import ProjectProcess from '../components/ProjectProcess';

import ChessHome from '../assets/images/chess-home.png'

function ChessPage() {
  return (
    <div className="project-page">
      <ProjectLanding
        title="Chess with Friends"
        linkTitle="Website"
        link="https://melodious-speculoos-b36439.netlify.app/"
        pictures={ChessHome}
        tech={
          <p>Javascript, Mongo, React, Node, WebSocket, HTML, CSS</p>
        }
        words="Words"
      />
      <ProjectProcess />
    </div>
  )
}

export default ChessPage