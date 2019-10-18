import React, {useState,useEffect} from 'react';
import '../style/menu.css'
import { withRouter } from 'react-router-dom'  

const Menu = (props) => {
  const [className , setClassName] = useState('menu menu-off')

  const push = (path) => {
    setClassName ('menu menu-off');
    setTimeout(() => {
      props.history.push(path)
      props.close()      
    }
    ,props.speed)
  }

  useEffect(() => {
    setClassName( 'menu menu-on' )
  },[]
  )

  return props.close ? (
    <div className={className} style={{transition: `all ${props.speed}ms ease-out`}}>
      Menu
      <button onClick = { ()=>{
          setClassName ('menu menu-off')
          setTimeout(()=>props.close(),props.speed)
        } }>Close</button>
      <button onClick = { ()=>push('/topics') } >Topics</button>
      <button onClick = { ()=>push('/history') } >History</button>
      <button onClick = { ()=>push('/settings') } >Settings</button>
      <button onClick = { ()=>push('/help') } >Help</button>
      <button onClick = { ()=>{push('/landing')} } >Log Out</button>
    </div>
  )
  : (<div className="menu">Write a close function to "close" menu then pass it to Menu props as "close"</div>);

}

export default withRouter(Menu)