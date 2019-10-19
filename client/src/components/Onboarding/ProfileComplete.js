import React from "react";
import "../../style/Onboarding/ProfileComplete.css";
import { Link } from "react-router-dom";

function ProfileComplete(props) {
  return (
    <div className="profile-complete-page">
      <div className="profile-complete-text">
        <h1>Topics Are All Added</h1>
        {/* Mascot Icon here */}
        <Link to={"/topic"} className="profile-complete-btn">
          Let's go
        </Link>
        </div>
      </div>
  );
}

export default ProfileComplete;
