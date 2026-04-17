"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643355/Gallery-1_oi9jju.jpg",
    title: "Stone Wall Construction",
    description: "Mesa, AZ",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643380/Gallery-2_eyo9zv.jpg",
    title: "Classic Cottage",
    description: "Modern brick & stone design",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643421/Gallery-3_o7q2rn.jpg",
    title: "Urban House",
    description: "Large glass windows & rustic walls",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643468/Gallery-4_xjuocg.jpg",
    title: "Hill View Home",
    description: "Scenic view & natural tone",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643492/Gallery-5_at7rei.jpg",
    title: "Luxury Residence",
    description: "Premium stone finish & outdoor area",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643517/Gallery-6_nm19tn.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643548/Gallery-7_ulvmwd.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643572/Gallery-8_kr9fku.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643593/Gallery-9_ezj0y0.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643637/Gallery-10_kqlr9i.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643640/Gallery-11_upedqw.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643639/Gallery-12_c379ny.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643641/Gallery-13_sc4h59.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643644/Gallery-14_f9b36w.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643646/Gallery-15_laxcaj.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643645/Gallery-16_uuqteu.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
  {
    src: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643648/Gallery-17_mxc3bu.jpg",
    title: "Rustic Villa",
    description: "Perfect mix of tradition & elegance",
  },
];

const layoutClasses: string[] = [
  "col-span-3 row-span-4", // 1
  "col-span-6 row-span-2 col-start-4", // 2
  "col-span-3 row-span-2 col-start-10", // 3
  "col-span-3 row-span-2 col-start-4 row-start-3", // 4
  "col-span-6 row-span-2 col-start-7 row-start-3", // 5
  "col-span-6 row-span-2 row-start-5", // 6
  "col-span-3 row-span-2 col-start-7 row-start-5", // 7
  "col-span-3 row-span-4 col-start-10 row-start-5", // 8
  "col-span-6 row-span-2 col-start-4 row-start-7", // 9
  "col-span-3 row-span-4 col-start-1 row-start-7", // 10
  "col-span-3 row-span-2 col-start-4 row-start-9", // 11
  "col-span-6 row-span-2 col-start-7 row-start-9", // 12
  "col-span-3 row-span-2 row-start-11", // 13
  "col-span-6 row-span-2 col-start-4 row-start-11", // 14
  "col-span-3 row-span-4 col-start-10 row-start-11", // 15
  "col-span-3 row-span-2 col-start-7 row-start-13", // 16
  "col-span-6 row-span-2 col-start-1 row-start-13", // 17
  "col-span-3 row-span-2 col-start-10 row-start-13", // 18
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <section className="relative w-full text-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-yellow-400">
          All Gallery
        </h2>

        {/* ✅ Responsive Grid */}
        <div
          className="
            grid gap-5
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-12 lg:auto-rows-[minmax(150px,1fr)]
          "
        >
          {images.map((item, index) => {
            const positionClass =
              layoutClasses[index] && index < layoutClasses.length
                ? `block ${layoutClasses[index]}`
                : "col-span-1";

            return (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${positionClass}`}
              >
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/70 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery modal"
              className="absolute top-2 right-4 text-white text-5xl font-bold hover:text-yellow-400 cursor-pointer"
            >
              &times;
            </button>

            <div className="w-full rounded-lg shadow-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-yellow-400">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
