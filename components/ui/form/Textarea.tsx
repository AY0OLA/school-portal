import FormLabel from "./FormLabel";
import FormError from "./FormError";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export default function Textarea({
  label,
  error,
  required,
  className = "",
  ...props
}: Props) {
  return (
    <div className="md:col-span-2">
      <FormLabel required={required}>{label}</FormLabel>

      <textarea
        {...props}
        rows={4}
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      />

      <FormError error={error} />
    </div>
  );
}