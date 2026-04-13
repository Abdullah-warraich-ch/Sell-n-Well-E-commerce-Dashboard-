import React from "react";

function H1({ children }) {
  return (
    <h1 className="text-[20px] leading-7 sm:text-[22px] sm:leading-8 text-primary-text font-semibold tracking-[-0.03em]">
      {children}
    </h1>
  );
}

export default H1;
