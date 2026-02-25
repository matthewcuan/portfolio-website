import React, { useEffect, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome-section");

  const sectionIds = useMemo(
    () => ["welcome-section", "about-section", "projects-section", "experience-section", "contact-section"],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = "welcome-section";
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const top = element.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.35) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  const closeMobileMenu = () => {
    setExpanded(false);
    setShow(false);
  };

  const isHome = window.location.pathname === "/";

  return (
    <Navbar
      id="navbar"
      className={scrolled ? "scrolled" : ""}
      expand="md"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container className="nav-bar">
        <Navbar.Brand className="nav-link" href="/#welcome-section" onClick={closeMobileMenu}>
          <b className="name">MC</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="section-links nav-links">
            <Nav.Link
              href="/#about-section"
              className={`nav-link underline ${isHome && activeSection === "about-section" ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              About
            </Nav.Link>

            <NavDropdown
              className="dropdown underline"
              title="Projects"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setShow((prev) => !prev);
                } else {
                  window.location.href = "/#projects-section";
                }
              }}
            >
              <NavDropdown.Item className="underline" href="/projects/chess" onClick={closeMobileMenu}>
                Chess with Friends
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="/projects/web-design" onClick={closeMobileMenu}>
                Web Design Projects
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="/projects/lunar-pandemic" onClick={closeMobileMenu}>
                Lunar Pandemic 2061
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="/projects/chrome-extension" onClick={closeMobileMenu}>
                GPT Chrome Extension
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="/#experience-section"
              className={`nav-link underline ${isHome && activeSection === "experience-section" ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Experience
            </Nav.Link>

            <Nav.Link
              href="/#contact-section"
              className={`nav-link underline ${isHome && activeSection === "contact-section" ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
