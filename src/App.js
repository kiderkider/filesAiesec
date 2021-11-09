import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Events from './Routes/Events';
import Main from './Routes/Main';
import Offices from './Routes/Offices';
import OurBlog from './Routes/OurBlog';



function App() {
  return (
    <Routes>
    <Route path="/aiesecsite" element={<Main />} />
    <Route path="/ourblog" element={<OurBlog />} />
    <Route path="/events" element={<Events />} />
    <Route path="/offices" element={<Offices />} />
    </Routes>
  );
}

export default App;
