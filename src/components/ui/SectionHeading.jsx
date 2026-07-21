import React from "react";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children}
    </>
  );
}
