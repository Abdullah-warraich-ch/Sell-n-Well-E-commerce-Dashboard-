import React from "react";

function Button({ children, ...rest }) {
  return (
    <button
      className="text-nowrap bg-button text-button-text hover:bg-button/80 text-sm font-semibold tracking-[-0.01em] rounded-md px-4 py-2.5 transition-colors duration-300"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
