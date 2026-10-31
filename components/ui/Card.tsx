import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** "default" = white card with black border + shadow */
  variant?: "default" | "dark" | "blue" | "flat";
  padding?: "sm" | "md" | "lg" | "none";
}

const VARIANT_CLASSES = {
  default:
    "bg-white border-2 border-[#0a0a0a] shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] transition-shadow duration-150",
  dark:
    "bg-[#0a0a0a] text-white border-2 border-[#0a0a0a] shadow-[4px_4px_0_#0066ff] hover:shadow-[6px_6px_0_#0066ff] transition-shadow duration-150",
  blue:
    "bg-[#0066ff] text-white border-2 border-[#0a0a0a] shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] transition-shadow duration-150",
  flat: "bg-white border-2 border-[#0a0a0a]",
};

const PADDING_CLASSES = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  variant = "default",
  padding = "md",
  children,
  className = "",
  ...rest
}: CardProps) {
  return (
    <div
      className={`${VARIANT_CLASSES[variant]} ${PADDING_CLASSES[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
