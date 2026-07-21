import React, { type ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  variant?: "hero" | "section";
  className?: string;
}

export default function Eyebrow({ children, variant = "section", className = "" }: EyebrowProps) {
  const base = variant === "hero" ? "eyebrow" : "sec-eyebrow";
  return <div className={`${base}${className ? ` ${className}` : ""}`}>{children}</div>;
}
