import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <div className="title">
        <h1>Welcome to Random User App</h1>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Homepage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
