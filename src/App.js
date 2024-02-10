import './App.css';
import { Navbar, About, Portfolio, Resume, Contact, Technologies } from './pages';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Technologies />
      <Portfolio />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;
