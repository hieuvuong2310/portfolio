"use client";

import { useState } from "react";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contacts";
import Footer from "./components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <Hero />
        <Overview />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
