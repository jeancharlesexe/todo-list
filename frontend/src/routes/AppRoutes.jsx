import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Index';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;