import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaPalette } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiPostman,
  SiDocker,
  SiFigma,
  SiTrello,
  SiJira,
  SiAndroidstudio,
  SiIntellijidea,
  SiObsidian,
  SiVercel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Operating System */}
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>

      {/* IDEs and Code Editors */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>

      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      

      {/* Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>


      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPalette />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiObsidian />
      </Col>
    </Row>
  );
}

export default Toolstack;