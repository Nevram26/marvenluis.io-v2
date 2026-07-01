import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Marven Joffre Luis</span> from 
            <span className="purple"> Isabela, Philippines</span>.
            <br />
            I’m currently taking a Bachelor’s degree in <span className="purple">Computer Science</span> at 
            <span className="purple"> Saint Louis University</span>, where I’ve been a Dean’s Lister for four semesters.
            <br />
            <br />
            I enjoy solving problems, building creative and practical solutions, and continuously learning new technologies. 
            I’m comfortable working both independently and in teams, and I always strive to write clean, understandable code.
            <br />
            <br />
            Outside of coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight />  Exercising
            </li>
          </ul>
          <p style={{ color: "rgb(80, 200, 120)" }}>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
