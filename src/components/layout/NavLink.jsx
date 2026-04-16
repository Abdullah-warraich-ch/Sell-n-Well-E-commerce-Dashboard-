import React from "react";
import { Link } from "react-router";
import { useMatch } from "react-router";

function NavLink({ to, icon, text, onClick }) {
  const match = useMatch(to);
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group flex items-center gap-3 px-4 py-3 mx-3 my-1 rounded-xl text-[14px] font-semibold transition-all duration-200 ${
        match 
          ? "bg-[color-mix(in_srgb,var(--color-info)_8%,transparent)] text-info" 
          : "text-secondary-text hover:bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] hover:text-primary-text"
      }`}
    >
      <div className={`transition-transform duration-200 ${match ? "scale-110" : "group-hover:scale-[1.05]"}`}>
        {icon}
      </div>
      <span>{text}</span>
    </Link>
  );
}

export default NavLink;
