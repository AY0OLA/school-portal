import FormLabel from "./FormLabel";
import FormError from "./FormError";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({
  label,
  error,
  required,
  className = "",
  ...props
}: Props) {
  return (
    <div>
      <FormLabel required={required}>{label}</FormLabel>

      <input
        {...props}
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      />

      <FormError error={error} />
    </div>
  );
}
