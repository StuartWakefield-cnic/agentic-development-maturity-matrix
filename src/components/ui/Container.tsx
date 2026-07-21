import React, { type ReactNode, type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`container${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </div>
  );
}
