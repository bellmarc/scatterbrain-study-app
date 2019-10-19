import React from 'react';
import { get as getUser } from "../functions/User/Browser"


const Landing = (props) => {
  const user = getUser()
  if(user.name){props.history.push('/topics')} else {props.history.push('/onboard')}
  return (
      <div>
          Landing
      </div>
  )
}

export default Landing