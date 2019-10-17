import React from "react";
import "../../style/HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-page">
      <div className="how-text-container">
        <h1>How It Works</h1>
        <h2>Topics</h2>
        <p>
          Defines what you will cover during your self-governed study session.
        </p>
        <h2>Priority</h2>
        <p>
          Refers to the importance of a topic on your study list.
        </p>
        <button className="how-btn">Get Started</button>
      </div>
    </div>
  );
}

export default HowItWorks;