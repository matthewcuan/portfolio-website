import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ProjectNav() {

  return (
      <Navbar id="navbar">
        <Container className="nav-bar">
          <Navbar.Brand className="nav-link" href="/#welcome-section">
            <b className="name">MC</b>
          </Navbar.Brand>
          <Nav className="section-links nav-links">
            <Nav.Link href="/projects/chess" className="nav-link underline">
                Chess with Friends
            </Nav.Link>
            <Nav.Link href="/projects/web-design" className="nav-link underline">
                Web Design
            </Nav.Link>
            <Nav.Link href="/projects/lunar-pandemic" className="nav-link underline">
                Lunar Pandemic
            </Nav.Link>
            <Nav.Link href="/" className="nav-link underline">
                Homepage
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ProjectNav;