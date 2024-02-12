import './App.css';
import { Navbar, About, Portfolio, Resume, Contact, Technologies } from './pages';
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
