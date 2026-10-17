import React from "react";
import FeaturedCarousel from "./FeaturedCarousel";
import ProjectCard from "./ProjectCards";
import stockPilot from "../../assets/projects/stock-pilot.png";
import amalzen from "../../assets/projects/amalzen-dx.png";
import cache from "../../assets/projects/cache-game.png";
import exitInterview from "../../assets/projects/exit-interview.png";
import lexiLogic from "../../assets/projects/lexi-logic.png";
import seaWater from "../../assets/projects/sea-water.png";

const projects = [
  { id: 1, imgPath: exitInterview, title: "Exit Interview Platform", description: "A dual-backend platform shortlisted for university-wide adoption. Led a 9,800-line refactor across 88 files.", ghLink: "https://github.com/loudiman/Exit-Interview-Question", tech: ["Node.js", "PHP", "Docker"] },
  { id: 2, imgPath: cache, title: "Cache Game", description: "A six-service architecture with Java, Go, Node.js, and MongoDB, fully containerized with Docker Compose.", ghLink: "https://github.com/VladTemp27/cache-game", tech: ["Microservices", "Go", "MongoDB"] },
  { id: 3, imgPath: stockPilot, title: "Stock Pilot", description: "A Java inventory management system with dedicated workflows for purchasing, sales, and administration roles.", ghLink: "https://github.com/Nevram26/InventoryManagement", tech: ["Java", "GUI"] },
  { id: 4, imgPath: lexiLogic, title: "Lexi Logic", description: "A multiplayer word game that rewards vocabulary, speed, and strategy through real-time competition.", ghLink: "https://github.com/Nevram26/lexi-logic", tech: ["React", "WebSocket"] },
  { id: 5, imgPath: seaWater, title: "SEA Water", description: "An educational experience exploring water scarcity in the Philippines and the work behind UN SDG 6.", ghLink: "https://github.com/Nevram26/SEA_water", tech: ["React", "Design"] },
  { id: 6, imgPath: amalzen, title: "AmalzenDX", description: "A rule-based symptom checker that matches reported symptoms against medical diagnosis rules.", ghLink: "https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis", tech: ["React", "Rule engine"] },
];

function Projects() {
  return (
    <>
      <section id="experience" className="section bg-surface border-y border-border">
        <div className="container-max section-padding">
          <div className="section-heading"><p className="eyebrow">Experience</p><h2>Production work with outcomes, not just output.</h2><p>I&apos;ve contributed to products serving agricultural communities and university teams, turning operational needs into maintainable software.</p></div>
          <FeaturedCarousel />
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container-max section-padding">
          <div className="section-heading"><p className="eyebrow">Selected projects</p><h2>Technical range grounded in real problems.</h2><p>A focused selection showing systems thinking, collaboration, and experience across different stacks.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
          </div>
          <div className="mt-16 rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between">
            <div><p className="text-sm font-semibold text-primary-foreground/70">Have a role in mind?</p><h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s build something useful together.</h2></div>
            <a href="mailto:marvenjoffreluis@gmail.com" className="button mt-6 bg-white text-primary hover:bg-white/90 lg:mt-0">Start a conversation</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
