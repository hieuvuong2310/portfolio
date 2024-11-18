import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Professionals from "./pages/Professionals";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 w-full z-50 p-5">
        <NavBar />
      </div>
      <div className="flex-grow mt-[5px]">
        <div id="home">
          <HomePage />
        </div>
        <div id="overview">
          <Overview />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="professionals">
          <Professionals />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
