//dependency imports
import React from "react";
import {Link, Outlet} from 'react-router-dom';
// import array from app.js
import { toolList } from "../App";
import Navbar from "../components/Navbar.jsx";


function ToolsPage() {
    return (
        <>
            <Navbar />
            <div className="page">
                <div className="page-content-center-tall">
                    <div className="header">
                        <h1>Tools</h1>
                    </div>
                    <nav className="toolsnav">
                        {toolList.map((tool) => (
                            <li key={tool.id} className="toolItem">
                                <Link to={tool.url} state={tool}>
                                    {tool.title}
                                </Link>
                            </li>
                        ))}
                    </nav>
                    <Outlet />
                </div>
            </div>
        </>
    )
};
export default ToolsPage;