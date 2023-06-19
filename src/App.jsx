import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'assets/App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="*" element={<FoFoPage />} />
      </Routes>
    </Router>
  )
}

export default App
