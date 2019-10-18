import React, { useState } from "react";
import "../../style/Onboarding/AdditionalPriority.css";
import userBrowser from '../../functions/User/Browser.js';
import axios from "axios";

function AdditionalPriority(props) {
  const[priority, setPriority] = useState("")
  const topicId = props.match.params.topicId
  const currentUser = userBrowser.get()

  const handleChange = (e) => {
    setPriority(e.target.value)
  }
  const updateTopicWithPriority = () => {
    axios.put(`/topics/${currentUser._id}/${topicId}`,
    { priority: Number(priority) })
     .then(res => {
       console.log(res)
     })
     .catch(err => console.log(err))
  }


  console.log(props.match.params) //id
  return (
    <div className="add-priority-page">
      <div className="add-priority-text">
        <h1>Do You want to Add a priority to your Topic?</h1>
        <h5>
          <em>Higher priority (i.e. 5) is more important.</em>
        </h5>
        <form className="priority-btn-container" >
          <button type="minus-button">
            <b>-</b>
          </button>
          <input
            className="priority-input"
            type="number"
            name="quantity"
            min="1"
            max="5"
            placeholder="Type your number"
            onChange={handleChange}
            value={priority}
          ></input>
          <button type="add-button">
            <b>+</b>
          </button>
            <button className="add-priority-btn"
        onClick={()=> {
        updateTopicWithPriority()
        .then(props.history.push("/onboard/profile-complete"))
        }}>
        Add
        </button>
        </form>
      </div>
    </div>
  );
}

export default AdditionalPriority;
