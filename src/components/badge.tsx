import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "info" | "success";
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  const toneClasses = {
    neutral: "bg-slate-100 text-slate-700",
    info: "bg-blue-50 text-blue-700",
    success: "bg-emerald-50 text-emerald-700",
  };

  const classes = [
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
    toneClasses[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props} />;
}
