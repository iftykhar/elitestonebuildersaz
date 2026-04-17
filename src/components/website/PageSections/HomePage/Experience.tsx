"use client";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <section className="text-black py-16 md:py-40">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-[#E0A523] mb-2">
            Elite Stone <span className="text-black">Builders AZ LLC</span>
          </h3>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight mb-6 font-playfair"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experience the Excellence, Build with the Best!
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Elite Stone Builders AZ LLC is your trusted partner in providing
            superior quality stone construction solutions. Built on the core
            values of integrity, craftsmanship, and customer satisfaction, we
            offer an unmatched blend of style, functionality, and durability in
            our work. Our team of highly skilled professionals brings decades of
            experience and a commitment to excellence, ensuring we exceed client
            expectations at every turn. Specialized in custom stone projects, we
            cater to both residential and commercial needs across Arizona.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => {
                const section = document.getElementById("get-in-touch");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-yellow-500 font-semibold  px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500"
            >
              Contact Us
            </button>
            <a
              href="tel:480-432-9579"
              className=" border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center mt-12 md:mt-0">
          {/* Back Image */}
          <div className="absolute right-4 sm:right-10 md:right-0 w-64 sm:w-80 md:w-96 h-72 sm:h-96 md:h-[440px] rounded-lg overflow-hidden hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dibydryv8/image/upload/v1762643223/experience-1_pxomn3.jpg"
              alt="Stone Wall"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Front Image */}
          <div className="relative z-10 top-0 sm:top-10 w-56 sm:w-64 md:w-[260px] h-72 sm:h-80 md:h-[340px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dibydryv8/image/upload/v1762643252/experience-2_ru48ax.png"
              alt="Stone House"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
