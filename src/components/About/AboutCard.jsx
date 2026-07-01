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
            I recently graduated with a Bachelor’s degree in <span className="purple">Computer Science</span> from
            <span className="purple"> Saint Louis University</span>, where I was a Dean’s Lister for 7 of 8 semesters.
            <br />
            <br />
            I'm a full-stack developer. My recent work has been on two platforms: a government-funded agtech app that helps farmers get paid fairly, and a university CMS that lets staff publish their own pages without needing a developer. I like writing code that other people can read and maintain.
            <br />
            <br />
            <span className="purple">3rd Place, 2025 Meralco IDOL Hackathon</span> · Certified Lean Six Sigma Yellow Belt · Project Management Fundamentals Certified
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
