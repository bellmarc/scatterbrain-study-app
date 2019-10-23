import React from "react";
import "../../style/Onboarding/GetStarted.css";
import { Link } from "react-router-dom";

function HowItWorks(props) {
  return (
    <main className="get-started-page">
      <section className="get-started-text-container">
        <h1 className="get-started-header">Getting Started</h1>
        <h2 className="topic-header">Topics</h2>
        <p className="topic-text">
          You can enter topics that you want to learn or strengthen. A study session is based around each of these topics.
        </p>
        <h2 className="priority-header">Priority</h2>
        <p className="priority-text">
          You can also assign a priority to each topic to control how often they should be studied.
        </p>
        <Link to={"/onboard/startProfile"}>
          <button type="button" className="get-started-btn">Next</button>
      </Link>
      </section>
    </main>
  );
}

export default HowItWorks;
