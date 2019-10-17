import React from 'react';

function TopicCard(props){
    const { topic: topicName } = props.topic
    return (
        <li className="topic-card">
            <span>{topicName}</span>
            <button>Edit</button>
        </li>
    )
}

export default TopicCard;