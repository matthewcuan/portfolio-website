import React from "react";

function Contact() {
  return (
    <section id="contact-page">
      <div className="contacts-wrapper">
        <header className="section-header">
          <h1>Let's connect!</h1>
        </header>
        <a id="twitter" class="contact underline" target="_blank" rel="noreferrer" href="https://twitter.com/cuan_codes/">
            <i class="fab fa-twitter"></i>Twitter</a>
        <a id="github" class="contact underline" target="_blank" rel="noreferrer" href="https://github.com/matthewcuan/">
            <i class="fab fa-github"></i>Github</a>
        <a id="linkedin" class="contact underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-cuan/">
            <i class="fab fa-linkedin"></i>LinkedIn</a>
        </div>
    </section>
  );
}

export default Contact;