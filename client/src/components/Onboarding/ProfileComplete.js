import React from "react";
import "../../style/ProfileComplete.css";
import { Link } from "react-router-dom";

function ProfileComplete(props) {
  return (
    <div className="profile-complete-page">
      <div className="profile-complete-text">
        <h1>Hooray! Profile Complete!</h1>
        {/* Mascot Icon here */}
        <h4>Let's pick a Topic to Start </h4>
        <div className="profile-complete-btn-container">
          {/* <input
            className="profile-complete-input"
            type="number"
            name="quantity"
            min="1"
            max="5"
            placeholder="Type your number"
          ></input> */}
        </div>
        <Link to={"/onboard/"} className="profile-complete-btn">
          Start
        </Link>
        <div className="skip-btn">
          <Link to={"/onboard/main"} className="skip-to-main-btn">
            Skip
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileComplete;
