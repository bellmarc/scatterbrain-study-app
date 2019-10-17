import React from 'react';

function TopicCard(props){
    const { topic, topic: {topic: topicName}, handleTopicSession} = props
    return (
        <li className="topic-card" onClick= {() => handleTopicSession(topic)}>
            <span>{topicName}</span>
            <button>Edit</button>
        </li>
    )
}

export default TopicCard;