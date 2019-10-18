import React, { useState } from "react";
import "../../style/Onboarding/EnterTopic.css";
import userBrowser from '../../functions/User/Browser.js';
import axios from "axios";


function EnterTopic(props) {
  const[topic, setTopic] = useState("")
  const currentUser = userBrowser.get()

  const handleChange = (e) => {
    setTopic(e.target.value)
  }

  const addNewTopic = () => { //post newTopic to DB
    axios.post("/topics",
    { topic: topic, userId: currentUser._id
    }) //need to get userId {topic: topic, userId: currentUser._id }
    .then(res => {
    console.log(res.data) //userBrowser.add to save to LS
    return res
    })
    .then(res => props.history.push(`/onboard/add-priority/${res.data._id}`))
    .catch(err => console.log(err))
  }

  return (
    <div className="enter-topic-page">
      <div className="enter-topic-text">
        <h1>Enter a Topic To Get Started</h1>
        <h4>
          <em>Ex: ReactJS</em>
        </h4>
        <form className="topic-input-container">
          <input type="text" name="name" placeholder="Type your topic" onChange={handleChange} value={topic}/>
        </form>
        <button
        className="enter-topic-btn"
        onClick={()=> {
        addNewTopic()
        }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EnterTopic;
