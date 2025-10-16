  import React from 'react';
  import Home from './Components/Home';
  import { Routes, Route } from "react-router-dom";
  import AllProjects from './Components/AllProjects';  // 👈 fixed: lowercase "components"

  const App = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<AllProjects />} />
        </Routes>
      </div>
    );
  };

  export default App;