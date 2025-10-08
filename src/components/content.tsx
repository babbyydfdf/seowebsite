import Image from "next/image";

const ApproachSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <Image
              src="/thillainathan-works-removebg.png"
              alt="SEO Strategy and Growth"
              width={800}
              height={600}
              className="w-full h-auto object-cover relative rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:ml-20 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Why{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              My SEO Approach
            </span>{" "}
            Stands Out
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            SEO evolves every single day. My approach is built on staying ahead
            of these changes, combining data, user intent, and creating
            strategies that actually move the needle.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I believe in SEO that goes beyond traffic. For me, success means
            higher conversions, better customer trust, and sustainable growth
            for businesses that want to lead in their industry.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Through the combination of my technical roots as a developer and a
            growth-first SEO philosophy, I enable businesses not only to keep up
            with the ever-changing digital environment, but to exceed their
            business objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
