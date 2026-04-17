// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <Card className="max-w-lg w-full text-center shadow-2xl border-none bg-white/90 backdrop-blur-md animate-fadeIn rounded-2xl">
        <CardContent>
          <h1
            className="text-7xl md:text-9xl font-extrabold mb-6"
            style={{ color: "#E0A523" }}
          >
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-600">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button
              variant="default"
              className="bg-[#E0A523] text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium cursor-pointer"
            >
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease forwards;
        }
      `}</style>
    </div>
  );
}
