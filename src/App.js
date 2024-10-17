import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Homepage from './work screens/homepage';
import AboutMe from './work screens/aboutme';
import WorksScreen from './work screens/works';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/work" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/" element={<WorksScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
