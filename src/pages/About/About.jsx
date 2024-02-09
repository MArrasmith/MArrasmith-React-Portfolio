import './About.css'
import profileImage from './MArrasmith.jpg'

function About() {
  return (
    <div id="about" class="about-container">
      <img src={profileImage} alt="aboutMe"/>
      <div>
        <h1>About Me</h1>
        <p>
          Michael is a full stack web developer with a passion for building websites and applications with a clean and logical user interface.  He is a quick learner, a team player, and a strong communicator who enjoys working with a team to solve complex problems. Michael has a background rich with artistic influence. Growing up he was always heavily involved in local theater and dance, studying ballet well into adulthood. He also loves to draw and paint, some of his works being featured on an international scale. Michael is a student enrolled in the Full Stack Web Development Bootcamp at The Ohio State University in partnership with EdX, and is excited to bring his unique perspective to the world of web development.
        </p>
      </div>
    </div>
  )
}

export default About