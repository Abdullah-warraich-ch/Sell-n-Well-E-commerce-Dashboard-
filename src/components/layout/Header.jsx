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
    <header className="bg-secondary/70 backdrop-blur-lg text-primary-text h-16 w-full flex justify-between px-4 sm:px-6 items-center sticky top-0 z-30 transition-all">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-info)_10%,transparent)] hover:text-info text-primary-text lg:hidden transition-colors"
        >
          <Menu size={20} />
        </button>
        {heading && (
          <h1 className="text-[17px] font-semibold tracking-tight text-primary-text">{heading}</h1>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
