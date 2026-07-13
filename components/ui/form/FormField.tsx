import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

export default function FormField({
  label,
  error,
  required,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
