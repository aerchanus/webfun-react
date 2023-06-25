import React from "react";
import {Link,
    useLocation
  } from 'react-router-dom';
import { toolList } from "../App";
  
function Tool() {
    const location = useLocation();
    const ThisTool = location.state; 
    const toolTitle = ThisTool.title;
    const toolDesc = ThisTool.desc;
    return (
        <>
        <h2>Product: {toolTitle}</h2>
        <p>Description: {toolDesc} </p>

        <Link to="/tools"> Back to products</Link>

        </>
    )
}

export default Tool;