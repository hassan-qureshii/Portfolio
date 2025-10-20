import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<AllProjects />} />
  </Routes>
);

export default App;
