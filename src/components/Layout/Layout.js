// Layout.js
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
