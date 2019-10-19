import React, { useState } from 'react';
import axios from 'axios';

function TopicSelected(props){
    const { topic, currentUser, deleteTopic, setTopics, setSessionConfirm, setTopicSelect, handleGoBack} = props;

    const [ editingTopic, setEditingTopic ] = useState(false);
    const [ formState, setFormState ] = useState({
        topic:`${topic.topic}`,
        priority:`${topic.priority}`
    })  

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({...prevState,[name]:value}))
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        const changedTopic = {topic: formState.topic, currentWeight: Number(formState.priority)}
        console.log(changedTopic)
        axios.put(`/topics/${currentUser._id}/${topic._id}`, changedTopic)
            .then(res => {

                setTopics(prevTopics => {
                    const newTopicIndex = prevTopics.findIndex(prevTopic => prevTopic._id === topic._id);
                    prevTopics[newTopicIndex] = res.data;
                    return [...prevTopics]
                })
                setTopicSelect({topic: res.data, isSelected: true})
                setEditingTopic(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {   
                editingTopic ? (
                    <dialog className="topic-edit">
                        <form onSubmit = {handleSubmit}>
                            <input 
                                type = "text" 
                                name = "topic"
                                required
                                value = {formState.topic}
                                onChange = {handleChange}
                            />
                            <input 
                                type = "number"
                                min = "0"
                                max = "5"
                                step = "1"
                                name = "priority"
                                value = {formState.priority}
                                onChange = {handleChange}
                            />
                            <button type="submit">Save Changes</button>
                        </form>
                        <button onClick = {() => setEditingTopic(false)}>Cancel</button>
                    </dialog>
                ):(
                    <dialog className="topic-selected">
                        <div className="topic-selected-header">
                            <span>Topic: {topic.topic} </span>
                            <span>Priority: {topic.priority} </span>
                        </div>
                        <button 
                            onClick={() => {
                                setTopicSelect({topic: {}, isSelected: false})
                                setSessionConfirm({topic: topic, isStarting: true});
                            }}>Start
                        </button>
                        <button onClick = {() => deleteTopic(topic._id)}>Delete</button>
                        <button onClick = {() => setEditingTopic(true)}>Edit</button>
                        <button onClick = {handleGoBack}>Back</button>
                    </dialog>
                )
            }
        </>
    )
}

export default TopicSelected