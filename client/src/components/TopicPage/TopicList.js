import React, { useState, useEffect } from 'react';
import TopicCard from './TopicCard';
import axios from 'axios';

function TopicList(props){
    const { currentUser, handleTopicSession } = props

    const [ topics, setTopics ] = useState([])

    useEffect(() => {
        getUserTopics(currentUser);
    },[currentUser])
    
    const getUserTopics = user => {
        axios.get(`/topics/${user.userId}`)
            .then(res => {
                setTopics(res.data)
            })
            .catch(err => console.error(err))
    }
    const mappedTopics = topics.map(topic => <TopicCard topic = {topic} handleTopicSession = {handleTopicSession}key = {topic._id} />);

    return (
        <ul className="topic-list">Topics:
            {mappedTopics}
        </ul>
    )
}

export default TopicList;