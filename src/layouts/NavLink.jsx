import React from "react";
import { Link } from "react-router";
import { useMatch } from "react-router";

function NavLink({ to, icon, text }) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={`flex gap-4 mb-1 leading-6 text-[16px] items-center px-4 py-3  rounded-lg ${match ? "text-blue-500 bg-select" : "hover:bg-primary text-secondary-text"}`}
    >
      {icon} <h3>{text}</h3>
    </Link>
  );
}

export default NavLink;
