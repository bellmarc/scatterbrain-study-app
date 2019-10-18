import React from 'react';
import {clear as logout} from '../functions/User/Browser' 

const Landing = (props) => {
  logout()
  return (
      <div>
          Landing
      </div>
  )
}

export default Landing