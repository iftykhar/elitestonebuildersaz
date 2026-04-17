import ProcessCards from "@/components/website/PageSections/Services/ProcessCards";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import Hero from "@/components/website/ReusableSection/Hero";
import Section from "@/components/website/ReusableSection/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Professional Construction Services AZ",
  description:
    "We provide premium professional construction services across Arizona, offering stonework, masonry, and durable building solution with expert craftsmanship.",
  keywords: "professional construction services",
  alternates: {
    canonical: "https://elitestonebuildersaz.cloud/services",
  },
};

export default function Page() {
  return (
    <div>
      <Hero
        imageSrc="https://res.cloudinary.com/dibydryv8/image/upload/v1762642042/hero-4_qphfob.png"
        titleHighlight="Experience the Best Professional"
        titleMain="Construction Services"
        breadcrumb={{ previous: "Home", current: "Services" }}
        height="70vh"
      />

      <div id="stone-works">
        <Section
          heading="Stone Works"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762642133/about-1_v5qbba.jpg"
          imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762642411/service-1_oatapa.jpg"
          showButtons={true}
          reverse={false}
        />
      </div>

      <div id="stone-veneer">
        <Section
          isLinked={true}
          heading="Stone Veneer"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762642623/service-5_ovi8od.jpg"
          imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762642823/hero-3_axr8ov.jpg"
          showButtons={true}
          reverse={true}
        />
      </div>

      <div id="brick-veneer">
        <Section
          heading="Brick Veneer"
          text={`Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces. Committed to crafting superior stone structures, we blend skillful craftsmanship with high-quality materials to create enduring, aesthetically pleasing designs that reflect our clients' unique visions and enhance their spaces.`}
          imageFront="https://res.cloudinary.com/dibydryv8/image/upload/v1762642341/about-6_x4dmip.jpg"
          imageBack="https://res.cloudinary.com/dibydryv8/image/upload/v1762642362/about-7_bceyhy.jpg"
          showButtons={true}
          reverse={false}
        />
      </div>

      <ProcessCards />
      <GetInTouch />
    </div>
  );
}
