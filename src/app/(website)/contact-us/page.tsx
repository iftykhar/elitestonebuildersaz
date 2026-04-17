import { ContactCards } from "@/components/website/PageSections/ContatctUs/ContactCards";
import Map from "@/components/website/PageSections/ContatctUs/Map";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Masonry Specialists | Contact EliteStone",
  description:
    "Connect with certified masonry specialists at EliteStone Builders for expert stonework, brick veneer, and durable structures. Contact us today!",
  keywords: "certified masonry specialists",
  alternates: {
    canonical: "https://elitestonebuildersaz.cloud/contact-us",
  },
};

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762641971/hero-4_kybnli.png"
        titleHighlight="Arizona's Best Stone Tile &"
        titleMain="Certified Masonry Specialists"
        breadcrumb={{ previous: "Home", current: "Contact Us" }}
      />
      <ContactCards />
      <GetInTouch />
      <Map />
    </div>
  );
}
