"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function OurProject() {
  const projects = [
    {
      id: 1,
      title: "Residential Stonework",
      location: "Mesa, AZ",
      img: "https://res.cloudinary.com/dibydryv8/image/upload/v1762643065/hero_bcojjt.png",
    },
    {
      id: 2,
      title: "Backyard Stone Fence",
      location: "Phoenix, AZ",
      img: "https://res.cloudinary.com/dibydryv8/image/upload/v1762642823/hero-3_axr8ov.jpg",
    },
  ];

  return (
    <section className="py-10 text-center text-black">
      <h2 className="text-5xl font-semibold mb-8">
        Our <span className="text-yellow-500">Project</span>
      </h2>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="relative"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-[500px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-black/10 p-4 rounded-xl text-left">
                  <h2 className="font-semibold text-white">{item.title}</h2>
                  <p className="text-sm text-gray-300">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-prev !text-white   w-5 h-5 rounded-full flex items-center justify-center"></div>
          <div className="swiper-button-next !text-white   w-5 h-5 rounded-full flex items-center justify-center"></div>
        </Swiper>
      </div>

      <Link href={"/gallery"}>
        <button className="mt-8 bg-yellow-500 font-semibold  px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500">
          All Gallery
        </button>
      </Link>
    </section>
  );
}
