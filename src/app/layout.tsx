import type { Metadata } from "next";
import { Geist, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Elite Stone Services",
  description:
    "Elite craftsmanship in custom stone, tile, and masonry for homes & businesses across the Valley.",
  verification: {
    google: "9eJjdfDcUDRU-Yfc-WYAXinQ2vq0biGXfIAAMnGPs3A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <body className="font-playfair antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
