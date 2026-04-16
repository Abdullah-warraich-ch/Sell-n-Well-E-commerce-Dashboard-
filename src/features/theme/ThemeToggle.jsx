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
    <button onClick={handleClick} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] text-secondary-text hover:bg-[color-mix(in_srgb,var(--color-info)_15%,transparent)] hover:text-info transition-colors">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
