import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutImage() {
  return (
    <div className="relative w-full">
      {/* Image */}
      <div className="relative h-[500px] overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80"
          alt="Students studying"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-0 right-6 translate-y-1/2 hidden lg:block">
        <div className="w-56 rounded-xl bg-[#154734] p-6 shadow-2xl">
          <Star className="mb-4 h-6 w-6 text-[#C8A548]" strokeWidth={2} />

          <h3 className="font-heading text-2xl font-semibold text-white">
            Top-Rated
          </h3>

          <p className="mt-1 text-sm text-white/80">School in Lagos State</p>
        </div>
      </div>
    </div>
  );
}
