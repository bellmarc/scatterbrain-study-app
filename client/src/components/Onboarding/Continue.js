import React from 'react'
import "../../style/Onboarding/Continue.css";


function Continue(props) {
    const sendToEnterTopicPage = () => {
     props.history.push("/onboard/enterTopic")
    }
    const sendToSessionPage = () => {
        props.history.push("/onboard/profileComplete")
    }

    return (
        <div className="redirect-page">
        <div className="continue-text">
        <h1>Would You like to Continue Adding Topic(s)?</h1>
            <button className="yes-btn" onClick={ sendToEnterTopicPage }>
            Yes
            </button>
            <button className="no-btn" onClick={ sendToSessionPage } >
            No
            </button>
        </div>
        </div>
    )
}


export default Continue
