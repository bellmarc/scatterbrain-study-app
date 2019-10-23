import React from "react";
import "../../style/Onboarding/Welcome.css";
import { withRouter } from 'react-router-dom';

function Welcome(props) {
  return (
    <main className="welcome-page">
      <section className="welcome-text-container">
        <div className="welcome-header-container">
        <h1 className="welcome-header">Scatterbrain Study Tool</h1><h3 className="welcome-subheader">The tool that helps you decide what to study.</h3>
        </div>
        <p className="welcome-info">
          Scatterbrain uses a spaced-learning repetition
          system that enhances your study sessions by selecting a topic to review.
        </p>
          <section className="btn-section">
          <button className="welcome-btn" onClick={()=> props.history.push("/onboard/how")}>Get Started</button>
          </section>
      </section>
    </main>
  );
}

export default withRouter(Welcome);
