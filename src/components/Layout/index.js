import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className={style.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
