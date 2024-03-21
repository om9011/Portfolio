import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Education from './Component/Education';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';
import Skills from './Component/Skills';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
