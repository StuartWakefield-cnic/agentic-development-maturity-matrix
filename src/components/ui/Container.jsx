import React from "react";

export default function Container({ children, className = "", ...rest }) {
  return (
    <div className={`container${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </div>
  );
}
