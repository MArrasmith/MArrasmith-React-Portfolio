import React from 'react';
import './Resume.css';
import resumeLink from './resumeImages/resumeLink.PNG';
import resumeLink2 from './resumeImages/resumeLink.PNG'

function Resume() {
  return (
    <div id="resume" class="resume-container">
      <h1>My resume</h1>
      <p>
        <a href="https://docs.google.com/document/d/e/2PACX-1vRT4-GlfiW23MBrSwRMTku18NxSWsppNZuGvjeEM87Npl1bf3_t3oQ5sRNAkmbETw/pub" target="_blank">My resumé</a>
      </p>
      <div>
        <img src={resumeLink} alt="resume" />
        <img src={resumeLink2} alt="resume2" />
      </div>
    </div>
  )
}

export default Resume