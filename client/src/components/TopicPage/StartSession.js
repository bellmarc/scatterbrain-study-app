import React from 'react';

export default function StartSession(props){
    return(
        <dialog className="start-session-dialog">
            <h3>Do you want to start a study session on {props.topic.topic}?</h3>
            <button>Start Session!</button>
        </dialog>
    )
}