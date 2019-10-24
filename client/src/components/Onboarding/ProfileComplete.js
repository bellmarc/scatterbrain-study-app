import React from "react";
import "../../style/Onboarding/ProfileComplete.css";
import { Link } from "react-router-dom";

function ProfileComplete(props) {
  return (
    <main className="profile-complete-page">
      <section className="profile-complete-text">
        <h1 className="profile-complete-header"> Topics Added!</h1>
        {/* Mascot Icon here */}
        <div className="img-congrats-container">
          <img className="img-congrats" src="https://icon-library.net/images/3e1b7a329e.svg.svg" width="350" />
        </div>
        <div className="profile-btn-container">
           <Link to={"/topics"} >
              <button className="profile-complete-btn">Let's go</button>
          </Link>
        </div>
        </section>
      </main>
  );
}

export default ProfileComplete;
