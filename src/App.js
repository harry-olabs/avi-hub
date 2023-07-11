import React from "react";
import Login from "./feature/Login";
import Registration from "./feature/Registration";
import Dashboard from "./feature/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path= "/dashboard" element={<Dashboard/>} />
  </Routes>
}

export default App;
(
  <div className="App">
    <Login />
    <Registration/>
  </div>
);
