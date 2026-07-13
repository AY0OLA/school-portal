import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DataTableBody({ children }: Props) {
  return <tbody className="divide-y divide-slate-100">{children}</tbody>;
}
