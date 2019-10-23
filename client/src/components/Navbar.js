import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import '../style/Navbar.css';
import Menu from './Menu'

function Navbar(props) {
  const [menu , setMenu] = useState(false)
  
  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  return (
    <div onClick={() => props.history.push('/')} className="navbar">
      <h1 className="navbar-title">Scatterbrain </h1>
      <h3 className="navbar-subtitle">Spaced Learning Study Tool</h3>
      <button className = 'menu-button' onClick={()=>toggleMenu()}>Menu</button>
      {menu && <Menu  toggleMenu={toggleMenu} speed={200}/>}
    </div>
  )
}


export default withRouter(Navbar)
