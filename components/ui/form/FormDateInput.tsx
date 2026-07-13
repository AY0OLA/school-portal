import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormDateInput = forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="date"
        {...props}
        className={`w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
      />
    );
  },
);

FormDateInput.displayName = "FormDateInput";

export default FormDateInput;
