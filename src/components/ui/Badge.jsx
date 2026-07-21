import React from "react";

const TONE_CLASS = {
  neutral: "badge-neutral",
  blue: "badge-blue",
  lime: "badge-lime",
  amber: "badge-amber",
  danger: "badge-danger",
  ink: "badge-ink",
};

export default function Badge({ tone = "neutral", as = "span", className = "", ...rest }) {
  const cls = `badge ${TONE_CLASS[tone] || TONE_CLASS.neutral}${className ? ` ${className}` : ""}`;
  const Tag = as;
  return <Tag className={cls} {...rest} />;
}
