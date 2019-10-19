import React, {useState} from 'react';
import Timer from './Timer';
import { get as getUser } from '../functions/User/Browser'
import Axios from 'axios';

const InSession = (props) => {
  const [done, setDone] = useState({})
  const stopSession = ()=>{
        Axios.put(`/topics/sessionComplete/${getUser()._id}`);
        setDone({ save: function (time) {
                    props.history.push(`/topics/${
                    time.hours}/${
                    time.minutes}/${
                    time.seconds}`)
                } }
        )
    }
  return (
    <div>
        <Timer {...done} />
            <button onClick={
                ()=>stopSession()
            }>Stop Session</button>
    </div>
  )
}
export default InSession