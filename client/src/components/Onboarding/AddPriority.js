import React, { useState, useEffect } from "react";
import "../../style/Onboarding/AddPriority.css";
import userBrowser from '../../functions/User/Browser.js';
import axios from "axios";

function AddPriority(props) {
  const[priority, setPriority] = useState(0)
  const topicId = props.match.params.topicId
  const currentUser = userBrowser.get()
  const style = {
    active: "priority-input active-btn",
    inactive: "priority-input"
  }


  useEffect(() => {
    if (!currentUser) props.history.push('/');
  },[])

  const handleChange = (e) => {
    console.dir(e.target.textContent);
    e.preventDefault()
    setPriority(e.target.textContent)
  }

  const updateTopicWithPriority = (e) => {
    e.preventDefault()
    axios.put(`/topics/${currentUser._id}/${topicId}`,
    { priority: Number(priority),  currentWeight: Number(priority) })
    .then(res => {
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
          <button className={priority==="1"?style.active:style.inactive} 
            onClick={handleChange} >1</button>

          <div class="divider"/>
          <button className={priority==="2"?style.active:style.inactive} 
            onClick={handleChange} >2</button>

          <div class="divider"/>
          <button className={priority==="3"?style.active:style.inactive} 
            onClick={handleChange} >3</button>

          <div class="divider"/>
          <button className={priority==="4"?style.active:style.inactive} 
            onClick={handleChange} >4</button>

          <div class="divider"/>
          <button className={priority==="5"?style.active:style.inactive}
            onClick={handleChange} >5</button>

          <div class="divider"/>
        </div>

            <button className="add-priority-btn">
                Add
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddPriority;
