import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-slate-700">{label}</label>
        )}

        <input
          ref={ref}
          {...props}
          className={cn(
            "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition",
            "focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            className,
          )}
        />

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
