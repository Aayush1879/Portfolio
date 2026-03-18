import "./App.scss"
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Certificate from "./Components/Certificate/Certificate";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section id="Homepage">
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skill />
      </section>
      <section id="Certificates">
        <Certificate />
      </section>
      <section id="Projects">
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
