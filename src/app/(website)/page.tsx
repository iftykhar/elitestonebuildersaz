import { AboutEliteStone } from "@/components/website/PageSections/HomePage/AboutEliteStone";
import Banner from "@/components/website/PageSections/HomePage/Banner";
import EliteStoneCard from "@/components/website/PageSections/HomePage/EliteStoneCard";
import Experience from "@/components/website/PageSections/HomePage/Experience";
import OurProject from "@/components/website/PageSections/HomePage/OurProject";
import ServiceCard from "@/components/website/PageSections/HomePage/ServiceCard";
import GetInTouch from "@/components/website/ReusableSection/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Stone Builders AZ | Custom Stone & Masonry Experts",
  description:
    "Get expert stone, tile, and masonry work from Arizona’s trusted pros. Choose our professional construction services for quality craftsmanship.",
  keywords: "Elite Stone Builders",
  alternates: {
    canonical: "https://elitestonebuildersaz.cloud",
  },
};

export default function page() {
  return (
    <div>
      <Banner />
      <AboutEliteStone />
      <EliteStoneCard />
      <ServiceCard />
      <Experience />
      <OurProject />
      <GetInTouch />
    </div>
  );
}
