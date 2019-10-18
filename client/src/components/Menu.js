import React from 'react';
import '../style/menu.css'
import { withRouter } from 'react-router-dom'  

const Menu = (props) => {
  
  const push = (path) => {
    props.history.push(path)
    props.close()
  }
  
  return props.close ? (
      <div className="menu">
        Menu
        <button onClick = { props.close }>Close</button>
        <button onClick = { ()=>push('/topics') } >Topics</button>
        <button onClick = { ()=>push('/history') } >History</button>
        <button onClick = { ()=>push('/settings') } >Settings</button>
        <button onClick = { ()=>push('/help') } >Help</button>
        <button className="bottom">Log Out</button>
      </div>
  )
  : (<div className="menu">Write a close function to "close" menu then pass it to Menu props as "close"</div>);

}

export default withRouter(Menu)