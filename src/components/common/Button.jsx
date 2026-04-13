import React from "react";

function Button({ children, ...rest }) {
  return (
    <button
      className=" w-full bg-button text-button-text hover:bg-button/80 text-sm font-medium rounded-md px-4 py-2.5 transition-colors duration-300"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
