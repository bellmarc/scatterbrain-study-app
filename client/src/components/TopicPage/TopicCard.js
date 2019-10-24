import React from 'react';

function TopicCard(props){
    const { topic, topic: {topic: topicName}, handleSelectTopic} = props
    return (
        <li className="topic-card" >
            <div onClick= {() => handleSelectTopic(topic)}>{topicName}</div>
            <i onClick={() => props.deleteTopic(topic._id)} className="fas fa-trash"></i>
        </li>
    )
}

export default TopicCard;