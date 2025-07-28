import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Project";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* More sections to come... */}
      </main>
    </div>
  );
}

export default App;
