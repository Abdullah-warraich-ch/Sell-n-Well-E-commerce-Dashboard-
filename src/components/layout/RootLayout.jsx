import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function RootLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/6 border-r border-border shrink-0">
        <Sidebar />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 shrink-0">
          <Header />
        </div>

        {/* Scrollable Outlet */}
        <div className="flex-1 overflow-y-auto home-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
