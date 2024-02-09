import React from 'react';
import './Techs.css';
import { technologies } from './technologies';

function Techs() {
//     const technologies = technologies.map((tech, index) => {
//         return (
//             <div>
//                 <h3>{tech.name}</h3>
//             </div>
//         )
// })

return (
    <div class="tech-container">
        <h1>Some of the technologies that I use...</h1>
        <div>
            <h3>Git</h3>
            <h3>HTML</h3>
            <h3>JavaScript</h3>
            <h3>React</h3>
            <h3>SQL</h3>
        </div>
        <h3>...and many more!</h3>
    </div>
  )
}

export default Techs