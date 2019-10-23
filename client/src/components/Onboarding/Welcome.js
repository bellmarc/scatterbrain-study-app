import React from "react";
import "../../style/Onboarding/Welcome.css";
import { withRouter } from 'react-router-dom';

function Welcome(props) {
  return (
    <main className="welcome-page">
      <section className="welcome-text-container">
        <div className="welcome-header">
        <h1>Welcome</h1>
        <h3>to</h3>
        <h2>Scatterbrain Study Tool</h2>
        </div>
        <p className="welcome-info">
          Having a hard time deciding what to study? We utilize a space-learning repetition
          system that tailors to your study needs.
        </p>
          <section className="btn-section">
          <button className="welcome-btn" onClick={()=> props.history.push("/onboard/how")}>Get Started</button>
          </section>
      </section>
    </main>
  );
}

export default withRouter(Welcome);
