import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AppleVisualizer from './pages/AppleVisualizer/AppleVisualizer';
import HomePage from './pages/homepage/HomePage';
import ProblemSettings from './pages/problem-settings/ProblemSettings';


function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/apple-visualizer" element={<AppleVisualizer />}/>
          <Route path="/problem-settings" element={<ProblemSettings />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
