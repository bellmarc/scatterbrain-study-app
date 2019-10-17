import React from "react";
import "../../style/StartProfile.css";
import { Link } from 'react-router-dom';

function StartProfile(props) {
  return (
    <div className="start-profile">
      <div className="start-profile-text-container">
        <h1>Start Your Profile</h1>
        <h2>What's Your Name?</h2>
        <input type="text" name="name" placeholder="Type your name">
        </input>
        <Link to={"/onboard/start-profile"} className="start-profile-btn">Next</Link>
      </div>
    </div>
  );
}

export default StartProfile;