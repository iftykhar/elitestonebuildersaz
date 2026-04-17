"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface SectionProps {
  title: string;
  subtitle?: string;
  text: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // If true, image will be on the left
}

export default function Section({
  title,
  subtitle,
  text,
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Call Now",
  imageSrc,
  imageAlt = "Section Image",
  reverse = false,
}: SectionProps) {
  const router = useRouter();
  return (
    <section className="text-black py-16 md:py-40">
      <div
        className={`container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* LEFT/RIGHT IMAGE */}
        <div className="relative flex justify-center mt-12 md:mt-0">
          {/* Back Image */}
          <div className="absolute right-4 sm:right-10 md:right-0 w-64 sm:w-80 md:w-96 h-72 sm:h-96 md:h-[440px] rounded-lg overflow-hidden hidden sm:block">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Front Image */}
          <div className="relative z-10 top-0 sm:top-10 w-56 sm:w-64 md:w-[360px] h-72 sm:h-80 md:h-[340px] rounded-lg lg:top-16 overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* LEFT/RIGHT TEXT */}
        <div className="text-center md:text-left">
          {subtitle && (
            <h2 className="text-base sm:text-lg font-semibold text-black mb-2">
              {subtitle}
            </h2>
          )}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight mb-6 font-playfair"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 whitespace-pre-line">
            {text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-[#E0A523] hover:bg-[#c4911e] text-black font-semibold px-6 py-3 rounded-md transition-all w-full sm:w-auto">
              {primaryButtonText}
            </button>

            <a
              href="tel:480-432-9579"
              className="border border-gray-400 text-black px-6 py-3 rounded-md font-semibold transition-all w-full sm:w-auto"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
