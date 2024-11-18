import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Professionals from "./pages/Professionals";
import Skills from "./pages/Skills";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 w-full z-10 p-5">
        <NavBar />
      </div>
      <div className="flex-grow mt-[5px]">
        <HomePage />
        <Overview />
        <Projects />
        <Professionals />
        <Skills />
      </div>
    </div>
  );
}
