import React from 'react';
import { withRouter } from 'react-router-dom'

function StartSession(props){
    const handleStart = topic => {
        props.history.push('/session')
    }
    return(
        <dialog className="start-session-dialog" open = {true}>
            <h3>Do you want to start a study session on {props.topic.topic}?</h3>
            <button onClick= {() => handleStart()}>Start Session!</button>
        </dialog>
    )
}

export default withRouter(StartSession)