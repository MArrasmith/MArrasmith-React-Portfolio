import "./Technologies.css";
import { techs } from "./techs";
//returns the technologies page with a list of technologies I use
function Technologies() {
  const technologiesList = techs.map((tech, idx) => {
    return (
      <div className="tech-frames" key={idx}>
        <img src={tech.image} alt={tech.name}/>
        <h3>{tech.name}</h3>
      </div>
    )
  })

  return (
    <div id="technologies" className="technologies-container">
      <h1>Some of the technologies I use...</h1>
      <div className="tech-grid-container">
        {technologiesList}
      </div>
      <h3>...and many more.</h3>
    </div>
  )
}

export default Technologies