import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import '../../style/InSession.css'
import { get as getUser } from '../../functions/User/Browser'
import Axios from 'axios';

const InSession = (props) => {
  // const [ done, setDone ] = useState({});
  const [ topic, setTopic ] = useState({});
  const { topicId } = props.match.params;
  const currentUser = getUser();
  
  
  const getTopic = () => {
    Axios.get(`/topics/${currentUser._id}/${topicId}`)
    .then(res => {
      setTopic(res.data);
    })
    .catch(err => console.error(err))
  }

  useEffect(getTopic,[])

  const stopSession = () => {
    const confirm = window.confirm('Are you sure you want to end your session?')
    if (confirm) {
      Axios.put(`/topics/sessionComplete/${currentUser._id}`, {topicId: topicId})
      .then(res => {
        props.history.push('/topics')
      })
      .catch(err => console.error(err))
    }
  }

  return (
    <main className="session-page">
        <section className="session-header-container">
          <h3>You're Studying:</h3>
          <h1>{topic.topic}</h1>
        </section>
        <Timer />
        <button className="session-stop-button" onClick={stopSession}>Stop Session</button>
    </main>
  )
}
export default InSession