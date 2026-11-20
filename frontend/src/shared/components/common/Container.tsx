import type { HTMLAttributes, ReactNode } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`container-main ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}