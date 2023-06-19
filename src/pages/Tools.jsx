import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ToolsPage() {
    return (
        <>
        <Navbar />
            <div className="page">
                <div className="page-content-center-tall">
                <div className="header">
                    <h1>Tools</h1>
                    <p>Below are links to some of the tools i have made.</p>
                </div>
                <section>
                    <h2>Random Hex Colour Generator</h2>
                    <p><span>About : </span>This tool randomly generates a colour for you and shows the hex value.</p>
                </section>

                </div>
            </div>
    </>
)
}

export default ToolsPage;