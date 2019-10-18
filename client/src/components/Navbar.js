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
        <>
        {menu && <Menu close={toggleMenu} speed={200}/>}
        <ul className="navbar" >
            <li><Link to = '/'>Landing</Link></li>  
            <li><Link to = '/onboard'>Onboarding</Link></li>  
            <li><Link to = '/topics'>Topics</Link></li>  
            <li><Link to = '/session'>Session</Link></li>  
            <li><Link to = '/settings'>Settings</Link></li>  
            <li><button onClick={()=>toggleMenu()}>Show Menu</button></li>  
        </ul>
        </>
        )
}


export default Navbar
