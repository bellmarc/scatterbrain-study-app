import React from "react";
import "../../style/OnboardingWelcome.css";

function OnboardingWelcome() {
  return (
    <div className="welcome-page">
      <div className="text-container">
        <h1>Welcome</h1>
        <h2>to Scatterbrain Study Tool</h2>
        <p className="welcome-info">
          Having a hard time deciding what to study? We utilize a space-learning
          system that tailors to your study needs.
        </p>
        <button className="welcome-btn">Get Started</button>
      </div>
    </div>
  );
}

export default OnboardingWelcome;
