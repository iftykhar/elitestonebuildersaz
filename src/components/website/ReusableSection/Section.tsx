"use client";
import Image from "next/image";
import React from "react";

interface SectionProps {
  titleHighlight?: string;
  companyName?: string;
  heading: string;
  text: string;
  imageFront: string;
  imageBack?: string;
  showButtons?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  reverse?: boolean;
  isLinked?: boolean;
}

export default function Section({
  titleHighlight = "Elite Stone",
  companyName = "Builders AZ LLC",
  heading,
  text,
  imageFront,
  imageBack,
  showButtons = true,
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Call Now",
  reverse = false,
  isLinked = false,
}: SectionProps) {
  return (
    <section className="text-black py-4 sm:py-12 md:py-16 lg:py-24">
      <div
        className={`container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT CONTENT */}
        <div
          className={`w-full md:w-1/2 text-center md:text-left ${
            reverse ? "md:pl-10 lg:pl-16" : ""
          }`}
        >
          {/* Heading Section */}
          <h3 className="text-base sm:text-lg font-semibold text-[#E0A523] mb-2">
            <span className="text-black">{titleHighlight}</span> {companyName}
          </h3>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight mb-5 sm:mb-6 font-playfair"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {isLinked ? (
              <a
                href="https://en.wikipedia.org/wiki/Stone_veneer"
                target="_blank"
              >
                {heading}
              </a>
            ) : (
              heading
            )}
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            {text}
          </p>

          {/* Buttons */}
          {/* {showButtons && (
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button className="bg-yellow-500 font-semibold  px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500">
                {primaryButtonText}
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white">
                {secondaryButtonText}
              </button>
            </div>
          )} */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const section = document.getElementById("get-in-touch");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-yellow-500 font-semibold px-6 py-3 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500"
              >
                {primaryButtonText}
              </button>

              <a
                href="tel:480-432-9579"
                className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
              >
                {secondaryButtonText}
              </a>
            </div>
          )}
        </div>

        {/* IMAGES */}
        <div
          className={`relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0 ${
            reverse ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {/* Back Image */}
          {imageBack && (
            <div
              className={`absolute ${
                reverse
                  ? "left-4 sm:left-10 md:left-0"
                  : "right-4 sm:right-10 md:right-0"
              } 
              w-52 sm:w-64 md:w-80 lg:w-96 
              h-60 sm:h-72 md:h-96 lg:h-[440px]
              rounded-lg overflow-hidden hidden sm:block`}
            >
              <Image
                src={imageBack}
                alt="Background Image"
                fill
                className="object-cover rounded-lg opacity-90"
              />
            </div>
          )}

          {/* Front Image */}
          <div
            className={`relative z-10 
              ${
                reverse
                  ? "top-0 sm:top-10 left-5 sm:left-10 md:top-16 md:left-45"
                  : "top-0 sm:top-10 -left-5 sm:-left-10 md:top-14 md:-left-45"
              } 
              w-48 sm:w-56 md:w-[300px] lg:w-[380px] 
              h-64 sm:h-72 lg:h-[340px]
              rounded-lg overflow-hidden shadow-xl`}
          >
            <Image
              src={imageFront}
              alt="Foreground Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
