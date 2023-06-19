import React from "react";

import { Link } from "react-router-dom";


import Navbar from "../components/Navbar.jsx";

function HomePage() {
    return (
        <>
            <Navbar />
                <div className="page">
                    <h1>Home</h1>

                    <Link to="/" >Home</Link>
                    <Link to="/tools">Tools</Link>
                    <Link to="/contact">Contact</Link>

                </div>
        </>
    )
}

export default HomePage;