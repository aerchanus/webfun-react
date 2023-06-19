import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {openNav,closeNav} from '../slices/sidenavSlice';
import { showOverlay, hideOverlay } from "../slices/overlaySlice";
import "../assets/navbar.css";

function Navbar() {
    const varsixsix = useSelector(state => state.overlay.value)
    const varsixnine = useSelector(state => state.sidenav.value)
    const dispatch = useDispatch()
    function openSideNav() {
        dispatch(openNav());
        dispatch(showOverlay());
    }
    function closeSideNav() {
        dispatch(closeNav());
        dispatch(hideOverlay());
    }

    return (
        <>
        <div className={varsixsix} onClick={closeSideNav}></div>
        <nav className="navbar">
             <ul>
                <li>
                    <Link to="/">NuTools</Link>
                </li>
                <li className="hamburger-icon noselect" onClick={openSideNav}>
                 <a className="flex-centre">☰</a>
                </li>
            </ul>            
        </nav>
        <div className={varsixnine}>
            <div className="sidenav-header">
                <img src="/NuSetLogo.png" alt="Logo" className="nav-logo noselect"/>
                <div className="sidenav-closebtn noselect" onClick={closeSideNav}>
                    X
                </div>
            </div>
            <aside className="sidenav-links">
                <div className="sidenav-link">
                    <Link to="/" onClick={closeSideNav}>Home</Link>
                </div>
                <div className="tools-link">
                    <div className="sidenav-link">
                        <Link to="/tools" onClick={closeSideNav}>↓   Tools   ↓</Link>
                    </div>
                    <div className="sidenav-tools-dropdown">
                        <div className="sidenav-link">
                            <Link to="/tools/randhex" onClick={closeSideNav}>Random Hex Colour</Link>
                        </div>
                        <div className="sidenav-link">
                            <Link to="/tools/notes" onClick={closeSideNav}>LocalStorage Notes</Link>
                        </div>
                    </div>
                    
                </div>
                
                <div className="sidenav-link">
                    <Link to="/contact" onClick={closeSideNav}>Contact</Link>
                </div>

            </aside>
        </div>
        </>
        
    )

}

export default Navbar;
