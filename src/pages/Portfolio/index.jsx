import React from 'react';
import './Portfolio.css';
import { projects } from './project.js';

function Portfolio() {
  const projectList = projects.map((project, idx) => {
    return (
      <div key={idx} className="project-frame">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer">Link to the project</a> 

      </div>
    )
  })
  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <div>
        {projectList}
      </div>
    </div>
    


  
  )
}

<div class="site">
          <header><h3>Marvel Heroes Personality Quiz</h3></header>
          <a href="https://marrasmith.github.io/Marvel-Heroes-Personality-Quiz/" target="_blank">
            <img src="./assets/images/MarvelGroupProject1.PNG"/>
          </a>
          <p>This was my first group project as a student. We decided to utitilize the Marvel API and Giphy API, to create a personality quiz to pair you with the the Original Avenger that you are most like!</p>
        </div>



export default Portfolio