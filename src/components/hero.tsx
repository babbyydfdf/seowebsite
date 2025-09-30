import { ArrowRight } from "lucide-react";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid with vertical alignment */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading & Description */}
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Thillai Nathan
                </span>{" "}
                – Helping Brands Grow Through SEO
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Thillai Nathan is an SEO Engineer with years of experience in
                International SEO, Enterprise SEO, and E-commerce SEO. I help
                brands grow from day-one startups into successful market leaders
                using proven SEO methods that deliver real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="rounded-full px-6 py-3 font-semibold text-white transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                style={{ backgroundColor: "#5DA3F9" }}
              >
                Hire Me Now
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>

              <button
                className="
                  rounded-full px-6 py-3 font-semibold 
                  border border-gray-300 text-gray-700 
                  transition-all duration-300 
                  hover:bg-[#E57A33] hover:text-white hover:border-[#E57A33]
                "
              >
                View My Work
              </button>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden">
              <div className="relative mx-auto w-72 h-72">
                <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/backcomplete.png"
                  alt="Thillai Nathan"
                  width={1200} // ✅ give a large enough width
                  height={800} // ✅ safe aspect ratio (adjust to actual image)
                  className="w-full h-full object-cover relative mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/backcomplete.png"
                alt="Thillai Nathan"
                width={600} // ✅ match w-[600px]
                height={400} // ✅ match h-[400px]
                className="w-[600px] h-[400px] object-cover relative lg:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
