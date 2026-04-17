import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutEliteStone = () => {
  return (
    <section className="py-16 bg-white text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side – Images */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div>
              <Image
                src="https://res.cloudinary.com/dibydryv8/image/upload/v1762643065/hero_bcojjt.png"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-full"
                width={600}
                height={400}
              />
            </div>
            <div className="flex gap-4">
              <Image
                src="https://res.cloudinary.com/dibydryv8/image/upload/v1762642823/hero-3_axr8ov.jpg"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-1/2"
                width={290}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dibydryv8/image/upload/v1762642411/service-1_oatapa.jpg"
                alt="service image"
                className="object-cover rounded-xl shadow-lg w-1/2"
                width={290}
                height={200}
              />
            </div>
          </div>

          {/* Right Side – Content */}
          <div className="max-w-xl w-full lg:w-1/2">
            <h3 className="text-lg font-bold text-[#CA9520] mb-2">
              About Elite Stone{" "}
              <span className="font-semibold">Builders AZ LLC</span>
            </h3>

            <h2
              className="text-4xl text-gray-800 font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Experience the Excellence, Build with the Best!
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-md">
              Elite Stone Builders AZ LLC is your trusted partner in providing
              superior quality{" "}
              <a
                href="https://en.wikipedia.org/wiki/Stonemasonry"
                target="_blank"
              >
                stone construction
              </a>{" "}
              solutions. Built on the core values of integrity, craftsmanship,
              and customer satisfaction, we offer an unmatched blend of style,
              functionality, and durability in our work. Our team of highly
              skilled professionals brings decades of experience and a
              commitment to excellence, ensuring we exceed client expectations
              at every turn. Specialized in custom stone projects, we cater to
              both residential and commercial needs across Arizona.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={"/about-us"}>
                <button className="bg-yellow-500 font-semibold  px-6 py-2 rounded-lg cursor-pointer text-white border border-transparent transition-all duration-300 ease-in-out hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500">
                  More About
                </button>
              </Link>
              <a
                href="tel:480-432-9579"
                className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
