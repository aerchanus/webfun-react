import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css"

function Navbar() {
    return (
        
        <nav className="navbar">
             <ul>
                <li>
                    <a href="/" className="noselect">NuTools</a>
                </li>
                <li className="hamburger-icon noselect" >
                 <a className="flex-centre">☰</a>
                </li>
            </ul>            
        </nav>
       
    )

}

export default Navbar;
