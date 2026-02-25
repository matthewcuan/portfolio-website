import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chess from "../assets/images/chess.png";
import fccProjects from "../assets/images/web_design.png";
import lunarPandemic from "../assets/images/lunar_pandemic.png";
import chromeExtension from "../assets/images/extension.gif";

function Projects() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "20%",
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <section id="projects-section">
      <div id="projects-wrapper">
        <header className="section-header">
          <h1>Selected Projects</h1>
          <p className="small-text">Click any card to open details</p>
        </header>
        <Slider {...settings} id="slider">
          <div className="project-tile">
            <a rel="noreferrer" href="/projects/chess">
              <h2 className="centered">Chess with Friends</h2>
              <img className="project-img" src={chess} alt="Chess with Friends" />
            </a>
          </div>
          <div className="project-tile">
            <a rel="noreferrer" href="/projects/web-design">
              <h2 className="centered">Web Design Projects</h2>
              <img className="project-img" src={fccProjects} alt="Web Design Projects" />
            </a>
          </div>
          <div className="project-tile">
            <a rel="noreferrer" href="/projects/lunar-pandemic">
              <h2 className="centered">Lunar Pandemic 2061</h2>
              <img className="project-img" src={lunarPandemic} alt="Lunar Pandemic 2061" />
            </a>
          </div>
          <div className="project-tile">
            <a rel="noreferrer" href="/projects/chrome-extension">
              <h2 className="centered">ChatGPT Wiki Extension</h2>
              <img className="project-img" src={chromeExtension} alt="ChatGPT Wiki Extension" />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
