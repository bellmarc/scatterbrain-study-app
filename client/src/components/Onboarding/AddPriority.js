import React, {useState } from "react";
import "../../style/Onboarding/AddPriority.css";
import userBrowser from '../../functions/User/Browser.js';
import userServer from "../../functions/User/Server.js";



function AddPriority(props) {
  const[priority, setPriority] = useState("")

  const handleChange = (e) => {
    setPriority(e.target.value)
  }
  console.log(props.match.params) //id
  return (
    <div className="add-priority-page">
      <div className="add-priority-text">
        <h1>Do You want to Add a priority to your Topic?</h1>
        <h5>
          <em>Higher priority (i.e. 5) is more important.</em>
        </h5>
        <form className="priority-btn-container" onChange={handleChange} value={priority}>
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
          ></input>
          <button type="add-button">
            <b>+</b>
          </button>
        </form>
        <button className="add-priority-btn"
        onClick={()=> {

        userServer.add({ priority: priority})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        }}>
        Next
        {/* .then(props.history.push("/onboard/profile-complete")) */}
        </button>
      </div>
    </div>
  );
}

export default AddPriority;
