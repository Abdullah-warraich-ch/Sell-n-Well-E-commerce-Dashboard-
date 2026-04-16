import React from "react";
import { useLocation } from "react-router";
import { Menu } from "lucide-react";
import ThemeToggle from "@/features/theme/ThemeToggle";

function Header({ onMenuClick }) {
  const location = useLocation();
  let heading;

  switch (location.pathname) {
    case "/":
      heading = ""; // Hidden because Home.jsx renders it
      break;
    default:
      heading =
        location.pathname.replace("/", "").charAt(0).toUpperCase() +
        location.pathname.slice(2);
      break;
  }

  return (
    <header className="bg-secondary/80 backdrop-blur-md text-primary-text border-b border-border h-16 w-full flex justify-between px-4 sm:px-6 lg:px-8 items-center sticky top-0 z-30 transition-all">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary hover:bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] text-primary-text lg:hidden transition-colors"
        >
          <Menu size={20} />
        </button>
        {heading && (
          <h1 className="text-[17px] font-bold tracking-tight text-primary-text">{heading}</h1>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
