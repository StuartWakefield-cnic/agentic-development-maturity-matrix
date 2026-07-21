import React from "react";

export default function Eyebrow({ children, variant = "section", className = "" }) {
  const base = variant === "hero" ? "eyebrow" : "sec-eyebrow";
  return <div className={`${base}${className ? ` ${className}` : ""}`}>{children}</div>;
}
