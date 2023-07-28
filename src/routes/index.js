// Routes.js
import React from "react";
import { Routes as BrowserRoutes, Route, Navigate } from "react-router-dom";
import Login from "../feature/Login";
import Registration from "../feature/Registration";
import Dashboard from "../feature/Dashboard";
import Users from "../feature/Users-profile";
import Layout from "../components/Layout/Layout";

export function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      {/* dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      {/* Pages inside the Users Profile */}
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
    </BrowserRoutes>
  );
}
