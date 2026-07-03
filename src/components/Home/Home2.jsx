import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/avatar.svg";
import Tilt from "react-parallax-tilt";
import Reveal from "../shared/Reveal";
import {
  AiFillGithub,
  AiFillFacebook,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home-about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
          <Reveal>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="emerald"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a full-stack developer. I'm currently part of a team building a government-funded agtech platform and a university CMS, both used by real people every day.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="emerald"> Java, JavaScript, TypeScript, Python, Go,</b> and{" "}
                  <b className="emerald"> PHP</b>
              </i>
              <br />
              <br />
              I work across&nbsp;
              <i>
                <b className="emerald">Web Development</b>,{" "}
                <b className="emerald">Backend Development</b>, and{" "}
                <b className="emerald">Mobile Development</b>
              </i>
              <br />
              <br />
              The tools I reach for most are&nbsp;
              <i>
                <b className="emerald">React, React Native, Django, Node.js, Supabase, Docker,</b> and{" "}
                <b className="emerald">PostgreSQL</b>
              </i>
            </p>
          </Reveal>
        </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Reveal>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="emerald">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Nevram26"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/marven-luis/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/marven.luis.2024/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>


              </ul>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
