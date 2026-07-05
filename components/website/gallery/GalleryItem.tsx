import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

export default function GalleryItem({ image, title }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100">
        <h3 className="p-6 text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
