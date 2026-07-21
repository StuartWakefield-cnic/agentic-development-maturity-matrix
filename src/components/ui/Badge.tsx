import React, { type ElementType, type ComponentPropsWithoutRef } from "react";

type Tone = "neutral" | "blue" | "lime" | "amber" | "danger" | "ink";

const TONE_CLASS: Record<Tone, string> = {
  neutral: "badge-neutral",
  blue: "badge-blue",
  lime: "badge-lime",
  amber: "badge-amber",
  danger: "badge-danger",
  ink: "badge-ink",
};

type BadgeProps<C extends ElementType> = {
  tone?: Tone;
  as?: C;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "tone" | "className">;

export default function Badge<C extends ElementType = "span">({
  tone = "neutral",
  as,
  className = "",
  ...rest
}: BadgeProps<C>) {
  const cls = `badge ${TONE_CLASS[tone] || TONE_CLASS.neutral}${className ? ` ${className}` : ""}`;
  const Tag = (as || "span") as ElementType;
  return <Tag className={cls} {...rest} />;
}
