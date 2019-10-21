import React, {useState} from 'react';
import '../style/Navbar.css';
import { Link } from "react-router-dom";
import Menu from './Menu'

function Navbar() {
    const [menu , setMenu] = useState(false)
    const toggleMenu = () => {
      setMenu(!menu)
    }
    
    return (
        <div className="navbar">
          <h1 className="navbar-title">Scatterbrain </h1>
          <h3 className="navbar-subtitle">Spaced Learning Study Tool</h3>
          <button className = 'menu-button' onClick={()=>toggleMenu()}>Menu</button>
          {menu && <Menu close={toggleMenu} speed={200}/>}
        </div>
        )
}


export default Navbar
