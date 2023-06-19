import React from 'react';

import ProjectLanding from '../components/ProjectLanding';
// import ProjectProcess from '../components/ProjectProcess';
// import ProjectFeatures from '../components/ProjectFeatures';

import Chess from '../assets/images/chess.png'

function ChessPage() {
  return (
    <div className="project-page">
      <ProjectLanding
        title="Chess with Friends"
        linkTitle="Website"
        link="https://melodious-speculoos-b36439.netlify.app/"
        pictures={Chess}
        tech={
          <p>Javascript, Mongo, React, Node, WebSocket, HTML, CSS</p>
        }
        words={
          <ul className="description-list">
            <li>Online two-player chess web app using the MERN full stack framework (Mongo, Express, React, Node)</li>
            <li>Utilized RESTful API for account and game storage and a bidirectional socket for multiplayer feature</li>
            <li>Designed and coded login mechanism, real time multiplayer gameplay, and chat functionality</li>
          </ul>
        }
      />
      {/* <ProjectFeatures />
      <ProjectProcess /> */}
    </div>
  )
}

export default ChessPage