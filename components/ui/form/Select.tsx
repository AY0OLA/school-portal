import FormLabel from "./FormLabel";
import FormError from "./FormError";

type Option = {
  label: string;
  value: string;
};

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Option[];
  error?: string;
};

export default function Select({
  label,
  options,
  error,
  required,
  className = "",
  ...props
}: Props) {
  return (
    <div>
      <FormLabel required={required}>{label}</FormLabel>

      <select
        {...props}
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      >
        <option value="">Select...</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FormError error={error} />
    </div>
  );
}
