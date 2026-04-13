import React from "react";
import { Link } from "react-router";
import { useMatch } from "react-router";

function NavLink({ to, icon, text, onClick }) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex gap-3 leading-6 text-[15px] font-medium tracking-[-0.01em] items-center px-4 py-3 rounded-xl lg:rounded-tr-lg lg:rounded-br-xl lg:rounded-tl-none lg:rounded-bl-none ${match ? "border border-blue-500 text-blue-500 bg-select lg:border-l-4 lg:border-t-0 lg:border-r-0 lg:border-b-0" : "hover:bg-primary text-secondary-text border border-transparent lg:border-l-0"}`}
    >
      {icon} <h3 className={`${match ? "text-primary-text" : ""}`}>{text}</h3>
    </Link>
  );
}

export default NavLink;
