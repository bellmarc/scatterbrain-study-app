import React, { useState, useEffect } from 'react';

const Digits = (props) => props.val < 10 ? (<span>0{props.val}</span>) : (<span>{props.val}</span>)

const Timer = (props) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [pause, setPause] = useState(false)
    
    // props.save && props.save({hours,minutes,seconds})
    
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
        <section className="session-timer-container" >
            <div className="timer-clock" style= {pause ? {color:'#b9bdc0'}: {}}>
                <Digits val={hours}/>:
                <Digits val={minutes}/>:
                <Digits val={seconds}/>
            </div>
            <button className={`timer-button ${pause ? 'resume':'pause'}`} onClick={()=>{setPause(!pause)}}>{pause ? 'Resume':'Pause'}</button>
        </section>
    )
  }

export default Timer