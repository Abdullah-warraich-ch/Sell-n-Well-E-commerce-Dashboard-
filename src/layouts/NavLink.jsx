import React from "react";
import { Link } from "react-router";
import { useMatch } from "react-router";

function NavLink({ to, icon, text }) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={`flex gap-4  leading-6 text-[16px] items-center px-4 py-3  rounded-tr-lg rounded-br-xl   ${match ? "border-l-4 text-blue-500 border-blue-500 bg-select" : "pl-5 hover:bg-primary text-secondary-text border-l-0"}`}
    >
      {icon} <h3 className={`${match ? "text-primary-text" : ""}`}>{text}</h3>
    </Link>
  );
}

export default NavLink;
