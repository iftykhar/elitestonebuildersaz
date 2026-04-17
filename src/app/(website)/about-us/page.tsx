import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import { Whychooseus } from "@/components/website/PageSections/Services/Whychooseus";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import Section from "@/components/website/ReusableSection/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential and Commercial Construction Services AZ",
  description:
    "Upgrade your space with expert residential and commercial construction services. Stone to veneer and brick, our team delivers quality craftsmanship!",
  keywords: "residential and commercial construction services",
  alternates: {
    canonical: "https://elitestonebuildersaz.cloud/about-us",
  },
};

export default function page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762641891/hero-2_giwoyy.jpg"
        titleHighlight="About Us"
        titleMain="Elite Stone Boulders AZ LLC"
        breadcrumb={{ previous: "Home", current: "About Us" }}
      />

      {/* Our Mission  */}
      <Section
        heading="Stone Works"
        text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.
 
        Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
        imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762642133/about-1_v5qbba.jpg"
        imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762642172/about-2_mfaoyt.jpg"
        showButtons={false}
        reverse={false}
      />
      {/* Our vision */}
      <Section
        heading="Our vision"
        text={`To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.
        To redefine the architectural landscape with uniquely crafted stone structures, enhancing elegance and durability, and ensuring sustainable construction practices that respect and protect our environment.`}
        imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762642244/about-3_k1v7l4.jpg"
        imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762642271/about-4_ka8wkq.jpg"
        showButtons={false}
        reverse={true}
      />

      {/* why choose us section */}
      <Whychooseus />

      {/* Our vision */}
      <div className="pb-10">
        <Section
          heading="Experience the Excellence, Build with
 the Best!"
          text={`Elite Stone Builders AZ LLC is your trusted partner in providing superior quality stone construction solutions. Built on the core values of integrity, craftsmanship, and customer satisfaction, we offer an unmatched blend of style, functionality, and durability in our work. Our team of highly skilled professionals brings decades of experience and a commitment to excellence, ensuring we exceed client expectations at every turn. Specialized in custom stone projects, we cater to both residential and commercial needs across Arizona.`}
          imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762643252/experience-2_ru48ax.png"
          imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762643223/experience-1_pxomn3.jpg"
          showButtons={true}
          reverse={true}
        />
      </div>

      <ServiceCard />

      <GetInTouch />
    </div>
  );
}
