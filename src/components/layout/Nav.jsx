import React from "react";
import NavLink from "./NavLink";
import {
  LayoutDashboard,
  ShoppingBag,
  Box,
  Tag,
  Percent,
  Megaphone,
} from "lucide-react";

function Nav({ onNavigate }) {
  return (
    <nav className="space-y-1 px-3 lg:px-0 lg:pr-4">
      <NavLink
        to="/"
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        onClick={onNavigate}
      />
      <NavLink
        to="/orders"
        icon={<ShoppingBag size={20} />}
        text="Orders"
        onClick={onNavigate}
      />
      <NavLink
        to="/products"
        icon={<Box size={20} />}
        text="Products"
        onClick={onNavigate}
      />
      <NavLink
        to="/categories"
        icon={<Tag size={20} />}
        text="Categories"
        onClick={onNavigate}
      />
      <NavLink
        to="/sales"
        icon={<Percent size={20} />}
        text="Sales"
        onClick={onNavigate}
      />
      <NavLink
        to="/announcements"
        icon={<Megaphone size={20} />}
        text="Announcements"
        onClick={onNavigate}
      />
    </nav>
  );
}

export default Nav;
