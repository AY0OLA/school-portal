import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = "" }: Props) {
  return <main className={`space-y-8 ${className}`}>{children}</main>;
}
