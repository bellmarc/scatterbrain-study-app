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
    <main className="start-profile-page">
      <div className="start-profile-text-container">
        <h1 className="start-profile-header">Start Your Profile</h1>
        <h2 className="start-profile-subheader">What's Your Name?</h2>
        <form onSubmit={(e) =>  {
          e.preventDefault()
            userServer.add({ name: user })
            .then(res => userBrowser.add(res))
            .catch(err => console.log(err))
            .then(props.history.push("/onboard/enterTopic"))
          }} className="start-profile-form">
           <input className="start-profile-input" type="text" name="name" placeholder="Type your name" onChange={handleChange} value={user}/>
           <button
          className="start-profile-btn"
        >
          Get Started
        </button>
        </form>
      </div>
    </main>
  );
}

export default StartProfile;
