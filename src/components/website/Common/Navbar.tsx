"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const router = useRouter();

  const handleQuoteClick = () => {
    if (pathname === "/gallery") {
      router.push("/contact-us#get-in-touch");
    } else {
      const el = document.getElementById("get-in-touch");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else router.push("/contact-us#get-in-touch");
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-primary/80 backdrop-opacity-90 shadow-md"
          : "bg-transparent backdrop-grayscale"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dibydryv8/image/upload/v1762641665/logo_cmi0wo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-primary"
          }`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:underline hover:font-semibold transition-all duration-200 ${
                scrolled ? "hover:text-gray-200" : "hover:text-primary/70"
              } ${
                pathname === item.href
                  ? " text-yellow-500 font-semibold" // Active link styles
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="">
          <button
            onClick={handleQuoteClick}
            className="border border-yellow-500 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white hover:border-yellow-500 "
          >
            <span className="text-center text-base font-medium font-poppins">
              Quote A Request
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="text-gray-500 bg-white hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-gray-700 px-5 hover:underline font-medium text-lg hover:text-primary hover:font-semibold transition-all duration-200 py-2 ${
                      pathname === item.href
                        ? "text-yellow-500 font-semibold" // Active link styles
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
