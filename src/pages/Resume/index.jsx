import React from 'react';
import './Resume.css';

//returns the resume page with a link to my resume
function Resume() {
  return (
    <div id="resume" className="resume-container">
      <h1>My Resumé</h1>
      <p>
        <a href="https://drive.google.com/file/d/1r0kTJfCtQYkYkun7_XbyqIGaxZgfca5R/view?usp=sharing" target="_blank" rel="noreferrer">
          <img class="resume1"src="src/pages/Resume/public/images/techresume1.PNG"></img>
        </a>
        <a href="https://drive.google.com/file/d/1r0kTJfCtQYkYkun7_XbyqIGaxZgfca5R/view?usp=sharing" target="_blank" rel="noreferrer">
          <img class="resume2"src="src/pages/Resume/public/images/techresume2.PNG"></img>
        </a>
        <h3>Click me! ☝️ </h3>
      </p>
    </div>
  )
}
//exports the resume page
export default Resume