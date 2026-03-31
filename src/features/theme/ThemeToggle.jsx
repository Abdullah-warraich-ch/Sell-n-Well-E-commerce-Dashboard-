import React, { useState } from "react";

import { SunIcon } from "@/components/ui/sun-icon";
import { MoonIcon } from "@/components/ui/moon-icon";
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => (prev === false ? true : false));
  }
  return (
    <button onClick={handleClick}>{isDark ? <SunIcon /> : <MoonIcon />}</button>
  );
}

export default ThemeToggle;
