import './App.css';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

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
