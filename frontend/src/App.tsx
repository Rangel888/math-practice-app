import { BroswserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visualizer from './AppleVisualizer';
import AppleVisualizer from './AppleVisualizer';


function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppleVisualizer />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
