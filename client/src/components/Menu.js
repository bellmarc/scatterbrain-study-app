import React from 'react';
import '../style/menu.css';
import { withRouter } from 'react-router-dom';
import { clear as logout, get as isLoggedIn } from '../functions/User/Browser';

const Menu = (props) => {
  const currentUser = isLoggedIn();

  const handleLink = (path) => {
    props.history.push(path);
    props.toggleMenu()
  }

  return (
    <dialog open className="menu-container">
      <div className='menu' >
        <div className="menu-close-btn" onClick= {props.toggleMenu}>⨯</div>
        <div className="menu-option" onClick={()=>handleLink('/topics')} >Topics</div>
        <div className="menu-option" onClick={()=>handleLink('/help')} >Help</div>
        {currentUser && <div className="menu-option" onClick={()=>{
          logout()
          handleLink('/')
        }} >Log Out</div>}
      </div>
    </dialog>
  )
}

export default withRouter(Menu)