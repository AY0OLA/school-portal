import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function AcademicCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <p className="leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
