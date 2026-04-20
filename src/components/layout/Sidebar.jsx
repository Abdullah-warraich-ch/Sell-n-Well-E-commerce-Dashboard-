import React from "react";
import { X, LogOut } from "lucide-react";
import Nav from "./Nav";
import { useAuth } from "@/Context/AuthContext";

function Sidebar({ onNavigate }) {
  const { logout, user } = useAuth()
  console.log(user.email);
  return (
    <aside className="bg-secondary h-full flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="shrink-0 h-16 text-primary-text flex items-center justify-between px-6 lg:justify-start gap-3">
        <img
          src="/ayn.png"
          alt="AYN"
          className="h-8 w-auto object-contain"
        />
        <span className="font-semibold text-[16px] tracking-tight hidden lg:block">AYN Store</span>
        <button
          type="button"
          onClick={onNavigate}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary text-secondary-text lg:hidden ml-auto transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      <div className="py-6 flex-1 flex flex-col overflow-y-auto home-scrollbar">
        <Nav onNavigate={onNavigate} />
      </div>
      <div className="p-4 shrink-0 border-t border-border/60">
        <div className="flex items-center gap-3 p-3 rounded-xl transition-colors ">
          <div className="w-9 h-9 rounded-full bg-[color-mix(in_srgb,var(--color-info)_15%,transparent)] text-info flex items-center justify-center font-semibold text-sm shadow-sm group-hover:scale-105 transition-transform">
            AM
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary-text group-hover:text-info transition-colors">{user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)}</span>
              <span className="text-xs text-secondary-text font-medium truncate w-[130px] opacity-90">{user.email}</span>
            </div>
            <button onClick={logout} className="flex items-center gap-2 text-danger hover:bg-primary p-2 rounded cursor-pointer"><LogOut /></button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
