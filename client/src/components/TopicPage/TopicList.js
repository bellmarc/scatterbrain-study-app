import React, { useState} from 'react';
import TopicCard from './TopicCard';
import axios from 'axios';
import TopicInstructions from './TopicInstructions';

function TopicList(props){
    const { userName: name, userId } = props.currentUser;

    const [ topics, setTopics] = useState([])

    const getUsers = () => {
        axios.get()
    }
    const mappedTopics = props.map(topic => <TopicCard topic = {topic} key = {topic._id} />);

    return (
        <ul className="topic-list">
            {mappedTopics}
        </ul>
    )
}

export default TopicList;