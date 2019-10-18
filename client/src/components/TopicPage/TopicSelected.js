import React from 'react';

function TopicSelected(props){
    const { topic, topic: {topic: topicName}, handleStart, handleGoBack} = props
    return (
        <dialog className="topic-selected">
            {topicName}
            <button onClick={handleStart}>Start</button>
            <button>Delete</button>
            <button>Edit</button>
            <button onClick={handleGoBack}>Back</button>
        </dialog>
    )
}

export default TopicSelected