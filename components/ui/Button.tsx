import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "destructive" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  loadingText?: string;
}

interface ButtonProps
  extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

type Props = ButtonProps | LinkButtonProps;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-[#0066ff] text-white border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] focus-visible:ring-[#0a0a0a]",
  secondary:
    "bg-[#0a0a0a] text-white border-[#0a0a0a] shadow-[3px_3px_0_#0066ff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] focus-visible:ring-[#0066ff]",
  ghost:
    "bg-transparent text-[#0a0a0a] border-transparent hover:border-[#0a0a0a] hover:bg-white focus-visible:ring-[#0066ff]",
  destructive:
    "bg-red-600 text-white border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] focus-visible:ring-red-600",
  outline:
    "bg-transparent text-[#0a0a0a] border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white focus-visible:ring-[#0066ff]",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "text-xs px-4 py-2 tracking-wider",
  md: "text-sm px-6 py-3 tracking-wider",
  lg: "text-base px-8 py-4 tracking-wider",
};

const BASE =
  "inline-flex items-center justify-center gap-2 font-bold uppercase border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 select-none";

function getClasses(
  variant: Variant = "primary",
  size: Size = "md",
  extra = ""
) {
  return `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${extra}`.trim();
}

/**
 * Brutalist-styled Button / Link button component.
 * Pass `href` to render as a Next.js <Link>, otherwise renders as <button>.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    isLoading = false,
    loadingText,
    children,
    className = "",
    disabled,
    ...rest
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={getClasses(variant, size, className)}
      {...rest}
    >
      {isLoading ? (
        <>
          <span
            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

/** Link that looks like a button */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  target,
  rel,
}: LinkButtonProps) {
  const classes = getClasses(variant, size, className);
  if (target === "_blank") {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel={rel ?? "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
