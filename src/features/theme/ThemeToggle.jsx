import React, { useState } from "react";

import { SunIcon } from "@/components/ui/sun-icon";
import { MoonIcon } from "@/components/ui/moon-icon";
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  function handleClick() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    setTheme(next);
  }
  return (
    <button onClick={handleClick}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
