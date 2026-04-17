import GallerySection from "@/components/website/PageSections/Gallery/GallerySection";
import Hero from "@/components/website/ReusableSection/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Construction Portfolio Examples | Elite Stone Builders AZ",
  description:
    "Explore construction portfolio examples showcasing premium stonework, brick, and custom designs. See real projects and get inspired by our craftsmanship.",
  keywords: "construction portfolio examples",
  alternates: {
    canonical: "https://elitestonebuildersaz.cloud/gallery",
  },
};

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762642008/hero-3_pyndbk.png"
        titleHighlight="Our Best Construction Portfolio"
        titleMain="Examples & Design Highlights"
        breadcrumb={{ previous: "Home", current: "All Gallery" }}
      />
      <GallerySection />
    </div>
  );
}
