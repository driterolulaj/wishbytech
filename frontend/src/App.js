import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./anatomy/Navbar";
import Homescreen from "./screens/Homescreen";
import "../src/styles/App.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homescreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
