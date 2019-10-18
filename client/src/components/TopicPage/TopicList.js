import React from 'react';
import TopicCard from './TopicCard';

function TopicList(props){
    const { topics, handleSelectTopic } = props

    const mappedTopics = topics.map(topic => (
        <TopicCard 
            topic = {topic} 
            handleSelectTopic = {handleSelectTopic} 
            key = {topic._id} 
        />
    ));

    return (
        <ul className="topic-list">Topics
            {mappedTopics}
        </ul>
    )
}

export default TopicList;