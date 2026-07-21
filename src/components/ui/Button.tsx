import React, { type ElementType, type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  danger: "btn-danger",
};

type ButtonProps<C extends ElementType> = {
  variant?: Variant;
  as?: C;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "variant" | "className">;

export default function Button<C extends ElementType = "button">({
  variant = "ghost",
  as,
  className = "",
  ...rest
}: ButtonProps<C>) {
  const cls = `btn ${VARIANT_CLASS[variant] || VARIANT_CLASS.ghost}${className ? ` ${className}` : ""}`;
  const Tag = (as || "button") as ElementType;
  return <Tag className={cls} {...rest} />;
}
