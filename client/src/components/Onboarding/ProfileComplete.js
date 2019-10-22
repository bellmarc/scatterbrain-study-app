import React from "react";
import "../../style/Onboarding/ProfileComplete.css";
import { Link } from "react-router-dom";

function ProfileComplete(props) {
  return (
    <main className="profile-complete-page">
      <section className="profile-complete-text">
        <h1 className="profile-complete-header">Topics Are All Added!</h1>
        {/* Mascot Icon here */}
        <Link to={"/topic"} >
        <button className="profile-complete-btn">Let's go</button>
        </Link>
        </section>
      </main>
  );
}

export default ProfileComplete;
