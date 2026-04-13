import React from "react";
import { useLocation } from "react-router";
import { Menu } from "lucide-react";
import ThemeToggle from "@/features/theme/ThemeToggle";
import H1 from "@/components/typography/H1";

function Header({ onMenuClick }) {
  const location = useLocation();
  console.log(location.pathname);
  let heading;

  switch (location.pathname) {
    case "/":
      heading = "Dashboard";
      break;
    default:
      heading =
        location.pathname.replace("/", "").charAt(0).toUpperCase() +
        location.pathname.slice(2);
      break;
  }

  return (
    <header className="bg-secondary text-primary-text border-b border-border h-16 w-full text-primary flex justify-between px-4 sm:px-6 lg:px-8 items-center">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-primary text-primary-text lg:hidden"
        >
          <Menu size={18} />
        </button>
        <H1>{heading}</H1>
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
