import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function FormCheckbox(props: Props) {
  return (
    <input
      type="checkbox"
      {...props}
      className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
    />
  );
}
