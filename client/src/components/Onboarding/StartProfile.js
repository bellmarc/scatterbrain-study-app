import React, { useState } from "react";
import "../../style/Onboarding/StartProfile.css";
import userServer from "../../functions/User/Server.js";

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
        <form>
           <input type="text" name="name" placeholder="Type your name" onChange={handleChange} value={user}/>
        </form>
        {/* <Link to={"/onboard/start-profile"} className="start-profile-btn">Next</Link> */}
        <button
          className="start-profile"
          onClick={() =>  {
            console.log(user)
            userServer.add({ name: "user" })
            .then(res => console.log(res.data))
            /* .then(props.history.push("/onboard/enter-topic")) */
            .catch(err => err)
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartProfile;
