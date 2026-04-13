import React from "react";
import H1 from "@/components/typography/H1";
import Nav from "./Nav";
function Sidebar() {
  return (
    <aside className="bg-secondary  h-full flex flex-col ">
      <div className="shrink-0 h-16 border-b border-border text-primary-text text-center flex items-center justify-center ">
        <H1>Admin</H1>
      </div>
      <div className="py-6 flex-1 flex flex-col">
        <Nav />
      </div>
      <div className="text-sm shrink-0 border-t border-border text-secondary-text font-medium gap-0.5 flex flex-col justify-center items-center h-16">
        <span>Super User</span>
        <p className="font-light">abdullahnasar333@gmail.com</p>
      </div>
    </aside>
  );
}

export default Sidebar;
