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
      <section className="start-profile-text-container">
        <h1 className="start-profile-header">Let's Get Studying!</h1>
        <h2 className="start-profile-subheader">What's Your Name?</h2>
        <form onSubmit={(e) =>  {
          e.preventDefault()
            userServer.add({ name: user })
              .then(res => {
                userBrowser.add(res)
                props.history.push("/onboard/enterTopic")
              })
              .catch(err => console.log(err))
          }} className="start-profile-form">
           <input className="start-profile-input" type="text" name="name" placeholder="Type your name" onChange={handleChange} value={user}/>
           <button
          className="start-profile-btn"
        >
          Submit
        </button>
        </form>
      </section>
    </main>
  );
}

export default StartProfile;
