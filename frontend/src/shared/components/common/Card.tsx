
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({
  children,
  hover = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-sky-100 bg-white shadow-sm",
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-ocean"
          : "",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
