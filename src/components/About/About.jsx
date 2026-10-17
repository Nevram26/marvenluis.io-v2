import React from "react";
import BentoGrid from "./BentoGrid";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-max section-padding">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>A practical engineer who cares about the people using the product.</h2>
          <p>I work comfortably across the stack, collaborate closely with stakeholders, and prioritize maintainable solutions over unnecessary complexity.</p>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
}

export default About;
