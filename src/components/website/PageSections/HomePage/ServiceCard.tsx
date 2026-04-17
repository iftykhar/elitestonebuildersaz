"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    id: "#stone-works",
    title: "Stone Works",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Stone Works service, setting the gold standard in the industry. With unmatched craftsmanship and attention to detail.",
    image:
      "https://res.cloudinary.com/dibydryv8/image/upload/v1762642411/service-1_oatapa.jpg",
  },
  {
    id: "#stone-veneer",
    title: "Stone Veneer",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Stone Veneer service, setting the gold standard in the industry. With unmatched craftsmanship and detail.",
    image:
      "https://res.cloudinary.com/dibydryv8/image/upload/v1762642533/service-2_kvjtnm.jpg",
  },
  {
    id: "#brick-veneer",
    title: "Brick Veneer",
    description:
      "At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Brick Veneer service, setting the gold standard in the industry. With unmatched quality and precision.At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Brick Veneer service, setting the gold standard in the industry. With unmatched quality and precision.At Elite Stone Builders AZ LLC, we're proud to offer our exceptional Brick Veneer service, setting the gold standard in the industry. With unmatched quality and precision.",
    image:
      "https://res.cloudinary.com/dibydryv8/image/upload/v1762642661/service3_eie2cl.jpg",
  },
];

export default function ServiceCard() {
  return (
    <section
      className="bg-gray-50 text-gray-900 py-16"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 text-center space-y-10">
        {/* Accessible heading */}
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-semibold"
        >
          We offer a wide{" "}
          <span className="text-[#CA9520]">range of services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group   border border-neutral-800 overflow-hidden pt-0 rounded-2xl 
                         transition-transform duration-300 hover:scale-[1.03] hover:bg-white hover:text-black hover:border-yellow-500"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={service.image}
                  alt={`${service.title} service example`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Text */}
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg text-start font-semibold group-hover:text-black text-black/90">
                  {service.title}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed text-start group-hover:text-gray-700">
                  {service.description.slice(0, 200)}...
                </p>
              </CardContent>

              {/* CTA Button (React to Card Hover) */}
              <CardFooter className="flex justify-start p-6 pt-0">
                <button
                  onClick={() => {
                    window.location.href = `/services${service.id}`;
                  }}
                  className="bg-yellow-500 font-semibold  px-6 py-2 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  See More
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* All Services Button */}
        <Link href={"/services"}>
          <button
            // variant="outline"
            className="mt-8 bg-yellow-500 font-semibold  px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500"
            aria-label="View all our services"
          >
            All Services
          </button>
        </Link>
      </div>
    </section>
  );
}
