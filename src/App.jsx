import React, { useState, useEffect } from "react";
import Preloader from "./components/shared/Pre";
import AmbientBackground from "./components/shared/AmbientBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import "./styles/globals.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <AmbientBackground />
      <div className="App relative z-10" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Resume />
      </div>
    </>
  );
}

export default App;
