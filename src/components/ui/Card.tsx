import React, { type ReactNode, type CSSProperties, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  accent?: string;
  style?: CSSProperties;
}

export default function Card({ children, className = "", accent, style, ...rest }: CardProps) {
  const cls = `card${accent ? " card-accent" : ""}${className ? ` ${className}` : ""}`;
  const cardStyle: CSSProperties | undefined = accent
    ? ({ ...style, "--accent": accent } as CSSProperties)
    : style;
  return (
    <div className={cls} style={cardStyle} {...rest}>
      {children}
    </div>
  );
}
