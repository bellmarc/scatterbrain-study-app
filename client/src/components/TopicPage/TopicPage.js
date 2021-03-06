import React, { useState, useEffect }from 'react';
import '../../style/TopicPage.css';
import TopicList from './TopicList.js';
import TopicInstructions from './TopicInstructions.js';
import axios from 'axios';
import StartSession from './StartSession.js';
import TopicSelected from './TopicSelected.js';
import { get as getUser } from '../../functions/User/Browser.js';


function TopicPage(props){
    const [ sessionConfirm, setSessionConfirm ] = useState({topic: {}, isStarting: false});
    const [ topicSelect, setTopicSelect ] = useState({topic: {}, isSelected: false});
    const [ topics, setTopics ] = useState([])
    const currentUser = getUser();
    
    useEffect(() => {
        currentUser ? getUserTopics(currentUser) : props.history.push('/');
    },[])

    const getUserTopics = (user) => {
        axios.get(`/topics/${user._id}`)
            .then(res => {
                setTopics(res.data)
            })
            .catch(err => console.error(err))
    }
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
            .then(res => {
                if (res.data.topic){
                setSessionConfirm({topic: res.data, isStarting: true})
                } else {
                    window.alert("You don't have any topics!")
                }
            })
            .catch(err => console.log(err))
    }
    const handleSelectTopic = selectedTopic => {
        setTopicSelect({topic: selectedTopic, isSelected: true})
    }
    const deleteTopic = topicId => {
        const confirm = window.confirm(`Are you sure you want to delete that topic?`)
        if (confirm) {
            axios.delete(`/topics/${currentUser._id}/${topicId}`)
            .then(res => {
                setTopics(prevTopics => {
                    const indexToDelete = prevTopics.findIndex(topic => topic._id === res.data._id)
                    prevTopics.splice(indexToDelete, 1)
                    return prevTopics
                })
                setTopicSelect({topic:{}, isSelected: false})
            })
            .catch(err => console.error(err))
        }
    }

    return (
        <main className="topic-page">
            <TopicInstructions />
            <button className="topic-smart-session" onClick= {() => handleSmartSession(currentUser._id)}>Smart Session</button>
            <TopicList
                handleSelectTopic = {handleSelectTopic}
                topics = {topics}
                deleteTopic = {deleteTopic}
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
                    currentUser = {currentUser}
                    setTopics = {setTopics}
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