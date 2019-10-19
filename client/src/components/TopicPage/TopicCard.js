import React from 'react';

function TopicCard(props){
    const { topic, topic: {topic: topicName}, handleSelectTopic} = props
    return (
        <li className="topic-card" onClick= {() => handleSelectTopic(topic)}>
            <span>{topicName}</span>
        </li>
    )
}

export default TopicCard;