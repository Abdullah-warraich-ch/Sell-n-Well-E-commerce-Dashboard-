import React from "react";
import { useLocation } from "react-router";
import ThemeToggle from "@/features/theme/ThemeToggle";
import H1 from "@/components/typography/H1";

function Header() {
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
    <header className=" bg-secondary text-primary-text border-b border-border  h-16 w-full text-primary flex justify-between px-8 items-center">
      <H1>{heading}</H1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
