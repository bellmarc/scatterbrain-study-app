import React from 'react';
import TopicCard from './TopicCard';
import { withRouter } from 'react-router-dom'
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
        <div className="topic-list">
            <div className="topic-list-header">
                <h3>Your Study Topics</h3>
                <button className="topic-new-topic" onClick={()=> props.history.push("/onboard/enterTopic")}>New Topic</button>
            </div>
            <ul className="topic-card-container">
                {mappedTopics}
            </ul>
        </div>
    )
}

export default withRouter(TopicList);