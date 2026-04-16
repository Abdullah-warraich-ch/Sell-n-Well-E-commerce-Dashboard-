import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...rest }) {
  return (
    <button
      className={twMerge("text-nowrap bg-button text-button-text hover:bg-button/80 text-[14px] font-semibold tracking-wide rounded-xl px-4 py-2.5 transition-all duration-300 flex items-center justify-center gap-2", className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
