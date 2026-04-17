"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <Image
        src="https://res.cloudinary.com/dibydryv8/image/upload/v1762643312/bg-banner_dqnifw.jpg"
        alt="bg-banner"
        fill
        className="absolute w-full h-full object-cover object-bottom"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white ">
        <h1
          className="text-2xl md:text-[60px] font-semibold lg:leading-[72px] mb-4 font-playfair text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Elite Stone Builders <br /> Crafting Arizona’s Finest Stonework
        </h1>
        <p
          className="text-md font-normal leading-[27px] mb-6 font-poppins my-0 md:my-5 text-white max-w-2xl"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Elite craftsmanship in custom stone, tile, and masonry for homes &
          businesses across the Valley.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => {
              const section = document.getElementById("get-in-touch");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-yellow-500 font-semibold  px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-white"
          >
            <span className="text-[#FCFBF8]  text-center text-base font-medium   font-poppins">
              Quote A Request
            </span>
          </button>

          <Link href={"/services"}>
            <button className="border border-white text-yellow-500 px-6 py-3 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white hover:border-yellow-500 ">
              <span className="text-[#FCFBF8]  text-center text-base font-medium   font-poppins">
                Our Services
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
