import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I like building software that works well for the people using it.
            <br />
            <br />
            I am proficient in
            <i>
              <b className="purple"> Java, JavaScript, TypeScript, Python, Go,</b> and{" "}
                <b className="purple"> PHP</b>
            </i>
            <br />
            <br />
            My areas of interest include&nbsp;
            <i>
              <b className="purple">Web Development</b>,{" "}
              <b className="purple">Backend Development</b>, and{" "}
              <b className="purple">Mobile Development</b>
            </i>
            <br />
            <br />
            I enjoy building applications using modern tools and technologies like&nbsp;
            <i>
              <b className="purple">React, React Native, Django, Supabase, Docker,</b> and{" "}
              <b className="purple">PostgreSQL</b>
            </i>
          </p>
        </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
