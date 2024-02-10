import React from 'react';
import './Portfolio.css';
import { projects } from './project.js';

function Portfolio() {
  const projectList = projects.map((project, idx) => {
    return (
      <div key={idx} class="project-frame">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer">Link to the project</a> 

      </div>
    )
  })
  return (
    <div id="portfolio" class="portfolio-container">
      <h1>Portfolio</h1>
      <div>
        {projectList}
      </div>
    </div>
  
  )
}

export default Portfolio