import { Mail, MapPin, Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div>
      <section className="bg-primary relative w-full font-poppins">
        <div className="container mx-auto">
          {/* <button className="absolute md:right-2 md:top-4 right-4 top-5 sm:right-2 sm:top-5 text-white flex items-center hover:text-red-500 transition">
            <X className="cursor-pointer hover:text-white" size={20} />
          </button> */}

          <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-4 gap-2 md:gap-0 text-sm md:text-base">
            {/* Left Section */}
            <div className="message flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-2 sm:gap-6 px-2">
              <div className="flex items-center text-white gap-2 sm:gap-3">
                <Phone className="text-[#CA9520] w-4 h-4 sm:w-4 sm:h-4" />
                <a
                  href="tel:480-432-9579"
                  className="text-[10px] sm:text-xs md:text-sm hover:underline  transition-colors"
                >
                  480-432-9579
                </a>
              </div>
              <div className="flex items-center text-white gap-2 sm:gap-3 sm:text-xs md:text-sm">
                <Mail className="text-[#CA9520] w-4 h-4 sm:w-4 sm:h-4" />
                <a
                  href="mailto:info@elitestonebuildersaz.com"
                  className="hover:underline sm:text-xs md:text-sm "
                >
                  info@elitestonebuildersaz.com
                </a>
              </div>
              <div className="flex items-center text-white gap-2 sm:gap-3 sm:text-xs md:text-sm">
                <MapPin className="text-[#CA9520] w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[10px] sm:text-xs md:text-sm">Mesa, AZ</p>
              </div>
            </div>
            <div className="webtitle py-2 md:py-4 text-base text-[#E0A523] md:text-2xl font-bold">
              <p>Elite Stone Builders AZ LLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
