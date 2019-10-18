import React from "react";
import "../../style/Onboarding/AddPriority.css";


function AddPriority(props) {
  console.log(props.match.params)
  return (
    <div className="add-priority-page">
      <div className="add-priority-text">
        <h1>Do You want to Add a priority to your Topic?</h1>
        <h5>
          <em>Higher priority (i.e. 5) is more important.</em>
        </h5>
        <div className="priority-btn-container">
          <button type="button">
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
          <button type="button">
            <b>+</b>
          </button>
        </div>
        <button className="add-priority-btn"
        onClick={()=> {

        }}>
        Next
        </button>
         {/* {"/onboard/profile-complete"} >
          Next */}

      </div>
    </div>
  );
}

export default AddPriority;
