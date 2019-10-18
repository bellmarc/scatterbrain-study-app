import React, { useEffect } from 'react';
import TopicCard from './TopicCard';
import axios from 'axios';

function TopicList(props){
    const { currentUser, topics, setTopics, handleSelectTopic } = props

    useEffect(() => {
        getUserTopics(currentUser);
    },[])
    
    const getUserTopics = user => {
        axios.get(`/topics/${user._id}`)
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