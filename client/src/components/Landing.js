import React, { useEffect } from 'react';
import { get as getUser } from "../functions/User/Browser"


const Landing = (props) => {
  const user = getUser()
  
  useEffect(() => {
    if(user.name){
      props.history.push('/topics');
    } else {
      props.history.push('/onboard')
    }
  }, [])

  return (
      <div>
          You should not be here ;_;
      </div>
  )
}

export default Landing