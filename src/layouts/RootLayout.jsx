import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function RootLayout() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
