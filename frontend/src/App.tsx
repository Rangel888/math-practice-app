import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AppleVisualizer from './pages/AppleVisualizer/AppleVisualizer';
import HomePage from './pages/homepage/HomePage';


function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/apple-visualizer" element={<AppleVisualizer />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
