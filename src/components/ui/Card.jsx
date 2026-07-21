import React from "react";

export default function Card({ children, className = "", accent, style, ...rest }) {
  const cls = `card${accent ? " card-accent" : ""}${className ? ` ${className}` : ""}`;
  const cardStyle = accent ? { ...style, "--accent": accent } : style;
  return (
    <div className={cls} style={cardStyle} {...rest}>
      {children}
    </div>
  );
}
