import React from "react";
import { Routes as BrowserRoutes, Route, Navigate } from "react-router-dom";

// components
import Login from "../feature/Login";
import Registration from "../feature/Registration";
import Dashboard from "../feature/Dashboard";
import Users from "../feature/Users";
import Layout from "../components/Layout";

export function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      {/* Hub routes - For authenticated users */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </BrowserRoutes>
  );
}
