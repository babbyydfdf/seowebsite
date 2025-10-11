"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading & Description */}
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hi, I am{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Thillai Nathan
                </span>{" "}
                – Helping Brands Grow Through SEO
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Thillai Nathan is an SEO Engineer with experience across International,
                Enterprise, and E-commerce SEO. I help brands grow from
                early-stage startups to market leaders through proven SEO
                strategies that deliver measurable results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=91916382007540&text=Hi!%20Shall%20we%20start%20discussing%20about%20my%20SEO%20business%20plans%20to%20grow"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 font-semibold text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: "#5DA3F9" }}
              >
                Let’s Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <button
                className="rounded-full px-6 py-3 font-semibold border border-gray-300 text-gray-700 transition-all duration-300 hover:bg-[#E57A33] hover:text-white hover:border-[#E57A33]"
              >
                View My Work
              </button>
            </div>

            {/* Mobile Image */}
<div className="block lg:hidden">
  <div className="relative mx-auto w-72 h-72">
    {/* Background blur */}
    <div className="absolute inset-0 bg-hero-gradient blur-3xl opacity-20"></div>

    {/* Image */}
    <Image
      src="/thillainathan.png"
      alt="Thillai Nathan"
      width={600}
      height={600}
      className="w-full h-full object-cover"
      priority
    />
  </div>
</div>

          </div>

          {/* Desktop Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/thillainathan.png"
                alt="Thillai Nathan"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




















