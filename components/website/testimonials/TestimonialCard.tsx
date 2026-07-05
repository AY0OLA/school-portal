import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export default function TestimonialCard({ name, role, image, quote }: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className="italic leading-8 text-muted-foreground">"{quote}"</p>

      <div className="mt-8 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div>
          <h3 className="font-semibold">{name}</h3>

          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
