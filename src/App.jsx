import "./App.scss"
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Project from "./Components/Projects/Project";
import Certificate from "./Components/Certificate/Certificate";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
function App() {  
  return (
      <div>
        {/* <Cursor/> */}
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
        <section id="About">
          <About/>
        </section> 
        <section id="Skills">
          <Skill/>
        </section>
        <section id="Certificates">
          <Parallax type={"certi"}/>
        </section>
        <Certificate/>
        <section id="Projects">
          <Parallax type={"projects"}/>
        </section>
        <Project/>
        <section id="Contact"><Contact/></section>
      </div>
  )
}

export default App
