import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../feature/Login";
import Registration from "../feature/Registration";
import Dashboard from "../feature/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
