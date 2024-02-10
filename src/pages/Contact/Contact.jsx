import React from 'react';
import './Contact.css';
//returns the contact page with my contact information and links to my LinkedIn and GitHub
function Contact() {
  return (
    <div id="contact" class="contact-container">
      <p>Michael Arrasmith</p>
      <p>(937)694-4007</p>
      <p>michael.keith.arrasmith@gmail.com</p>
      <p>
        <a href="https://www.linkedin.com/in/michael-arrasmith-47b10b296/" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
      <p>
        <a href="https://github.com/MArrasmith" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </div>
  )
}

export default Contact