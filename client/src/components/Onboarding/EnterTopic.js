import React, { useState } from "react";
import "../../style/Onboarding/EnterTopic.css";
// import userBrowser from './functions/User/Browser.js';
import Axios from "axios";



function EnterTopic(props) {
  const[topic, setTopic] = useState("")

  const handleChange = (e) => {
    setTopic(e.target.value)
  }
  const addNewTopic =() => {
    Axios.post("/topics", )
  }

  return (
    <div className="enter-topic-page">
      <div className="enter-topic-text">
        <h1>Enter a Topic To Get Started</h1>
        <h4>
          <em>Ex: ReactJS</em>
        </h4>
        <div className="topic-input-container">
          <input type="text" name="name" placeholder="Type your topic"></input>
        </div>
        {/* <button
        className="enter-topic-btn"
        onClick={()=> {
          userBrowser.add
        }}>
        .then(props.history.push("/onboard/add-priority"))
          Next</button> */}

      </div>
    </div>
  );
}

export default EnterTopic;
