import './App.css';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/About/About';
import Technologies from './pages/Technologies/Technologies';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

//imports the pages for the website
function App() {
  return (
    //renders the navbar, about, technologies, portfolio, resume, and contact pages
    <div>
      <Navbar />
      <About />
      <Technologies />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
