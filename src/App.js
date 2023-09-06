import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      {/* Set up routing using BrowserRouter */}
      <BrowserRouter>
        <Routes>
          {/* route that matches any path ( * -> fallback route)*/}
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
