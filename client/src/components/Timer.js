import React, { useState, useEffect } from 'react';

const Digits = (props) => {
  return props.val < 10 ? (
      <span>0{props.val}</span>
  )
  : (
    <span>{props.val}</span>
  )
}

const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
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
        }, 1000);
        return () => clearInterval(interval);
      }, [seconds, minutes, hours])

    return (
        <div>
            <Digits val={hours}/>:
            <Digits val={minutes}/>:
            <Digits val={seconds}/>
        </div>
    )
  }

export default Timer