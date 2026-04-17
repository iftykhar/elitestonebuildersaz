import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  imageSrc: string;
  titleHighlight: string;
  titleMain: string;
  breadcrumb: {
    current: string;
    previous?: string;
  };
  height?: string;
}

export default function Hero({
  imageSrc,
  titleHighlight,
  titleMain,
  breadcrumb,
  height = "80vh",
}: HeroProps) {
  return (
    <div className="relative w-full" style={{ height }}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={`${titleMain} hero image`}
        fill
        className="object-cover brightness-75"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Center Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-4xl md:text-6xl font-bold text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-[#E0A523]">{titleHighlight}</span>{" "}
          <span className="text-white">{titleMain}</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-6 left-6 md:left-20 flex items-center gap-2 text-gray-200 font-medium text-sm md:text-base">
        {breadcrumb.previous && (
          <>
            <Link href="/">
              <span className="hover:text-white cursor-pointer transition">
                {breadcrumb.previous}
              </span>
            </Link>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
        <span className="text-[#E0A523]">{breadcrumb.current}</span>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-md mb-1">Scroll Down</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
}
