import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
      <Navbar id="navbar">
        <Container className="nav-bar">
          <Navbar.Brand className="nav-link" href="/#welcome-section">
            <b className="name">MC</b>
          </Navbar.Brand>
            <Nav className="section-links nav-links">
              <Nav.Link href="/#about-section" className="nav-link underline">
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
                <NavDropdown.Item className="underline" href="/chess">Chess with Friends</NavDropdown.Item>
                <NavDropdown.Item className="underline" href="/project2">Web Design Projects</NavDropdown.Item>
                <NavDropdown.Item className="underline" href="/project3">Lunar Pandemic 2061</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#experience-section" className="nav-link underline">
                  Experience
              </Nav.Link>
              <Nav.Link href="/#contact-section" className="nav-link underline">
                  Contact
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;