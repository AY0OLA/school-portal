import GalleryItem from "./GalleryItem";
import { galleryImages } from "./data";

export default function GalleryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image) => (
        <GalleryItem key={image.id} {...image} />
      ))}
    </div>
  );
}
