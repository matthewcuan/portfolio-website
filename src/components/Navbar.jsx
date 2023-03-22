import React from "react";

function Navbar() {
  return (
    <header id="header">
      <div className="header">
        <div className="logo"></div>
        <div className="title"></div>
      </div>
      <nav id="navbar">
        <div className="nav-bar">
          <a className="nav-link" href="#welcome-section">
            <b className="name">MC</b>
          </a>
          <ul className="section-links">
            <li>
              <a className="nav-link underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link underline" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link underline" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="nav-link underline" href="#contact-page">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;