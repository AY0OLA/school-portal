import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <main className="space-y-8">{children}</main>;
}
