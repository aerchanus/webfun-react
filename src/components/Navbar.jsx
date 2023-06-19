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
        <div className={varsixsix}></div>
        <nav className="navbar">
             <ul>
                <li>
                    <a href="/" className="noselect">NuTools</a>
                </li>
                <li className="hamburger-icon noselect" onClick={openSideNav}>
                 <a className="flex-centre">☰</a>
                </li>
            </ul>            
        </nav>
        <div className={varsixnine}>
            <div className="sidenav-header">
                <img src="" alt="Logo" className="noselect"/>
                <div className="sidenav-closebtn noselect" onClick={closeSideNav}>
                    X
                </div>
            </div>
            <aside className="sidenav-links">
                <div className="sidenav-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="sidenav-link">
                    <Link to="/">Tools</Link>
                </div>
                <div className="sidenav-tools-dropdown">
                    <div className="sidenav-link">
                        <Link to="/tools/randhex">Random Hex Colour</Link>
                    </div>
                    <div className="sidenav-link">
                        <Link to="/tools/notes">LocalStorage Notes</Link>
                    </div>
                </div>
                <div className="sidenav-link">
                    <Link to="/">Contact</Link>
                </div>

            </aside>
        </div>
        </>
        
    )

}

export default Navbar;
