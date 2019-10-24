import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import '../style/Navbar.css';
import Menu from './Menu.js';
import userBrowser from '../functions/User/Browser.js'


function Navbar(props) {
  const [menu , setMenu] = useState(false)
  const currentUser = userBrowser.get()
  
  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  return (
    <div className="navbar">
      <h1 className="navbar-title" onClick={() => props.history.push('/')}>Scatterbrain </h1>
      <h3 className="navbar-subtitle" >Spaced Learning Study Tool</h3>
      {currentUser && <button className = 'menu-button' onClick={()=>toggleMenu()}>Menu</button>}
      {menu && <Menu  toggleMenu={toggleMenu} speed={200}/>}
    </div>
  )
}


export default withRouter(Navbar)
