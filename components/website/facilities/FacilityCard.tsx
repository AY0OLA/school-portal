import Image from "next/image";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export default function FacilityCard({
  title,
  description,
  image,
  icon: Icon,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-60">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="mb-3 text-xl font-semibold">{title}</h3>

        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
