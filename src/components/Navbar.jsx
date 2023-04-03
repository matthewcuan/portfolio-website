import React, { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(aboutSection) {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  // const aboutSection = useRef(null);
  // const projectsSection = useRef(null);
  // const experienceSection = useRef(null);
  // const contactSection = useRef(null);

  // const scrollDown = (ref) => {
  //   ref.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest',
  //     inline: 'center'
  //   });
  // };

  return (
      <Navbar id="navbar">
        <Container className="nav-bar">
          <Navbar.Brand className="nav-link" href="/#welcome-section">
            <b className="name">MC</b>
          </Navbar.Brand>
            <Nav className="section-links nav-links">
              <Nav.Link 
                href="/#about-section" 
                className="nav-link underline"
                // onClick={() => scrollDown(aboutSection)}
              >
                  About
              </Nav.Link>
              <NavDropdown 
                className="dropdown underline"
                title="Projects"
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
                onClick={() => { window.location.href = '/#projects-section' }}
              >
                <NavDropdown.Item className="underline" href="/projects/chess">Chess with Friends</NavDropdown.Item>
                <NavDropdown.Item className="underline" href="/projects/web-design">Web Design Projects</NavDropdown.Item>
                <NavDropdown.Item className="underline" href="/projects/lunar-pandemic">Lunar Pandemic 2061</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link 
                href="/#experience-section" 
                className="nav-link underline"
                >
                  Experience
              </Nav.Link>
              <Nav.Link 
                href="/#contact-section" 
                className="nav-link underline"
              >
                  Contact
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;