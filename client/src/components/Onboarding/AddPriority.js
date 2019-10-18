import React from "react";
import "../../style/Onboarding/AddPriority.css";
import { Link } from "react-router-dom";

function AddPriority(props) {
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
        <Link to={"/onboard/profile-complete"} className="add-priority-btn">
          Next
        </Link>
      </div>
    </div>
  );
}

export default AddPriority;
