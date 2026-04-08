import React from "react";
import { Link } from "react-router";

function NavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex gap-4 mb-1 leading-6 text-[16px] items-center hover:bg-primary px-4 py-3 text-secondary-text rounded-lg"
    >
      {icon} <h3>{text}</h3>
    </Link>
  );
}

export default NavLink;
