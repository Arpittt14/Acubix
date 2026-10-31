import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, id, className = "", ...rest },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a]"
        >
          {label}
          {rest.required && (
            <span className="ml-1 text-[#0066ff]" aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`w-full px-4 py-3 bg-white border-2 text-[#0a0a0a] placeholder:text-[#a0a09a] text-sm font-medium transition-all duration-150 focus:outline-none focus:border-[#0066ff] focus:shadow-[0_0_0_1px_#0066ff] ${
          error
            ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_1px_red]"
            : "border-[#0a0a0a]"
        } ${className}`}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        aria-invalid={error ? true : undefined}
        {...rest}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-[#6b6b6b]">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-600 font-semibold"
        >
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
