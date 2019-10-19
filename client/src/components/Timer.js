import React, { useState, useEffect } from 'react';
const Digits = (props) => props.val < 10 ? (<span>0{props.val}</span>) : (<span>{props.val}</span>)

const Timer = (props) => {
    console.log(props);
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [pause, setPause] = useState(false)

    
    props.save && props.save({hours,minutes,seconds})

    const incrementTime = () => {
        if(pause===false){
            if (seconds >= 59) {
                setSeconds(0)
                setMinutes(minutes+1)
                if(minutes >= 59){
                    setHours(hours+1)
                    setMinutes(0)
                }
            }
            else {
                setSeconds(seconds+1)
            }            
        }
    }
     
    useEffect(() => {
        const interval = setInterval(incrementTime, 1000);
        return () => clearInterval(interval);
      }, [seconds, minutes, hours, pause])

    return (
        <div style={{background: pause ? 'red' : 'lightgreen'}}>
            <Digits val={hours}/>:
            <Digits val={minutes}/>:
            <Digits val={seconds}/>
            <div>
                <button onClick={()=>{setPause(!pause)}}>Pause</button>
                <span>{pause ? "Timer paused" : ""}</span>
            </div>
        </div>
    )
  }

export default Timer