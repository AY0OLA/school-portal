import { forwardRef, SelectHTMLAttributes } from "react";
import clsx from "clsx";

type Option = {
  label: string;
  value: string;
};

type FormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  placeholder?: string;
};

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ options, placeholder = "Select an option", className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={clsx(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          className,
        )}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
