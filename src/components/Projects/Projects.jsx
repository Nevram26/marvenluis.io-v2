import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Reveal from "../Reveal";
import stockPilot from "../../Assets/Projects/stock-pilot.png";
import amalzen from "../../Assets/Projects/amalzen-dx.png";
import cache from "../../Assets/Projects/cache-game.png";
import exitInterview from "../../Assets/Projects/exit-interview.png";
import lexiLogic from "../../Assets/Projects/lexi-logic.png";
import seaWater from "../../Assets/Projects/sea-water.png";
import escaLogo from "../../Assets/Projects/esca-logo.svg";
import panpacificLogo from "../../Assets/Projects/panpacific-logo.svg";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <Reveal>
          <h1 className="project-heading">
            Professional <strong className="purple">Work </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            <Col md={6} className="project-card">
              <ProjectCard
                logoPath={escaLogo}
                title="ESCA — Agricultural Trading Platform"
                description="ESCA is a government-funded platform that connects farmers directly to buyers so they can sell their produce at fair prices. Farmers, cooperatives, and packing houses can all track produce as it moves from harvest to delivery, which builds trust on both sides of the trade. I build the tools they use day to day: scanning harvests, recording what comes in and goes out, and checking greenhouse conditions. I've been shipping about 5 features a week over the past 4 months."
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                logoPath={panpacificLogo}
                title="Panpacific University — Self-Service CMS"
                description="A website platform built for Panpacific University so non-technical staff can create and update their own pages without calling a developer. I make reusable content blocks (hero sections, FAQ pages, campus life galleries, student exchange cards) that staff just drop into place to build full pages. Over the past 7 months I've been delivering the sections for Academics, Admissions, and Sustainability, plus a program search that lets prospective students filter courses on the site."
              />
            </Col>
          </Row>
        </Reveal>

        <Reveal>
          <h1 className="project-heading">
            Academic <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={stockPilot}
                title="Stock Pilot"
                description="An inventory management system built in Java for three user roles: Purchases, Sales, and Admin. Each role gets its own tools for tracking stock and updating inventory. The system keeps data consistent across all roles so nobody is working from stale numbers."
                ghLink="https://github.com/Nevram26/InventoryManagement"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={lexiLogic}
                title="Lexi Logic: Boggle Word Game"
                description="A multiplayer word game where players type words that appear on screen and the highest score wins. Duplicate entries don't count, so players have to find unique words. It rewards a good vocabulary and fast thinking."
                ghLink="https://github.com/Nevram26/lexi-logic"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={seaWater}
                title="SEA Water: SDG 6.0"
                description="An infographic website about water scarcity in the Philippines. It covers ongoing projects, partnerships, and resources related to UN Sustainable Development Goal 6 (Clean Water and Sanitation). The site uses visual content to make the issue easier to understand and act on."
                ghLink="https://github.com/Nevram26/SEA_water"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={amalzen}
                title="AmalzenDX: Disease Diagnosis"
                description="A symptom checker where you enter what you're feeling and it suggests a possible diagnosis based on rule-based logic. It matches symptoms against a set of medical rules to narrow down what the condition might be."
                ghLink="https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={exitInterview}
                title="Exit-Interview Platform"
                description="A dual-backend exit-interview platform (Node.js + PHP/Apache behind an Nginx reverse proxy, MariaDB, Docker Compose), shortlisted for university-wide adoption. Led a refactor consolidating ~9,800 lines of legacy code across 88 files into a maintainable architecture."
                ghLink="https://github.com/loudiman/Exit-Interview-Question"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cache}
                title="Cache Game"
                description="A 6-service microservices architecture (Java/JavaFX client, 2 Go services for real-time WebSocket gameplay and matchmaking, Node.js REST API, MongoDB, Nginx) containerized with Docker Compose. Designed the MongoDB data-access layer for auth, game history, and score updates via upsert patterns."
                ghLink="https://github.com/VladTemp27/cache-game"
              />
            </Col>
          </Row>
        </Reveal>
      </Container>
    </Container>
  );
}

export default Projects;
