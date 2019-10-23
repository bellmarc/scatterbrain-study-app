import React from 'react';
import '../style/menu.css';
import { withRouter } from 'react-router-dom';
import { clear as logout, get as isLoggedIn } from '../functions/User/Browser';

const Menu = (props) => {
  const currentUser = isLoggedIn();

  const push = (path) => {
    props.history.push(path);
  }

  return (
    <dialog open className="menu-container">
      <div className='menu' style={{transition: `all ${props.speed}ms ease-out`}}>
        <button className="menu-close-btn" onClick= {props.toggleMenu}>⨯</button>
        <button onClick={()=>push('/topics')} >Topics</button>
        <button onClick={()=>push('/help')} >Help</button>
        {currentUser && <button onClick={()=>{
          logout()
          props.toggleMenu()
          push('/')
        }} >Log Out</button>}
      </div>
    </dialog>
  )
}

export default withRouter(Menu)