import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={clsx(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition resize-none",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          className,
        )}
      />
    );
  },
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
