import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contactinfos = [
  {
    id: 1,
    icon: <Phone className="w-8 h-8" />,
    title: "Phone Number",
    description: "+2345-678998",
  },
  {
    id: 2,
    icon: <Mail className="w-8 h-8" />,
    title: "Email Address",
    description: "support.com",
  },
  {
    id: 3,
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    description: "Mesa, AZ",
  },
];

export const ContactCards = () => {
  return (
    <section className="py-16 bg-transparent text-white">
      <div className="container mx-auto px-4 text-center">
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
          {Contactinfos.map((info) => (
            <Card
              key={info.id}
              className="bg-white border border-gray-200 rounded-xl hover:border-[#CA9520] transition-all duration-300 flex items-center justify-center"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 flex justify-center items-center bg-[#CA9520]/10 text-[#CA9520] rounded-full mb-4">
                  {info.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {info.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
