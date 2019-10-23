import React, { useState, useEffect } from "react";
import "../../style/Onboarding/EnterTopic.css";
import userBrowser from '../../functions/User/Browser.js';
import axios from "axios";


function EnterTopic(props) {
  const[topic, setTopic] = useState("")
  const currentUser = userBrowser.get()

  useEffect(() => {
    if (!currentUser) props.history.push('/');
  },[])

  const handleChange = (e) => {
    setTopic(e.target.value)
  }

  const addNewTopic = () => { //post newTopic to DB
    axios.post("/topics",
    { topic: topic, userId: currentUser._id
    }) //need to get userId {topic: topic, userId: currentUser._id }
    .then(res => props.history.push(`/onboard/addPriority/${res.data._id}`))
    .catch(err => err)
  }

  return (
    <main className="enter-topic-page">
      <section className="enter-topic-text-container">
        <h1 className="enter-topic-header">Enter a Topic To Get Started</h1>
        <h4 className="enter-topic-subheader">
          <em>Ex: ReactJS</em>
        </h4>
        <form onSubmit={(e)=> {
          e.preventDefault()
          addNewTopic()
         }} className="topic-input-container">
          <input className="enter-topic-input" type="text" name="name" placeholder="Type your topic" onChange={handleChange} value={topic}/>
        <button
        className="enter-topic-btn"
        >
          Next
        </button>
        </form>
      </section>
    </main>
  );
}

export default EnterTopic;
