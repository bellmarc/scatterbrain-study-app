import React, { useState } from 'react';

function TopicSelected(props){
    const { topic, deleteTopic, setSessionConfirm, setTopicSelect, handleGoBack} = props;

    const [ editTopic, setEditTopic ] = useState(false);
    const [ editState, setEditState ] = useState({
        topic:`${topic.topic}`,
        priority:`${topic.priority}`
    })  

    const handleChange = e => {
        const { name, value } = e.target;
        setEditState({
            ...editState,
            [name]:value
        })
    }

    return (
        <>
            {   
                editTopic ? (
                    <dialog className="topic-edit">
                        <form onSubmit = {console.log(editState)}>
                            <input 
                                type = "text" 
                                name = "topic"
                                value = {editState.topic}
                                onChange = {handleChange}
                            />
                            <input 
                                type = "number" 
                                name = "priority"
                                value = {editState.priority}
                                onChange = {handleChange}
                            />
                            <button type="submit">Save Changes</button>
                        </form>
                        <button onClick = {() => setEditTopic(false)}>Cancel</button>
                    </dialog>
                ):(
                    <dialog className="topic-selected">
                        {topic.topic}
                        <button 
                            onClick={() => {
                                setTopicSelect({topic: {}, isSelected: false})
                                setSessionConfirm({topic: topic, isStarting: true});
                            }}>Start
                        </button>
                        <button onClick = {() => deleteTopic(topic._id)}>Delete</button>
                        {/* <button onClick = {() => setEditTopic(true)}>Edit</button> */}
                        <button onClick = {handleGoBack}>Back</button>
                    </dialog>
                )
            }
        </>
    )
}

export default TopicSelected