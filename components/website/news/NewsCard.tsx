import Image from "next/image";

type Props = {
  title: string;
  image: string;
  date: string;
  category: string;
  description: string;
};

export default function NewsCard({
  title,
  image,
  date,
  category,
  description,
}: Props) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-60">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
            {category}
          </span>

          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

        <p className="text-muted-foreground">{description}</p>

        <button className="mt-6 font-semibold text-primary hover:underline">
          Read More →
        </button>
      </div>
    </article>
  );
}
