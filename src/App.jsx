import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/App.css';

import HomePage from './pages/Home';
import ToolsPage from './pages/Tools';
import FoFoPage from './pages/FoFo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="*" element={<FoFoPage />} />
      </Routes>
    </Router>
  )
}

export default App
