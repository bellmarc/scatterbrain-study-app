import React, { useState, useEffect } from "react";
import "../../style/Onboarding/AddPriority.css";
import userBrowser from '../../functions/User/Browser.js';
import axios from "axios";

function AddPriority(props) {
  const[priority, setPriority] = useState(0)
  const topicId = props.match.params.topicId
  const currentUser = userBrowser.get()

  useEffect(() => {
    if (!currentUser) props.history.push('/');
  },[])

  const handleChange = (e) => {
    console.dir(e.target.textContent);
    e.preventDefault()
    setPriority(e.target.textContent)
  }

  const increment = (e)=> { e.preventDefault()
    if (priority < 5 ){
      setPriority(priority + 1)
  }}

  const decrement = (e)=> { e.preventDefault()
    if (priority > 0 ){
      setPriority(priority - 1)
  }}


  const updateTopicWithPriority = (e) => {
    e.preventDefault()
    axios.put(`/topics/${currentUser._id}/${topicId}`,
    { priority: Number(priority),  currentWeight: Number(priority) })
    .then(res => {
      console.log(res)
      props.history.push("/onboard/redirect")// redirect
    })
     .catch(err => console.log(err))
  }

  return (
    <div className="add-priority-page">
      <div className="add-priority-text">
        <h1 className="add-priority-header">Give Your Topic a Priority</h1>
        <h5 className="add-priority-subheader">
          <em>A Higher priority (i.e. 5) is more important.</em>
        </h5>
        <form onSubmit={
          updateTopicWithPriority
        } className="priority-form">
        <div className="priority-btn-container">
          <button className="priority-input" onClick={handleChange} >1</button>
          <div class="divider"/>
          <button className="priority-input" onClick={handleChange} >2</button>
          <div class="divider"/>
          <button className="priority-input" onClick={handleChange} >3</button>
          <div class="divider"/>
          <button className="priority-input" onClick={handleChange} >4</button>
          <div class="divider"/>
          <button className="priority-input active-btn" onClick={handleChange} >5</button>
          <div class="divider"/>
        </div>

        {/* <div className="priority-btn-container">
          <button className="minus-button" type="minus-button" onClick={decrement}>
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
          <button className="add-button" type="add-button" onClick={increment}>
            <b>+</b>
          </button>
        </div> */}
            <button className="add-priority-btn">
                Add
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddPriority;
