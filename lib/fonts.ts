import { Inter, Playfair_Display, DM_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dmmono",
  weight: ["400", "500"],
});
