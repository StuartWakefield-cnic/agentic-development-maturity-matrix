import React, { type ReactNode } from "react";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  children?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children}
    </>
  );
}
