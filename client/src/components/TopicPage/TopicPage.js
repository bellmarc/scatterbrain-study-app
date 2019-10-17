import React, { useState }from 'react';
import '../../style/TopicPage/TopicPage.css';
import TopicList from './TopicList';
import TopicInstructions from './TopicInstructions';
import axios from 'axios';
import StartSession from './StartSession';

//user for test, will be from context
const currentUser = {
    name: 'Bobby',
    userId: '5da7408bf1f54a4e0898b990'
}

function TopicPage(props){
    const [ sessionStartDialog, setSessionStartDialog] = useState({topic: {}, isStarting: false})
    
    const handleTopicSession = topic => {

    }
    const handleSmartSession = userId => {
        axios.get(`/topics/pick/${userId}`)
            .then(res => sessionStartDialog({topic: res.data, isStarting: true}))
            .catch(err => console.log(err))
    }

    return (
        <main className="topic-page">
            <TopicInstructions />
            {/* <TopicInfo /> */}
            <button className="topic-smart-session" onClick= {() => handleSmartSession(currentUser.userId)}>Smart Session</button>
            <TopicList currentUser = {currentUser}/>
            {sessionStartDialog.isStarting} && <StartSession topic= {sessionStartDialog.topic} />
        </main>
    )
}

export default TopicPage;