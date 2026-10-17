import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./styles/globals.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <footer className="border-t border-border">
        <div className="container-max section-padding flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marven Luis</p>
          <p>Designed with clarity, built with care.</p>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
