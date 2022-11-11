import "./App.css";
import { Route, Routes } from "react-router-dom";


import { Navbar } from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Products from "./Components/Products";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      
      <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
