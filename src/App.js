import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./Routes/Events";
import Main from "./Routes/Main";
import Offices from "./Routes/Offices";
import OurBlog from "./Routes/OurBlog";
import Partner from "./Routes/Partner";
import LC from "./Routes/LC";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/blog" element={<OurBlog />} />
      <Route path="/events" element={<Events />} />
      <Route path="/offices" element={<Offices />} />
      <Route path="/lc" element={<LC />} />
      {/* <p>Change tester</p> */}
    </Routes>
  );
}

export default App;
