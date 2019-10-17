import React from "react";
import "../../style/Welcome.css";

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="text-container">
        <h1>Welcome</h1>
        <h3>to</h3>
        <h2>Scatterbrain Study Tool</h2>
        <p className="welcome-info">
          Having a hard time deciding what to study? We utilize a space-learning repetition
          system that tailors to your study needs.
        </p>
        <button className="welcome-btn">Get Started</button>
      </div>
    </div>
  );
}

export default Welcome;
