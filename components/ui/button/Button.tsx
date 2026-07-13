import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition disabled:opacity-50",
        {
          "bg-primary text-white hover:opacity-90": variant === "primary",

          "border border-slate-300 bg-white hover:bg-slate-50":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        },
        className,
      )}
    />
  );
}
