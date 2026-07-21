import React from "react";

const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  danger: "btn-danger",
};

export default function Button({ variant = "ghost", as = "button", className = "", ...rest }) {
  const cls = `btn ${VARIANT_CLASS[variant] || VARIANT_CLASS.ghost}${className ? ` ${className}` : ""}`;
  const Tag = as;
  return <Tag className={cls} {...rest} />;
}
