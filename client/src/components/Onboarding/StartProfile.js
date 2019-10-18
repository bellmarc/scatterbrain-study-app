import React, { useState, useEffect } from "react";
import "../../style/Onboarding/StartProfile.css";
import userServer from "./functions/User/Server.js";

const [user, setUser] = useState("")

const handleChange = (e) => {
    setUser(e.target.value)
}


function StartProfile(props) {
  return (
    <div className="start-profile">
      <div className="start-profile-text-container">
        <h1>Start Your Profile</h1>
        <h2>What's Your Name?</h2>
        <form>
           <input type="text" name="name" placeholder="Type your name" onChange={handleChange}/>
        </form>
        {/* <Link to={"/onboard/start-profile"} className="start-profile-btn">Next</Link> */}
        <button
          className="start-profile"
          onClick={() => {
            userServer.add({ name: user })
            .then(props.history.push("/onboard/enter-topic"))
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartProfile;
