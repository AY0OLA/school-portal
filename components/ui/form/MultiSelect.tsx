import FormError from "./FormError";
import FormLabel from "./FormLabel";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
};

export default function MultiSelect({
  label,
  options,
  value,
  onChange,
  error,
}: Props) {
  return (
    <div>
      <FormLabel>{label}</FormLabel>

      <select
        multiple
        value={value}
        onChange={(e) =>
          onChange(
            Array.from(e.target.selectedOptions).map((option) => option.value),
          )
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="mt-1 text-xs text-slate-500">
        Hold Ctrl (Windows) or Cmd (Mac) to select multiple.
      </p>

      <FormError error={error} />
    </div>
  );
}
