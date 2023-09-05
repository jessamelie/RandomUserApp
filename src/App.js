import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Homepage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
