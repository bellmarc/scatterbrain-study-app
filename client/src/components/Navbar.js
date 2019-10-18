import React, {useState} from 'react';
import '../style/Navbar.css';
import { Link } from "react-router-dom";
import Menu from './Menu'

function Navbar() {
    const [menu , setMenu] = useState(true)
    const closeMenu = () => {
      setMenu(!menu)
    }
    return (
        <>
        {menu && <Menu close={closeMenu} />}
        <ul className="navbar" >
            <li><Link to = '/'>Landing</Link></li>  
            <li><Link to = '/onboard'>Onboarding</Link></li>  
            <li><Link to = '/topics'>Topics</Link></li>  
            <li><Link to = '/session'>Session</Link></li>  
            <li><Link to = '/settings'>Settings</Link></li>  
            <li><button onClick={()=>setMenu(true)}>Show Menu</button></li>  
        </ul>
        </>
        )
}


export default Navbar
