import React, { useState, useEffect } from 'react';
import TopicCard from './TopicCard';
import axios from 'axios';

function TopicList(props){
    const { currentUser, handleSelectTopic } = props

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
    const mappedTopics = topics.map(topic => <TopicCard topic = {topic} handleSelectTopic = {handleSelectTopic} key = {topic._id} />);

    return (
        <ul className="topic-list">Topics
            {mappedTopics}
        </ul>
    )
}

export default TopicList;