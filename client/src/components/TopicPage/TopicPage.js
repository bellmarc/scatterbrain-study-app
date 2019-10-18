import React, { useState }from 'react';
import '../../style/TopicPage/TopicPage.css';
import TopicList from './TopicList.js';
import TopicInstructions from './TopicInstructions.js';
import axios from 'axios';
import StartSession from './StartSession.js';
import TopicSelected from './TopicSelected.js';
import userBrowser from '../../functions/User/Browser.js';

//dev user
// {
//     "_id": "5da91ba590e48b01c57fa30c",
//     "name": "Dan"
// }

function TopicPage(props){
    const [ sessionConfirm, setSessionConfirm ] = useState({topic: {}, isStarting: false});
    const [ topicSelect, setTopicSelect ] = useState({topic: {}, isSelected: false});
    const [ topics, setTopics ] = useState([])
    
    const currentUser = userBrowser.get();

    const handleStart = topicIdtoStart => {
        //needs route
        props.history.push(`/session/${topicIdtoStart}`)
    }
    const handleGoBack = () => {
        setSessionConfirm({topic: {}, isStarting: false});
        setTopicSelect({topic: {}, isSelected: false});
    }
    
    const handleSmartSession = userId => {
        axios.get(`/topics/pick/${userId}`)
            .then(res => setSessionConfirm({topic: res.data, isStarting: true}))
            .catch(err => console.log(err))
    }
    const handleSelectTopic = selectedTopic => {
        setTopicSelect({topic: selectedTopic, isSelected: true})
    }
    const deleteTopic = topicId => {
        axios.delete(`/topics/${currentUser._id}/${topicId}`)
            .then(res => {
                const indexToDelete = topics.findIndex(topic => topic._id === res.data._id)
                const newTopics = [...topics]
                newTopics.splice(indexToDelete, 1)
                setTopics(newTopics)
                setTopicSelect({topic:{}, isSelected: false})
            })
            .catch(err => console.error(err))
    }

    return (
        <main className="topic-page">
            <TopicInstructions />
            <button className="topic-smart-session" onClick= {() => handleSmartSession(currentUser._id)}>Smart Session</button>
            <TopicList 
                currentUser = {currentUser} 
                handleSelectTopic = {handleSelectTopic}
                topics = {topics}
                setTopics = {setTopics}
            />
            {sessionConfirm.isStarting && 
                <StartSession 
                    topic= {sessionConfirm.topic} 
                    handleStart = {handleStart}
                    handleGoBack = {handleGoBack}/>}
            {topicSelect.isSelected && 
                <TopicSelected
                    topic = {topicSelect.topic} 
                    setSessionConfirm = {setSessionConfirm}
                    setTopicSelect = {setTopicSelect}
                    handleGoBack = {handleGoBack}
                    deleteTopic = {deleteTopic}
                />
            }
                    {/* <button onClick= {() => {
                        userBrowser.add({name: "Dan", _id: "5da91ba590e48b01c57fa30c"})
                        console.log('magic button pressed')
                    }}>Magic Dev Button</button> */}
        </main>
    )
}

export default TopicPage;