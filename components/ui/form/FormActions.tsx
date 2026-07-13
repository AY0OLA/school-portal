import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FormActions({ children }: Props) {
  return (
    <div className="flex justify-end gap-4 border-t border-slate-200 pt-6">
      {children}
    </div>
  );
}
