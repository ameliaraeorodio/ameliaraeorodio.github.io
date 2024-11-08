import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './work screens/homepage';
import AboutMe from './work screens/aboutme';
import WorksScreen from './work screens/works';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/works" element={<WorksScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
