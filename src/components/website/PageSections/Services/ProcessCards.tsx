"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const processcards = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We meet with you to understand your vision, requirements, and budget.",
  },
  {
    id: 2,
    title: "Planning & Design",
    description:
      "We create a detailed plan and design that aligns perfectly with your goals.",
  },
  {
    id: 3,
    title: "Execution",
    description:
      "Our skilled team brings your project to life with precision and care.",
  },
];

export default function ProcessCards() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-2">
            Our Process – Elite Stone Builders AZ LLC
          </h2>
          <p className="text-gray-500 text-base">
            A streamlined approach ensuring quality results and satisfied
            clients.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processcards.map((processcard) => (
            <Card
              key={processcard.id}
              className="bg-white border border-gray-800 rounded-xl hover:border-[#CA9520] transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Number Circle */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#CA9520]/10 text-[#CA9520] rounded-full font-semibold mb-4">
                  {processcard.id}
                </div>

                {/* Title */}
                <h3 className="text-lg  font-semibold mb-2 text-gray-800">
                  {processcard.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {processcard.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
