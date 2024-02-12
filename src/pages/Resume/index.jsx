import React from 'react';
import './Resume.css';

//returns the resume page with a link to my resume
function Resume() {
  return (
    <div id="resume" className="resume-container">
      <h1>My resume</h1>
      <p>
        <a href="https://docs.google.com/document/d/e/2PACX-1vRT4-GlfiW23MBrSwRMTku18NxSWsppNZuGvjeEM87Npl1bf3_t3oQ5sRNAkmbETw/pub" target="_blank" rel="noreferrer">Click her to view my resumé</a>
      </p>
    </div>
  )
}
//exports the resume page
export default Resume