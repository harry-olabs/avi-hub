import React from "react";
import { Routes as BrowserRoutes, Route, Navigate } from "react-router-dom";

import Login from "../feature/Login";
import Registration from "../feature/Registration";
import Dashboard from "../feature/Dashboard";
import Users from "../feature/Users";
import Layout from "../components/Layout";
import { EmployeeProvider } from "../feature/Users/UserContext/EmployeeContext";

export function Routes() {
  return (
    <EmployeeProvider>
      <BrowserRoutes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </BrowserRoutes>
    </EmployeeProvider>
  );
}
