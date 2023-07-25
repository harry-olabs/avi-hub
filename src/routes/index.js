import React from "react";
import { Route, Routes as BrowserRoutes, Navigate } from "react-router-dom";

// components
import Login from "../feature/Login";
import Registration from "../feature/Registration";
import Dashboard from "../feature/Dashboard";

export function Routes() {
  return (
    <BrowserRoutes>
      {/* TODO: update redirect to `dashboard` when authentication is implemente */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </BrowserRoutes>
  );
}
