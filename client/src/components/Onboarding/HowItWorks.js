import React from "react";
import "../../style/Onboarding/HowItWorks.css";
import { Link } from "react-router-dom";

function HowItWorks(props) {
  return (
    <main className="how-page">
      <section className="how-text-container">
        <h1 className="how-header">How It Works</h1>
        <h2 className="topic-header">Topics</h2>
        <p className="topic-text">
          Defines what you will cover during your self-governed study session.
        </p>
        <h2 className="priority-header">Priority</h2>
        <p className="priority-text">Refers to the importance of a topic on your study list.</p>
        <Link to={"/onboard/startProfile"}>
          <button type="button" className="how-btn">Next</button>
      </Link>
      </section>
    </main>
  );
}

export default HowItWorks;
