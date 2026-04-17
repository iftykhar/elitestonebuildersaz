import { Award, CircleCheckBig, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Whychooseus = ({
  reverse = false,
  imageFront = "https://res.cloudinary.com/dibydryv8/image/upload/v1762643111/why1_y40c5r.jpg",
  imageBack = "https://res.cloudinary.com/dibydryv8/image/upload/v1762643141/why2_l4wxvr.jpg",
}) => {
  return (
    <section>
      <div className="container mx-auto py-12 mb-8">
        <div
          className={`flex flex-col md:flex-row justify-between items-center py-12 gap-10 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left ${
              reverse ? "md:pr-10 lg:pr-16" : "md:pl-10 lg:pl-16"
            }`}
          >
            <h2 className="text-base sm:text-lg font-semibold text-[#E0A523] mb-2">
              <span className="text-black">Elite Stone</span> Builders AZ LLC
            </h2>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight mb-5 sm:mb-6 font-playfair capitalize"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="text-gray-800">why </span>
              <span className="text-yellow-500">choose us</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Choose us for our unmatched expertise in stone building,
              commitment to superior craftsmanship, and dedication to customer
              satisfaction. We promise quality, reliability, and affordability
              in every project we undertake.
            </p>
            <div className="grid grid-cols-1 sm:px-0 px-20 sm:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex items-start text-center gap-4 sm:text-left">
                <div className="p-2 bg-[#F8F6F1] rounded-full shrink-0">
                  <Award className="text-[#E0A523]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">15+ Years Experience</h2>
                  <p className="text-sm text-gray-600">
                    Trusted expertise in Arizona
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 text-left">
                <div className="p-2 bg-[#F8F6F1] rounded-full shrink-0">
                  <Clock className="text-[#E0A523]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">On-Time Delivery</h2>
                  <p className="text-sm text-gray-600">
                    Projects completed as promised
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 text-left">
                <div className="p-2 bg-[#F8F6F1] rounded-full shrink-0">
                  <CircleCheckBig className="text-[#E0A523]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Licensed Professionals</h2>
                  <p className="text-sm text-gray-600">
                    Fully licensed & insured
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4 text-left">
                <div className="p-2 bg-[#F8F6F1] rounded-full shrink-0">
                  <MapPin className="text-[#E0A523]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Local Expertise</h2>
                  <p className="text-sm text-gray-600">
                    Mesa, AZ community-focused
                  </p>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
};
