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

function Nav() {
  return (
    <nav>
      <NavLink to="/" icon={<LayoutDashboard size={20} />} text="Dashboard" />
      <NavLink to="/orders" icon={<ShoppingBag size={20} />} text="Orders" />
      <NavLink to="/products" icon={<Box size={20} />} text="Products" />
      <NavLink to="/categories" icon={<Tag size={20} />} text="Categories" />
      <NavLink to="/sales" icon={<Percent size={20} />} text="Sales" />
      <NavLink
        to="/announcements"
        icon={<Megaphone size={20} />}
        text="Announcements"
      />
    </nav>
  );
}

export default Nav;
