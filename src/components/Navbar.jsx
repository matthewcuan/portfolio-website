import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

function Navigation() {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
      // <nav id="navbar">
      //   <div className="nav-bar">
      //     <a className="nav-link" href="/#welcome-section">
      //       <b className="name">MC</b>
      //     </a>
      //     <ul className="section-links">
      //       <li>
      //         <a className="nav-link underline" href="/#about-section">
      //           About
      //         </a>
      //       </li>
      //       <li>
      //         <a className="nav-link underline" href="/#projects-section">
      //           Projects
      //         </a>
      //       </li>
      //       <li>
      //         <a className="nav-link underline" href="/#experience-section">
      //           Experience
      //         </a>
      //       </li>
      //       <li>
      //         <a className="nav-link underline" href="/#contact-section">
      //           Contact
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <Navbar id="navbar">
        <Container className="nav-bar">
          <Navbar.Brand className="nav-link" href="/#welcome-section">
            <b className="name">MC</b>
          </Navbar.Brand>
            <Nav className="section-links nav-links">
              <Nav.Link href="/#about-section" className="nav-link underline">
                  About
              </Nav.Link>
              <Nav.Link href="/#projects-section" className="nav-link underline">
                  Projects
              </Nav.Link>
              <NavDropdown 
                className="dropdown"
                title="Projects" 
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="/project">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="/project">Project 2</NavDropdown.Item>
                <NavDropdown.Item href="/project">Project 3</NavDropdown.Item>
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