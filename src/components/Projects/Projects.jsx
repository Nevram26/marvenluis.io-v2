import React from "react";
import { motion } from "framer-motion";
import FeaturedCarousel from "./FeaturedCarousel";
import ProjectCard from "./ProjectCards";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
} from "../../utils/animations";
import stockPilot from "../../assets/projects/stock-pilot.png";
import amalzen from "../../assets/projects/amalzen-dx.png";
import cache from "../../assets/projects/cache-game.png";
import exitInterview from "../../assets/projects/exit-interview.png";
import lexiLogic from "../../assets/projects/lexi-logic.png";
import seaWater from "../../assets/projects/sea-water.png";

const academicProjects = [
  {
    id: 1,
    imgPath: stockPilot,
    title: "Stock Pilot",
    description:
      "An inventory management system built in Java for three user roles: Purchases, Sales, and Admin. Each role gets its own tools for tracking stock and updating inventory.",
    ghLink: "https://github.com/Nevram26/InventoryManagement",
    tech: ["Java", "GUI"],
  },
  {
    id: 2,
    imgPath: lexiLogic,
    title: "Lexi Logic: Boggle Word Game",
    description:
      "A multiplayer word game where players type words that appear on screen and the highest score wins. Duplicate entries don't count, rewarding good vocabulary and fast thinking.",
    ghLink: "https://github.com/Nevram26/lexi-logic",
    tech: ["React", "WebSocket"],
  },
  {
    id: 3,
    imgPath: seaWater,
    title: "SEA Water: SDG 6.0",
    description:
      "An infographic website about water scarcity in the Philippines. Covers ongoing projects, partnerships, and resources related to UN Sustainable Development Goal 6.",
    ghLink: "https://github.com/Nevram26/SEA_water",
    tech: ["React", "Design"],
  },
  {
    id: 4,
    imgPath: amalzen,
    title: "AmalzenDX: Disease Diagnosis",
    description:
      "A symptom checker where you enter what you're feeling and it suggests a possible diagnosis based on rule-based logic. Matches symptoms against medical rules.",
    ghLink: "https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis",
    tech: ["React", "Logic"],
  },
  {
    id: 5,
    imgPath: exitInterview,
    title: "Exit-Interview Platform",
    description:
      "A dual-backend exit-interview platform (Node.js + PHP/Apache, MariaDB, Docker Compose), shortlisted for university-wide adoption. Led refactor of 9,800 lines across 88 files.",
    ghLink: "https://github.com/loudiman/Exit-Interview-Question",
    tech: ["Node.js", "Docker", "PHP"],
  },
  {
    id: 6,
    imgPath: cache,
    title: "Cache Game",
    description:
      "A 6-service microservices architecture (Java/JavaFX, Go services, Node.js REST API, MongoDB) containerized with Docker Compose. Designed MongoDB data-access layer for auth and game history.",
    ghLink: "https://github.com/VladTemp27/cache-game",
    tech: ["Microservices", "Docker", "MongoDB"],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative section">
      <div className="section-padding container-max">
        {/* Professional Projects Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-heading-2 text-center mb-4">
            Professional <span className="text-emerald">Work</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Building real-world solutions for government-funded and enterprise platforms
          </motion.p>
          <FeaturedCarousel />
        </motion.div>

        {/* Academic Projects Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={fadeInUp} className="text-heading-2 text-center mb-4">
            Academic <span className="text-emerald">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            A selection of projects developed during my computer science studies
          </motion.p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {academicProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
