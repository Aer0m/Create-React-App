import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Employees from './Employees';

function App(){
  return (
      <>
        <header>
          <Link to="/about">Список работников</Link>
        </header>
        <Routes>
          <Route path="/about" element={<Employees />} />
        </Routes>
      </>
  );
}

export default App;
