import React, { useState } from "react";
import "../../style/Onboarding/StartProfile.css";
import userServer from "../../functions/User/Server.js";
import userBrowser from '../../functions/User/Browser.js';

function StartProfile(props) {
const [user, setUser] = useState("")

const handleChange = (e) => {
  setUser(e.target.value)
}
  return (
    <div className="start-profile">
      <div className="start-profile-text-container">
        <h1>Start Your Profile</h1>
        <h2>What's Your Name?</h2>
        <form onSubmit={(e) =>  {
          e.preventDefault()
            userServer.add({ name: user })
            .then(res => userBrowser.add(res))
            .catch(err => console.log(err))
            .then(props.history.push("/onboard/enterTopic"))
          }}>
           <input type="text" name="name" placeholder="Type your name" onChange={handleChange} value={user}/>
           <button
          className="start-profile"
        >
          Get Started
        </button>
        </form>
      </div>
    </div>
  );
}

export default StartProfile;
