"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full flex justify-center py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        {/* Left Side */}
        <div className="bg-[#5DA3F9] text-white flex-1 p-10 lg:p-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Ready to take <br className="hidden md:block" />
            your business to <br className="hidden md:block" />
            the next level?
          </h2>
        </div>

        {/* Right Side */}
        <div className="bg-white text-gray-800 flex-1 p-10 lg:p-16 flex flex-col items-center lg:items-start justify-center space-y-6">
          <p className="text-lg text-gray-600 text-center lg:text-left">
            Let’s talk about new opportunities and greater success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#5DA3F9] text-[#5DA3F9] font-bold px-6 py-3 rounded-md hover:bg-[#5DA3F9] hover:text-white transition duration-300"
          >
            LET’S TALK <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
