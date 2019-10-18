import React, { useState, useEffect }from 'react';
import '../../style/TopicPage/TopicPage.css';
import TopicList from './TopicList.js';
import TopicInstructions from './TopicInstructions.js';
import axios from 'axios';
import StartSession from './StartSession.js';
import TopicSelected from './TopicSelected.js';
import userBrowser from '../../functions/User/Browser.js';

//user for test, will be from context
// const currentUser = {
//     name: 'Bobby',
//     userId: '5da7408bf1f54a4e0898b990'
// }

function TopicPage(props){
    const [ sessionConfirm, setSessionConfirm ] = useState({topic: {}, isStarting: false});
    const [ topicSelect, setTopicSelect ] = useState({topic: {}, isSelected: false});
    const currentUser = userBrowser.get()


    const handleStart = topicIdtoStart => {
        //needs route
        props.history.push(`/session/${topicIdtoStart}`)
    }
    const handleGoBack = () => {
        setSessionConfirm({topic: {}, isStarting: false});
        setTopicSelect({topic: {}, isStarting: false});
    }
    
    const handleSmartSession = userId => {
        axios.get(`/topics/pick/${userId}`)
            .then(res => setSessionConfirm({topic: res.data, isStarting: true}))
            .catch(err => console.log(err))
    }
    const handleSelectTopic = selectedTopic => {
        setTopicSelect({topic: selectedTopic, isSelected: true})
    }

    return (
        <main className="topic-page">
            <TopicInstructions />
            <button className="topic-smart-session" onClick= {() => handleSmartSession(currentUser.userId)}>Smart Session</button>
            <TopicList currentUser = {currentUser} handleSelectTopic= {handleSelectTopic}/>
            {sessionConfirm.isStarting && 
                <StartSession 
                    topic= {sessionConfirm.topic} 
                    handleStart = {handleStart}
                    handleGoBack = {handleGoBack}/>}
            {topicSelect.isSelected && 
                <TopicSelected
                    topic= {topicSelect.topic} 
                    setSessionConfirm = {setSessionConfirm}
                    handleGoBack = {handleGoBack}/>}
                    {/* <button onClick= {() => userBrowser.add(currentUser)}>Magic Button</button> */}
        </main>
    )
}

export default TopicPage;