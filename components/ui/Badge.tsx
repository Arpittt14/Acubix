type BadgeVariant = "blue" | "dark" | "outline" | "success" | "warning";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  blue: "bg-[#0066ff] text-white border-[#0066ff]",
  dark: "bg-[#0a0a0a] text-white border-[#0a0a0a]",
  outline: "bg-transparent text-[#0a0a0a] border-[#0a0a0a]",
  success: "bg-emerald-600 text-white border-emerald-600",
  warning: "bg-amber-500 text-white border-amber-500",
};

export default function Badge({
  variant = "blue",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] border-2 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
