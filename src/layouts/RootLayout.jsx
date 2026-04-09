import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function RootLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-1/4 border-r border-border h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
