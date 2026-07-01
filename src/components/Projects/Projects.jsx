import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stockPilot from "../../Assets/Projects/stock-pilot.png";
import amalzen from "../../Assets/Projects/amalzen-dx.png";
import cache from "../../Assets/Projects/cache-game.png";
import exitInterview from "../../Assets/Projects/exit-interview.png";
import lexiLogic from "../../Assets/Projects/lexi-logic.png";
import seaWater from "../../Assets/Projects/sea-water.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockPilot}
              isBlog={false}
              title="Stock Pilot"
              description="This Java-based inventory management system is designed to streamline operations for different user roles, including Purchases, Sales, and Admin users. It facilitates efficient stock tracking, inventory updates, and role-specific functionalities, ensuring smooth management of inventory data and processes."
              ghLink="https://github.com/Nevram26/InventoryManagement"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexiLogic}
              isBlog={false}
              title="Lexi Logic: Boggle Word Game"
              description="A multiplayer word game where players compete by entering words displayed on the screen, with the winner determined by the highest score. The game emphasizes quick thinking and vocabulary skills, as duplicate entries do not earn points, encouraging players to come up with unique words to maximize their scores."
              ghLink="https://github.com/Nevram26/lexi-logic"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seaWater}
              isBlog={false}
              title="SEA Water: SDG 6.0"
              description="This project is an infographic website designed to raise awareness about water scarcity issues in the Philippines. It provides users with information on ongoing projects, partnerships, available and resources. By leveraging visually engaging content, the platform aims to educate communities and promote action toward achieving Sustainable Development Goal 6 (SDG 6) – Clean Water and Sanitation."
              ghLink="https://github.com/Nevram26/SEA_water"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amalzen}
              isBlog={false}
              title="AmalzenDX: Diease Diagnosis"
              description="This website serves as a rule-based diagnosis tool, allowing users to input symptoms and receive a predicted diagnosis. By leveraging logical rules and inference, it provides an intelligent system to assist users in identifying potential diseases based on their entered symptoms."
              ghLink="https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exitInterview}
              isBlog={false}
              title="Exit Interview"
              description="This website is designed to conduct surveys for graduating students, providing a platform to collect valuable feedback and insights. It enables institutions to gather data on students' experiences, opinions, and suggestions to help improve future programs and services. This project was also considered a potential candidate for adoption by the University to streamline the exit interview process for graduating students."
              ghLink="https://github.com/loudiman/Exit-Interview-Question"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cache}
              isBlog={false}
              title="Cache Game"
              description="This application is a 2-player memory game designed to educate players on the generational paradigms of computer programming in a fun and engaging way. Players take turns matching related cards, earning points for each correct match. The application serves as both an entertaining and educational tool for learning about programming history and concepts."
              ghLink="https://github.com/VladTemp27/cache-game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
