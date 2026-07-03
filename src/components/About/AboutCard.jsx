import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import quotes from "../../data/quotes";

function AboutCard() {
  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="emerald">Marven Joffre Luis</span> from
            <span className="emerald"> Isabela, Philippines</span>.
            <br />
            I recently graduated with a Bachelor’s degree in <span className="emerald">Computer Science</span> from
            <span className="emerald"> Saint Louis University</span>, where I was a Dean’s Lister for 7 of 8 semesters.
            <br />
            <br />
            I'm a full-stack developer. My recent work has been on two platforms: a government-funded agtech app that helps farmers get paid fairly, and a university CMS that lets staff publish their own pages without needing a developer. I like writing code that other people can read and maintain.
            <br />
            <br />
            <span className="emerald">3rd Place, 2025 Meralco IDOL Hackathon</span> · Certified Lean Six Sigma Yellow Belt · Project Management Fundamentals Certified
            <br />
            <br />
            Outside of coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Sports
            </li>
            <li className="about-activity">
              <ImPointRight />  Going to the Gym
            </li>
          </ul>
          <p style={{ color: "rgb(80, 200, 120)" }}>
            "{randomQuote.quote}"
          </p>
          <footer className="blockquote-footer">{randomQuote.author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
