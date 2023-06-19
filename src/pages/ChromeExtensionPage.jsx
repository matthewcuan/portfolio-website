import React from 'react';

import ProjectLanding from '../components/ProjectLanding';
import chromeExtension from "../assets/images/extension.gif";

function ChromeExtensionPage() {
  return (
    <div className="project-page">
      <ProjectLanding
        title="ChatGPT Wiki Extension"
        linkTitle="Github"
        link="https://github.com/matthewcuan/gpt-wiki-extension"
        pictures={chromeExtension}
        tech={
          <p>Javascript, OpenAI API, HTML, CSS</p>
        }
        words={
          <ul className="description-list">
            <li>Chrome extension that summarizes Wikipedia article introductions into two short bullet points using ChatGPT</li>
          </ul>
        }
      />
      {/* <ProjectFeatures />
      <ProjectProcess /> */}
    </div>
  )
}

export default ChromeExtensionPage