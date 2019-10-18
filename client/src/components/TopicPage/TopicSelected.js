import React from 'react';
import axios from 'axios';

function TopicSelected(props){
    const { topic, deleteTopic, setSessionConfirm, setTopicSelect, handleGoBack} = props
    
    return (
        <dialog className="topic-selected">
            {topic.topic}
            <button onClick={() => {
                setTopicSelect({topic: {}, isSelected: false})
                setSessionConfirm({topic: topic, isStarting: true});
                }}>Start</button>
            <button onClick = {() => deleteTopic(topic._id)}>Delete</button>
            <button>Edit</button>
            <button onClick={handleGoBack}>Back</button>
        </dialog>
    )
}

export default TopicSelected