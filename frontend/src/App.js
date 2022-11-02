import "./App.css";
import HomeScreen from "./screens/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./anatomy/Navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

function App() {
  const style = {
    background: " rgba(16,48,69,1) ",
  };
  // this state will be shared with all components
  const [lightMode, setLightMode] = useState(true);
  const lightTheme = {
    primaryBlue: "#4c9cb8",
    secondaryBlue: "#103045",
    primaryMono: "#fff",
    secondaryMono: "#000",
  };
  const darkTheme = {
    primaryBlue: "#103045",
    secondaryBlue: "#4c9cb8",
    primaryMono: "#000",
    secondaryMono: "#fff",
  };
  const [currentTheme, setCurrentTheme] = useState(lightMode?lightTheme:darkTheme)
  const toggleTheme = () => {
    setLightMode(!lightMode)
    setCurrentTheme(lightMode?lightTheme:darkTheme)
    console.log(lightMode)
    console.log(currentTheme)
  }
  return (
    <BrowserRouter>
    <GlobalContext.Provider value={{lightMode,setLightMode,currentTheme,setCurrentTheme,toggleTheme}}>
        <div>
          <Navbar></Navbar>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
            </Routes>
          </main>
        </div>
</GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
