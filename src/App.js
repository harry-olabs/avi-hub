import React from "react";
import "./App.css";
import Login from "./feature/Login";
import Registration from "./feature/Registration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Registration />} />
    </Routes>
  );
}

export default App;
<div className="App">
  <Login />
  <Registration />
</div>;
