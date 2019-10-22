import React from 'react';

function StartSession(props){
    const { handleStart, handleGoBack,  topic: { topic: topicName, _id: topicId } } = props;

    return(
        <dialog className="start-session-background" open = {true}>
            <div className="start-session-container">
                <h3>Today's topic is: </h3>
                <h3 className="start-topic-name">{topicName}</h3>
                <h3>Are you ready to start?</h3>
                <div className="start-session-buttons">
                    <button className="start-confirm"onClick= {() => handleStart(topicId)}>Start!</button>
                    <button className="start-cancel" onClick= {handleGoBack}>Cancel</button>
                </div>
            </div>
        </dialog>
    )
}

export default StartSession