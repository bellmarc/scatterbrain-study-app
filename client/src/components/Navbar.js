import React from 'react';
import '../style/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul className="navbar" >
            <li><Link to = '/'>Landing</Link></li>  
            <li><Link to = '/onboard'>Onboarding</Link></li>  
            <li><Link to = '/topics'>Topics</Link></li>  
            <li><Link to = '/session'>Session</Link></li>  
            <li><Link to = '/settings'>Settings</Link></li>  
            <li><Link to = '/help'>Help</Link></li>  
        </ul>
        )
}


export default Navbar
