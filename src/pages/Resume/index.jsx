import React from 'react';
import './Resume.css';

//returns the resume page with a link to my resume
function Resume() {
  return (
    <div id="resume" className="resume-container">
      <h1>My Resumé</h1>
      <p>
        <a href="https://drive.google.com/file/d/1r0kTJfCtQYkYkun7_XbyqIGaxZgfca5R/view?usp=sharing" target="_blank" rel="noreferrer">
          <img class="resume"src="src/pages/Resume/public/images/techresumescreenshot.PNG"></img>
        </a>
      </p>
    </div>
  )
}
//exports the resume page
export default Resume