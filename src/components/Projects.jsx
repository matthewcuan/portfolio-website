import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tributePageImg from '../assets/images/tribute_page.jpg';
import formDocImg from '../assets/images/form_doc.jpg';
import techDocImg from '../assets/images/tech_doc.jpg';
import productLandingImg from '../assets/images/product_landing.jpg';

function Projects() {

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "20%",
    centerMode: true,
  };

  return (
    <section id="projects-section">
      <div id="projects-wrapper"> 
        <header className="section-header">
          <h1>These are some of my projects:</h1>
        </header>
        <Slider {...settings} id="slider">
          <div className="project-tile">
            <a target="_blank" rel="noreferrer" href="/project">
              <h2 className="centered">Tribute Page</h2>
              <img
                className="project-img"
                src={tributePageImg}
                alt="Tribute Page"
              />
            </a>
          </div>
          <div className="project-tile">
            <a target="_blank" rel="noreferrer" href="/project">
              <h2 className="centered">Survey Form</h2>
              <img
                className="project-img"
                src={formDocImg}
                alt="Survey Form"
              />
            </a>
          </div>
          <div className="project-tile">
            <a target="_blank" rel="noreferrer" href="/project">
              <h2 className="centered">Tech Doc</h2>
              <img
                className="project-img"
                src={techDocImg}
                alt="Tech Doc"
              />
            </a>
          </div>
          <div className="project-tile">
            <a target="_blank" rel="noreferrer" href="/project">
              <h2 className="centered">Product Landing</h2>
              <img
                className="project-img"
                src={productLandingImg}
                alt="Product Landing"
              />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
