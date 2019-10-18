import React from 'react';

function StartSession(props){
    const { handleStart, handleGoBack,  topic: { topic: topicName, _id: topicId } } = props;

    return(
        <dialog className="start-session-dialog" open = {true}>
            <h3>Ready to start this session?</h3>
            <h3 className="start-topic-name">{topicName}</h3>
            <button className="start-confirm"onClick= {() => handleStart(topicId)}>Start Session!</button>
            <button className="start-cancel" onClick= {handleGoBack}>Cancel</button>
        </dialog>
    )
}

export default StartSession