import React from "react";
import { X } from "lucide-react";
import H1 from "@/components/typography/H1";
import Nav from "./Nav";

function Sidebar({ onNavigate }) {
  return (
    <aside className="bg-secondary h-full flex flex-col">
      <div className="shrink-0 h-16 border-b border-border text-primary-text flex items-center justify-between px-4 lg:justify-center lg:px-0">
        <H1>Admin</H1>
        <button
          type="button"
          onClick={onNavigate}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-primary text-primary-text lg:hidden"
        >
          <X size={18} />
        </button>
      </div>
      <div className="py-3 lg:py-6 flex-1 flex flex-col">
        <Nav onNavigate={onNavigate} />
      </div>
      <div className="hidden text-sm shrink-0 border-t border-border text-secondary-text font-medium gap-0.5 lg:flex flex-col justify-center items-center h-16">
        <span>Super User</span>
        <p className="font-light">abdullahnasar333@gmail.com</p>
      </div>
    </aside>
  );
}

export default Sidebar;
