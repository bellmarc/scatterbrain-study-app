import React from "react";
import "../../style/EnterTopic.css";
import { Link } from "react-router-dom";

function EnterTopic(props) {
  return (
    <div className="enter-topic-page">
      <div className="enter-topic-text">
        <h1>Enter a Topic To Get Started</h1>
        <h4>
          <em>Ex: ReactJS</em>
        </h4>
        <div className="topic-input-container">
          <input type="text" name="name" placeholder="Type your topic"></input>
        </div>
        <Link to={"/onboard/add-priority"} className="enter-topic-btn">
          Next
        </Link>
      </div>
    </div>
  );
}

export default EnterTopic;
