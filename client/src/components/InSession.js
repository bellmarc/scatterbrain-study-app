import React, {useState} from 'react';
import Timer from './Timer';

const InSession = (props) => {
  const [save, setSave] = useState({})

  const savedTime = (time) => {
      console.log(time)
      return time;
  }

  return (
      <div>
          <Timer {...save} />
          <button onClick={()=>setSave({save:savedTime})}>Stop Session</button>
      </div>
  )
}

export default InSession