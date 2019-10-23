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
        <main className="redirect-page">
        <section className="continue-text">
        <h1 className="continue-header">Would You like to Continue Adding Topics?</h1>
            <section className="continue-btn-container">
                <button className="yes-btn" onClick={ sendToEnterTopicPage }>
                Yes
                </button>
                <button className="no-btn" onClick={ sendToSessionPage } >
                No
                </button>
            </section>
        </section>
        </main>
    )
}


export default Continue
